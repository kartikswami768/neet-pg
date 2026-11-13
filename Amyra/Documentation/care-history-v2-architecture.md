# Amyra Care Architecture: V2 Case History and Clinician Handover

**Document type:** Standalone architecture overview  
**Reference source:** The Amyra care platform product and technical spec, especially its decisions on the assistant answering first and the ask–decide–do–remember loop  
**Snapshot:** 13 November 2026  
**Implementation status:** The V2 changes are on Kartik’s fork main and proposed to the original repository in PR #6. They are not confirmed as deployed. Migrations 011 and 012 have not been applied. All V2 feature switches default to off.

## 1. Purpose and product direction

Amyra’s care loop is: **ask, decide, do, remember**.

- The patient asks in the app.
- The assistant provides a useful first response and brings in a clinician when policy or the situation requires one.
- The clinician makes and signs clinical decisions.
- The patient sees the resulting next steps and record in the app.

The Care History V2 work supports that loop by giving each consultation a structured history, preserving where each item came from, and showing clinicians whether that history is still being collected or is ready for review. It extends the existing care architecture; it does not replace the patient’s longitudinal record, the clinician’s decision authority, or the existing model/database providers.

## 2. System boundaries

### Applications and services

| Part | Responsibility |
| --- | --- |
| Patient app | Expo and React Native app, also exported for web. Handles chat, Home, Health, patient-facing status, and file uploads. |
| Care API and domain service | Node.js 24 and TypeScript service hosted on the existing Vercel project. Handles patient and staff requests, care rules, model calls, authorization, persistence, and integrations. |
| Clinician console | React and TypeScript web app served by the care service. Shows chats, cases, patient record, and the case-history workflow. |
| Care database | PostgreSQL in the existing Supabase project, under the private care schema. The backend is the application component that reads and writes it. |
| Model integration | Existing OpenRouter adapter. The assistant turn, chart and report helpers, audits, and evaluation judge use configured models through the existing integration. |
| Supporting integrations | Existing Twilio Verify for patient phone verification; optional private Supabase Storage for files; Expo push notifications; and configured Twilio WhatsApp alerts to staff. |

The patient app and console communicate with the service over HTTP. They do not call the model or access private care tables directly. Existing server-side credentials and projects are reused; this change introduces no additional provider.

### Component flow

    Patient app ──message──> Care API and domain service ──> Assistant model
                                      │                           │
                                      │                           └── structured turn
                                      ├──> PostgreSQL care schema
                                      ├──> Background care tasks
                                      └──> Clinician console API
                                                │
                                          Doctor / care team

Private file storage and push or staff-alert services are integrations behind the care service.

## 3. Core architecture concepts

The system keeps three kinds of information distinct:

1. **Conversation:** The ordered transcript of patient, assistant, doctor, and system messages.
2. **Longitudinal patient chart:** Reusable facts and records, such as medicines, allergies, readings, results, and care-plan items.
3. **Case history:** Structured information tied to one complaint or consultation.

This distinction is central to V2. A current symptom detail should not silently become a permanent patient fact, and facts from one case should not be mixed into another. A message may be linked to a case, but that link is nullable so older messages and legacy workflows continue to work.

## 4. Patient-message lifecycle

### 4.1 Build the assistant’s context

The service resolves the patient and conversation, then gathers the available chart, prior conversation messages, case state, and relevant attachment or record information. When V2 context is enabled, it also supplies the selected case’s structured history, pending questions, and trusted source references.

The care policy and assistant instructions are part of the model input. The service does not ask a separate model to route the message before the assistant writes. The assistant’s turn returns both a patient-facing reply and the structured decision the service needs.

### 4.2 Validate the turn

With V2 enabled, the output must match a strict, bounded schema. It can describe:

- whether to answer, involve the doctor, or treat the message as an emergency;
- the type and topic of the message;
- whether history is collecting, sufficient, or unable to be completed;
- the specific question asked and changes to pending questions;
- complaint-specific history updates;
- whether the case should continue, be new, have no case action, or be considered ambiguous;
- a limited provisional assessment for clinician review when appropriate; and
- durable chart facts stated by the patient.

The model may refer only to source IDs supplied by the server. The server assigns database IDs, timestamps, actor identity, and case/message links, then verifies that a source belongs to the correct patient, conversation, and case before saving it. The model cannot create a trusted source or case reference on its own.

### 4.3 Persist and respond

