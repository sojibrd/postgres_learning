# postgres_learning — Agent Instructions

Postgres-এর best practice-এর দিনভিত্তিক সাইট — ৩৫ দিন: ৩১ দিনে একটা করে rule, প্রতি ব্লকের শেষে একটা ⚑। chassis `nestjs_learning` থেকে (২০২৬-১০-১২); তিন repo-র পরিবার নয়, একটাই সাইট।

- **`guide/` = ৩১টা rule ফাইল**, Supabase-এর `supabase-postgres-best-practices` skill-এর `references/` থেকে হুবহু (ইংরেজি; লেখক, upstream commit আর লাইসেন্স `guide/README.md`-এ)। **সম্পাদনা নয়** — উৎস বদলালে নতুন কপি। উৎসটা এই workspace-এর `.claude/skills/`-এ **নেই**; কপি হয়েছে GitHub থেকে। route `/guide/<ফাইলনাম>/`; সেকশন `_sections.md` থেকে, ফাইলনামের প্রথম অংশ ধরে।
- **`docs/` = plan** — `00-rules.md` আর ৪টা ব্লক, **শেখার ক্রমে** (উৎসের impact-এর ক্রমে নয়): Schema → Query আর index (`query` + `monitor`) → Security আর locking → Data আর connection (`data` + `conn` + `advanced`)। সেকশন ভাঙা হয়নি। সেকশনের ভেতরে **ফাইলনামের** ক্রম — উৎস নিজে কোনো ক্রম লেখেনি। দিনের নম্বর পরপর না হলে build ভাঙে; ফাইলে তারিখ নেই, "আজ" = ক্যালেন্ডারের তারিখ।
- কাজে `(rule · <ফাইলনাম>)` = `guide/`-এর rule; না মিললে **build ভাঙে** — ইচ্ছাকৃত। দিনের শিরোনাম আর কাজের `**…**` = rule-এর `title` হুবহু।
- **plan-টা প্রথম পরিচয় ধরে সাজানো**, `nestjs_learning`-এর মতো: আন্দাজ → গাইডে Correct পড়া → বন্ধ করে নিজে লেখা → টিক, ১০′ (rule-গুলো ছোট, ৪০–৮০ লাইন)। তাই **গাইডের লিংক টিকের আগেই দেখায়** (`TaskItem`); গাইডের পাতার ভাঁজ তবু বন্ধ থাকে, টিক থাকলে নিজে খোলে (`RuleReveal`)।
- **কোড `nestjs_learning`-এর প্রায় হুবহু** — পার্থক্য শুধু `site.ts`, basePath, package-এর নাম, কোডের মন্তব্য আর গাইড-সূচির উৎসের নাম। `kind: "example"` পথটা chassis থেকে রাখা; এই উৎসের ৩১টাই `fix`।
- **"শুধু পরিচয়"** — ১৮০ দিনের plan-এর backend পথ (২০২৮-এর শেষে, `leave_management`-এ Postgres) বদলায় না; `nestjs_learning`-এর সাথে একই সিদ্ধান্ত (ব্যবহারকারী, ২০২৬-১০-১২)। হাতে-কলমের SQL চালানোর database বা sandbox এই repo-তে বা পাশে বানাবেন না, ব্যবহারকারী না বললে।
- কাজ শুধু rule-এর লেখা থেকে — Postgres নিয়ে নতুন rule বা ব্যাখ্যা নয়। একটাই সংযোজন: **Reference লিংকের পরীক্ষা** (২০২৬-১০-১২) `docs/00-rules.md`-এ — দুই ডক সাইটই না-থাকা পাতায় 404 দেয়, তাই status দিয়ে মেলানো; ২টা 404, ১টা সরে গেছে। `guide/` নতুন করে কপি হলে আবার মেলান। **Version মেলানো হয়নি।**
- ⚑ দিনের প্রশ্ন: ব্লক ২-এ `brainstorming/system-design.md`-এর "SQL না NoSQL, index কেন লাগে" (SQL না NoSQL-এর অংশ rule-এ নেই — ব্যবহারকারীর নিজের উত্তর); বাকি তিন ব্লকে ব্লকের rule।
- **নোটের ঘর আর `note` key নেই**; আন্দাজটা ব্যবহারকারীর খাতায়।
- **সময় ⏳** — দিনের ১০′ সপ্তাহে ৭ ঘণ্টার ভেতরে না বাইরে, আর বাকি তিন learning সাইটের সাথে একসাথে না পরপর — ব্যবহারকারীর উত্তর বাকি। `suggestedStart` তাই `null`; কোনো plan-এর ঘর থেকে সময় কাটবেন না।
- 🧠 নাম → `app/lib/principles.ts`, `learning_to_learn`-এর ঐ ফাইলের কপি (৫৭টা বিষয়), লিংক ঐ সাইটের লাইভ Pages-এ। ওখানে বদলালে এখানেও।
- Progress চার key (`postgres:v1:start`, `task`, `check`, `review`) — একমাত্র `app/hooks/useProgress.ts` দিয়ে; পঞ্চম key `postgres:v1:meta` শুধু sync-এর timestamp। কাজের লেখা বদলালে ঐ কাজের টিক হারায় (id = দিন + লেখার hash)।
- **Cross-device sync** — বাকি সাইটের মতোই: `app/lib/supabase.ts`, `app/hooks/useSync(Key).ts`, `app/components/SyncSettings.tsx`, `app/sync/page.tsx` chassis থেকে হুবহু, নিজে থেকে বদলাবেন না। `site_prefix` = `SITE.storagePrefix` = `postgres`। `deploy.yml`-এর env নাম `NEXT_PUBLIC_SUPABASE_*` — বদলালে sync চুপচাপ মরে যাবে। **এখনো deploy হয়নি** (২০২৬-১০-১২)।
- `app/lib/plan.ts` আর `app/lib/guide.ts` server-only।
- **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**। code block-এ syntax highlighting নেই — chassis-এর `.doc-prose pre`।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
