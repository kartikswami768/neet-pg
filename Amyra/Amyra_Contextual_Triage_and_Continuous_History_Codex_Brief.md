
# Amyra: Contextual Emergency Triage and Continuous Clinical History

> [!abstract] Instructions for Codex
> Design and implement a **clinically proportionate triage workflow that can continue history-taking after non-emergency referrals**, without delaying urgent care or falsely ruling out dangerous disease. Make changes in a separate feature branch, add tests, and report evidence. Do not deploy, migrate production data, or relax emergency protection without clinician review.

## 1. Exact goal

Amyra must be able to hear a potentially serious symptom (like **chest pain**) and respond with **context-sensitive clinical questioning**, rather than assuming that the words themselves demand a fixed call-112 message or that any need for in-person care ends the AI conversation.

The desired behavior:

1. **Immediately recognize compelling time-critical danger.** Give the approved emergency message and clinician alert without delaying emergency services to ask nonessential questions. But if it is a little ambiguous, ask very focussed question to either confirm the emergency or classify as ambiguous so that clinical history can be continued.
2. **For genuinely ambiguous presentations where a short clarification is safe, ask the single most useful next question.** Incorporate the answer into the patient's clinical history and reassess dynamically.
3. **Make a proportional care recommendation:** emergency now; urgent same-day assessment; timely outpatient evaluation; routine evaluation; or insufficient information to classify reliably.
4. **Separate the recommendation to seek medical care from whether the conversation can continue.** For non-emergency cases, including many cases requiring timely in-person assessment, continue gathering focused history *only if it does not delay that assessment*.
5. **Use accumulated evidence, not keyword counts**: timing, severity, progression, functional impact, association with exertion/meals/movement/respiration, relevant positives and negatives, clinical background, and new changes.
6. **Communicate without avoidable panic:** state uncertainty accurately, explain proportionate next steps in plain language, avoid repeated generic 112 warnings, and never claim that an emergency has been ruled out merely by chat.
7. **Persist a complaint-specific, auditable history** with provenance, pending questions, and structured urgency decisions so the assigned clinician sees both what is known and what is unresolved.

**Do not use an arbitrary “90–95% certainty of emergency” threshold.** Chat-based probabilities of MI/ACS, PE, dissection, and other time-critical conditions cannot be calibrated reliably from conversation alone. Escalation should be governed by clinician-approved danger criteria, consequences of missing an emergency, and whether safely obtaining more information is appropriate. A possible emergency can warrant prompt action well below 90% diagnostic certainty.

**Clinical guardrail:** Reflux-like, musculoskeletal, non-exertional, pleuritic, chronic, or antacid-responsive chest pain may be lower concern *in context*, but none of those characteristics alone excludes ACS or other important causes. History alone is not a validated ACS rule-out pathway; ECG, examination, and troponin are used in appropriate formal clinical pathways. Avoid calling an episode “definitely not MI.”

## 2. Desired behavior, illustrated

### Example A — mild pain after lifting weights

Patient: “My chest hurts since I worked out yesterday.”

Expected: establish current severity, whether the pain is reproducible with movement or pressure, exertional symptoms, relevant warning features and history. Musculoskeletal pain may be considered provisionally; arrange clinician evaluation when appropriate, continue focused questioning. Do not default to call 112 from “chest pain” alone.

### Example B — burning discomfort after meals

Patient: “My chest burns after a heavy meal, with sour burps.”

Expected: assess onset, duration, exertional relationship, current severity, associated symptoms and pertinent risk factors. A reflux explanation may be offered as **possible**, without declaring MI excluded. Recommend appropriate clinical review when warranted and continue history.

### Example C — months of stable pleuritic discomfort (reference conversation)

Patient reports recurrent, stable discomfort for months; only on deep inspiration; no exertional association or major accompanying symptoms; frequently after meals; improved with antacid; no prior ECG.

Expected: avoid automatic emergency messaging if current data do not demonstrate imminent danger; recommend a suitably timed in-person exam and consideration of ECG/other investigations by the clinician; continue useful questioning and produce a clear doctor handover. Do not promise that chat excludes serious disease or that CXR is automatically mandatory.

### Example D — obvious time-critical presentation

Patient: “Sudden severe crushing pain, sweating and struggling to breathe.”

Expected: emergency message **immediately**, clinician alert, and no further questioning that could delay emergency action. This includes other unequivocal red flags beyond ACS.

