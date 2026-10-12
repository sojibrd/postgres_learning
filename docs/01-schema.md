# ব্লক ১ — Schema

*দিন ০০১–০০৮ · schema*

উৎসের সেকশন ৪ (*Schema Design*) — ৬টা rule, দিনে একটা; শেষ দিনে ⚑। Table-এর গড়ন — data type, primary key, constraint, foreign key-এর index, নাম আর partitioning। query আর index-এর আগে table কেমন হবে, তাই এটা সবার আগে; `brainstorming/cv-gaps-vs-ideal-cv.md`-এর database ফাঁকগুলোর প্রথমটাও schema design। 🧠 (Trunk based knowledge) ⚑-এর আগের দিনে design: Pagila-র Catalog অংশের ER diagram।

> **ব্লক শেষে:** ৬টা rule-এর প্রতিটায় Correct বন্ধ করে নিজে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, design দিনের diagram আঁকা আর মেলানো হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০০১ · Add Constraints Safely in Migrations

- [ ] ১০′ **Add Constraints Safely in Migrations** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-constraints) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০২ · Choose Appropriate Data Types

- [ ] ১০′ **Choose Appropriate Data Types** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-data-types) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৩ · Index Foreign Key Columns

- [ ] ১০′ **Index Foreign Key Columns** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-foreign-key-indexes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৪ · Use Lowercase Identifiers for Compatibility

- [ ] ১০′ **Use Lowercase Identifiers for Compatibility** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-lowercase-identifiers) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৫ · Partition Large Tables for Better Performance

- [ ] ১০′ **Partition Large Tables for Better Performance** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-partitioning) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৬ · Select Optimal Primary Key Strategy

- [ ] ১০′ **Select Optimal Primary Key Strategy** — নিচের Incorrect SQL পড়ে আগে খাতায় এক লাইনে আন্দাজ: কী ভুল; তারপর গাইডে Correct আর ব্যাখ্যা পড়ুন, বন্ধ করে Correct-টা নিজে লিখুন, আর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন (rule · schema-primary-keys) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** আন্দাজ লেখা, Correct বন্ধ করে নিজে লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৭ · Design — Pagila-র Catalog

- [ ] ১৫′ **Pagila · Catalog** — নিচের `CREATE TABLE`-গুলো দেখে কাগজে ER diagram আঁকুন: প্রতিটা table একটা বাক্স, ভেতরে column, primary key আর foreign key চিহ্নিত; কোন table কাকে ধরে, `_id` column দেখে আন্দাজ করে রেখা টানুন। তারপর design পাতায় উত্তর খুলে মেলান, আর যেটা মেলেনি সেটা কাগজেই ঠিক করুন (design · catalog) 🔁 🧠 (Test yourself · The power of senses)

> **দিন শেষে:** নিজে আঁকা, উত্তরের সাথে মেলানো, আর না-মেলা রেখাগুলো ঠিক করা হয়েছে?

### দিন ০০৮ · মুখে — Schema-র তিনটা rule

- [ ] ১০′ ⚑ এই ব্লকের ৬টা rule থেকে তিনটা বাছুন — শুধু নাম দেখে, গাইড না খুলে, প্রতিটার "কেন" ইংরেজিতে জোরে বলুন, মোট ২ মিনিটে 🧠 (Test yourself · Chunking)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
