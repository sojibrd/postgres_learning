import fs from "node:fs";
import path from "node:path";

/**
 * server-only — `design/` পড়ে। client component এখান থেকে শুধু `import type`।
 *
 * design দিনের দুই উৎস:
 *   `design/pagila-schema.sql` — Pagila-র SQL, হুবহু (উৎস আর licence `design/README.md`-এ)
 *   `design/parts.md`          — এই সাইটের নিজের ভাগ: কোন অংশে কোন table
 *
 * parts.md-এর ছাঁচ:
 *   # শিরোনাম
 *   attribution-এর অনুচ্ছেদ                     → intro — প্রতিটা design পাতার নিচে
 *   ### catalog · Catalog                     → অংশ: slug · নাম
 *   film, language, …                         → table-এর তালিকা, কমা দিয়ে
 *   বাকি অনুচ্ছেদ                              → note — উত্তরের ভাঁজে, তালিকার পরে
 *
 * কার্ডে যায় অংশের `CREATE TABLE`-গুলো হুবহু; foreign key সেখানে নেই, কারণ Pagila
 * সেগুলো আলাদা `ALTER TABLE`-এ লেখে — কোন table কাকে ধরে, সেটাই আঁকার অনুশীলন।
 * উত্তর (primary key, foreign key, partition) পুরোটা SQL থেকে বানানো; হাতে লেখা
 * কোনো দাবি নেই। তালিকার table SQL-এ না থাকলে, বা primary key না পেলে, build ভাঙে।
 */
const DESIGN_DIR = path.join(process.cwd(), "design");
const SQL_FILE = "pagila-schema.sql";
const PARTS_FILE = "parts.md";

type ForeignKey = { column: string; refTable: string; refColumn: string };

type ParsedTable = {
  name: string;
  /** `CREATE TABLE … ;` হুবহু */
  sql: string;
  /** column → খালি থাকতে পারে কিনা */
  columns: Map<string, { nullable: boolean }>;
  primaryKey: string[];
  foreignKeys: ForeignKey[];
  /** partition করা table: কোন column ধরে, কয়টা partition, কয়টায় foreign key বসানো */
  partition: { by: string; count: number; withForeignKeys: number } | null;
  uniqueColumns: Set<string>;
};

export type DesignPart = {
  /** route আর plan-এর `(design · …)` রেফারেন্স */
  slug: string;
  name: string;
  tables: string[];
  /** কার্ডে — অংশের `CREATE TABLE`-গুলো, একটা sql code block */
  sql: string;
  /** উত্তর — primary key, foreign key, বাকি তথ্য; markdown */
  answer: string;
};

/** দিনের কাজে যেটুকু client-এ যায় — `answer` নয়, ওটা শুধু design পাতায় */
export type DesignPartRef = Pick<DesignPart, "slug" | "name" | "sql">;

const CREATE_RE = /^CREATE TABLE public\.([a-z0-9_]+) \(\n[\s\S]*?;$/gm;
const COLUMN_RE = /^\s{4}([a-z0-9_]+) (.+?),?$/;
const INLINE_PK_RE = /^\s{4}PRIMARY KEY \(([^)]+)\)/m;
const PARTITION_BY_RE = /PARTITION BY RANGE \(([^)]+)\)/;
const PK_RE = /^ALTER TABLE (?:ONLY )?public\.([a-z0-9_]+)\n\s+ADD CONSTRAINT [a-z0-9_]+ PRIMARY KEY \(([^)]+)\);/gm;
const FK_RE =
  /^ALTER TABLE (?:ONLY )?public\.([a-z0-9_]+)\n\s+ADD CONSTRAINT [a-z0-9_]+ FOREIGN KEY \(([^)]+)\) REFERENCES public\.([a-z0-9_]+)\(([^)]+)\)/gm;
const ATTACH_RE = /^ALTER TABLE ONLY public\.([a-z0-9_]+) ATTACH PARTITION public\.([a-z0-9_]+) /gm;
const UNIQUE_RE = /^CREATE UNIQUE INDEX [a-z0-9_]+ ON public\.([a-z0-9_]+) USING [a-z]+ \(([^)]+)\);/gm;
const PART_RE = /^###\s+([a-z0-9-]+)\s+·\s+(.+)$/;

const cols = (list: string) => list.split(",").map((item) => item.trim());
const code = (name: string) => `\`${name}\``;
const bn = (value: number) => String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

