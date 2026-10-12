# ব্লক ৩ — Security আর locking

*দিন ০১৯–০২৭ · security · lock*

উৎসের সেকশন ৩ (*Security & RLS*) আর ৫ (*Concurrency & Locking*) — ৭টা rule, দিনে একটা; শেষ দিনে ⚑। কে কোন row দেখবে — Row Level Security আর privilege; তারপর একসাথে অনেক লেখা এলে — transaction ছোট রাখা, deadlock এড়ানো, advisory lock আর `SKIP LOCKED`। ⚑-এর আগের দিনে design: Pagila-র লেনদেন অংশের ER diagram।

> **ব্লক শেষে:** ৭টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, design দিনের diagram আঁকা আর মেলানো হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০১৯ · Apply Principle of Least Privilege

- [ ] ১০′ **Apply Principle of Least Privilege** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · security-privileges) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২০ · Enable Row Level Security for Multi-Tenant Data

- [ ] ১০′ **Enable Row Level Security for Multi-Tenant Data** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · security-rls-basics) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২১ · Optimize RLS Policies for Performance

- [ ] ১০′ **Optimize RLS Policies for Performance** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · security-rls-performance) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২২ · Use Advisory Locks for Application-Level Locking

- [ ] ১০′ **Use Advisory Locks for Application-Level Locking** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · lock-advisory) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৩ · Prevent Deadlocks with Consistent Lock Ordering

- [ ] ১০′ **Prevent Deadlocks with Consistent Lock Ordering** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · lock-deadlock-prevention) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৪ · Keep Transactions Short to Reduce Lock Contention

- [ ] ১০′ **Keep Transactions Short to Reduce Lock Contention** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · lock-short-transactions) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৫ · Use SKIP LOCKED for Non-Blocking Queue Processing

- [ ] ১০′ **Use SKIP LOCKED for Non-Blocking Queue Processing** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · lock-skip-locked) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৬ · Design — Pagila-র লেনদেন

- [ ] ১৫′ **Pagila · লেনদেন** — নিচের `CREATE TABLE`-গুলো দেখে কাগজে ER diagram আঁকুন: প্রতিটা table একটা বাক্স, ভেতরে column, primary key আর foreign key চিহ্নিত; কোন table কাকে ধরে, `_id` column দেখে আন্দাজ করে রেখা টানুন। তারপর design পাতায় উত্তর খুলে মেলান, আর যেটা মেলেনি সেটা কাগজেই ঠিক করুন (design · rentals) 🔁 🧠 (Test yourself · The power of senses)

> **দিন শেষে:** নিজে আঁকা, উত্তরের সাথে মেলানো, আর না-মেলা রেখাগুলো ঠিক করা হয়েছে?

### দিন ০২৭ · মুখে — Security আর locking-এর তিনটা rule

- [ ] ১০′ ⚑ এই ব্লকের ৭টা rule থেকে তিনটা বাছুন — Security থেকে অন্তত একটা, Locking থেকে অন্তত একটা — শুধু নাম দেখে, গাইড না খুলে, প্রতিটার "কেন" ইংরেজিতে জোরে বলুন, মোট ২ মিনিটে 🧠 (Test yourself · Chunking)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
