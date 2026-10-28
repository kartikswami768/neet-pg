---
type: subject-dashboard
subject: <% tp.system.prompt("Subject") %>
---

# <% tp.file.title %>

> Live view of the curriculum for **<% tp.frontmatter.subject %>**. The data comes from `type: curriculum` pages.

# <% tp.frontmatter.subject %> Dashboard

> Live view of the **<% tp.frontmatter.subject %>** curriculum. Update the individual curriculum units; this page is automatically derived from them.

## At a Glance

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages().where(p => p.type === "curriculum" && p.subject === subject);
const total = pages.length;
const done = pages.where(p => p.coverage === "first-pass-complete").length;
const progress = pages.where(p => p.coverage === "in-progress").length;
const pending = pages.where(p => p.coverage === "not-started").length;
const noteReview = pages.where(p => p.note_status !== "final").length;
const weak = pages.where(p => p.confidence === "weak").length;
const due = pages.where(p => p.next_revision && dv.date(p.next_revision) <= dv.date("today")).length;
const pct = n => total ? Math.round(n / total * 100) : 0;

dv.table(["Metric","Count","Share"],[
  ["First-pass complete",done, pct(done)+"%"],
  ["In progress",progress, pct(progress)+"%"],
  ["Not started",pending, pct(pending)+"%"],
  ["Notes to review / finalize",noteReview, pct(noteReview)+"%"],
  ["Weak confidence",weak, pct(weak)+"%"],
  ["Revision due",due,""]
]);
~~~

## Section Progress

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages().where(p => p.type === "curriculum" && p.subject === subject && p.section);
const sections = [...new Set(pages.map(p => p.section))].sort();
const rows = sections.map(section => {
  const units = pages.where(p => p.section === section);
  const done = units.where(p => p.coverage === "first-pass-complete").length;
  const inProgress = units.where(p => p.coverage === "in-progress").length;
  const total = units.length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const bar = "█".repeat(Math.round(pct/10)) + "░".repeat(10-Math.round(pct/10));
  return [section, bar + " " + pct + "%", done, inProgress, total];
});
dv.table(["Section","First pass","Done","In progress","Total"], rows);
~~~

## All Units

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages()
  .where(p => p.type === "curriculum" && p.subject === subject)
  .sort(p => [p.section ?? "", p.topic ?? ""]);

dv.table(
  ["Unit","Section","Coverage","Confidence","Note status","Revision","Next revision"],
  pages.map(p => [
    p.file.link,
    p.section ?? "—",
    p.coverage ?? "—",
    p.confidence ?? "—",
    p.note_status ?? "—",
    p.revision_count ?? 0,
    p.next_revision ?? "—"
  ])
);
~~~

## Needs Attention

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages()
  .where(p => p.type === "curriculum" && p.subject === subject)
  .where(p => p.coverage !== "first-pass-complete" || p.confidence === "weak" || p.confidence === "unknown" || p.note_status !== "final");

dv.table(
  ["Unit","Section","Coverage","Confidence","Note status"],
  pages.map(p => [
    p.file.link,
    p.section ?? "—",
    p.coverage ?? "—",
    p.confidence ?? "—",
    p.note_status ?? "—"
  ])
);
~~~

## Not Started

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages().where(p => p.type === "curriculum" && p.subject === subject && p.coverage === "not-started");
dv.table(["Unit","Section","Note status"], pages.map(p => [p.file.link,p.section ?? "—",p.note_status ?? "—"]));
~~~

## Notes to Review / Finalize

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages()
  .where(p => p.type === "curriculum" && p.subject === subject && p.note_status !== "final");
dv.table(["Unit","Section","Coverage","Note status","Primary note"],
  pages.map(p => [p.file.link,p.section ?? "—",p.coverage ?? "—",p.note_status ?? "—",p.primary_note ?? "—"])
);
~~~

## Weak / Uncertain

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages()
  .where(p => p.type === "curriculum" && p.subject === subject && (p.confidence === "weak" || p.confidence === "unknown"));
dv.table(["Unit","Section","Confidence","Coverage"], pages.map(p => [p.file.link,p.section ?? "—",p.confidence ?? "—",p.coverage ?? "—"]));
~~~

## Revision Queue

~~~dataviewjs
const subject = dv.current().subject;
const pages = dv.pages()
  .where(p => p.type === "curriculum" && p.subject === subject && p.next_revision)
  .sort(p => p.next_revision, "asc");
dv.table(["Unit","Section","Next revision","Confidence","Revisions"],
  pages.map(p => [p.file.link,p.section ?? "—",p.next_revision,p.confidence ?? "—",p.revision_count ?? 0])
);
~~~

## Navigation

- [[00_Strategy/Curriculum/Subject Dashboards|All subject dashboards]]
- [[00_Strategy/DASHBOARD|Main dashboard]]

