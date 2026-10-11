# Geometry 5 Practice — PR3 QA and freeze report

**Package:** `Geometry5_Trigonometric_Geometry_Practice_REPAIRED_FINAL.zip`  
**Baseline:** `Geometry5_Trigonometric_Geometry_Practice_Repair_PR2.zip`  
**Decision:** **HOLD — browser-level acceptance is not verified.** The code, bank, static visual exports, and simulated practice-state tests pass the checks below. This package is not represented as a fully frozen browser-verified build.

## What changed

- Removed shadow implementations. The audited practice handlers now have one function declaration each: `selectTake`, `startTake`, `ensureEvidence`, `changeProblem`, `chooseStuck`, `checkAnswer`, `selfAssess`, `finishTake`, `renderHome`, `renderPractice`, `teacherDrawer`, `teacherJump`, `renderReport`, `recommendedHistoryFocus`, `showHint`, and `render`.
- Added input-time, per-question local drafts for answer fields and scratch work. Drafts are keyed by canonical question ID in the current take, saved in `g5-active-take-v1`, and kept separate from attempts, correctness, skips, and history evidence. Reload resumes the active take and draft.
- Isolated Teacher Jump in a preview session. It can jump to any of the 30 questions, advance visual hint stages, and reveal the validated guide; returning restores the student's take, drafts, evidence, and Teacher drawer state. Teacher preview state does not overwrite active student-take storage or count as student evidence.
- Changed hint copy for 15 questions so each text hint matches the structure visible at that visual stage. The Practice Bank IDs, prompts, solution guides, accepted-answer rules, family assignments, and all mathematical data remain unchanged.
- Tightened the self-check attempt gate: it asks for a structured mathematical statement with a recognized geometric concept and a reason or explicit relation. It is not an automated grader; the student remains the assessor.
- Added keyboard `:focus-visible` styles, clearer disabled styling, localized SVG accessible names, mobile tap-target sizing, and natural visual aspect ratios for standard and tall diagrams. Decorative mascots remain hidden from assistive technology.
- Rebuilt C3 stage 2 to display the circle intersection on the backward extension as a dashed rejected candidate. Stage 3 then checks the supplementary-angle candidate against the triangle angle sum; no answer length is shown.

### Hint-copy alignment edits

| Question | Old emphasis | New emphasis | Reason |
|---|---|---|---|
| C3 | Inverse sine and supplementary angle | Valid ray intersection, then locate the rejected opposite-side candidate | Align text with the new stage 2 circle construction |
| H2 | Write sine rule first | Identify ray and fixed length, then use the reach circle and intersections | Match ray → helper locus → candidate points |
| H6 | Calculate the area sine value first | Identify the fixed sides and included angle, then compare the alternate configuration | Match side highlight → supplementary ray → cosine-rule bridge |
| H7 | Start with area scale factor | Establish vertex and side correspondence first | Match correspondence marks before the scale relation |
| H8 | Bisect the chord immediately | Identify the isosceles radius–chord triangle first | Match highlighted whole structure → midpoint/perpendicular → right triangle |
| H9 | Solve the angle from side lengths | Start with the stated bearing ray and distance loci | Match ray → loci → admissible intersection |
| H10 | Start with sine-rule calculation | Identify the angle ray and side, then add the reach circle and height | Match ray → circle → feasibility helper |
| A1 | Solve the observation triangle | Identify △ABC and target height, then add the perpendicular | Match triangle → altitude → right-triangle method bridge |
| A3 | Resolve components immediately | Trace route order first, then add component projections | Match route → projections → signed component relations |
| A4 | Calculate ∠BAC before addressing placement | Reconstruct the triangle, then show mirror placements, then symbolic bearings | Match triangle → reflection → bearing relation |
| A5 | Write cosine-rule equation first | Mark the original sides and included angle before translating to algebra | Match original geometry → equation → candidate checks |
| A6 | Bisect the chord first | Identify isosceles triangle, then midpoint/right triangle, then tangent relation | Match the progressive construction order |
| A8 | Convert bearings to internal angles immediately | Construct the rays and intersection, then mark internal angles and altitude | Match ray intersection → base angles → height helper |
| A9 | Solve ground distances immediately | Separate plan view and cross-sections, then transfer angles and shared height | Match the paired diagram's dependency sequence |
| A10 | Start with the area equation | Identify the two sides and included angle first, then use area and validate candidates | Match side/angle structure → algebra → validity |

## Automated QA

| Check | Result |
|---|---|
| JavaScript syntax (`app.js`, `questions.js`) | Pass (`node --check`) |
| Practice Bank integrity | 30 unique canonical IDs; 25 auto-check, 5 student self-check; 10 questions per level |
| Baseline content comparison | Only the 15 bilingual hint arrays changed. Prompts, validated solutions, answer fields, tolerances, family classifications, and question IDs match PR2. |
| Answer-field validation | Pass for all 25 auto-check questions: expected answer values accepted, changed first-field values rejected; decimal, degree, π, square root, units, and injection-like malformed strings checked. |
| Duplicate implementation audit | No duplicate function declarations; no reassignment wrappers for the listed practice handlers; no `render(...)` calls with unused arguments. |
| Rendered question geometry | 28 visual questions × 4 stages = 112 SVG outputs. All parsed as XML, have `role="img"` and a localized accessible name, contain no `NaN`/`Infinity`/`undefined`, and have a changed geometry body at each consecutive hint stage. |
| Bilingual content structure | All 30 titles, prompts, hints, and validated solutions contain EN and ID entries; each hint set has three stages. Both languages were rendered across visual stages. |
| Assets | All referenced mascot PNG assets exist. |
| Simulated app runtime | 22 VM/simulated-DOM route tests passed. No actual browser console was available. |

