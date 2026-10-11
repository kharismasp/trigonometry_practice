# Practice Repair PR2 — Hint Visual QA

## Scope and verification level

PR2 uses `Geometry5_Trigonometric_Geometry_Practice_Repair_PR1.zip` as its baseline. It adds Advanced visuals A1–A10 (A7 intentionally remains nonvisual), adds A4's missing mirror-bearing visual, and replaces opacity-only hint overlays with cumulative, question-family constructions. The only change to `questions.js` is A4's `visual` definition; canonical prompt, solution, hint, and question IDs remain unchanged.

**Automated checks:** `node --check` passed for `app.js` and `questions.js`. A generator rendered all 28 visual questions at stages 0–3, verified an SVG and accessible label for every render, rejected `NaN`/`undefined` output, and found four distinct SVG structures per visual question. SVGs were raster-rendered with Inkscape at 350 px width, then reviewed in stage contact sheets; selected diagrams were also checked at 420 px. These are direct diagram render checks, not browser viewport measurements.

**Not verified in a live browser:** Chromium/Playwright is unavailable in this environment, and starting a local HTTP server is blocked by the sandbox (`PermissionError: Operation not permitted`). Therefore PR2 does not claim actual browser/mobile touch QA, live EN/ID switching, interaction state persistence, or 390/768/1365 CSS viewport results. The app's local question-visual refresh path is preserved; browser regression belongs in the next phase's full environment checks.

## Stage definitions

- **0 — Problem state:** givens and neutral unknowns only; no derived answer is shown.
- **1 — Identify structure:** relevant shape, ray, side pair, or shared relationship is emphasized.
- **2 — Helper construction:** a new geometric object or relationship is added.
- **3 — Method bridge:** symbolic setup connects the construction to the method without evaluating the requested result.

## Per-visual audit

All captions exist in English and Indonesian. Language verification here means source-level review of the caption map and localized labels; live switching was not browser-tested. “No answer” means no solved numeric target, derived length, angle, bearing, or gateway value is emitted by the hint stage.

