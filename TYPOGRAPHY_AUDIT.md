# Typography and Spacing Audit — Dentures

## Scope and Migration Status

The approved Serif font is Times New Roman Regular 400. During Phase 1, it is applied only to the Dentures page through a page-scoped font token.

| Page or shared area | Migration status |
| --- | --- |
| Dentures (`/services/dentures`) | Typography completed in Phase 1; spacing-only refinement and primary CTA system completed |
| Home | Pending |
| Implants | Pending |
| Complex Cases | Pending |
| Meet Dr. Tarkesh | Pending |
| All placeholder and fallback pages | Pending |
| Navbar and Footer | Pending; unchanged in Phase 1 |

This is a Dentures-only migration, not a completed website-wide migration. Global family tokens in `src/index.css` remain unchanged. Navbar and Footer are siblings of the Dentures main element and do not inherit its overrides.

## Approved Typography Specification and Role Classification

Hero and section typography use the existing 680px mobile breakpoint. Card titles transition to the approved 22px mobile size at the existing 800px tablet breakpoint to fit the retained narrow grids. Sizes are CSS pixels. Heading and body tracking is normal (zero extra tracking); existing label and CTA tracking is retained. No visible copy, punctuation, capitalization, or explicit line breaks were changed.

| Visual role and Dentures elements | Family / weight | Desktop / mobile size | Line height | Capitalization / treatment |
| --- | --- | --- | --- | --- |
| Hero title: Same-Day Dentures | Times New Roman 400 | 54 / 38 | 1.12 | Existing Title Case and explicit break |
| Major section headings: Day One, treatment options, food comparison, timeline, patient journey | Times New Roman 400 | 36 / 28 | 1.25 | Existing Title Case |
| Free-exam interlude heading | Times New Roman 400 | 36 / 28 | 1.25 | Existing Title Case and explicit break |
| Card and step titles: day cards, category h3, option h5, food cards, timeline steps | Montserrat 600 | 24 / 22 | 1.3 | Existing visible capitalization; category and option titles remain uppercase |
| Body and descriptions: hero paragraph, section intros, day/option/food descriptions, exam paragraph, timeline paragraphs | Montserrat 400 | 18 / 18 | 1.55 | Existing Sentence case; no smaller mobile body text |
| Primary consultation CTAs | Montserrat 600 | 18 / 18 | 1.3 | Existing uppercase treatment and tracking; icons and links preserved |
| Supporting text: food subtitles and food-name captions | Montserrat 400 | 14 / 14 | 1.5 | Existing copy |
| Eyebrows, category badges, food labels, patient labels | Montserrat 600 | Existing 12 | Existing 1.2–1.4 | Existing uppercase and tracking |
| Option-group h4 labels | Montserrat 600 | Existing 13.12 | 1.3 | Navigation/group-label role, not a serif section heading |
| Learn More card actions | Montserrat 600 | Existing 14 | 1.4 | Existing underline and arrow |
| Compare control | Montserrat 600 | Existing 12 | Inherited control line height | Existing underline and interaction |
| Decorative day numbers and timeline markers | Montserrat 600 | Existing responsive number sizes / 32 | Existing inherited line height | Existing marker geometry |

The HTML tag alone does not select the role: option h5 elements receive card-title typography, h4 option-group labels remain sans-serif, and the options section h2 changes from its former sans-serif override to the approved major-heading role. Every h2 currently inside Dentures is a major section or interlude heading. No current h3 has a large editorial-heading role.

### Font Installation and Loading

- Installed `@fontsource/montserrat` with `npm install @fontsource/montserrat`; package and lockfile record the dependency.
- `src/main.jsx` imports only `@fontsource/montserrat/400.css` and `@fontsource/montserrat/600.css`, both normal styles. No other weights or italics are imported.
- Fontsource supplies local font assets; no runtime Google Fonts URL or remote CSS import is used. Its weight-specific CSS includes Unicode subsets, which the browser selects as needed.
- `.dentures` locally overrides `--font-sans` with `"Montserrat", Arial, sans-serif` and `--font-serif` with `"Times New Roman", Times, serif`. Dentures-specific rules continue to reference these tokens. The local bold token is 600, so no Dentures text requests an unavailable 700 weight.
- Times New Roman uses the installed system font; no proprietary font files were downloaded or bundled. Serif text uses 400 only, never 600 or 700. Georgia is not in the Dentures font stack.
- Existing `font-synthesis: none` remains in effect.

