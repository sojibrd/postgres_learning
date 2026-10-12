/**
 * সাইটের পরিচয় — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * chassis `nestjs_learning` থেকে; এই সাইট একটাই পথ, তিন repo-র পরিবার নয়।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "Postgres — rule ধরে প্রথম পরিচয়",
  short: "postgres learning",
  emoji: "🐘",
  description:
    "Postgres-এর ৩১টা best practice — দিনে একটা, ১০′: Incorrect SQL দেখে আন্দাজ, Correct পড়া, বন্ধ করে নিজে লেখা আর কেন ইংরেজিতে বলা, ঝালাইসহ।",
  /** localStorage key-এর prefix */
  storagePrefix: "postgres",
  /** শুরুর তারিখের প্রস্তাব নেই — কখন বসবেন ⏳ */
  suggestedStart: null,
};
