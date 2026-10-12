import fs from "node:fs";
import path from "node:path";

/**
 * server-only — `guide/` পড়ে। client component এখান থেকে শুধু `import type`।
 *
 * প্রতিটা rule ফাইল `supabase-postgres-best-practices` skill-এর ফাইলের হুবহু কপি
 * (ইংরেজি; উৎস আর লাইসেন্স `guide/README.md`-এ)। ফাইলনাম `schema-primary-keys.md` —
 * প্রথম অংশ (`schema`) সেকশন ঠিক করে, পুরো নামটা route (`/guide/schema-primary-keys/`)।
 * সেকশনের নাম আর ক্রম `guide/_sections.md`-এ।
 *
 * ছাঁচ:
 *   ---
 *   title: …  ·  impact: …  ·  impactDescription: …  ·  tags: a, b
 *   ---
 *   ## Title                                → বাদ (পাতার শিরোনামে আছে)
 *   **Incorrect (…):** + প্রথম code block   → problem — দিনের কার্ডে এটুকুই
 *   বাকি সব (ব্যাখ্যা, **Correct …**, Reference) → body — নিজে লেখার পরে
 *
 * এই উৎসের ৩১টা rule-এই `**Incorrect …**` আছে। chassis-এর `kind: "example"` পথটা
 * (Incorrect না থাকলে problem = প্রথম label বা code block-এর আগের বর্ণনা) রাখা —
 * উৎস নতুন করে কপি হলে এমন rule এলেও build ভাঙবে না।
 */
const GUIDE_DIR = path.join(process.cwd(), "guide");
const SECTIONS_FILE = "_sections.md";
const FILE_RE = /^([a-z0-9]+)-[a-z0-9-]+\.md$/;

export type GuideSection = {
  num: number;
  name: string;
  /** `CRITICAL` · `HIGH` · `MEDIUM-HIGH` · `MEDIUM` */
  impact: string;
  description: string;
  /** এই সেকশনে পড়ে এমন ফাইলনামের প্রথম অংশ — `schema`, `query` */
  prefixes: string[];
};

/**
 * `fix` — rule-এ Incorrect কোড আছে: কী ভুল আন্দাজ, তারপর Correct পড়ে নিজে লেখা।
 * `example` — নেই: বর্ণনা পড়ে একটা উদাহরণ লেখা।
 */
export type RuleKind = "fix" | "example";

export type GuideRule = {
  /** ফাইলনাম, `.md` বাদে — route আর plan-এর `(rule · …)` রেফারেন্স */
  slug: string;
  title: string;
  impact: string;
  impactDescription: string;
  tags: string[];
  sectionNum: number;
  sectionName: string;
  kind: RuleKind;
  /**
   * `fix`: `**Incorrect …**` থেকে তার প্রথম code block-এর শেষ পর্যন্ত;
   * `example`: প্রথম label বা code block-এর আগের বর্ণনা। markdown
   */
  problem: string;
  /** frontmatter আর প্রথম `## title` বাদে পুরো ফাইল, markdown */
  body: string;
};

/** দিনের কাজে যেটুকু client-এ যায় — `body` নয়, ওটা শুধু rule-এর পাতায় */
export type GuideRuleRef = Pick<GuideRule, "slug" | "title" | "impact" | "sectionName" | "kind" | "problem">;