## Approved Section-Spacing Specification

Standard content sections use 80px top and bottom padding above 1024px, 64px at 681–1024px (tablet), and 48px at or below 680px (mobile). The page-scoped `--dentures-section-space` token uses the existing 1024px and 680px breakpoints. This applies to Day One, Treatment Options, Food Comparison, Smile Timeline, and Patient Journey (through its inner wrapper).

Justified exceptions and preserved spacing:

- Hero retains its existing vertical padding, minimum heights, image placement, and mobile composition.
- Free-exam interlude retains 42px top and bottom padding because it is a compact banner.
- Treatment-category connector tracks retain their 58px desktop/tablet and 50px mobile gaps. Their internal comparison-card padding, branch lines, and image tracks are unchanged; the 80/64/48 rule applies only around the outer section.
- Timeline connector geometry, food-card arrows, patient-image grids, image sizing, internal card padding, and responsive stacking breakpoints are unchanged.
- Navbar and Footer spacing is outside this phase.

## Responsive Verification

Verified in local headless Chrome at `http://127.0.0.1:3001/services/dentures` after waiting for fonts and image decoding.

| Viewport width | Hero / section / card sizes | Standard section padding | Hero paragraph | Overflow and clipping |
| --- | --- | --- | --- | --- |
| 1440px | 54 / 36 / 24 | 80px each side | Three approved lines | No horizontal overflow or clipped headings/CTAs |
| 1024px | 54 / 36 / 24 | 64px each side | Three approved lines | No horizontal overflow or clipped headings/CTAs |
| 768px | 54 / 36 / 22 | 64px each side | Three approved lines | No horizontal overflow or clipped headings/CTAs |
| 430px | 38 / 28 / 22 | 48px each side | Natural wrapping; mobile break retained | No horizontal overflow or clipped headings/CTAs |
| 390px | 38 / 28 / 22 | 48px each side | Natural wrapping; mobile break retained | No horizontal overflow or clipped headings/CTAs |

Computed typography checks cover headings, card titles, paragraphs, links, labels, and food captions. Chrome DevTools Protocol confirms actual system Times New Roman for the hero and custom Montserrat font files for body and semibold card text. Body text remains 18px at every width. All three patient comparisons were exercised through After, Before, and Compare at each width (45 successful state transitions). Comparison JSX, focus handling, accessible names, and image transforms were not edited.

The desktop/tablet hero paragraph remains:

```text
Made in our in-house lab,
your dentures are designed for a natural look,
comfortable fit, and confident smile.
```

The hero copy width now has a Dentures-specific minimum sufficient for the middle line at tablet widths. Its left alignment and image geometry are preserved. Mobile retains the original copy width and the explicit break before “and confident smile.”

## Known Limitations and Text-Fit Exceptions

- Wider Montserrat card titles require a small expansion of the category heading's text box into available horizontal padding beside the image track; the 800px card-title transition keeps text clear of the images. Image dimensions and grid tracks are unchanged.
- Long unbroken option-title words and food captions may wrap within a word when necessary (`overflow-wrap: anywhere`). This prevents clipping at narrow widths while preserving the approved font sizes, existing card grid, text, and image widths. Explicit category-heading spans remain block-level.
- Larger approved text naturally increases some card heights and the overall page length. Fixed image dimensions, scaling, source paths, object positioning, and responsive stacking rules remain unchanged.
- Times New Roman availability is operating-system dependent; the approved Times/serif fallbacks apply where it is absent. Browser verification covers Chrome on this Mac, not every OS/browser combination.
- Phone links were preserved but external phone calls were not initiated. No content embedded in images was modified.
- This phase does not change existing behavior or unresolved routes on other pages.

## Build and Lint Results

- `npm run build`: passed.
- `npm run lint`: passed.
- `git diff --check`: passed.
- Existing page JSX, routing, image assets, global typography tokens, Navbar, and Footer source files are unchanged.

