# Criminal Law Premium Spatial Redesign — Design Spec

Date: 2026-10-03  
Repository: `zoeyzb/criminal-law`  
Baseline commit: `81116d262ef5c15d74c431f65a8afd962142a240`

## Goal

Transform the existing criminal-defense website from a static editorial/template presentation into a premium, cinematic, spatial experience that feels deliberately art-directed and appropriate for a high-budget client presentation, while preserving accessibility, mobile usability, reduced-motion behavior, the preparation checklist, native FAQ semantics, and current no-fabrication legal-content boundaries.

The redesign must not become a generic “3D agency demo.” Depth, movement, color, and interaction must reinforce hierarchy, seriousness, and navigation rather than compete with the legal content.

## Current-state findings

The deployed site matches the latest repository direction and is not primarily failing because of stale deployment state. The core issue is presentation:

- most sections use the same dark planar treatment and repeat similar left/right layouts;
- the R3F scene is technically present but visually too subtle to establish a premium spatial identity;
- the hero image behaves mostly like a conventional full-bleed background;
- section transitions lack narrative choreography;
- the “person first” principles, case-stage selector, preparation process, and FAQ all read as separate brochure modules rather than one visual system;
- motion is concentrated in the hero and does not create a site-wide sense of depth;
- the palette is too close to monochrome graphite/silver to produce enough visual hierarchy;
- copy is competent but frequently generic and soft for a criminal-defense context.

The current code already includes React Three Fiber, Three.js, GSAP, ScrollTrigger, Lenis, and Motion. The redesign should extend this existing stack instead of replacing it.

## Design principles

1. **Cinematic, not decorative.** 3D and animation should create architectural depth, reveal information, and guide attention.
2. **Three-plane hierarchy.** Every major section should visibly separate rear atmosphere, middle subject/surface, and foreground copy/action.
3. **Material color, not rainbow color.** Use near-black, graphite, warm stone, muted bronze, and restrained oxblood accents.
4. **One motion owner per element.** R3F owns 3D scene transforms, GSAP owns scroll choreography, Motion owns lightweight UI/state transitions.
5. **Progressive enhancement.** Core content and actions remain fully usable without WebGL, with reduced motion, and on constrained mobile devices.
6. **Legal credibility over novelty.** Avoid gavels, scales, floating courthouse models, neon gradients, fake testimonials, fake case wins, fake attorneys, and unverifiable trust signals.
7. **Shorter, stronger copy.** Reduce generic preparation language and increase context-specific clarity without making legal promises.

## Experience architecture

### 1. Global atmosphere

Create a site-wide deep environmental background using layered gradients, subtle texture/grain, faint architectural line work, controlled light blooms, and depth-separated surfaces.

Base palette direction:

- background: near-black `#040506`
- deep blue-charcoal: approximately `#0A0F14`
- raised graphite: approximately `#151B20`
- warm stone highlight: muted warm gray
- bronze accent: restrained desaturated bronze
- oxblood accent: sparing use for high-stakes emphasis, never as a dominant background
- main text: warm off-white rather than pure white

The background should change light balance subtly between sections so the page feels continuous but not flat.

### 2. Header

Keep the existing semantic navigation and mobile menu behavior.

Desktop behavior:
- starts transparent over hero;
- becomes a compact darker floating navigation layer after leaving the opening region;
- uses subtle border/light separation rather than glassmorphism;
- retains one dominant CTA.

Do not introduce hidden navigation or excessive hover novelty.

### 3. Cinematic hero

The opening must create the strongest “this is not a normal template” moment.

Structure:
- rear: atmospheric darkness and slow light field;
- middle: judicial passage image plus WebGL architectural framing/depth geometry;
- foreground: wordmark/nav and hero copy.

Entrance sequence:
1. page begins with tighter/darker architectural framing;
2. the passage visually opens toward the courtroom;
3. light increases subtly along the corridor;
4. hero eyebrow and headline resolve after the environment establishes itself;
5. CTA arrives last.

Pointer movement:
- very small perspective displacement only;
- no constant orbiting or large parallax.

Scroll:
- controlled forward/push-through movement;
- photograph/3D geometry shifts on different depth rates;
- hero exits into the next section as one continuous spatial transition.

