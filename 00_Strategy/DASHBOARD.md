---
type: dashboard
---

# NEET-PG Command Center

> **Purpose:** show what I should do now, how much of the syllabus I have covered, what needs revision, and where the canonical notes live.

---

## Active Test Cycle

![[Views/active-cycles.base]]

[Open active cycle →](Cycles/ACTIVE%20CYCLE.md)

---

## Today

![[Views/today-tasks.base]]

---

## Syllabus Progress

> This is independent of the current test cycle. Overlap counts: studying a Medicine topic during a Pharmacology cycle can still move Medicine forward.

~~~dataviewjs
const pages = dv.pages().where(p => p.type === "curriculum");
const subjectOrder = [
  "Anatomy","Physiology","Biochemistry","Pathology","Pharmacology",
  "Microbiology","Forensic Medicine","Forensics","Community Medicine","PSM",
  "Medicine","Surgery","Pediatrics","OBG","Orthopedics","Dermatology",
  "Psychiatry","Radiology","Anesthesia","ENT","Ophthalmology"
];

if (pages.length === 0) {
  dv.paragraph("No curriculum units have been created yet. Start with: [[Templates/03 Curriculum Unit]].");
} else {
  const subjects = [...new Set(pages.map(p => p.subject).filter(Boolean))];
  subjects.sort((a,b) => {
    const ai = subjectOrder.indexOf(a), bi = subjectOrder.indexOf(b);
    return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
  });

  const rows = subjects.map(subject => {
    const units = pages.where(p => p.subject === subject);
    const total = units.length;
    const firstPass = units.where(p => p.coverage === "first-pass-complete").length;
    const revised = units.where(p => Number(p.revision_count ?? 0) > 0).length;
    const firstPct = total ? Math.round(firstPass / total * 100) : 0;
    const revPct = total ? Math.round(revised / total * 100) : 0;
    const bar = pct => "█".repeat(Math.round(pct / 10)) + "░".repeat(10 - Math.round(pct / 10));
    return [subject, bar(firstPct) + " " + firstPct + "%", bar(revPct) + " " + revPct + "%", total];
  });

  dv.table(["Subject","First pass","Revision","Units"], rows);
}
~~~

---

## Medicine — System Progress

~~~dataviewjs
const med = dv.pages().where(p => p.type === "curriculum" && p.subject === "Medicine" && p.section);
if (med.length === 0) {
  dv.paragraph("No Medicine curriculum units yet. Create units with [[Templates/03 Curriculum Unit]].");
} else {
  const sections = [...new Set(med.map(p => p.section))].sort();
  const rows = sections.map(section => {
    const units = med.where(p => p.section === section);
    const total = units.length;
    const done = units.where(p => p.coverage === "first-pass-complete").length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const bar = "█".repeat(Math.round(pct / 10)) + "░".repeat(10 - Math.round(pct / 10));
    return [section, bar + " " + pct + "%", done + " / " + total];
  });
  dv.table(["System","First pass","Coverage"], rows);
}
~~~

[Open full Medicine view →](Views/medicine-systems.base)

---

## Surgery — System Progress

~~~dataviewjs
const surg = dv.pages().where(p => p.type === "curriculum" && p.subject === "Surgery" && p.section);
if (surg.length === 0) {
  dv.paragraph("No Surgery curriculum units yet. Create units with [[Templates/03 Curriculum Unit]].");
} else {
  const sections = [...new Set(surg.map(p => p.section))].sort();
  const rows = sections.map(section => {
    const units = surg.where(p => p.section === section);
    const total = units.length;
    const done = units.where(p => p.coverage === "first-pass-complete").length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const bar = "█".repeat(Math.round(pct / 10)) + "░".repeat(10 - Math.round(pct / 10));
    return [section, bar + " " + pct + "%", done + " / " + total];
  });
  dv.table(["System","First pass","Coverage"], rows);
}
~~~

[Open full Surgery view →](Views/surgery-systems.base)

---

## Revision Queue

![[Views/revision-queue.base]]

---

## Study Notes / Source Status

~~~dataviewjs
const sources = dv.pages().where(p => p.type === "study-source");
if (sources.length === 0) {
  dv.paragraph("No source registry entries yet. Start with [[Templates/04 Study Source]].");
} else {
  const statuses = ["draft","needs-review","final","deprecated"];
  const rows = statuses.map(s => [s, sources.where(p => p.note_status === s).length]);
  dv.table(["Note status","Count"], rows);
}
~~~

[Open source registry →](Views/study-sources.base)

---

## Post-Test Review

After every test, create:

[[Templates/02 Test Review]]

Use it to record:

- what I planned vs what I actually completed
- what I got wrong and why
- weak areas
- what should enter the revision queue
- what should change in the next cycle

---

## Weekly / Cycle Check

- [ ] Cycle plan is realistic
- [ ] Daily tasks reflect the actual syllabus
- [ ] First-pass coverage is being updated
- [ ] Cross-subject coverage is being recorded
- [ ] Test review is completed after the test
- [ ] Revision dates are assigned
- [ ] Canonical notes are marked correctly

---

## Quick Links

- [[Templates/01 Study Cycle|New Study Cycle]]
- [[Templates/02 Test Review|Test Review]]
- [[Templates/03 Curriculum Unit|New Curriculum Unit]]
- [[Templates/04 Study Source|New Study Source]]
- [[Templates/05 Daily Study Plan|Daily Study Plan]]
- [[Templates/06 Revision Session|Revision Session]]
- [[STUDY OS — README|Study OS Guide]]
