# ব্লক ২ — Query আর index

*দিন ০০৮–০১৬ · query · monitor*

উৎসের সেকশন ১ (*Query Performance*) আর ৭ (*Monitoring & Diagnostics*) — ৮টা rule, দিনে একটা; শেষ দিনে ⚑। WHERE আর JOIN-এর column-এ index, composite, covering আর partial index, index-এর ধরন; তারপর ধীর query খোঁজা — `EXPLAIN ANALYZE`, `pg_stat_statements`, `VACUUM` আর `ANALYZE`। ⚑-এর প্রশ্ন `brainstorming/system-design.md` থেকে — লোকাল interview-তে বারবার আসে।

> **ব্লক শেষে:** ৮টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০০৮ · Create Composite Indexes for Multi-Column Queries

- [ ] ১০′ **Create Composite Indexes for Multi-Column Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-composite-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৯ · Use Covering Indexes to Avoid Table Lookups

- [ ] ১০′ **Use Covering Indexes to Avoid Table Lookups** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-covering-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১০ · Choose the Right Index Type for Your Data

- [ ] ১০′ **Choose the Right Index Type for Your Data** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-index-types) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১১ · Add Indexes on WHERE and JOIN Columns

- [ ] ১০′ **Add Indexes on WHERE and JOIN Columns** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-missing-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১২ · Use Partial Indexes for Filtered Queries

- [ ] ১০′ **Use Partial Indexes for Filtered Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · query-partial-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৩ · Use EXPLAIN ANALYZE to Diagnose Slow Queries

- [ ] ১০′ **Use EXPLAIN ANALYZE to Diagnose Slow Queries** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-explain-analyze) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৪ · Enable pg_stat_statements for Query Analysis

- [ ] ১০′ **Enable pg_stat_statements for Query Analysis** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-pg-stat-statements) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৫ · Maintain Table Statistics with VACUUM and ANALYZE

- [ ] ১০′ **Maintain Table Statistics with VACUUM and ANALYZE** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · monitor-vacuum-analyze) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৬ · মুখে — SQL না NoSQL, index কেন

- [ ] ১০′ ⚑ **SQL না NoSQL, আর index কেন লাগে** — গাইড না খুলে, ইংরেজিতে ২ মিনিটে জোরে বলুন; index-এর অংশে এই ব্লকের rule থেকে অন্তত দুটো উদাহরণ টানুন। SQL না NoSQL-এর অংশ আপনার নিজের উত্তর — এই rule-গুলো শুধু Postgres-এর 🔁 🧠 (Feynman technique · Concepts vs Facts)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
