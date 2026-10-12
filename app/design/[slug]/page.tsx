import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "../../components/Markdown";
import Pager from "../../components/Pager";
import RuleReveal from "../../components/RuleReveal";
import { toBnDigits } from "../../lib/dates";
import { getDesignIntro, getDesignPart, getDesignParts } from "../../lib/design";
import { getDesignDays } from "../../lib/plan";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getDesignParts().map((part) => ({ slug: part.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const part = getDesignPart(slug);
  return { title: part ? `Design — ${part.name}` : "Design" };
}

/**
 * Pagila-র একটা অংশ: `CREATE TABLE`-গুলো খোলা, মেলানোর উত্তর (primary key, foreign
 * key, partition) ভাঁজ করা। plan-এ এই অংশের কাজে টিক থাকলে ভাঁজ নিজে খোলে; না
 * থাকলে পাঠক কাগজে আঁকার পরে নিজে খোলেন। উত্তর পুরোটা SQL থেকে build-এ বানানো।
 * 🧠 Test yourself · The power of senses
 */
export default async function DesignPartPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const parts = getDesignParts();
  const index = parts.findIndex((part) => part.slug === slug);
  if (index === -1) notFound();

  const part = parts[index];
  const days = getDesignDays()[part.slug] ?? [];
  const prev = parts[index - 1];
  const next = parts[index + 1];

  return (
    <>
      <header className="flex flex-col gap-2">
        <div className="t-label flex flex-wrap items-center gap-2">
          <span>Design</span>
          <span>•</span>
          <span>
            Pagila · অংশ {toBnDigits(index + 1)}/{toBnDigits(parts.length)}
          </span>
        </div>
        <h1 className="t-title text-2xl sm:text-3xl">{part.name}</h1>
        <div className="flex flex-wrap gap-1.5">
          <span className="chip">{toBnDigits(part.tables.length)}টা table</span>
          {days.map((day) => (
            <Link key={day.code} href={`/day/${day.code}/`} className="chip chip--accent">
              plan · দিন {day.label}
            </Link>
          ))}
        </div>
      </header>

      <section className="surface-panel flex flex-col gap-3 p-4 sm:p-6">
        <div className="t-label">
          আগে আঁকুন — প্রতিটা table একটা বাক্স, ভেতরে column; primary key আর foreign key চিহ্নিত; কোন table কাকে ধরে,
          <code>_id</code> দেখে আন্দাজ করে রেখা
        </div>
        <Markdown>{part.sql}</Markdown>
      </section>

      <RuleReveal
        taskIds={days.map((day) => day.taskId)}
        kind="fix"
        label="মেলানোর উত্তর · primary key আর foreign key"
        hint="আগে কাগজে আঁকুন, তারপর খুলুন"
      >
        <Markdown>{part.answer}</Markdown>
      </RuleReveal>

      <Markdown className="t-caption">{getDesignIntro()}</Markdown>

      <Pager
        label="অংশ"
        prev={prev && { href: `/design/${prev.slug}/`, label: prev.name }}
        next={next && { href: `/design/${next.slug}/`, label: next.name }}
      />
    </>
  );
}