The service saves the patient message and assistant reply, updates the relevant case and chart, and writes history entries when V2 writes are enabled. V2 writes are idempotent per patient turn and history-update index. With V2 writes enabled, the service uses a conversation lock and transaction for sequenced messages and case updates; deferred tasks run after commit.

The service returns the assistant reply and the status for the relevant case. It can then schedule permitted background work such as chart updates, case preparation, audit, alerts, or push notifications.

If an assistant response cannot be validated, the service follows its fallback and handover path rather than trusting malformed structured data. Emergency pattern screening remains available for fallback situations, including when the model is unavailable and when staff have paused the assistant.

## 5. Clinical policy and prompt architecture

The care policy is maintained in **agent/src/care/policy.ts**. Assistant prompt construction and the response schemas are in **agent/src/care/agent.ts**. The policy establishes the clinical limits; the service applies the model’s structured decision and validates the associated data.

The main direction is:

- Give a useful first response instead of a generic holding message.
- Do not make a settled diagnosis, prescribe or change medication, order tests, minimize a serious concern, or speak as the doctor.
- Ask focused questions and do not repeat questions already answered.
- Ask for baseline demographics or measurements only when relevant to the complaint, risk assessment, or care decision.
- Distinguish information that is absent, unknown, declined, pending, or not applicable.
- Do not treat an unknown answer as a negative finding.
- Do not hold urgent, serious, emotional, or medication-decision concerns while waiting for routine information.
- Keep an AI assessment provisional and clinician-facing, not a patient-facing diagnosis.

The V2 assistant prompt adds detailed instructions for history status, source references, case routing, pending questions, and the strict output contract. The audit and evaluation flows use the care policy when assessing assistant replies. This keeps the clinical standard in one maintained policy while allowing the V2 schema to carry additional structured information.

## 6. Case-history records

Migration **011_case_history_entries.sql** adds the V2 persistence layer:

- a nullable workflow field and clinician-only provisional assessment on cases;
- a nullable case link and per-conversation sequence on messages;
- the complaint-scoped **case_history_entries** table; and
- the aggregate **case_history_metrics** table.

A case-history entry includes its case, domain and field, status, optional typed value, source kind and source reference, actor, capture time, and optional correction/supersession relationship. Domains include symptoms, red flags, medical and social history, medicines, allergies, measurements, investigations, and examination.

Supported statuses include pending, present, explicitly absent, unknown, declined, unable to obtain, and not applicable. A present status requires a typed value; the other statuses do not store a value. Database constraints and application validation bound the size and shape of stored data.

The case workflow keeps two ideas separate:

| State | Values | Meaning |
| --- | --- | --- |
| History status | collecting, sufficient, unable to complete | How complete the complaint-specific history is for clinical review. |
| Queue status | history collecting, ready for doctor | Whether the case is still in the collection lane or is actionable in the doctor queue. |

Pending questions are linked to the assistant message that asked them. The server assigns their IDs and checks the question was actually asked. A question is resolved only when its matching history field is answered or otherwise properly resolved. The workflow is bounded to eight pending items.

Corrections are represented as new entries linked to the entry they supersede, preserving history rather than silently overwriting provenance. Per-turn idempotency keys prevent duplicate history writes on retry.

Migration **012_case_history_nullable_unit.sql** aligns the database constraint for numeric values with the application schema, which allows an explicit JSON null unit. Migration 011 initializes message sequence values for existing messages, but it does not backfill legacy cases with V2 history.

Daily operational metrics store aggregate counts and duration or size totals only. They do not contain patient, case, or message identifiers or clinical text.

## 7. Routing and clinician handover

### Case routing

The assistant can continue a case only by returning an active case ID that the server supplied. The service verifies that the case belongs to the current patient and conversation. A distinct concern can open a separate case when multi-episode behavior is enabled. If the model cannot distinguish a new concern from an existing one, the service does not silently attach it to a guessed case.

When multi-episode handling is disabled, the compatibility path preserves existing case history rather than mixing unrelated history into it. A doctor-required concern still needs to remain visible for clinician review.

### History collection

A V2 case may remain in the collection lane after the assistant asks a useful question. It is visible to staff, but it is not yet an actionable doctor reply. The assistant cannot make the history ready merely because time passed.

When the history is meaningful for review, the assistant marks it sufficient and the case can enter the doctor queue. If important information cannot be obtained, the case can be handed over with that uncertainty recorded. Urgent, serious, emotional, and decision-related matters should not wait on routine history.

