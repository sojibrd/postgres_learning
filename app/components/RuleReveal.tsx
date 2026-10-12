"use client";

import type { RuleKind } from "../lib/guide";
import { useMounted, useProgress } from "../hooks/useProgress";

/**
 * rule-এর Correct আর ব্যাখ্যা — ভাঁজ করা। plan-এ এই rule-এর কাজে টিক পড়ে থাকলে
 * নিজে থেকে খোলা; না পড়লে বন্ধ, যাতে পাতায় এসেই Correct চোখে না পড়ে — আগে এক
 * লাইনের আন্দাজ, তারপর নিজে খোলা। 🧠 Test yourself
 *
 * `kind: "example"` rule-এ Correct নেই — ভাঁজে থাকে উদাহরণ।
 */
export default function RuleReveal({
  taskIds,
  kind,
  children,
}: {
  taskIds: string[];
  kind: RuleKind;
  children: React.ReactNode;
}) {
  const mounted = useMounted();
  const { isTaskDone } = useProgress();

  const done = mounted && taskIds.some((id) => isTaskDone(id));
  const answer = kind === "example" ? "উদাহরণ" : "Correct";

  return (
    <details className="surface-panel p-4 sm:p-6" open={done || undefined}>
      <summary className="t-label cursor-pointer select-none">
        {done
          ? `পুরো rule · ${answer} আর ব্যাখ্যা — কাজে টিক দেওয়া আছে`
          : `পুরো rule · ${answer} আর ব্যাখ্যা — আগে আন্দাজ করুন, তারপর খুলুন`}
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