Typography and spacing snapshots outside Dentures matched the pre-migration CSS on Home, Implants, Complex Cases, Meet Dr. Tarkesh, a placeholder route, and the Dentures Navbar/Footer at 1440px and 390px (12 route/width combinations). Video loading heights were excluded from this typography comparison.

Local verification artifacts are in `/tmp/dentures-phase1/`: responsive screenshots, `report.json`, `fonts.json`, `isolation.json`, and browser verification scripts. These temporary files are not committed project files.

## Exact Files Modified in Phase 1

1. `package.json` — Montserrat dependency.
2. `package-lock.json` — locked dependency metadata.
3. `src/main.jsx` — normal Montserrat 400 and 600 imports.
4. `src/pages/Dentures/Dentures.css` — scoped typography tokens, role-specific styles, section spacing, and minimal text-fit adjustments.
5. `src/pages/Dentures/PatientJourneyComparison.css` — patient section spacing and Compare text weight.
6. `TYPOGRAPHY_AUDIT.md` — this English-only Phase 1 specification, status, and verification report.


## Completed Dentures Spacing-Only Refinement

This follow-up preserves the approved Phase 1 typography and updates only outer section padding. No markup changes were required. The earlier package, font import, and typography edits listed above belong to Phase 1 and were not modified during this refinement. No other page has been spacing-migrated.

### Section Classification and Exceptions

| Section or composition | Spacing treatment |
| --- | --- |
| A Beautiful Smile from Day One | Standard 80px / 64px / 48px outer padding |
| Two Ways to Restore Your Smile | Standard outer padding around the entire connected composition; category cards, options panels, internal gaps and gold connector lines unchanged |
| What Do You Want to Eat Again? | Standard outer padding; food cards, image areas, arrows and CTA remain one grouped section |
| Your Smile Starts from Day One | Standard outer padding; internal timeline gaps, connector lines and CTA unchanged |
| Actual Patient Journey | Standalone standard section using its existing inner wrapper; the same bottom padding provides the final separation before Footer |
| Hero | Exception: existing height, copy padding and image composition unchanged; its mobile full-width image receives no added padding |
| Free-exam interlude | Exception: compact 42px top/bottom padding retained |
| Full-width image areas | No standalone image-only section exists outside the Hero; existing image areas inside cards and comparisons receive no added padding |
| Shared Navbar and Footer | Outside scope; no changes |

The connected category/connector/options composition retains its 58px desktop/tablet and 50px mobile connector tracks, with the existing 30px branch connector inside that gap where displayed. The responsive branch visibility rule is unchanged. No padding was added between grouped blocks. Heading margins and card padding retain their internal roles; there are no new empty wrappers or external margins. Adjacent section boundaries meet without unintended gaps or overlap.

### Spacing Refinement Verification

Compared the approved pre-refinement CSS against the final CSS in Chrome at 1440px, 1024px, 768px, 430px and 390px:

- All five standard sections have symmetric 80px, 64px, 64px, 48px and 48px padding respectively.
- Computed font properties, text-node line rectangles, internal card/grid dimensions, margins, padding, image dimensions, object positioning and transforms match the baseline at every width.
- Hero and compact banner heights are unchanged; desktop Hero line breaks and mobile wrapping are unchanged.
- Connector gap and pseudo-element measurements match the baseline, and the connector tracks remain contained between their cards and panels.
- No horizontal overflow, new gaps or section collisions were found. The final Patient Journey section retains intentional bottom padding before the unchanged Footer.
- All three patient comparisons passed After, Before and Compare transitions at all five widths: 45 successful transitions.
- Other-page and shared-area typography/spacing snapshots match the pre-refinement baseline for Home, Implants, Complex Cases, Meet Dr. Tarkesh, a placeholder route, and Dentures Navbar/Footer at 1440px and 390px (12 checks; `/tmp/dentures-spacing/isolation.json`).
- Desktop and mobile remain visually unchanged; only tablet section padding reduces from 80px to 64px. Elements below each tablet section move upward by the expected reduction in outer padding; image cropping and internal alignment do not change.
- `npm run build`: passed. `npm run lint`: passed. `git diff --check`: passed.