function parseSchema(): Map<string, ParsedTable> {
  const text = fs.readFileSync(path.join(DESIGN_DIR, SQL_FILE), "utf8").replace(/\r\n/g, "\n");
  const tables = new Map<string, ParsedTable>();

  for (const match of text.matchAll(CREATE_RE)) {
    const sql = match[0];
    const columns = new Map<string, { nullable: boolean }>();
    for (const line of sql.split("\n").slice(1)) {
      const column = COLUMN_RE.exec(line);
      if (column && column[1] !== "primary") columns.set(column[1], { nullable: !/\bNOT NULL\b/.test(column[2]) });
    }
    const inlinePk = INLINE_PK_RE.exec(sql);
    const partitionBy = PARTITION_BY_RE.exec(sql);
    tables.set(match[1], {
      name: match[1],
      sql,
      columns,
      primaryKey: inlinePk ? cols(inlinePk[1]) : [],
      foreignKeys: [],
      partition: partitionBy ? { by: partitionBy[1], count: 0, withForeignKeys: 0 } : null,
      uniqueColumns: new Set(),
    });
  }

  /* partition → parent; partition-এর key আর foreign key parent-এর নামে গোনা হয় */
  const parentOf = new Map<string, string>();
  for (const match of text.matchAll(ATTACH_RE)) {
    parentOf.set(match[2], match[1]);
    const parent = tables.get(match[1]);
    if (parent?.partition) parent.partition.count++;
  }
  const owner = (name: string) => tables.get(parentOf.get(name) ?? name);

  for (const match of text.matchAll(PK_RE)) {
    const table = tables.get(match[1]);
    if (table && table.primaryKey.length === 0) table.primaryKey = cols(match[2]);
  }

  const partitionsWithForeignKeys = new Set<string>();
  for (const match of text.matchAll(FK_RE)) {
    const table = owner(match[1]);
    if (!table) continue;
    if (parentOf.has(match[1])) partitionsWithForeignKeys.add(match[1]);
    const fk = { column: match[2].trim(), refTable: match[3], refColumn: match[4].trim() };
    if (!table.foreignKeys.some((item) => item.column === fk.column && item.refTable === fk.refTable)) {
      table.foreignKeys.push(fk);
    }
  }
  for (const name of partitionsWithForeignKeys) {
    const parent = owner(name);
    if (parent?.partition) parent.partition.withForeignKeys++;
  }

  for (const match of text.matchAll(UNIQUE_RE)) {
    const list = cols(match[2]);
    if (list.length === 1) tables.get(match[1])?.uniqueColumns.add(list[0]);
  }
  return tables;
}

type PartSource = { slug: string; name: string; tables: string[]; note: string };

