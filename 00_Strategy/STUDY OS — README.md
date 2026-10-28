# NEET-PG Study OS

## The model

The vault now separates five jobs:

1. Cycles — preparation for a particular subject test.
2. Tasks — individual things to do on specific days.
3. Curriculum — syllabus-wide coverage, independent of the current test.
4. Revision — dates and confidence for later passes.
5. Sources — the canonical place to study each topic from.

## Folder map

~~~
00_Strategy/
├── DASHBOARD.md
├── Cycles/
├── Curriculum/
├── Sources/
├── Reviews/
├── Tasks/
├── Templates/
└── Views/
~~~

## Test-cycle workflow

### Before the cycle

Create a cycle from:

[[Templates/01 Study Cycle]]

Set:

- subject
- cycle_start
- test_date
- status: active

Create TaskNotes for the actual work and link each task to the cycle in projects.

### During the cycle

Focus on first-pass coverage.

For every curriculum unit completed during the cycle:

- set coverage: first-pass-complete
- set last_studied
- add the cycle to covered_in
- link the canonical note in primary_note
- update note_status when the note becomes trustworthy

Do not force revision into the preparation week.

### After the test

Create:

[[Templates/02 Test Review]]

Use the review to decide:

- weak topics
- recall failures
- concepts needing re-reading
- revision dates
- changes to the next cycle

### Revision

Use:

[[Templates/06 Revision Session]]

Each revision updates:

- revision_count
- confidence
- last_studied
- next_revision

## Cross-subject overlap

A curriculum unit belongs to its actual syllabus subject, not the subject of the current test.

Example:

- Current cycle = Pharmacology
- Topic encountered = Parkinson disease
- Curriculum subject = Medicine
- Cycle recorded in covered_in

That allows the whole syllabus to accumulate coverage even when your formal test cycle is for another subject.

## Note finalization

Use:

[[Templates/04 Study Source]]

Suggested note_status:

- draft
- needs-review
- final
- deprecated

Final means personally accepted as the canonical study note, not merely AI-generated.

## Dashboard

Open:

[[DASHBOARD]]

The dashboard is intentionally a Markdown shell with Bases and Dataview inside it. It is not itself the database.
