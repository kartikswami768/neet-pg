# Implementation notes (not part of the prompt)

## Care policy must be aligned

The assistant prompt still inserts the complete care policy at {THE CARE POLICY, IN FULL}. The policy itself must be updated so it no longer instructs the assistant to explain first, stop after the patient answers one question set, or treat an answer / 'I don't know' as automatic completion. Otherwise the model receives conflicting instructions.

## The two-round queue release is code, not prompt text

The architecture releases a gathering case to the doctor's queue after 20 minutes or two rounds. The revised prompt cannot remove that operational rule. Decide separately whether this should remain as a safety/visibility backstop while the AI continues collecting history, or whether the queue logic should change.

## History state is not yet a durable structured field

The model can reconstruct known and missing details from the chart and conversation supplied to it, but the current output schema has no dedicated complaint-specific history-state object. Test prompt-only behaviour first; add a structured state field only if multi-turn consistency is insufficient.

## Test before deployment

Add multi-turn tests in which the patient reveals important details gradually, gives partial answers, changes the story, declines to answer, or stops responding. Score clinical relevance, safety prioritisation, continuity, question quality and premature closure—not just reply wording.
