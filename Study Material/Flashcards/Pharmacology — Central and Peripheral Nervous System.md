---
SERIES_NAME: Pharmacology — Central and Peripheral Nervous System
SERIES_SUBJECT: Pharmacology
SERIES_TOPIC: Central and Peripheral Nervous System
---

# Pharmacology — Central and Peripheral Nervous System

```dataviewjs
const subject = "Pharmacology";
const topic = "Central and Peripheral Nervous System";

const pages = dv.pages('"Study Material/Pharmacology/Marrow Pearls"')
  .where(p => {
    const subjects = Array.isArray(p.SUBJECT) ? p.SUBJECT : [p.SUBJECT];
    const topics = Array.isArray(p.TOPIC) ? p.TOPIC : [p.TOPIC];

    return subjects.includes(subject) && topics.includes(topic);
  })
  .sort(p => p.PEARL_ID, 'asc')
  .array();

dv.header(3, `${pages.length} Marrow Pearls`);

dv.table(
  ["#", "Pearl ID", "Pearl"],
  pages.map((p, i) => [
    i + 1,
    p.PEARL_ID,
    p.file.link
  ])
);