The format checks use the existing numerical tolerances in the canonical bank. They do not broaden accepted terminology or change correctness thresholds.

## Manual mathematical visual QA

The 112 exported SVG states were rendered to PNG at 320 px wide for a mobile-scale inspection, arranged into question-by-stage contact sheets, and visually reviewed. Selected constructions were then inspected individually at full export resolution, including A2 gateway transfer, C3 rejected candidate, H2 two intersections, and A9's paired plan/cross-section view. This is static SVG inspection, not browser rendering.

| ID | Problem family | Visual needed? | Stage 0 correct? | Stage 1 | Stage 2 | Stage 3 | Label collision? | Anti-spoiler? | EN / ID | 390 px | 768 px | 1365 px |
|---|---|---:|---:|---:|---:|---:|---|---|---|---|---|---|
| C1 | method selection | No · intentional | N/A | N/A | N/A | N/A | N/A | N/A | EN / ID copy | N/A | N/A | N/A |
| C2 | sine rule | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C3 | SSA ambiguity | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C4 | cosine rule · side | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C5 | cosine rule · angle | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C6 | area | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C7 | reverse area | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C8 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C9 | elevation / depression | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| C10 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H1 | multi-triangle | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H2 | SSA ambiguity | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H3 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H4 | elevation / depression | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H5 | multi-triangle | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H6 | SSA ambiguity | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H7 | similarity | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H8 | circle + trig | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H9 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| H10 | feasibility | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A1 | multi-triangle | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A2 | multi-triangle | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A3 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A4 | SSA ambiguity | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A5 | parameter / reconstruction | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A6 | circle + trig | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A7 | proof | No · intentional | N/A | N/A | N/A | N/A | N/A | N/A | EN / ID copy | N/A | N/A | N/A |
| A8 | bearings | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A9 | elevation / depression | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |
| A10 | parameter / reconstruction | Yes | Yes | Yes · new structure | Yes · new structure | Yes · new structure | No obvious collision in 320 px SVG export | Yes · no derived target values | EN / ID | 320 px export proxy; browser N/V | 560 px max-width proxy; browser N/V | 560 px max-width proxy; browser N/V |

**Visual semantics checked:** side labels remain attached to their intended sides; angle marks sit on the named rays; givens and unknowns remain distinct; circle/radius/chord, bearing/North reference, and altitude/perpendicular constructions are introduced only at their intended stages; stage captions match the objects shown. The two intentionally non-visual questions are C1 (method classification without a decorative diagram) and A7 (symbolic proof about the sign of cos C).

**Anti-spoiler check:** the inspected Stage 0 and Stage 1 exports show givens and structural identification only. Later stages add helper constructions and symbolic method bridges. No advanced answer length, solved target value, final bearing, or algebraic candidate value was added to a diagram. C3's rejected locus marker has no numerical label.

### Responsive evidence and limitation

The rendered visual exports were checked at 320 px wide (slightly narrower than the usable diagram area at a 390 px viewport). CSS was inspected for its mobile breakpoint, 44 px mobile control targets, width cap, clipping, and distinct 500×360 versus 500×900 visual ratios. At tablet and desktop, PR1 diagrams cap at 560 px and the A9 tall paired diagram retains its tall ratio. These are source/CSS and static-image checks only. Actual Home and question screens at 390, 768, and 1365 px, sidebar behavior, sticky controls, browser text wrapping, touch dragging, and keyboard interaction were **not browser-tested**.

## Practice-flow QA

The simulated-DOM suite passed these behaviors:

- Quick, Standard, Deep, Family Focus, Review Weak Spots, and Retry Mistakes choose the expected take sizes/levels; Family Focus returns as many same-family questions as the selected level has available.
- Draft typing persists by question; Previous Problem and skipped-question return restore the correct question draft; reload restores the active take and its drafts.
- Draft-only work does not create correctness/attempt history. Change Problem leaves the outgoing draft under its own ID, starts the replacement with its own draft, and does not count an untouched replaced question as wrong.
- A partially correct multi-field response retains and locks correct fields while leaving only incorrect fields editable and marked for revision.
- A wrong attempt followed by a correct answer is `recovered`; hint-supported success is `supported`; three wrong attempts unlock Guided Rescue and completion is recorded as `rescued`.
- Self-check questions reject non-mathematical filler and keep the learner as the final assessor after the validated guide is revealed.
- EN↔ID changes preserve the current take, question, drafts, hint stage, and evidence. Teacher Jump preserves the student's take and evidence, works for all 30 question IDs, allows a visual hint stage and guide reveal, then returns to the prior student state.
- Skipped questions return before the take report; completed evidence writes practice history; the report's Retry recommendation starts another take.

### Browser-level QA that remains blocked

The required manual browser run could not be completed in this workspace. Starting the local HTTP server failed because the sandbox prohibits socket binding. The available browser then rejected the local-file URL because only HTTP/HTTPS pages are allowed and explicitly blocked workarounds. Therefore the following required acceptance items remain **not verified**: real click/keyboard/touch interaction, page scroll/navigation behavior, actual responsive page layout at 390/768/1365 px, browser console/network errors, and mobile tap-target behavior. Static and simulated-DOM passes do not substitute for that browser QA. **Do not treat this report as a final freeze sign-off until those checks are run in an authorized browser environment.**