| Question | Stage 0 | Stage 1 | Stage 2 | Stage 3 | New structure / anti-spoiler / captions / responsive render |
|---|---|---|---|---|---|
| C2 | Given triangle and unknown sides | Triangle emphasized | Side–opposite-angle pairings | Symbolic sine-rule chain | Yes at each stage; symbolic only; EN/ID source checked; 350 px render inspected |
| C3 | SSA givens, ray and fixed length | Given ray highlighted | Fixed-length locus and admissible intersection | Supplementary candidate and angle-sum constraint | Yes; no candidate angle/length evaluated; captions match one-intersection geometry; 350 px render inspected |
| C4 | SAS givens | Included sides emphasized | Opposite side isolated | Symbolic cosine-rule relation | Yes; no evaluated target; EN/ID source checked; 350 px render inspected |
| C5 | SSS triangle | Triangle emphasized | Target opposite pair identified | Symbolic cosine-rule relation | Yes; no evaluated angle; EN/ID source checked; 350 px render inspected |
| C6 | Included sides and angle | Included sides emphasized | Altitude helper | Symbolic area bridge | Yes; no computed area; EN/ID source checked; 350 px render inspected |
| C7 | Sides 8 and x, included 60°, given area | Enclosing sides emphasized | Altitude helper | Equation setup | Yes; x not solved; EN/ID source checked; 350 px render inspected |
| C8 | Bearing and endpoint | Bearing ray highlighted | East/North projections | Symbolic components | Yes; no component totals; EN/ID source checked; 350 px render inspected |
| C9 | Cliff, horizontal, sight line and unknown x | Horizontal/sight geometry emphasized | Opposite 50 and adjacent x identified | Tangent relation | Yes; x not evaluated; captions match the highlighted right triangle; 350 px render inspected |
| C10 | Given bearing, endpoint | North reference and ray emphasized | Signed East/South projections | Symbolic components | Yes; no numeric components; EN/ID source checked; 350 px render inspected |
| H1 | Given triangle | Triangle emphasized | Perpendicular altitude and foot | Right-triangle relation | Yes; no lengths solved; EN/ID source checked; 350 px render inspected |
| H2 | SSA ray and fixed length | Ray emphasized | Fixed-length circle | Both admissible intersections | Yes; candidate points are structural only; EN/ID source checked; 350 px render inspected |
| H3 | Given route legs and bearings | Journey legs emphasized | Component projections | Signed component representation | Yes; no final displacement; EN/ID source checked; 350 px render inspected |
| H4 | Two sight lines and tower | Lines of sight emphasized | Shared vertical height | Two tangent ratios sharing TU | Yes; no solved distances; EN/ID source checked; 350 px render inspected |
| H5 | Quadrilateral and given sides/angle | First triangle emphasized | Gateway diagonal AC | Second triangle separated | Yes; diagonal remains unknown; EN/ID source checked; 350 px render inspected |
| H6 | Schematic 10/14 sides and given area; marked not to scale | Included-side structure emphasized | Supplementary candidate ray | Equal-sine relation and cosine-rule comparison | Yes; no angles or third sides printed; schematic marker makes the non-scaled angle drawing explicit; ray stays inside viewBox; EN/ID source checked; 350 px render inspected |
| H7 | Two triangles and correspondence data | Corresponding vertices marked | Corresponding bases emphasized | Symbolic area/scale relation | Yes; no unknown scale evaluated; EN/ID source checked; 350 px render inspected |
| H8 | Circle, radii, chord, unknown central angle | Isosceles radius triangle emphasized | Chord midpoint and perpendicular radius | Half-angle right-triangle relation | Yes; no angle value; caption names radius–half-chord structure; 350 px render inspected |
| H9 | Bearing ray, distance loci and side condition | Given ray emphasized | Circle intersections shown | Admissible side of the baseline selected | Yes; no final bearing; EN/ID source checked; 350 px render inspected |
| H10 | SSA givens | Defining ray emphasized | Fixed-length circle | Perpendicular height compared symbolically with fixed side | Yes; no case count or solved angle exposed; EN/ID source checked; 350 px render inspected |
| A1 | ABC, AB=120 and angles 53°/68° | Whole triangle highlighted | Altitude from C to AB introduced | Supporting right triangle highlighted; h remains unknown | Yes; no altitude value; true angle arcs checked; EN/ID caption source checked; 350 px render inspected |
| A2 | Quadrilateral with AB=7, AD=10, BAD=65°, BC=9, CD=12 | Triangle ABD highlighted | BD identified as gateway | Triangle BCD receives BD | Yes; BD never labeled numerically; side labels attached to sides; EN/ID source checked; 350 px render inspected |
| A3 | Three legs at 030°, 120°, 210° with distances | Route legs emphasized | East/North projections added | Signed component notation | Yes; no total displacement; one global North reference; EN/ID source checked; 350 px render inspected |
| A4 | A, AB bearing 060°, AB=10, AC=14, BC=8; no C placement | Triangle reconstruction highlighted | Mirror placements C₁/C₂ introduced | `bearing AC = 060° ± ∠BAC` | Yes; no final bearings; both candidates are visible; EN/ID source checked; 350 px render inspected |
| A5 | Schematic sides x+2, x+5, side 7, included 60° | Original constraints highlighted | Cosine-rule equation bridge | Positivity and triangle inequalities named | Yes; no candidate roots shown; included-angle arc between correct sides; EN/ID source checked; 350 px render inspected |
| A6 | O, circle, chord AB, radii and tangents; PA remains unknown | Isosceles OAB highlighted | Chord midpoint M and OM⊥AB introduced | Right triangle and tangent-radius perpendicular relation | Yes; no PA value; perpendicular markers checked; EN/ID source checked; 350 px render inspected |
| A8 | A/B due-east baseline, rays 035° and 300°, AB=50 km | Bearing rays and constructed intersection C emphasized | Internal base angles marked symbolically | Perpendicular height helper introduced | Yes; AC, BC, height and angles not evaluated; intersections follow rays; EN/ID source checked; 350 px render inspected |
| A9 | Plan view and two separate vertical sections; T from 040°/330° rays | Ground triangle ABT emphasized | Internal ground angles marked α/γ | Sections connect 30° and unknown β to common TU | Yes; no final height/distance; no misleading single pseudo-3D diagram; 350 px render inspected (stacked tall SVG; browser readability unverified) |
| A10 | Sides x and x+2, included 60°, area 12√3 | Enclosing sides highlighted | Area equation bridge | Positivity and triangle inequalities | Yes; third side remains neutral; no candidate roots; EN/ID source checked; 350 px render inspected |

## Advanced visual notes

- A1's perpendicular helper is absent at Stage 0 and introduced only at Stage 2.
- A2's diagonal BD is visible as an unknown structural line in Stage 0; its gateway role is emphasized later without assigning a length.
- A3 uses bearings in clockwise-from-North convention and distances beside their corresponding legs. Projections appear only from Stage 2.
- A4's Stage 0 deliberately leaves C unplaced. Stage 2 adds the two mirror placements; Stage 3 states the relationship symbolically rather than listing bearings.
- A5/A10 keep algebraic candidates out of the diagram; their final visual stage shows domain/triangle-validity checks.
- A6 includes perpendicular markers at tangent/radius contacts and does not label PA numerically.
- A8/A9 construct intersections from their stated ray directions. A9 splits plan geometry from vertical sections to keep the two relationships legible.
- A7 remains nonvisual because the proof relation is clearer in symbolic reasoning than in a decorative triangle. C1 also remains nonvisual for the same pedagogical reason.

## Hint update and preserved systems

The hint stage is cumulative: later stages retain earlier constructions and append a new helper or method bridge. The existing localized `showHint` update replaces only the question visual, hint caption, and evidence text; it does not rebuild the full page. No practice-bank IDs were changed, and the existing answer, workpad, Teacher Pass, history, and language systems were left intact. Those state-preservation claims are based on source-path inspection; live interaction regression remains for PR3/browser QA.
