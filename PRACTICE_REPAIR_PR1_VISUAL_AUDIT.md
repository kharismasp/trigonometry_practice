# Geometry 5 Practice Bank — PR1 Visual Audit

## Scope and baseline

This package uses `Geometry5_Trigonometric_Geometry_Practice_FINAL(1).zip` as its baseline. PR1 changes the Core and Challenge geometry visuals only. The 30 canonical question records, IDs, prompts, answer checks, hints, solutions, bilingual fields, and practice behavior remain unchanged. Advanced visuals and hint-sequence redesign are deferred.

## Automated checks

- `node --check app.js` and `node --check questions.js`: passed.
- Question-bank comparison against the extracted baseline: 30 IDs retained; 10 Core, 10 Challenge, and 10 Advanced; all non-visual question fields match exactly.
- Custom SVG generation: all 19 new visual cases (C2–C10 and H1–H10) generated, including staged hint states.
- Anti-spoiler source checks: initial states for C3, H2, H6, H9, and H10 do not label candidate solutions or reveal target outputs.
- Geometry calculations checked: C2, C4, C5, C8, C9, C10, H1, H5, H7, H8, H9, H10. These include angle/side opposition, included-angle placement, bearings and component directions, altitude projection, circle intersections, and SSA height/intersection conditions.
- Responsive CSS sets the custom SVG to a natural 500:360 ratio with a 560px maximum, and permits a controlled mobile-width breakout. This is a source/layout check, not a browser viewport test.

## Manual geometry review

The generated SVGs were raster-inspected at 378px and 560px render widths, including hint stages where relevant. At CSS sizing, the 390px layout uses a mobile SVG width near the card width; the 768px and 1365px layouts cap the diagram at 560px. Since the site was not opened in a browser for this PR1 pass, mobile touch behavior, surrounding page layout, and actual 390/768/1365 viewport appearance remain unverified. Raster review does not establish browser-level acceptance.

| Case | Diagram disposition | Geometry and given-data review | Labels / spoiler review | Mobile review |
|---|---|---|---|---|
| C1 | No diagram added | Classification prompt intentionally spans distinct scenarios; one representative triangle would misrepresent the task. | No diagram labels or answer leakage. | Not applicable. |
| C2 | Rebuilt | Triangle uses A=38°, B=67°, a=7 with conventional opposite-side placement. | b and c remain unknown; angle/side labels attach to their objects. | Raster-inspected at both widths; browser viewport pending. |
| C3 | Added | Initial SSA setup displays A=78°, b=9 and fixed a=14. | Candidate angle/result withheld in the initial drawing. | Raster-inspected; browser viewport pending. |
| C4 | Rebuilt | SAS construction places 73° between sides 9 and 12. | Included angle and both adjacent sides are explicit. | Raster-inspected; browser viewport pending. |
| C5 | Rebuilt | SSS sides 7, 10, 12; theta is opposite the 12 side. | Target angle is marked without a solved value. | Raster-inspected; browser viewport pending. |
| C6 | Rebuilt | Sides 8 and 15 enclose 42°; area is the target. | No unrelated third-side value or solved area appears. | Raster-inspected; browser viewport pending. |
| C7 | Rebuilt | Sides 8 and x enclose 60°; given area 36 cm² is shown. | Area stays separate from vertex and angle labels. | Raster-inspected; browser viewport pending. |
| C8 | Rebuilt | 035° is clockwise from North; ray, endpoint, and East/North projections agree. | Compass reference and bearing arc are explicit. | Raster-inspected; browser viewport pending. |
| C9 | Rebuilt | 50m cliff is vertical; observer horizontal, line of sight, 28° depression, and horizontal x are shown. | Depression arc starts at the observer horizontal; x and 50m are givens/unknown as appropriate. | Raster-inspected; browser viewport pending. |
| C10 | Rebuilt | 120° clockwise from North resolves to East/South components. | North reference and clockwise arc shown; reverse bearing withheld. | Raster-inspected; browser viewport pending. |
| H1 | Rebuilt | ABC side lengths 13, 10, 7; CD is perpendicular to AB at D. | AD and CD remain unknown; right marker is at D. | Raster-inspected; browser viewport pending. |
| H2 | Rebuilt | A=42°, b=10, a=7; staged circle intersects the admissible ray in two points. | Initial state hides both candidates; intersections appear only at the later hint stage. | Raster-inspected at initial and reveal stages; browser/touch pending. |
| H3 | Rebuilt | Journey segments follow their stated bearings and proportional distances; local North references are present. | Internal angle at B is not asserted as given. | Raster-inspected; browser viewport pending. |
| H4 | Rebuilt | A–T–B is collinear, TU vertical, AB=80m; sight lines meet TU. | Elevation arcs are located at A (28°) and B (41°); right marker at T. | Raster-inspected; browser viewport pending. |
| H5 | Rebuilt | Convex ABCD with side lengths on AB, BC, CD, DA; AC is the gateway diagonal. | 50° is at B; AC remains unknown. | Raster-inspected; browser viewport pending. |
| H6 | Rebuilt | Sides 10 and 14 enclose the unknown angle; area 49 cm² is given; supplementary construction appears at hint stage. | Initial state shows only one configuration; added position is staged. | Raster-inspected at initial and hint stages; browser pending. |
| H7 | Rebuilt | Corresponding triangles ABC and DEF have paired vertex markers; side/angle givens and area ratio are present. | A note says schematic sizes do not encode the scale; target result not drawn. | Raster-inspected; browser viewport pending. |
| H8 | Rebuilt | Chord endpoints lie on the circle; radii are 8cm, chord is 12cm; perpendicular bisector helper appears at hint stage. | Central target angle is on the correct arc; helper is staged. | Raster-inspected at initial and hint stages; browser pending. |
| H9 | Rebuilt | Bearing 050° ray AB=15km; 20km and 13km loci intersect; clockwise candidate region is indicated. | C is not placed in the initial state; one candidate is staged later. | Raster-inspected at initial and hint stages; browser pending. |
| H10 | Rebuilt | A=25°, b=10, fixed a=4; reach circle and perpendicular height h=b sin 25° are staged. | Initial state withholds the intersection/result; h is introduced with the altitude helper. | Raster-inspected at initial and hint stages; browser/touch pending. |

## Deferred work

- PR2: review and refine hint progression as a whole, including how each staged construction connects to the written hint.
- PR2/R2: conduct browser-level interaction and viewport QA at 390px, 768px, and 1365px. This PR1 report does not claim those checks passed.
- Advanced question visual work was outside PR1 scope and remains unchanged.

