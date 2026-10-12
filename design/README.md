# design — source and licence

`pagila-schema.sql` and `LICENSE.txt` in this folder are unmodified copies from
**Pagila**, a PostgreSQL port of MySQL's Sakila sample database, made "to provide a
standard schema that can be used for examples in books, tutorials, articles,
samples" (its README).

- **Upstream:** https://github.com/devrimgunduz/pagila
- **Copied:** 2026-10-12, from commit `ce6e114236bb828e5ec0dc835f65f1bf1b9179f5`
  (dated 2026-10-08). Pagila's README says it is tested against PostgreSQL 18 and
  above.
- **Licence:** PostgreSQL License, copyright (c) 2015-2026 Devrim Gündüz — full text
  in `LICENSE.txt`, kept next to the copy as the licence requires.

Do not edit these two files. If upstream changes, replace them with a fresh copy
from a named commit and update the commit above.

`parts.md` is not from Pagila. It is this site's own split of Pagila's tables into
the three parts drawn on the design days; the site reads it at build time, and a
table name it lists that `pagila-schema.sql` does not define stops the build.

What the site shows on a design page is read from `pagila-schema.sql` at build
time: the `CREATE TABLE` statements of the part (on the card), and the part's
primary keys and foreign keys (the answer). Nothing in the answer is written by
hand.
