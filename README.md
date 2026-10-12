# postgres_learning

Postgres-এর ৩১টা best practice, ৩৫ দিনে। দিনে একটা rule, ১০′: সাইট rule-এর Incorrect SQL দেখায়; আপনি আগে আন্দাজ করেন কী ভুল, গাইডে Correct আর ব্যাখ্যা পড়েন, বন্ধ করে Correct-টা নিজে লেখেন, আর "কেন" ইংরেজিতে বলেন। SQL গোড়া থেকে শেখানোর সাইট নয় — rule ধরে প্রথম পরিচয়।

rule-গুলো Supabase-এর `supabase-postgres-best-practices` skill থেকে হুবহু নেওয়া — লেখক আর লাইসেন্স [guide/README.md](guide/README.md)-এ। গড়ন [nestjs_learning](https://sojibrd.github.io/nestjs_learning/)-এর মতো।

**লাইভ:** https://sojibrd.github.io/postgres_learning/ — deploy-এর পরে; ২০২৬-১০-১২-এ এখনো হয়নি।

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** সব পাতায় বাঁয়ে rail থাকে, মোবাইলে drawer। তাতে ৪টা পাতার লিংক, plan-এর gauge আর ৪টা ব্লক। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন (`/day/<nnn>/`) · ব্লক (`/block/<slug>/`):** দিনের কাজ আর দিন বা ব্লক শেষের হ্যাঁ/না।
- **rule-এর কাজ:** কাজের নিচে ঐ rule-এর Incorrect SQL, `impact`, আর গাইডের লিংক — "আগে আন্দাজ → Correct আর ব্যাখ্যা"। লিংকটা টিকের আগেই থাকে।
- **গাইড (`/guide/`, `/guide/<slug>/`):** ৩১টা rule উৎসের ৮ সেকশন ধরে, পাশে plan-এর দিন। rule-এর পাতায় Incorrect SQL খোলা, পুরো rule ভাঁজ করা; ঐ কাজে টিক থাকলে ভাঁজ নিজে খোলে।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ টিকের দিন থেকে ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** `docs/00-rules.md` হুবহু — Reference লিংকের পরীক্ষার ফল সহ।
- **🧠 chip:** `learning_to_learn`-এর ৫৭টা বিষয়। chip চাপলে এক লাইনে কারণ দেখায়, সাথে ঐ সাইটের লিংক।
- **Sync (`/sync/`):** একই sync key বসালে অন্য device-এ progress নেমে আসে।

## Non-Functional Requirement

- **সত্যের উৎস `docs/` আর `guide/`।** কোডে কোনো দিন, কাজ বা rule হার্ডকোড নেই। কাজের `(rule · <ফাইলনাম>)` যদি `guide/`-এ না মেলে, **build ভাঙে।**
- **`guide/` সম্পাদনা হয় না।** উৎসের হুবহু কপি; সাইট Postgres নিয়ে নিজের কোনো rule বা ব্যাখ্যা যোগ করে না।
- **Correct কার্ডে পাঠানো হয় না।** দিনের কার্ডে যায় শুধু Incorrect অংশ; পুরো rule থাকে নিজের পাতায়, ভাঁজের ভেতরে।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)। "আজ" মানে ক্যালেন্ডারের তারিখ, plan পেছায় না।
- **Static export → GitHub Pages।** নিজের backend নেই; SQL কোথাও চালানো হয় না।
- **Progress `localStorage`-এ,** একমাত্র `app/hooks/useProgress.ts` দিয়ে; sync key থাকলে শেয়ার্ড Supabase-এ কপি যায়। নোটের ঘর নেই, ইচ্ছা করেই।
- **`app/lib/plan.ts` আর `app/lib/guide.ts` server-only।**
- **Theme contract অলঙ্ঘনীয়, সাইট dark-only।** chassis `nestjs_learning` থেকে।
- **স্ট্যাক:** Next.js 16, React 19, TypeScript, Tailwind v4, react-markdown।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য, সত্যের উৎস, উৎসটা কী আর কী নয় (Reference লিংকের পরীক্ষা — ২টা 404), চিহ্ন, "আজ", কখন বসবেন ⏳, ১০′-এর বসা, ঝালাই, ⚑ দিন, গাইডের পাতা, যা করবেন না, দিন ০৩৫-এর পরে |
| [docs/01-schema.md](docs/01-schema.md) | দিন ০০১–০০৭: `schema-` ৬; ⚑ ব্লকের তিনটা rule |
| [docs/02-query-and-index.md](docs/02-query-and-index.md) | দিন ০০৮–০১৬: `query-` ৫ + `monitor-` ৩; ⚑ SQL না NoSQL, index কেন লাগে |
| [docs/03-security-and-locking.md](docs/03-security-and-locking.md) | দিন ০১৭–০২৪: `security-` ৩ + `lock-` ৪; ⚑ ব্লকের তিনটা rule |
| [docs/04-data-and-connections.md](docs/04-data-and-connections.md) | দিন ০২৫–০৩৫: `data-` ৪ + `conn-` ৪ + `advanced-` ২; ⚑ ব্লকের তিনটা rule |
| [guide/](guide/) | ৩১টা rule ফাইল আর `_sections.md`, হুবহু; `README.md`-এ উৎস, commit আর লাইসেন্স |