Local artifacts: `/tmp/dentures-spacing/verification.json`, full-page screenshots at all five widths, pre-refinement CSS snapshots, and the verification scripts. Browser coverage is Chrome on this Mac.

### Exact Files Modified in the Spacing Refinement

1. `src/pages/Dentures/Dentures.css` — page-scoped 80/64/48 spacing token and standard-section usage; removed duplicate options-section padding.
2. `src/pages/Dentures/PatientJourneyComparison.css` — Patient Journey wrapper consumes the same token; removed redundant breakpoint padding overrides.
3. `TYPOGRAPHY_AUDIT.md` — updated spacing specification, migration status, classification, exceptions and verification results.


## Approved Dentures Primary CTA System

The primary rectangular CTAs rendered by the Dentures-only `Consultation` component now use explicit `variant="light"` (default) and `variant="dark"` props with `dentures__cta--on-light` and `dentures__cta--on-dark` modifiers. The Free Exam interlude uses the dark variant. Hero, Food Comparison, Smile Timeline and Patient Journey use the light variant, including the formerly gold Food Comparison CTA. All other pages and shared Navbar/Footer CTA migration remain pending.

| Background context | Default | Hover | Active / pressed |
| --- | --- | --- | --- |
| Light | Brand navy fill/border; white foreground | Brand gold fill/border; navy foreground | Subtle existing gold-palette gradient; gold border; white foreground |
| Dark navy | Brand gold fill/border; white foreground | Transparent fill merging with the section; white border; gold foreground | Horizontal gold-to-cream gradient; gold border; navy foreground |

Foreground includes the label, original phone SVG and original arrow. Typography remains Montserrat 600, 18px, line-height 1.3 with the approved uppercase presentation. Existing labels, telephone destinations, padding, dimensions, subtle radius and responsive layout are preserved. Press styling uses `:active` only and creates no persistent selected state. No shadows were added.

Hover is restricted to `(hover: hover) and (pointer: fine)`. Keyboard focus has a 3px outline offset by 5px: gold on light backgrounds and white on dark backgrounds. Background color, border color and text color transition over 180ms; dimensions and font properties are not animated. Gradient images switch with the pressed state. `prefers-reduced-motion: reduce` disables transitions.

### CTA Verification

- Checked all five primary CTAs at 1440px, 1024px, 768px, 430px and 390px in default, hover, active and focus-visible states (100 state/CTA/width combinations).
- Every state retains the same button dimensions, typography and padding. Icons inherit the label foreground. No button text clipping or horizontal page overflow was found; touch targets remain at least 44px high.
- Compared page-wide computed typography, internal dimensions, grids, images, margins and padding against the pre-CTA baseline: unchanged. Section spacing remains 80px / 64px / 48px.
- Keyboard focus was exercised with Tab/Shift+Tab, and Enter activated all five existing telephone anchors at every width (25 activations). All five anchors also activated under touch emulation at 390px and returned to default colors without sticky hover. Test-only click interception prevented external telephone calls; the production telephone behavior and href values are unchanged.
- Reduced-motion checks passed for all CTAs at all five widths. State screenshots were reviewed for both variants.
- `npm run build`: passed. `npm run lint`: passed. `git diff --check`: passed.
- Other-page and shared-area typography/spacing checks passed on Home, Implants, Complex Cases, Meet Dr. Tarkesh, a placeholder route, and Dentures Navbar/Footer at 1440px and 390px (12 checks; `/tmp/dentures-cta/isolation.json`).
- Learn More links, comparison controls, arrows, content, section spacing and all non-CTA styles were not edited. No global or shared styles were changed.

Local evidence: `/tmp/dentures-cta/verification.json`, state screenshots and verification scripts. Browser verification used Chrome on this Mac, including touch emulation; external telephone calls and physical-device testing were not performed.

### Exact Files Modified for the CTA Update

1. `src/pages/Dentures/Dentures.jsx` — explicit background-context variant replacing the ambiguous gold boolean; no content or destination changes.
2. `src/pages/Dentures/Dentures.css` — Dentures primary CTA state colors, gradients, focus outline and motion handling only.
3. `TYPOGRAPHY_AUDIT.md` — Dentures-only CTA specification, migration status and verification notes.