An authorized clinician or operations user can manually move an incomplete case into the doctor queue. Manual release preserves the collecting history state and open questions, so the doctor sees what is known and what remains unanswered. The V2 collection lane has no inactivity-based auto-release; legacy timing behavior remains when the lane is off.

### Clinician and patient views

The clinician console can display the selected case’s history, pending questions, status, and provisional assessment. The collection lane is visually separate from the actionable doctor queue. A reply requires an eligible case selection when multiple cases are waiting, and the API blocks a reply to a case that is still collecting until it is released.

Patient-facing status is tied to the relevant case, so status from an unrelated or older concern is not presented as the current consultation state. Existing doctor-signing and send/undo behavior remains in the care workflow. Care-team messages remain distinguishable from a doctor’s signed clinical reply.

## 8. Rollout controls

V2 is divided into switches that default to off and are dependency-gated:

| Switch | Capability | Required earlier switch |
| --- | --- | --- |
| CASE_HISTORY_SCHEMA_V2 | Selects V2 schema-aware model behavior and reads | None |
| CASE_HISTORY_WRITE_V2 | Writes case history and uses sequenced transactional turns | Schema |
| CASE_HISTORY_CONTEXT_V2 | Supplies case history to later assistant turns | Writes |
| CASE_HISTORY_CONSOLE_V2 | Exposes case history in clinician console | Writes |
| MULTI_EPISODE_CASES_V2 | Enables separate complaint episodes | Context and console |
| CASE_COLLECTION_LANE_V2 | Enables the collection lane and manual release | Console |

Apply and review the database migrations before enabling the corresponding behavior. The implementation includes aggregate rollout metrics for schema validation, history persistence, source validation, routing safeguards, pending items at handover, collection age, time to doctor review, alert delivery, fallback handover, and model latency and token use. The care platform spec and deployment guide describe the operational rollout and rollback steps.

## 9. Changes beyond policy, prompt, and architecture

Those three headings describe the main direction, but the implementation also includes several concrete product and operational changes:

- **Database and persistence:** Two SQL migrations, new tables and case/message fields, validation constraints, indexes, source-integrity checks, and sequence support.
- **API contracts:** New case-history and release capability data, and case-specific patient status.
- **Clinician console:** Case selector, history panel, pending-question display, collection lane, and manual release action.
- **Patient interface:** Handover status follows the relevant case.
- **Data-integrity safeguards:** Server-verified provenance, same-case source checks, idempotent writes, transactional sequencing, and safe routing.
- **Operations:** Feature-switch dependencies, PHI-free aggregate metrics, updated setup and deployment instructions.
- **Build integration:** The patient web export and database setup scripts were updated to fit the existing deployment workflow.

These are not separate model providers or a new database architecture. They implement and operationalize the policy, prompt, and case-history design within the existing service.

## 10. Current implementation notes

- Agent typecheck and build passed.
- Patient typecheck and lint on changed patient files passed.
- The last recorded full agent test run passed 100 of 106 tests. Four failures point to nondeterministic ordering when messages have the same timestamp and no sequence; the current fallback sorts by randomly generated message ID. This can affect transcript order and which message appears latest, and should be resolved.
- Two other failures appear to be test expectations that have not been updated for the new upload-ID prompt wording and the console release permission field.
- Full patient lint could not launch through its package script in the earlier environment because it invoked npx, which was unavailable. Direct ESLint also reported an existing __dirname configuration error in the unchanged CommonJS icon script. Lint for changed patient files passed.
- PR #6 is open against the original Amyra repository. The V2 migrations are unapplied and deployment has not been confirmed.

## 11. Source map

- Clinical policy: **agent/src/care/policy.ts**
- Assistant schema and prompts: **agent/src/care/agent.ts**
- Message handling, response, routing: **agent/src/care/conversation.ts**
- Case creation and workflow: **agent/src/care/cases.ts**
- History validation and persistence: **agent/src/care/history.ts**
- Shared context, sequencing, metrics: **agent/src/care/context.ts**
- Care types and storage: **agent/src/care/types.ts**, **agent/src/care/store.ts**, **agent/src/care/postgres-store.ts**
- Console data and permissions: **agent/src/care/console.ts**, **agent/src/http/console-api.ts**
- Patient contract and chat view: **apps/patient/src/api/contract.ts**, **apps/patient/src/app/chat/[id].tsx**
- Feature-switch dependencies: **agent/src/config.ts**
- Database migrations: **agent/migrations/011_case_history_entries.sql**, **agent/migrations/012_case_history_nullable_unit.sql**
- Product and technical source document: **docs/care-platform.md**