Fallback:
- the existing judicial image remains sufficient without WebGL;
- reduced-motion mode must render a composed static hero immediately.

### 4. Principles / approach section

Replace the current static “A case has a record. A person has a life.” layout with a scroll-led three-beat principles sequence.

New framing direction:
**“A defense begins before the courtroom.”**

Three concise beats:
1. **Listen** — understand the person and events before deciding what matters.
2. **Understand** — organize the record, dates, documents, and uncertainty.
3. **Act with clarity** — define the next informed step and responsibilities.

Visual behavior:
- each beat enters as a spatial slab/plane;
- subtle rotate-to-flat or depth-settle transition;
- previous beat recedes rather than simply disappearing;
- large numeric marker and short supporting sentence;
- avoid oversized body paragraphs.

On mobile/reduced motion:
- render as vertically stacked premium cards with light motion or no motion.

### 5. Case-stage navigator

Replace the current left list + right document panel.

Stages:
- Investigation
- Charges filed
- After a decision

Interaction:
- three large spatial cards/deck;
- active stage moves forward;
- inactive stages recede and remain visible enough to imply sequence;
- keyboard activation and `aria-pressed` behavior remain.

Active-stage information is shortened to three blocks:
- **What matters now**
- **Bring with you**
- **Question to ask**

Avoid long prose blocks.

State changes should use Motion for UI transition and CSS perspective for layout; do not require WebGL for this interaction.

### 6. Preparation scroll sequence

Turn the current numbered list into a major narrative sequence controlled by ScrollTrigger.

Chapters:
1. **Build the record**
2. **Understand the options**
3. **Define what happens next**

Desktop:
- use a pinned or semi-pinned presentation only if it remains readable and does not trap scrolling;
- visual planes/documents/timeline fragments assemble and separate as the user progresses;
- the active chapter receives the strongest light and depth;
- copy remains short and scannable.

Mobile:
- no heavy pinning;
- sequential cards with Motion transitions.

The checklist CTA should appear after the sequence as the natural outcome, not be repeated excessively throughout the page.

### 7. FAQ / questions

Replace the current plain horizontal accordion presentation with a stronger editorial question system while retaining native `<details>` semantics.

Design:
- visible question number;
- selected/open row becomes the foreground surface;
- answer gains a distinct depth layer and light treatment;
- transition remains restrained and keyboard-safe.

Keep FAQ answers factual and transparent about the demo identity and lack of live intake.

### 8. Closing CTA

Use a stronger closing statement tied to the visitor’s situation and preparation rather than generic “what matters to you” language.

The closing should visually converge previous depth planes into one focused action.

One primary CTA:
- prepare / create checklist

One secondary path:
- return to relevant stage or questions

Do not imply that the checklist submits a consultation request.

## Copy direction

The redesign should remove or reduce generic lines such as:
- “Clarity begins with preparation.”
- “Before you take the next step.”
- “Start with what matters to you.”

Preferred tone:
- specific;
- calm;
- high-stakes without fearmongering;
- concise;
- direct;
- no exaggerated promises.

Example directions:
- “When the stakes change, details matter.”
- “Know what has happened. Know what comes next.”
- “The record tells part of the story. Your defense begins with the whole picture.”

Final copy may vary during implementation as long as it follows these constraints.

## Component architecture

Refactor the page into focused components rather than expanding `src/main.jsx` further.

Expected responsibilities:

- `src/components/CinematicHero.jsx`
  - hero composition, image, entry state, CTA shell
- `src/components/SpatialHeroScene.jsx`
  - R3F scene only
- `src/components/PrinciplesSequence.jsx`
  - three-beat approach sequence
- `src/components/CaseStageDeck.jsx`
  - stage selection, spatial card UI
- `src/components/PreparationSequence.jsx`
  - 1/2/3 narrative sequence
- `src/components/EditorialFaq.jsx`
  - FAQ shell around native details
- `src/components/SiteHeader.jsx`
  - desktop/mobile navigation and scroll state
- `src/components/AmbientBackdrop.jsx`
  - global background layers
- `src/useMotion.js` or split motion hooks
  - GSAP/Lenis orchestration only; avoid UI-state ownership

