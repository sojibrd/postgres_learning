# ব্লক ২ — Query আর index

*দিন ০০৯–০১৮ · query · monitor*

উৎসের সেকশন ১ (*Query Performance*) আর ৭ (*Monitoring & Diagnostics*) — ৮টা rule, দিনে একটা; শেষ দিনে ⚑। WHERE আর JOIN-এর column-এ index, composite, covering আর partial index, index-এর ধরন; তারপর ধীর query খোঁজা — `EXPLAIN ANALYZE`, `pg_stat_statements`, `VACUUM` আর `ANALYZE`। ⚑-এর প্রশ্ন `brainstorming/system-design.md` থেকে — লোকাল interview-তে বারবার আসে। ⚑-এর আগের দিনে design: Pagila-র মানুষ আর ঠিকানা অংশের ER diagram।

> **ব্লক শেষে:** ৮টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, design দিনের diagram আঁকা আর মেলানো হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০০৯ · Create Composite Indexes for Multi-Column Queries

- [ ] ১০′ **Create Composite Indexes for Multi-Column Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-composite-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১০ · Use Covering Indexes to Avoid Table Lookups

- [ ] ১০′ **Use Covering Indexes to Avoid Table Lookups** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-covering-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১১ · Choose the Right Index Type for Your Data

- [ ] ১০′ **Choose the Right Index Type for Your Data** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-index-types) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১২ · Add Indexes on WHERE and JOIN Columns

- [ ] ১০′ **Add Indexes on WHERE and JOIN Columns** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-missing-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৩ · Use Partial Indexes for Filtered Queries

- [ ] ১০′ **Use Partial Indexes for Filtered Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-partial-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৪ · Use EXPLAIN ANALYZE to Diagnose Slow Queries

- [ ] ১০′ **Use EXPLAIN ANALYZE to Diagnose Slow Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-explain-analyze) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৫ · Enable pg_stat_statements for Query Analysis

- [ ] ১০′ **Enable pg_stat_statements for Query Analysis** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-pg-stat-statements) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৬ · Maintain Table Statistics with VACUUM and ANALYZE

- [ ] ১০′ **Maintain Table Statistics with VACUUM and ANALYZE** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-vacuum-analyze) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৭ · Design — Pagila-র মানুষ আর ঠিকানা

- [ ] ১৫′ **Pagila · মানুষ আর ঠিকানা** — নিচের `CREATE TABLE`-গুলো দেখে কাগজে ER diagram আঁকুন: প্রতিটা table একটা বাক্স, ভেতরে column, primary key আর foreign key চিহ্নিত; কোন table কাকে ধরে, `_id` column দেখে আন্দাজ করে রেখা টানুন। তারপর design পাতায় উত্তর খুলে মেলান, আর যেটা মেলেনি সেটা কাগজেই ঠিক করুন (design · people) 🔁 🧠 (Test yourself · The power of senses)

> **দিন শেষে:** নিজে আঁকা, উত্তরের সাথে মেলানো, আর না-মেলা রেখাগুলো ঠিক করা হয়েছে?

### দিন ০১৮ · মুখে — SQL না NoSQL, index কেন

- [ ] ১০′ ⚑ **SQL না NoSQL, আর index কেন লাগে** — গাইড না খুলে, ইংরেজিতে ২ মিনিটে জোরে বলুন; index-এর অংশে এই ব্লকের rule থেকে অন্তত দুটো উদাহরণ টানুন। SQL না NoSQL-এর অংশ আপনার নিজের উত্তর — এই rule-গুলো শুধু Postgres-এর 🔁 🧠 (Feynman technique · Concepts vs Facts)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
