---
SERIES_NAME: Pharmacology — Central and Peripheral Nervous System
SERIES_SUBJECT: Pharmacology
SERIES_TOPIC: Central and Peripheral Nervous System
type: Series
---

# Pharmacology — Central and Peripheral Nervous System

This controller collects every Marrow Pearl whose `Subject` contains **Pharmacology** and whose `Topic` contains **Central and Peripheral Nervous System**.

## Pearl Series

```dataviewjs
const subject = "Pharmacology";
const topic = "Central and Peripheral Nervous System";

function hasValue(value, target) {
    if (value == null) return false;
    if (typeof value === "string") return value === target;
    if (value.values) return value.values.some(v => String(v) === target);
    if (Array.isArray(value)) return value.some(v => String(v) === target);
    return String(value) === target;
}

const pages = dv.pages('"Study Material/Pharmacology/Marrow Pearls"')
    .where(p => hasValue(p.Subject, subject) && hasValue(p.Topic, topic))
    .sort(p => String(p.pearl_id), 'asc')
    .array();

dv.header(3, `${pages.length} Marrow Pearls`);

dv.table(
    ["#", "Pearl ID", "Pearl"],
    pages.map((p, i) => [
        i + 1,
        p.pearl_id,
        p.file.link
    ])
);
```
