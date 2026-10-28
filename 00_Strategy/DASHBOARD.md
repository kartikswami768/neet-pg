---
type: dashboard
cssclasses:
  - dashboard-page
---

# NEET-PG Command Center

> **Purpose:** know what matters now, execute the current cycle, catch anything slipping, and keep the wider syllabus moving.

---

## Control Panel

~~~dataviewjs
const root = dv.el("div", "");
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.gap = "14px";

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
grid.style.gap = "12px";
root.appendChild(grid);

const action = (target, label) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.type = "button";
  button.style.marginTop = "10px";
  button.style.padding = "7px 11px";
  button.style.borderRadius = "8px";
  button.style.border = "1px solid var(--background-modifier-border)";
  button.style.background = "var(--background-primary)";
  button.style.color = "var(--text-normal)";
  button.style.cursor = "pointer";
  button.addEventListener("click", () => {
    app.workspace.openLinkText(target, dv.current().file.path, false);
  });
  return button;
};

const card = ({tone, kicker, value, meta, detail, buttons = []}) => {
  const el = document.createElement("div");
  el.style.border = "1px solid var(--background-modifier-border)";
  el.style.borderLeft = "5px solid " + tone;
  el.style.borderRadius = "12px";
  el.style.padding = "14px 15px";
  el.style.background = "var(--background-primary-alt)";
  el.style.minHeight = "125px";
  el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";

  const k = document.createElement("div");
  k.textContent = kicker;
  k.style.fontSize = "0.72em";
  k.style.fontWeight = "700";
  k.style.letterSpacing = "0.08em";
  k.style.textTransform = "uppercase";
  k.style.opacity = "0.7";

  const v = document.createElement("div");
  v.textContent = value;
  v.style.fontSize = "1.25em";
  v.style.fontWeight = "750";
  v.style.marginTop = "5px";

  const m = document.createElement("div");
  m.textContent = meta;
  m.style.marginTop = "4px";
  m.style.fontSize = "0.88em";
  m.style.opacity = "0.8";

  el.appendChild(k);
  el.appendChild(v);
  el.appendChild(m);

  if (detail) {
    const d = document.createElement("div");
    d.textContent = detail;
    d.style.marginTop = "8px";
    d.style.fontSize = "0.82em";
    d.style.lineHeight = "1.35";
    d.style.opacity = "0.72";
    el.appendChild(d);
  }

  for (const [target, label] of buttons) {
    el.appendChild(action(target, label));
  }

  grid.appendChild(el);
};

const indiaDate = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
const today = indiaDate();
const addDays = (ymd, n) => {
  const d = new Date(ymd + "T00:00:00+05:30");
  d.setDate(d.getDate() + n);
  return d.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
};
const diffDays = (a, b) => Math.round(
  (new Date(b + "T00:00:00+05:30") - new Date(a + "T00:00:00+05:30")) / 86400000
);
const dateKey = value => {
  if (!value) return null;
  if (typeof value === "string") return value.slice(0, 10);
  if (value.toISODate) return value.toISODate();
  return String(value).slice(0, 10);
};
const niceDate = value => {
  const key = dateKey(value);
  if (!key) return "—";
  return new Date(key + "T00:00:00+05:30").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "Asia/Kolkata"
  });
};

const cycles = dv.pages('"00_Strategy/Cycles"')
  .where(p => p.type === "study-cycle" && p.status === "active");

const cycle = cycles.length ? cycles.sort(p => dateKey(p.test_date), "asc")[0] : null;

const tasks = dv.pages('"00_Strategy/Tasks"')
  .where(p => p.status !== "done" && (p.tags?.includes("task") || p.file?.tags?.includes("#task")));

const todayTasks = tasks.where(p => {
  const scheduled = dateKey(p.scheduled);
  const due = dateKey(p.due);
  return (scheduled && scheduled <= today) || (due && due <= today);
});

const overdueTasks = tasks.where(p => {
  const due = dateKey(p.due);
  return due && due < today;
});

const revisionPages = dv.pages()
  .where(p => p.type === "curriculum" && p.next_revision);

const revisionDue = revisionPages.where(p => {
  const next = dateKey(p.next_revision);
  return next && next <= addDays(today, 14);
});

const firstPass = dv.pages()
  .where(p => p.type === "curriculum" && p.coverage === "first-pass-complete").length;

const curriculumTotal = dv.pages()
  .where(p => p.type === "curriculum").length;

const revised = dv.pages()
  .where(p => p.type === "curriculum" && Number(p.revision_count ?? 0) > 0).length;

if (cycle) {
  const start = dateKey(cycle.cycle_start);
  const test = dateKey(cycle.test_date);
  const prepEnd = addDays(test, -1);
  const prepDays = Math.max(1, diffDays(start, prepEnd) + 1);
  const rawDay = diffDays(start, today) + 1;
  const cycleDay = Math.min(Math.max(rawDay, 1), prepDays);
  const cycleTasks = tasks.where(p => p.cycle === cycle.file.name);
  const checklist = cycleTasks.flatMap(p => p.file.tasks ?? []);
  const checked = checklist.filter(t => t.checked).length;
  const taskPct = checklist.length ? Math.round(checked / checklist.length * 100) : 0;

  card({
    tone: "#3b82f6",
    kicker: "Active cycle",
    value: String(cycle.subject ?? cycle.file.name),
    meta: `${niceDate(start)} → ${niceDate(prepEnd)} · Test ${niceDate(test)}`,
    detail: `Day ${cycleDay} / ${prepDays} · Cycle checklist ${taskPct}% complete`,
    buttons: [[`00_Strategy/Cycles/${cycle.file.name}.md`, "Open cycle"]]
  });
} else {
  card({
    tone: "#8b5cf6",
    kicker: "Active cycle",
    value: "No active cycle",
    meta: "Create a cycle before the next subject test.",
    detail: "The dashboard will pick it up automatically once status is set to active.",
    buttons: [["00_Strategy/Templates/01 Study Cycle.md", "Create cycle"]]
  });
}

