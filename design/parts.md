# Pagila — কোন অংশে কোন table

Pagila — PostgreSQL License, copyright © 2015-2026 Devrim Gündüz। SQL হুবহু [devrimgunduz/pagila](https://github.com/devrimgunduz/pagila)-র commit `ce6e114` থেকে; licence-এর পুরো লেখা [LICENSE.txt](https://github.com/sojibrd/postgres_learning/blob/master/design/LICENSE.txt)-এ।

### catalog · Catalog

film, language, category, actor, film_actor, film_category

`film_embedding` এই অংশে নেই — ওটা pgvector-এর `vector` column-এর table, `film`-এর সাথে এক-এক; ER diagram-এর অনুশীলনে কিছু যোগ করে না।

### people · মানুষ আর ঠিকানা

country, city, address, store, staff, customer

### rentals · লেনদেন

inventory, rental, payment

তিনটা অংশ আঁকা শেষ — এবার পুরো Pagila-র অফিসিয়াল ছবিটা নিজের তিনটা কাগজের পাশে রাখুন: [pagila-schema-diagram.png](https://github.com/devrimgunduz/pagila/blob/ce6e114236bb828e5ec0dc835f65f1bf1b9179f5/pagila-schema-diagram.png)।