Existing `PreparationDialog.jsx` behavior should be preserved unless a verified bug is found.

## Dependency policy

Keep:
- React
- React DOM
- Three.js
- React Three Fiber
- GSAP
- ScrollTrigger
- Lenis
- Motion

Add only if implementation materially benefits:
- `@react-three/drei`

Do not automatically install full Aceternity UI, Magic UI, React Bits, or shadcn collections. Recreate compatible interaction patterns locally when lightweight and appropriate. If a component library is introduced, only the specific needed package/component should be added and its license checked.

## Accessibility and interaction requirements

- preserve one semantic `h1`;
- preserve meaningful heading order;
- preserve skip link;
- preserve native button/link semantics;
- preserve keyboard stage selection;
- retain native FAQ details/summary semantics;
- respect `prefers-reduced-motion`;
- provide a user motion pause control;
- do not require pointer movement to understand content;
- maintain visible focus styles;
- no text embedded only in WebGL;
- no information available only through animation;
- mobile layout must not rely on hover.

## Performance requirements

- R3F scene remains lazy-loaded;
- use bounded DPR;
- suspend or reduce frame rendering when offscreen;
- avoid large continuously running shader effects;
- preserve useful image fallback;
- avoid adding multiple heavy UI libraries;
- split animation code/components where appropriate;
- build output should not regress dramatically without a clear visual benefit.

Performance claims must be based on measured evidence, not build success alone.

## Acceptance criteria

The redesign is acceptable when all of the following are true:

1. The opening hero clearly presents at least three perceptible visual depth layers on a capable desktop.
2. The hero entrance has a deliberate sequence rather than an immediate static render.
3. The approach/principles section is no longer a static two-column brochure block.
4. The case-stage section no longer presents as a left menu plus right document page.
5. The 1/2/3 preparation flow uses scroll/state choreography and has a distinct active chapter.
6. The FAQ no longer appears as four plain lines while remaining semantic and keyboard accessible.
7. At least one restrained warm accent is visible across the design without turning the site colorful or SaaS-like.
8. Copy is shorter and more criminal-defense-specific without adding unverifiable legal claims.
9. Existing checklist behavior remains functional.
10. Mobile remains fully usable without desktop-only 3D assumptions.
11. Reduced-motion mode remains coherent and complete.
12. `npm test` passes.
13. `npm run build` passes.
14. No horizontal overflow at key mobile/tablet/desktop widths.
15. No new fabricated attorney identities, results, testimonials, office addresses, jurisdictions, or intake capabilities.
16. README/design QA are updated with what was actually implemented and verified.

## Verification plan

After implementation:

- run `npm ci` or equivalent clean install where available;
- run `npm test`;
- run `npm run build`;
- inspect the production-like build;
- test widths around 320, 390, 768, 1024, and 1440;
- verify keyboard navigation for header, stage deck, FAQ, modal, and motion control;
- test reduced-motion rendering;
- inspect console for application errors;
- verify that the fallback hero remains usable without WebGL;
- verify actual WebGL behavior on a renderer-capable environment if available;
- compare new screenshots against the October 2 baseline;
- record any unverified areas rather than claiming success.

## Out of scope

- creating a real law-firm identity without supplied verified data;
- attorney bios, case results, testimonials, awards, jurisdictions, office locations, or live consultation routing that have not been supplied;
- backend intake or CRM integration;
- replacing the checklist with a legal-advice system;
- a full framework migration;
- gratuitous 3D assets, gavels, scales of justice, or courthouse models.

## Repository influence record

- **addyosmani/agent-skills:** production-oriented frontend workflow, incremental implementation, testing, responsive/accessibility verification.
- **Understand-Anything:** inspect the existing codebase and integration boundaries before editing; no code copied.
- **spec-kit:** explicit requirements, architecture, acceptance criteria, and implementation tasks; no runtime copied.
- **Three.js / R3F / Drei:** scene ownership, lazy renderer strategy, bounded render cost, progressive enhancement.
- **GSAP / ScrollTrigger / Lenis / Motion:** separated animation ownership by responsibility.
- **Aceternity / Magic UI / React Bits / shadcn:** visual-pattern references only unless a specific component is justified; no wholesale framework merge.
