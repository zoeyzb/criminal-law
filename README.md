# Law Your Way | Criminal Defense

## Current goal and state

Build a premium, credible criminal-defense website with readable content, disciplined dark surfaces, and real preparation interactions. The October 2 request explicitly replaces the September 30 instruction to preserve the headphone-store layout exactly. This README is the canonical project record for future work.

The current frontend has a judicial-interior hero, a person-first approach section, three selectable situations, a practical preparation process, four native FAQ accordions, a closing checklist action, and a transparent footer. The floating courthouse model, product collection, swatches, decorative ticker, oversized manifesto, and alternating ivory sections have been removed. There is no hammer or gavel.

The biggest business blocker is unchanged: verified firm identity, attorneys, jurisdiction, contact destination and a secure intake channel have not been provided. Do not invent those details or describe the checklist as a consultation submission. This is a functioning website concept, not a verified firm or a live legal-service intake.

## Run and build

- `npm ci`
- `npm run dev`
- `npm test`
- `npm run build`
- Vercel framework: Vite. Build: `npm run build`. Output: `dist`. No environment variables required.

`predev`, `pretest` and `prebuild` generate 24 small text checklists from shared content: three situations multiplied by eight checkbox states. Files are public predefined preparation aids containing no user-entered information. The browser downloads the matching file through a normal link; there is also a readable text fallback. Generated files are ignored by git and recreated on build.

## Architecture and working behavior

React 19/Vite 7 is retained; no runtime migration or backend was introduced. There were no APIs, authentication, databases, analytics events or external intake integrations to preserve.

- `src/main.jsx`: page composition, selected matter, checklist state and mobile menu. Legacy `#top`, `#object`, `#materials`, `#collection` anchors remain usable; `#questions` is added.
- `src/content.js`: all situation copy, process explanations, FAQs and checklist labels.
- `src/components/PreparationDialog.jsx`: native modal semantics, explicit keyboard focus containment/restoration, situation selector, checklist, file download and readable fallback. Checklist state persists while the page is open, not across reloads. Nothing is submitted.
- `src/brief.js` and `scripts/generate-checklists.mjs`: one source for the visible/downloaded checklist, including the selected matter and checkbox states.
- `src/components/DepthLayer.jsx`: probes renderer support once, releases the probe context, and lazy-loads the 3D module only on supported non-paused devices.
- `src/DepthScene.jsx`: one original R3F/Three perspective frame scene; restrained pointer/scroll depth, bounded DPR, and rendering suspended outside view. No repeating floating product model.
- `src/useMotion.js`: Lenis and two GSAP hero depth transforms; cleanup and pause/reduced-motion behavior. Text and navigation never pin or scroll sideways.
- `src/criminal.css`: one dark token palette, serif display/system sans, responsive layouts, native controls and a documented layer scale. Rear atmosphere, mid-ground judicial subject, foreground accessible content remain separate.

The hero photograph is original generated editorial art of a fictional judicial interior. It does not depict the premises of a real firm. It remains visible during loading, renderer errors, reduced motion and unsupported WebGL. `Motion` provides a restrained hero entry; GSAP owns hero depth, and R3F owns its meshes. No competing libraries animate the same element.

Unused Drei, icon bundles, OGL and maath dependencies were removed. No third-party code was copied during this redesign and no new UI kit was installed.

## Verification and evidence

See `design-qa.md` for the current checks and limitations. Latest screenshots: `verification/redesign-desktop.jpg` and `verification/redesign-mobile.jpg`. Historical September 30 screenshots remain in verification for comparison, not as evidence of the new interface.

Confirmed October 2:

- Production build passes; generated download files are included in `dist`.
- Node content test verifies all 24 situation/checklist combinations.
- Browser inspection at actual iframe widths 320, 390, 768, 1024 and 1440 shows no horizontal overflow. Desktop inspected at 1363px as well.
- Matter content and pressed states update with keyboard selection; modal selection remains synchronized.
- Mobile menu opens, navigates and closes; Escape restores its trigger.
- Modal supports native controls, forward/reverse focus wrapping, Escape dismissal, and focus restoration.
- Browser saved the investigation checklist with only the second checkbox selected; the downloaded file contents were read and matched the selected state.
- FAQ keyboard expansion and motion pause were exercised.

Live GPU pixels, real touch-device performance, Lighthouse, production deployment, real attorney/firm trust signals and a secure intake integration remain unverified or unavailable. Do not turn build success into a GPU or Core Web Vitals claim.

## Decisions, failed attempts and lessons

1. September 30: copied the owner's audio-store presentation CSS and component order from private `zoeyzb/aegis-trading` commit `3d642fcbd76ddd26c6b7fc58e26dc9a5fcca2e03`, under explicit ownership authorization. It compiled and worked mechanically but retained ecommerce semantics and repeated courthouse imagery. The user's October 2 feedback rejected this direction. Original source had no explicit open-source license; owner authorization does not license it to third parties.
2. October 2: rebuild around the visitor's situation and preparation rather than changing labels in a shop. Retain the working frontend stack and local actions; replace the presentation and content structure. A previous subjective 880/1000 rating was too generous and is not an acceptance metric.
3. Generated Blob/data-URI download attempts timed out in this browser. Replace with normal, generated static file links rather than claim that a status message proves a file saved. A matching actual file download subsequently succeeded.
4. An intermediate HMR error occurred while new imports were being written. Fresh reload/build after all modules existed passed; final observed console entries were browser-extension metadata errors, not application errors.
5. Full-page and clipped `screenshot()` calls timed out. Normal `getScreenshot()` worked; saved viewport evidence was used instead. Do not repeat that capture path without new evidence.
6. This cloud browser uses the photograph fallback. Compiling R3F does not verify GPU lighting, pointer motion or frame time. Keep a useful non-GPU experience and test a GPU device separately.
7. Browser clicks during smooth anchor movement can miss the intended control. Confirm the resulting state and use keyboard interaction for verification rather than count the tool call as success.

## Source/workflow influences

- Understand-Anything style codebase-understanding skill: inspect entry points, dependencies and integration boundaries before edits. No source code from that repository was merged.
- GitHub Spec Kit style planning: explicit goal version, acceptance criteria, architecture and tasks in `tasks/redesign-2026-10-02.md`. No generated Spec Kit runtime or repository was copied.
- addyosmani/agent-skills frontend and production workflow: semantic controls, responsive review, preserved working functions and evidence-based verification.
- Installed Taste workflow: audit consumer-template patterns, remove the product grid/numbered decoration, use consistent color and shape roles and restrained motion. Native CSS implementation; no copied landing-page blocks.
- Installed Three.js/R3F guides: render-loop ownership, lazy loading, unsupported-renderer fallback, resource cleanup and honest GPU verification boundaries. Scene geometry is original.
- Persistent project operator: this current-state record, failed-attempt history, explicit blockers and next action.

## Next action and boundaries

Inspect the pushed commit/deployment before further edits. Verify the R3F layer on a GPU-enabled desktop and one real mobile device. Then add supplied, verified firm information and an approved secure consultation destination. Preserve accessible navigation/checklist behavior. Do not fabricate team members, wins, testimonials, contact addresses or production test results.

Code publication to `zoeyzb/criminal-law/main` is authorized. Do not modify `zoeyzb/law` or `zoeyzb/aegis-trading`. No production deployment is claimed for this redesign.
