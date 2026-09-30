# Design QA — Law Your Way

Status: passed for the inspected desktop and mobile fallback experience; live GPU rendering remains unverified.

## Reference and comparison

User-owned source: FØR YOU Audio, deployed from `zoeyzb/aegis-trading` commit `3d642fcbd76ddd26c6b7fc58e26dc9a5fcca2e03`. Source section order, CSS geometry, type pairing, alternating black/ivory surfaces, selectors, object stages, card collection, grid, manifesto and closing drawer are retained. Product semantics are deliberately replaced by criminal-defense content.

Desktop comparison: `verification/source-hero.jpg`, `verification/hero.jpg`, and `verification/comparison.jpg` at 1363 × 926. Mobile comparison: `verification/mobile-comparison.jpg`, using two actual 390 × 844 iframe viewports (375px content width after the scrollbar), not a scaled desktop screenshot. Test-only harness retained in verification and excluded from production public assets.

## Verified

- Production Vite build passes.
- Desktop and mobile have no horizontal overflow at the inspected widths.
- Hero/legal heading stays clear of the control card; courthouse proportions follow the source object stage.
- Process courthouse is separated from its readout on desktop and mobile.
- Matter selection updates both selectors and the drawer; selected control retains keyboard focus.
- Review/Strategy/Representation controls update the process readout.
- Header anchors navigate to their sections; persistent particles span the page.
- Preparation drawer opens, contains the three native checklist controls, and shows their count. Download produces the local preparation brief and a visible status.
- Escape closes the drawer and restores focus. Tab from the final download control wraps to Close; mobile panel and download control fit within the viewport.
- Motion pause toggles its pressed state. Reduced-motion support and no-WebGL artwork fallback are implemented.
- No invented law-firm credentials, results, pricing, guarantees or intake submission. Demonstration identity is disclosed.

## Fixes from review

Longer legal hero text initially crowded the card; its second line and object proportions were adjusted. Process artwork initially approached the readout; a bounded core height now preserves separation. Matter controls initially remounted on selection; the selector is now a stable component. Development hot reload now reuses the React root.

## Limitations

The cloud browser lacks WebGL2, so it exercised the generated artwork fallback. The original live R3F model compiles, but lighting, pointer rotation and exploded layers need verification on a GPU-enabled device. This is not a performance audit across devices, a pixel-identical promise, or a verified real firm's live intake. No production deployment was made during this task. Real firm details and a secure contact destination are needed before launch.