const SECTION_RE = /^##\s+(\d+)\.\s+(.+?)\s+\(([a-z0-9, ]+)\)\s*$/;
const SECTION_FIELD_RE = /^\*\*(Impact|Description):\*\*\s*(.+)$/;
const INCORRECT_RE = /^\*\*[^A-Za-z]*Incorrect\b/;
/** একা দাঁড়ানো label — `**Usage:**`, `**Example (preload on hover/focus):**` */
const LABEL_RE = /^\*\*[^*]+:\*\*\s*$/;
const FENCE_RE = /^(`{3,})/;

function parseSections(): GuideSection[] {
  const sections: GuideSection[] = [];
  const lines = fs.readFileSync(path.join(GUIDE_DIR, SECTIONS_FILE), "utf8").split(/\r?\n/);

  for (const line of lines) {
    const heading = SECTION_RE.exec(line);
    if (heading) {
      sections.push({
        num: Number(heading[1]),
        name: heading[2].trim(),
        impact: "",
        description: "",
        prefixes: heading[3].split(",").map((prefix) => prefix.trim()),
      });
      continue;
    }
    const field = SECTION_FIELD_RE.exec(line);
    const current = sections.at(-1);
    if (field && current) {
      if (field[1] === "Impact") current.impact = field[2].trim();
      else current.description = field[2].trim();
    }
  }
  return sections;
}

function problemOf(file: string, body: string[]): { kind: RuleKind; problem: string } {
  const start = body.findIndex((line) => INCORRECT_RE.test(line));

  if (start === -1) {
    const end = body.findIndex((line) => LABEL_RE.test(line) || FENCE_RE.test(line));
    const statement = body.slice(0, end === -1 ? body.length : end).join("\n").trim();
    /* Incorrect-ও নেই, বর্ণনাও নেই — কার্ডে দেখানোর কিছু থাকে না; build-এই থামুক */
    if (!statement) throw new Error(`guide/${file}: \`**Incorrect …**\` label নেই, আগে কোনো বর্ণনাও নেই`);
    return { kind: "example", problem: statement };
  }

  const open = body.findIndex((line, i) => i > start && FENCE_RE.test(line));
  if (open === -1) throw new Error(`guide/${file}: Incorrect-এর পরে code block নেই`);

  const fence = FENCE_RE.exec(body[open])![1];
  const close = body.findIndex((line, i) => i > open && line.trim() === fence);
  if (close === -1) throw new Error(`guide/${file}: Incorrect-এর code block বন্ধ হয়নি`);

  return { kind: "fix", problem: body.slice(start, close + 1).join("\n") };
}

function parseRule(file: string, prefix: string, sections: GuideSection[]): GuideRule {
  const lines = fs.readFileSync(path.join(GUIDE_DIR, file), "utf8").split(/\r?\n/);
  const end = lines[0] === "---" ? lines.indexOf("---", 1) : -1;
  if (end === -1) throw new Error(`guide/${file}: frontmatter নেই`);

  const meta = new Map<string, string>();
  for (const line of lines.slice(1, end)) {
    const colon = line.indexOf(":");
    if (colon > 0) meta.set(line.slice(0, colon).trim(), line.slice(colon + 1).trim());
  }

  const title = meta.get("title") ?? "";
  if (!title) throw new Error(`guide/${file}: frontmatter-এ title নেই`);

  const section = sections.find((item) => item.prefixes.includes(prefix));
  if (!section) throw new Error(`guide/${file}: \`${prefix}-\` কোনো সেকশনে নেই (${SECTIONS_FILE})`);

  const body = lines.slice(end + 1);
  while (body.length > 0 && body[0].trim() === "") body.shift();
  if (/^##\s+/.test(body[0] ?? "")) body.shift();

  return {
    slug: file.replace(/\.md$/, ""),
    title,
    impact: meta.get("impact") ?? "",
    impactDescription: meta.get("impactDescription") ?? "",
    tags: (meta.get("tags") ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    sectionNum: section.num,
    sectionName: section.name,
    ...problemOf(file, body),
    body: body.join("\n").trim(),
  };
}

let sectionsCache: GuideSection[] | null = null;
let rulesCache: GuideRule[] | null = null;

export function getGuideSections(): GuideSection[] {
  sectionsCache ??= parseSections();
  return sectionsCache;
}

/**
 * সেকশনের ক্রমে, সেকশনের ভেতরে **ফাইলনামের** বর্ণানুক্রমে। এই উৎস নিজে কোথাও
 * rule-এর ক্রম লেখেনি (`SKILL.md` বা `_sections.md`-এ নেই), তাই ফাইলনাম — নিরপেক্ষ
 * আর স্থির। plan-এর ক্রম আলাদা (শেখার ক্রম), সেটা `docs/`-এ।
 */
export function getGuideRules(): GuideRule[] {
  if (rulesCache) return rulesCache;
  const sections = getGuideSections();

  rulesCache = fs
    .readdirSync(GUIDE_DIR)
    .map((file) => ({ file, match: FILE_RE.exec(file) }))
    .filter((item): item is { file: string; match: RegExpExecArray } => item.match !== null)
    .map(({ file, match }) => parseRule(file, match[1], sections))
    .sort((a, b) => a.sectionNum - b.sectionNum || a.slug.localeCompare(b.slug, "en"));
  return rulesCache;
}

export function getGuideRule(slug: string): GuideRule | undefined {
  return getGuideRules().find((rule) => rule.slug === slug);
}

export function findGuideRule(slug: string): GuideRuleRef | undefined {
  const rule = getGuideRule(slug);
  if (!rule) return undefined;
  return {
    slug: rule.slug,
    title: rule.title,
    impact: rule.impact,
    sectionName: rule.sectionName,
    kind: rule.kind,
    problem: rule.problem,
  };
}