const todayChecklist = todayTasks.flatMap(p => p.file.tasks ?? []);
const todayChecked = todayChecklist.filter(t => t.checked).length;
card({
  tone: "#10b981",
  kicker: "Today",
  value: `${todayTasks.length} open task${todayTasks.length === 1 ? "" : "s"}`,
  meta: todayChecklist.length ? `${todayChecked} / ${todayChecklist.length} checklist items complete` : "No checklist items detected",
  detail: todayTasks.length ? "Keep the execution loop simple: consume → retrieve → test → repair." : "Nothing scheduled or due today.",
  buttons: [["00_Strategy/Views/today-tasks.base", "Open today's work"]]
});

const attentionText = [];
if (overdueTasks.length) attentionText.push(`${overdueTasks.length} overdue task${overdueTasks.length === 1 ? "" : "s"}`);
if (revisionDue.length) attentionText.push(`${revisionDue.length} revision${revisionDue.length === 1 ? "" : "s"} due within 14 days`);
const attention = attentionText.length ? attentionText.join(" · ") : "No immediate items need attention";
card({
  tone: attentionText.length ? "#f59e0b" : "#10b981",
  kicker: "Attention",
  value: attentionText.length ? "Check the queue" : "All clear",
  meta: attention,
  detail: "This is intentionally limited to overdue work and near-term revision pressure."
});

const progressText = curriculumTotal
  ? `${firstPass} / ${curriculumTotal} first-pass complete · ${revised} revised`
  : "No curriculum units tracked yet";
card({
  tone: "#8b5cf6",
  kicker: "Syllabus",
  value: curriculumTotal ? `${Math.round(firstPass / curriculumTotal * 100)}% first pass` : "Ready to start",
  meta: progressText,
  detail: "Coverage is independent of the current test cycle."
});

const quick = document.createElement("div");
quick.style.display = "flex";
quick.style.flexWrap = "wrap";
quick.style.gap = "8px";
quick.style.padding = "2px 0 4px";
[
  ["00_Strategy/Templates/01 Study Cycle.md", "New Study Cycle"],
  ["00_Strategy/Templates/02 Test Review.md", "Test Review"],
  ["00_Strategy/Templates/05 Daily Study Plan.md", "Daily Study Plan"],
  ["00_Strategy/Templates/06 Revision Session.md", "Revision Session"],
].forEach(([target, label]) => quick.appendChild(action(target, label)));

const quickLabel = document.createElement("div");
quickLabel.textContent = "Quick actions";
quickLabel.style.fontWeight = "700";
quickLabel.style.fontSize = "0.85em";
quickLabel.style.opacity = "0.75";
root.appendChild(quickLabel);
root.appendChild(quick);
~~~

---

## Current Week — Ophthalmology

~~~dataviewjs
const cycles = dv.pages('"00_Strategy/Cycles"')
  .where(p => p.type === "study-cycle" && p.status === "active" && p.subject === "Ophthalmology");

if (cycles.length === 0) {
  dv.paragraph("No active Ophthalmology cycle found.");
} else {
  const cycle = cycles.sort(p => p.cycle_start, "desc")[0];

  dv.header(3, "Deadline");
  dv.paragraph("Finish the core Ophthalmology syllabus by Friday, 9 Oct. Saturday, 10 Oct is buffer/test/review time.");

  dv.header(3, "Goals");
  dv.list([
    "Complete the core Ophthalmology notes",
    "Do daily PYQs / incorrects",
    "Use active recall for classifications, signs, investigations, and management",
    "Consolidate image-based diagnoses and classic associations",
    "Repair only gaps exposed by retrieval/PYQs",
    "Finish a rapid whole-subject recall pass by Friday"
  ]);

  dv.paragraph("[[00_Strategy/Cycles/2026-10-05 Ophthalmology|Open Ophthalmology cycle]]");
}
~~~

## Active Cycle Data

![[Views/active-cycles.base]]

---

## Today

![[Views/today-tasks.base]]

---

## Revision Queue

![[Views/revision-queue.base]]

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

const subjectDashboards = {
  "Pharmacology": "00_Strategy/Curriculum/Pharmacology Dashboard.md",
  "Forensic Medicine": "00_Strategy/Curriculum/Forensic Medicine Dashboard.md",
  "Pediatrics": "00_Strategy/Curriculum/Pediatrics Dashboard.md",
  "Ophthalmology": "00_Strategy/Curriculum/Ophthalmology Dashboard.md"
};

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
    const subjectCell = subjectDashboards[subject]
      ? dv.fileLink(subjectDashboards[subject], false, subject)
      : subject;
    return [subjectCell, bar(firstPct) + " " + firstPct + "%", bar(revPct) + " " + revPct + "%", total];
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
