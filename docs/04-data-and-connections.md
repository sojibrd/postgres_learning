# ব্লক ৪ — Data আর connection

*দিন ০২৫–০৩৫ · data · conn · advanced*

উৎসের সেকশন ৬ (*Data Access Patterns*), ২ (*Connection Management*) আর ৮ (*Advanced Features*) — ১০টা rule, দিনে একটা; শেষ দিনে ⚑। অ্যাপ থেকে data আনা-নেওয়া — N+1, batch insert, cursor pagination, upsert; তারপর connection — pool, limit, idle timeout, prepared statement; শেষে full-text search আর JSONB-র index।

> **ব্লক শেষে:** ১০টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০২৫ · Batch INSERT Statements for Bulk Data

- [ ] ১০′ **Batch INSERT Statements for Bulk Data** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · data-batch-inserts) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৬ · Eliminate N+1 Queries with Batch Loading

- [ ] ১০′ **Eliminate N+1 Queries with Batch Loading** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · data-n-plus-one) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৭ · Use Cursor-Based Pagination Instead of OFFSET

- [ ] ১০′ **Use Cursor-Based Pagination Instead of OFFSET** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · data-pagination) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৮ · Use UPSERT for Insert-or-Update Operations

- [ ] ১০′ **Use UPSERT for Insert-or-Update Operations** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · data-upsert) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৯ · Configure Idle Connection Timeouts

- [ ] ১০′ **Configure Idle Connection Timeouts** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · conn-idle-timeout) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩০ · Set Appropriate Connection Limits

- [ ] ১০′ **Set Appropriate Connection Limits** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · conn-limits) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩১ · Use Connection Pooling for All Applications

- [ ] ১০′ **Use Connection Pooling for All Applications** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · conn-pooling) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩২ · Use Prepared Statements Correctly with Pooling

- [ ] ১০′ **Use Prepared Statements Correctly with Pooling** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · conn-prepared-statements) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৩ · Use tsvector for Full-Text Search

- [ ] ১০′ **Use tsvector for Full-Text Search** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · advanced-full-text-search) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৪ · Index JSONB Columns for Efficient Querying

- [ ] ১০′ **Index JSONB Columns for Efficient Querying** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · advanced-jsonb-indexing) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০৩৫ · মুখে — Data আর connection-এর তিনটা rule

- [ ] ১০′ ⚑ এই ব্লকের ১০টা rule থেকে তিনটা বাছুন — Data access থেকে অন্তত একটা, Connection থেকে অন্তত একটা — শুধু নাম দেখে, গাইড না খুলে, প্রতিটার "কেন" ইংরেজিতে জোরে বলুন, মোট ২ মিনিটে 🧠 (Test yourself · Chunking)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