function parseParts(): { intro: string; parts: PartSource[] } {
  const lines = fs.readFileSync(path.join(DESIGN_DIR, PARTS_FILE), "utf8").split(/\r?\n/);
  const intro: string[] = [];
  const parts: (PartSource & { body: string[] })[] = [];

  for (const line of lines) {
    if (/^#\s+/.test(line)) continue;
    const heading = PART_RE.exec(line);
    if (heading) {
      parts.push({ slug: heading[1], name: heading[2].trim(), tables: [], note: "", body: [] });
      continue;
    }
    const current = parts.at(-1);
    if (!current) {
      intro.push(line);
      continue;
    }
    if (current.tables.length === 0 && line.trim()) {
      current.tables = cols(line);
      continue;
    }
    current.body.push(line);
  }

  return {
    intro: intro.join("\n").trim(),
    parts: parts.map(({ body, ...part }) => ({ ...part, note: body.join("\n").trim() })),
  };
}

function answerFor(part: PartSource, schema: Map<string, ParsedTable>, partOf: Map<string, string>): string {
  const rows: string[] = ["| table | primary key | foreign key → |", "|---|---|---|"];
  const junctions: string[] = [];
  const idsWithoutFk: string[] = [];
  const oneToOne: string[] = [];
  const partitions: string[] = [];

  for (const name of part.tables) {
    const table = schema.get(name)!;
    const fkCells = table.foreignKeys.map((fk) => {
      const elsewhere = partOf.get(fk.refTable);
      const where = elsewhere && elsewhere !== part.name ? ` (${elsewhere})` : "";
      const optional = table.columns.get(fk.column)?.nullable ? " — খালি থাকতে পারে" : "";
      if (table.uniqueColumns.has(fk.column)) oneToOne.push(`${code(`${name}.${fk.column}`)} → ${code(fk.refTable)}`);
      return `${code(fk.column)} → ${code(fk.refTable)}${where}${optional}`;
    });
    rows.push(`| ${code(name)} | ${table.primaryKey.map(code).join(" + ")} | ${fkCells.join(" · ") || "—"} |`);

    const fkColumns = new Set(table.foreignKeys.map((fk) => fk.column));
    if (table.primaryKey.length >= 2 && table.primaryKey.every((column) => fkColumns.has(column))) {
      const ends = table.primaryKey.map((column) => table.foreignKeys.find((fk) => fk.column === column)!.refTable);
      junctions.push(`${code(name)} — ${ends.map(code).join(" ↔ ")}`);
    }
    for (const column of table.columns.keys()) {
      if (column.endsWith("_id") && !fkColumns.has(column) && !table.primaryKey.includes(column)) {
        idsWithoutFk.push(code(`${name}.${column}`) + (table.uniqueColumns.has(column) ? " (unique index আছে)" : ""));
      }
    }
    if (table.partition) {
      const { by, count, withForeignKeys } = table.partition;
      partitions.push(
        `${code(name)} — ${code(by)} ধরে partition করা, ${bn(count)}টা partition। foreign key parent-এ নেই, ${bn(count)}টার ${bn(withForeignKeys)}টা partition-এ বসানো; উপরে এক ${code(name)}-এ গুটিয়ে দেখানো।`,
      );
    }
  }

  const notes: string[] = [
    oneToOne.length
      ? `এক-থেকে-এক (foreign key column-এ unique): ${oneToOne.join(" · ")}। বাকি প্রতিটা foreign key অনেক-থেকে-এক।`
      : "প্রতিটা foreign key অনেক-থেকে-এক: এই table-এর অনেক row ঐ table-এর একটা row-কে ধরে। এই অংশের কোনো foreign key column-এ unique নেই, তাই এক-থেকে-এক নেই।",
  ];
  if (junctions.length) notes.push(`সংযোগ-table (many-to-many) — primary key-টা দুটো foreign key দিয়েই গড়া: ${junctions.join(" · ")}।`);
  if (idsWithoutFk.length) notes.push(`\`_id\`-এ শেষ, কিন্তু Pagila-য় foreign key নয়: ${idsWithoutFk.join(" · ")}।`);
  notes.push(...partitions);

  return [rows.join("\n"), notes.map((line) => `- ${line}`).join("\n"), part.note].filter(Boolean).join("\n\n");
}

let cache: { intro: string; parts: DesignPart[] } | null = null;

function load(): { intro: string; parts: DesignPart[] } {
  if (cache) return cache;
  const schema = parseSchema();
  const { intro, parts } = parseParts();

  const partOf = new Map<string, string>();
  for (const part of parts) {
    if (part.tables.length === 0) throw new Error(`design/${PARTS_FILE}: "${part.slug}"-এ কোনো table নেই`);
    for (const name of part.tables) {
      const table = schema.get(name);
      if (!table) throw new Error(`design/${PARTS_FILE}: "${name}" ${SQL_FILE}-এ নেই`);
      if (table.primaryKey.length === 0) throw new Error(`design/${SQL_FILE}: "${name}"-এর primary key পাওয়া যায়নি`);
      if (partOf.has(name)) throw new Error(`design/${PARTS_FILE}: "${name}" দুই অংশে`);
      partOf.set(name, part.name);
    }
  }

  cache = {
    intro,
    parts: parts.map((part) => ({
      slug: part.slug,
      name: part.name,
      tables: part.tables,
      sql: `\`\`\`sql\n${part.tables.map((name) => schema.get(name)!.sql).join("\n\n")}\n\`\`\``,
      answer: answerFor(part, schema, partOf),
    })),
  };
  return cache;
}

export function getDesignParts(): DesignPart[] {
  return load().parts;
}

/** attribution — প্রতিটা design পাতার নিচে */
export function getDesignIntro(): string {
  return load().intro;
}

export function getDesignPart(slug: string): DesignPart | undefined {
  return getDesignParts().find((part) => part.slug === slug);
}

export function findDesignPart(slug: string): DesignPartRef | undefined {
  const part = getDesignPart(slug);
  return part && { slug: part.slug, name: part.name, sql: part.sql };
}