## প্রজেক্ট-নির্দিষ্ট নিয়ম

### ব্লক ফাইলের ছাঁচ

- `# ব্লক ১ — নাম` — প্রথম H1। "— "-এর পরের অংশ rail-এ দেখায়।
- `*দিন ০০১–০০৭ · …*` — H1-এর নিচের italic লাইন।
- `> **ব্লক শেষে:** …` · `### দিন ০০৭ · শিরোনাম` · `- [ ] ১০′ …` · `> **দিন শেষে:** …`
- দিনের নম্বর সব ব্লক মিলিয়ে পরপর থাকতে হবে। না থাকলে build ভাঙে।
- কাজে `(rule · schema-primary-keys)` = `guide/`-এর ঐ ফাইল। লেখাটা কার্ডে দেখায় না; তার জায়গায় আসে Incorrect SQL আর chip।
- `⚑` = মাইলফলক, `🔁` = ঝালাই হবে, শেষে `🧠 (নাম · নাম)`। 🧠 নাম `app/lib/principles.ts`-এ থাকা নামগুলো থেকে।

### rule ফাইলের ছাঁচ

`guide/<prefix>-<নাম>.md` — frontmatter-এ `title`, `impact`, `impactDescription`, `tags`; তারপর `## Title`, ব্যাখ্যা, `**Incorrect (…):**` + SQL, `**Correct (…):**` + SQL, শেষে `Reference:` আর লিংক (দুটো rule-এ লিংক পরের লাইনে)। `<prefix>` কোন সেকশনে পড়ে তা `_sections.md`-এর শিরোনামের বন্ধনীতে। কার্ডে যায় প্রথম `**Incorrect …**` label থেকে তার প্রথম code block-এর শেষ পর্যন্ত। সেকশনের ভেতরে ক্রম ফাইলনামের।

### Progress key

| key | মান |
|---|---|
| `postgres:v1:start` | শুরুর তারিখ `"YYYY-MM-DD"` |
| `postgres:v1:task` | কাজ শেষের তারিখ। id = দিন + কাজের **লেখা** থেকে hash — লেখা বদলালে টিক হারায় |
| `postgres:v1:check` | দিন শেষ (`d007`) ও ব্লক শেষ (`b1`)-এর হ্যাঁ/না |
| `postgres:v1:review` | 🔁 ঝালাইয়ের অবস্থা `{ base, step }` |
| `postgres:v1:meta` | sync-এর শেষ timestamp |

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

push করলে `.github/workflows/deploy.yml` সাইটটা GitHub Pages-এ তোলে। build-এ repo secret লাগে: `NEXT_PUBLIC_SUPABASE_URL` আর `NEXT_PUBLIC_SUPABASE_ANON_KEY` — না থাকলে build সফল হয়, কিন্তু sync চুপচাপ বন্ধ থাকে।
