---
SERIES_NAME: Pharmacology — Central and Peripheral Nervous System
SERIES_SUBJECT: Pharmacology
SERIES_TOPIC: Central and Peripheral Nervous System
type: Series
---

# Pharmacology — Central and Peripheral Nervous System

This controller collects every Marrow Pearl whose `Subject` contains **Pharmacology** and whose `Topic` contains **Central and Peripheral Nervous System**.

**Series Player:** [[Pharmacology — CNS-PNS — Series Player]]

## Pearl Series

```dataviewjs
const subject = "Pharmacology";
const topic = "Central and Peripheral Nervous System";
const source = '"Study Material/Flashcards/Marrow Pearls"';

function hasValue(value, target) {
    if (value == null) return false;
    if (typeof value === "string") return value.trim() === target;
    if (value?.values) return value.values.some(v => String(v).trim() === target);
    if (Array.isArray(value)) return value.some(v => String(v).trim() === target);
    return String(value).trim() === target;
}

function pearlNumber(id) {
    const match = String(id ?? "").match(/(\d+)/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const pages = dv.pages(source)
    .where(p => hasValue(p.Subject, subject) && hasValue(p.Topic, topic))
    .sort((a, b) => pearlNumber(a.pearl_id) - pearlNumber(b.pearl_id))
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
