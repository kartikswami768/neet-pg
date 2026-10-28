# Curriculum Tracking

This folder is the syllabus-wide tracking layer.

- Notes/ = the actual study material.
- Curriculum/ = what in the syllabus has been covered, revised, or needs work.
- Sources/ = where the canonical study material lives.
- Cycles/ = what you are doing for a particular test.
- Tasks/ = individual actions.

## Curriculum unit properties

Each curriculum note should contain:

- subject
- section
- topic
- coverage
- revision_count
- last_studied
- next_revision
- confidence
- primary_note
- pyq_source
- note_status
- covered_in

Use [[../Templates/03 Curriculum Unit]] to create one.

## Recommended values

### coverage

not-started → in-progress → first-pass-complete

### confidence

unknown → weak → moderate → strong

### note_status

draft → needs-review → final → deprecated

A curriculum unit can be first-pass complete and still have zero revisions. That is intentional.
