# Design QA | October 2 redesign

Status: inspected desktop/mobile presentation and core interactions passed. GPU rendering and production deployment are not verified.

## Audit and response

The previous commit 311a5fc retained an audio-store silhouette: swatches, collection cards, repeated miniature courthouse, giant slogans, numbered sections and theme inversion. Latest user direction supersedes exact-source copying. The new layout removes all product presentation, reduces the content sequence to useful legal preparation topics and locks every section to deep graphite/silver. One fictional judicial interior provides human-scale depth without a toy temple or gavel. Body text and actions remain HTML independent of 3D.

## Checks actually performed

| Check | Evidence / result |
|---|---|
| Production build | `npm run build` passes; Vite warns about large 3D/animation chunks. Renderer is lazy and gated before importing. |
| Checklist content | Node test checks all 24 public file variants against shared formatter, selected matter, checked count, document list and disclosure. |
| Download integration | Browser saved `/checklists/investigation-010.txt`; file was read in the synchronized workspace and contains only the second item checked. |
| Widths | Actual iframe viewports 320 / 390 / 768 / 1024 / 1440: scrollWidth equals clientWidth at 305 / 375 / 753 / 1009 / 1425 after scrollbar. Desktop 1363: document width 1348. |
| Hero | Inspected desktop, 320, 390 and 768; two-line headline, visible primary action, distinct subject/text layers. |
| Matter selection | Keyboard activation changes panel copy and pressed state. Dialog matter selection synchronizes with page. |
| Preparation modal | Checklist controls change count; Escape restores trigger; explicit Tab and Shift+Tab wrap between Close and View text version. Mobile viewport supports scrolling. |
| Mobile menu | Opens with aria-expanded=true; Escape closes/restores focus; Questions anchor closes menu and navigates. |
| FAQ | Native details opened by Enter; DOM confirms open=true and answer visible. |
| Pause | Toggle updates pressed=true and paused label; GSAP/Lenis cleanup and static artwork used. |
| Console | Final observed errors belong to browser-extension metadata collection. Intermediate missing-module HMR errors resolved after all files existed and a reload. |
| Visual evidence | `verification/redesign-desktop.jpg`, `verification/redesign-mobile.jpg`; saved normal viewport bytes, mobile screenshot cropped to its actual iframe. |

## Improvements verified in this pass

- Product/swatches/cart vocabulary and repeated decorative object collection removed.
- Copy rewritten around record, situation, questions, preparation and next steps.
- One semantic H1 and restrained editorial scale; body copy no longer occupies detached floating strips.
- Deep background continues beneath content instead of alternating to ecommerce ivory.
- Native modal, usable menu, real accordion and honest downloaded checklist preserve practical functionality.
- Unsupported/reduced-motion devices do not load the heavy 3D renderer module; photograph remains visible on renderer failure.
- Historical store CSS/model/asset and 51 unused packages removed.

## Limits and outstanding work

This browser lacks usable WebGL2; it verifies the image fallback, not live GPU pixels. Device frame-time, memory, touch behavior and Lighthouse/Core Web Vitals were not measured. No production deployment was made in this pass. Verified firm/attorney details, jurisdiction and secure consultation routing must be provided before launch as a real firm. A fictional photograph and polished typography are not evidence of professional credentials.

Full-page and clipped screenshot calls timed out; normal viewport captures worked. Blob/data-URI download capture timed out; normal static file download succeeded after the implementation changed. These failures are recorded in README to avoid repeating them.