### Example E — urgent referral but patient sends more information

After advice for urgent assessment, patient: “It also hurts when I breathe in; I haven’t had a fever.”

Expected: **do not discard the message or return an empty AI response.** Acknowledge and store the new details; if safe to do so, ask an additional high-value question while clearly maintaining the instruction to seek timely evaluation. If a new compelling danger sign is identified, escalate immediately. The AI must not pressure the patient to complete a questionnaire before leaving for care.

## 3. What prevents the goal today — verified from the code

### P0-A. Active symptoms cannot reach `routine_intake` through the safety screen

**File:** [`agent/src/care/safety-screening-v3.ts` L197–204](/agent/src/care/safety-screening-v3.ts#L197-L204)

The `lower_concern` branch succeeds only if `clarificationSupported && activeSymptom === 'no' && !priorDanger`. Stable but still-present discomfort is therefore disallowed from becoming a lower-urgency, continuing-intake case on those grounds. It falls to `urgent_review` instead.

**Fix:** Distinguish **ongoing symptom** from **time-critical symptom**. A well-supported, clinician-approved outpatient disposition must be possible for current, stable, appropriately screened symptoms. Do not use negative symptoms alone as permission to dismiss a case; the safe downgrade must consider *positive contextual evidence* and unresolved dangerous possibilities.

### P0-B. `urgent_review` is treated as terminal and silently captures later replies

**File:** [`conversation.ts` L629–739](/agent/src/care/conversation.ts#L629-L739)

The handler treats both `emergency` and `urgent_review` as terminal. If a patient adds information after `urgent_review` and no new emergency is identified, the handler links the message to the case and returns `safety_update` with `reply: ''` rather than invoking the routine conversation/history pipeline.

**Fix:** Preserve a safety disposition and its referral instructions without locking the conversational channel. `urgent_same_day` can be *clinically actionable* and still allow brief, optional, non-delaying history-taking. Do **not** reopen true emergency cases as normal conversational intake until appropriate explicit clinical workflow authorizes it; patient safety is the overriding consideration. Handle unrelated new complaints separately.

### P0-C. The model and state machine collapse distinct urgencies into the same status

**Files:** [`safety-screening-model.ts` L15–45](/agent/src/care/safety-screening-model.ts#L15-L45); [`safety-screening-v3.ts` L15–20](/agent/src/care/safety-screening-v3.ts#L15-L20)

Existing outcome set is `emergency`, `ask`, `urgent_review`, `lower_concern`, with screening states `screening`, `emergency`, `urgent_review`, `routine_intake`. There is no explicit **prompt outpatient review** state for a current symptom that is unlikely to need emergency services but still merits investigation.

**Fix:** Represent care urgency independently from safety-screening phase and conversational availability. See proposed contract in Section 4.

### P0-D. Doctor-queue readiness blocks structured history intake

**Files:** [`conversation.ts` L875–891](/agent/src/care/conversation.ts#L875-L891); [`history.ts` L178–188, L217–232](/agent/src/care/history.ts#L178-L232)

Safety screening creates a workflow with `queueStatus: 'ready_for_doctor'` even while `historyStatus: 'collecting'`. The history writer then refuses new pending questions when `queueStatus === 'ready_for_doctor'`. Clearing screening to `routine_intake` updates `safetyAssessment` and `intake`, but does not necessarily restore the other history-workflow fields.

**Fix:** A doctor can be notified immediately while history remains `collecting`. The code must not equate `doctor_notified` / `actionable_for_doctor` / `history_sufficient`. Extend the storage and message pipeline so history capture works before and after clinician notification; appropriately retain unanswered questions in the doctor view.

### P0-E. Overbroad phrase matching can turn negative findings into positive danger signals

**File:** [`safety-triage.ts` L13–46, L108–139](/agent/src/care/safety-triage.ts#L13-L139)

The `dangerousChest` regex matches terms such as `sweating`, `persistent`, `pressure`, `exertion` even when a patient may be **denying** them or describing them in another time frame; clause segmentation depends on punctuation. For example, “mild chest pain without sweating” may be routed differently from “mild chest pain, no sweating.”

**Fix:** Restrict deterministic bypass to high-specificity, clinically reviewed present-tense patterns and structured verified positives, with explicit handling of negation, timing, experiencer, and scope. Use semantic assessment for ambiguous cases; retain a conservative safe fallback instead of reusing the original broad keyword matcher.

### P1-F. Contradictory policy prompts make general assistant behavior inconsistent

**Files:** [`policy.ts` L98–102](/agent/src/care/policy.ts#L98-L102); [`agent.ts` L215–254](/agent/src/care/agent.ts#L215-L254); [`conversation.ts` L256–290](/agent/src/care/conversation.ts#L256-L290)

`POLICY_V2` says ambiguity about a current emergency sign should be treated as an emergency; V3 screening says ask targeted clarification when safe. The general assistant can return `action: emergency`, bypassing the question route. Different components own partly conflicting interpretations.

**Fix:** Single clinician-approved safety policy, explicit ownership of urgent disposition, and consistent output contracts. The assistant may identify danger, but hard overrides and uncertainty handling must be mediated by a well-defined safety controller.

### P1-G. Four-question and timeout logic inadvertently become conversation limits

**Files:** [`safety-screening-v3.ts` L13 and L206–215](/agent/src/care/safety-screening-v3.ts#L206-L215); [`safety-screening-timeout.ts` L8–64](/agent/src/care/safety-screening-timeout.ts#L8-L64)

Four safety questions or a failed/duplicate question cause `urgent_review`. An unanswered safety question becomes `urgent_review` after the worker timeout. The conservative safety disposition is understandable, but current integration makes it a **halt to all later AI history**.

**Fix:** Keep a strict, clinically approved limit on delaying immediate triage questions; when exceeded or unanswered, clearly direct the patient to the appropriate evaluation and alert clinicians. Do not turn the safety-screen limit into a permanent shutdown of non-delaying history, unless the condition truly demands immediate emergency action.

### P1-H. New complaint and thread routing may keep the patient in a terminal safety case

**Files:** [`conversation.ts` L1063–1082](/agent/src/care/conversation.ts#L1063-L1082); case/episode routing in [`conversation.ts` L370–468](/agent/src/care/conversation.ts#L370-L468)

A safety conversation may be preferred as the active composer destination, while the terminal-safety branch swallows ordinary follow-ups. Multi-episode routing and history-context flags are not always enabled. A subsequent separate symptom must not inherit the old case's terminal behavior.

**Fix:** Distinguish conversation transport from clinical episode identity. Process safety on every new message; route it to the appropriate complaint episode; allow a new episode even while an older safety referral remains actionable, with careful ownership and clinician-facing links.

### P1-I. Safety findings and clinical history are not one unified longitudinal source

**Files:** `safety-screening-v3.ts` (`findings`), `history.ts` (`case_history_entries`), `conversation.ts` (different flows)

Safety facts are stored in `safetyAssessment.findings`, while routine history is stored in complaint-specific history entries. There is no fully verified handoff ensuring that screening answers become searchable history facts with provenance and no duplicate questions.

**Fix:** Either project safety findings into the normal history schema, or expose a unified read model with evidence and conflict rules. Avoid duplicating raw facts in ways that can diverge. Preserve negation, source message, time context, and subsequent correction.

### P1-J. Real-model evaluation and deployment are not established

**Files:** [`agent/src/evals/safety-v3.ts`](/agent/src/evals/safety-v3.ts), [`agent/test/safety-screening-flow-v3.test.ts`](/agent/test/safety-screening-flow-v3.test.ts), [`agent/src/config.ts` L65–80](/agent/src/config.ts#L65-L80), `agent/migrations/013_safety_screening_v3.sql`

Tests cover useful fail-safes, but do not demonstrate sustained multi-turn history **after a non-emergency referral**. V3 is on by default in this dev fork, but some V2 context/console/multi-episode flags require activation; a legacy test profile can bypass V3. Migration 013 exists but database application was not verified. Current code has not been clinically validated.

**Fix:** Validate configuration and schema in an isolated test environment; add clinician-reviewed adaptive cases and latency/accuracy measurements. Do not interpret green deterministic unit tests as clinical safety validation.

## 4. Proposed architecture — separate three independent decisions

Do **not** overload a single `doctor.ready`, `urgent_review`, or `case.status` Boolean. Propose a backwards-compatible typed model (names illustrative):

```ts
type CareUrgency =
  | 'emergency_now'
  | 'urgent_same_day'
  | 'outpatient_soon'
  | 'routine'
  | 'undetermined';

type SafetyPhase = 'assessing' | 'disposition_given' | 'escalated';
type HistoryPhase = 'collecting' | 'sufficient' | 'unable_to_complete';
type ConversationMode = 'normal' | 'non_delaying_history' | 'emergency_only';

type ClinicalTriageState = {
  episodeId: string;
  urgency: CareUrgency;
  safetyPhase: SafetyPhase;
  historyPhase: HistoryPhase;
  conversationMode: ConversationMode;
  careInstructionGivenAt: string | null;
  clinicianNotifiedAt: string | null;
  supportingFindings: Array<{ field: string; status: 'present'|'explicitly_absent'|'unknown'; evidence: string; sourceMessageId: string }>;
  unknowns: string[];
  nextHighestValueQuestion: string | null;
  dispositionReason: string;
};
```

**Key invariants:**

- `emergency_now` => immediate emergency advice, clinician alert and no AI-led questionnaire delaying care. Do not allow the ordinary model to downgrade this state based only on a later reassuring text; explicit clinical review or a separately verified episode is needed.
- `urgent_same_day` => issue timely assessment advice *before* optional questions, keep the case actionable, and permit only clearly non-delaying chat where safe; no repeated attempts to “clear” the patient in chat.
- `outpatient_soon` / `routine` => focused adaptive history is allowed. Keep re-screening new danger on subsequent turns.
- `undetermined` => ask the minimum useful immediate clarification **only if safe**; otherwise route to a conservative clinical evaluation recommendation rather than inventing certainty.
- `clinicianNotifiedAt` and `historyPhase` can independently be true/collecting. A queued case can receive additional history without marking the case complete or erasing pending items.
- Urgency is **not a numerical LLM probability**. Store an evidence-grounded rationale and explicit unknowns; do not expose fabricated precision to patients.

### Architectural options

**Option 1 (recommended): Reuse V3 state machine and refactor in place.** Extend the V3 schema/output for outpatient dispositions; separate safety state, care instruction and history continuation; adapt `conversation.ts`, `cases.ts`, `history.ts`, and existing safety screens. Pros: minimal duplication and preserves existing safety tests. Cons: carefully migrate existing `safety_assessment` JSON and preserve backwards compatibility.

**Option 2: Dedicated small triage orchestrator before ordinary assistant.** A single structured clinical safety assessor produces findings/urgency/allowed-interaction, deterministic validated overrides fire for clear danger, then ordinary history assistant handles the next question. Pros: strong responsibility separation, clean auditing. Cons: added provider call/latency/cost and need for strict timeout handling.

**Option 3: Clinical rules/playbooks per presenting complaint.** A reviewed chest-pain pathway determines early high-value questions and follow-up, with general model for conversational wording. Pros: testability and clinical consistency. Cons: coverage/maintenance cost and difficult multilingual natural-language interpretation. Use this as a supplement to Option 1/2, not a claim that regex or a checklist diagnoses MI.

**Suggested hybrid:** Option 1 + complaint-specific, clinically reviewed checkpoints and a deterministic immediate-danger override. Consider Option 2 only if testing shows meaningful gains from an independent safety model.

## 5. Proposed execution flow

1. Receive the latest patient message and associate it with an episode (or create a new one). Preserve the raw text and source ID.
2. Check for **clear, current, clinician-approved immediate danger** (including new warning signs discovered in the new message). If present: fixed emergency advice and clinician alert at once.
3. Otherwise, load the structured patient history, medications/conditions and relevant prior answers. Distinguish **known, denied, unknown, unavailable, and contradictory**.
4. If urgency cannot yet be determined and asking is safe, ask the single most useful question (e.g., whether the pain is ongoing/severe, onset, associated breathlessness, exertional relation). Avoid a mandatory fixed sequence.
5. Once enough is known for the *next care action*, assign proportionate urgency. Do not wait to complete a broad medical history before advising time-sensitive care.
6. Send a calm, specific care recommendation and clinician notification where indicated. Explicitly distinguish “clinic assessment” from “call 112 now.”
7. If permitted, continue *optional, safe, non-delaying history* and persist every medically relevant answer. Do not repeat the handover promise or warning line on every turn.
8. Reassess if new or worsening signs emerge; escalate appropriately. History intake ends when sufficient, unavailable, patient stops, clinician takes over, or an emergency dictates immediate action.

## 6. Patient-facing communication specification

- **Emergency:** direct, concise, no minimizing. “Your symptoms could indicate a serious emergency. Call 112 now or seek emergency medical care immediately. Do not wait for this chat.”
- **Urgent same day:** clear without panic. “Because of [specific unresolved concern], please get assessed in person today. You do not need to finish this chat first. If you can, I can record one more detail for your doctor: [question]?”
- **Prompt outpatient:** “The pattern may fit [provisional cause], but an examination is appropriate. Your doctor can decide whether an ECG or other tests would help. [single relevant question]?”
- **Routine:** give a provisional explanation and ask a high-value follow-up only when needed.

Warning text must reflect actual danger, not be an unchanging 112 footer. Do not say “definitely not MI,” “nothing serious,” or “no investigations needed.” Do not imply that antacid response, a post-gym trigger, pain reproducibility or the absence of sweating independently excludes serious disease. Keep medicine, investigation and prescribing authority consistent with Amyra's existing doctor-only policy unless separately approved.

## 7. Files to inspect/change (recommended workstreams)

| Workstream | Files | Expected change |
|---|---|---|
| Safety contract & state | `safety-screening-v3.ts`, `safety-screening-model.ts`, `types.ts` | Orthogonal urgency and phase; new non-emergency dispositions; evidence-based downgrade guard |
| Orchestration | `conversation.ts` | No silent `safety_update` on ordinary post-referral turns; preserve emergency override, episode routing and locks |
| Conversation policy | `policy.ts`, `agent.ts` | Eliminate V2/V3 conflicts; one-question adaptive triage; calm severity-specific wording |
| Rule-based danger | `safety-triage.ts`, `safety.ts` | Negation/tense/experiencer fixes; narrow high-specificity bypass; multilingual regression |
| Clinical history | `history.ts`, `cases.ts`, `chart.ts`, `views.ts` | Continue saving pending and answered questions after notifying the doctor; preserve status and provenance |
| Timeout and alerts | `safety-screening-timeout.ts`, `alerts.ts`, `plans.ts` | Timeout triggers the care instruction, not blanket chat silence; ensure priority alerts |
| Patient/doctor UI | `apps/patient/src/app/chat/[id].tsx`, `agent/console/src/` | Separate safety urgency banner from conversation composer; show unresolved gaps and chronology |
| Persistence & flags | `agent/migrations/`, `config.ts`, `agent/src/local-dev/database.ts` | Additive schema migration, safe backward compatibility, isolation, feature flag and kill switch |
| Tests | `agent/test/safety-screening*.test.ts`, `agent/test/intake-conversation.test.ts`, `agent/src/evals/safety-v3.ts` | Longitudinal, non-emergency, false alarm, true emergency, concurrent-turn and clinician-reviewed tests |

## 8. Test scenarios and acceptance criteria

| Scenario | Minimum correct behavior |
|---|---|
| “I have chest pain.” with no other information | Focused immediate clarification when safe, not automatic 112 *solely because of the keyword*; if clinically concerning context exists, escalate sooner |
| Mild discomfort after gym and movement-reproducible | Adaptively clarify; consider outpatient pathway when supported; no definitive rule-out |
| Burning after big meal with sour burps | Explore timing, severity, exertional association and warning signs; do not conflate reflux features with proof of safety |
| Several months of stable pleuritic discomfort, no obvious acute danger | Proportionate clinical review and possible ECG decision by doctor; continue history and preserve gaps |
| Mild chest pain **without** sweating vs “no sweating” | Equivalent interpretation of explicit negative findings regardless of punctuation |
| Severe crushing pain plus dyspnoea/diaphoresis | Immediate emergency message; no questions before advice |
| Pleuritic pain plus syncope or severe dyspnoea | Immediate emergency escalation, including non-MI causes |
| Unresolved pain requiring same-day evaluation | Give time-sensitive advice; a later relevant message gets a substantive non-delaying response, not `reply: ''` |
| New emergency feature after an outpatient recommendation | Override with emergency care immediately; log event |
| Patient replies “No” to an ambiguous or bundled question | Resolve only the question reliably answered; otherwise clarify without inventing absent symptoms |
| Patient declines / is unsure / does not reply | Preserve unknowns; recommend suitable care; do not label absence or completed history |
| Multiple active complaints, e.g. bloating + chest pain + rhinitis | Separate complaint records, maintain priorities, prevent safety terminal state from swallowing unrelated messages |
| Provider outage / invalid JSON / wrong model schema | Deterministic emergency override remains; conservative escalation/assessment advice where appropriate; do not fake completion or silently lose the message |
| Concurrent messages during a model call | Transactional sequencing prevents stale lower-risk output overwriting new danger; recovery doesn't lose data |
| Prior same-day guidance already delivered | Do not panic or repeat a boilerplate 112 message each turn; still escalate when genuinely new danger occurs |

**Critical end-to-end acceptance test:** Replay the full ~15–20-turn chest-pain/bloating/rhinitis reference conversation with *adaptive patient responses*. Require: (a) appropriate immediate safety checks, (b) no unjustified 112 escalation, (c) proportional advice on examination/investigations, (d) continued history after non-emergency advice, (e) accurate structured known/denied/unknown data, (f) no repeated questions or handover promises, and (g) new danger injected mid-conversation triggers immediate escalation. Run variants with Hindi, Hinglish, spelling errors and no punctuation.

**Safety evaluation must score both directions:** false emergency messages/avoidable panic **and** missed/delayed time-critical referrals. Also assess appropriateness of urgency, history completeness, response latency and cost. Evaluate with blinded clinician adjudication, not only an LLM judge. Pay special attention to high-risk subgroups and atypical presentations.

## 9. Delivery plan for Codex

**Phase 0 — Baseline and safeguards**
- Verify exact repository/branch, installed feature flags, dev database migration 013 and local model configuration. Run existing unit/typecheck and V3 eval suites; record current outcomes and failures.
- Do not access or mutate real patient records for tests. Work in isolated development environment with synthetic patients.
- Create a concise implementation design mapping old statuses to new statuses and database/API compatibility; get clinician sign-off on clinical disposition policy.

**Phase 1 — Safe foundation (P0)**
- Implement orthogonal urgency, safety phase, history phase and conversation permission.
- Fix active-symptom downgrade restriction and allow a clinically justified outpatient disposition.
- Refactor terminal handling: emergency remains urgent, non-emergency referral no longer silently stops all chat.
- Ensure staff notification is independent of history persistence and pending-question lifecycle.

**Phase 2 — Accuracy and continuity (P1)**
- Fix negation/timing/experiencer detection and reconcile prompts.
- Unify safety findings with complaint-specific history, manage multiple episodes and composer routing.
- Introduce reviewed chest-pain checkpoints without a compulsory questionnaire or chat-based ACS rule-out.
- Harmonize patient status copy and doctor handover UI.

**Phase 3 — Verification and staged rollout**
- Add unit, integration, race-condition, and adaptive long-conversation tests. Run with real configured models in *synthetic* cases. Review clinically and record false-positive/false-negative rates, response time, cost and adverse counterexamples.
- Run migrations only in an isolated development database with rollback plan. Preserve a kill switch and safe fallback.
- No production deploy, production migration, or relaxation of immediate-danger criteria without explicit approval and clinician sign-off.

**Codex deliverables:**
1. Design/ADR with exact revised state types, permitted transitions and safety invariants.
2. File-by-file implementation and additive migration (if necessary).
3. Updated policy wording and patient copy by urgency level.
4. New tests and a reproducible synthetic evaluation harness.
5. Proof of tests executed: commands, pass/fail counts and representative anonymized traces.
6. Remaining risks, known unverified cases, rollback/feature-flag instructions and deployment prerequisites.
7. Concise changelog showing which earlier root causes are fixed and which remain unresolved.

## 10. Non-negotiable safeguards

- **No arbitrary 90–95% emergency probability threshold.** Neither a model's confidence number nor a conversational diagnosis is a validated rule-out test.
- No chat completion requirement before emergency or urgent in-person evaluation.
- Do not automatically lower urgency merely because symptoms are mild, antacid-responsive, non-exertional or exercise-associated. Use full context and review protocols.
- Preserve the existing hard emergency pathway for sufficiently clear danger; add regression tests before changing it.
- No automatic medications, tests or definitive diagnoses beyond existing approved scope; clinician makes medical decisions.
- Fail safely when providers are unavailable, messages conflict or data are missing. “Unknown” is not “negative.”
- Inform staff when a time-sensitive referral is issued; do not let queued cases become invisible merely because history is continuing.
- Ensure the patient actually receives an acknowledgment/next step for post-referral messages; no silent ingestion.
- Protect privacy, data provenance, identity and episode boundaries. Use synthetic data for development and evaluation.


---

**One-line success criterion:** Amyra can say **“this needs a doctor, but it does not necessarily require an ambulance”**, continue a safe and useful history without delaying the required care, and still escalate immediately when genuinely dangerous features appear.
