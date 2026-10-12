"use client";

import type { RuleKind } from "../lib/guide";
import { useMounted, useProgress } from "../hooks/useProgress";

/**
 * rule-এর Correct আর ব্যাখ্যা — ভাঁজ করা। plan-এ এই rule-এর কাজে টিক পড়ে থাকলে
 * নিজে থেকে খোলা; না পড়লে বন্ধ, যাতে পাতায় এসেই Correct চোখে না পড়ে — আগে এক
 * লাইনের আন্দাজ, তারপর নিজে খোলা। 🧠 Test yourself
 *
 * `kind: "example"` rule-এ Correct নেই — ভাঁজে থাকে উদাহরণ।
 *
 * design পাতাও এটাই ব্যবহার করে — `label` আর `hint` দিয়ে লেখা বদলায়, আচরণ একই।
 */
export default function RuleReveal({
  taskIds,
  kind,
  label,
  hint,
  children,
}: {
  taskIds: string[];
  kind: RuleKind;
  /** ভাঁজের নাম — না দিলে "পুরো rule · Correct আর ব্যাখ্যা" */
  label?: string;
  /** টিক না থাকলে নামের পরে — না দিলে "আগে আন্দাজ করুন, তারপর খুলুন" */
  hint?: string;
  children: React.ReactNode;
}) {
  const mounted = useMounted();
  const { isTaskDone } = useProgress();

  const done = mounted && taskIds.some((id) => isTaskDone(id));
  const answer = kind === "example" ? "উদাহরণ" : "Correct";
  const name = label ?? `পুরো rule · ${answer} আর ব্যাখ্যা`;

  return (
    <details className="surface-panel p-4 sm:p-6" open={done || undefined}>
      <summary className="t-label cursor-pointer select-none">
        {done ? `${name} — কাজে টিক দেওয়া আছে` : `${name} — ${hint ?? "আগে আন্দাজ করুন, তারপর খুলুন"}`}
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
