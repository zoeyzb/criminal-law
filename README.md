# Law Your Way — Criminal Defense

Criminal-defense adaptation of the user's FØR YOU Audio site at https://aegis-trading-o6ct.vercel.app/. Source visual/component architecture is retained: fixed nav, oversized three-line hero, object and control card, ivory editorial section, exploded architecture section, matter selector, process selector/readout, three cards, questions grid, manifesto and preparation drawer.

## Run

`npm ci`, `npm run dev`, `npm run build`. Vercel: Vite framework, build `npm run build`, output `dist`.

## What was reused and rewritten

- `zoeyzb/aegis-trading` at `3d642fcbd76ddd26c6b7fc58e26dc9a5fcca2e03`: source `frontend/app/noir.css` reused with the owner's permission. Component structure, section order, responsive breakpoints and presentation behavior adapted from `frontend/components/noir-atelier.tsx`.
- Original source is private and has no explicit open-source license. Reuse here is authorized by the owner; this README does not grant a license to others.
- Product/shopping semantics rewritten as criminal-defense matter selection, process stages and personal preparation. No prices, guarantees, invented attorneys, outcomes, or simulated consultation submissions.
- Original generated courthouse art replaces headphones. `Courthouse.jsx` adds an original R3F/Three.js model with Drei Float and scroll-driven exploded layers; artwork remains a no-WebGL and reduced-motion fallback. No gavel or hammer.
- GSAP ScrollTrigger and Lenis provide restrained scroll depth and zoom. Motion animates the process readout and drawer. Source background particles retained with rendering cleanup and reduced-motion behavior.
- addyosmani/agent-skills frontend workflow influenced semantic controls, focus trapping, reduced motion and verification. Specification in `tasks/plan.md`. No unrelated reference repositories or duplicate UI kits merged.

The frontend is isolated in React/Vite. The source's unrelated trading/database/Vinext infrastructure was not copied; visual and component architecture is preserved, but this is not an exact copy of that server runtime.

## Functional scope

Matter and stage selectors update content. The drawer supports keyboard focus, Escape, three preparation checkboxes, and a downloadable text brief. Everything stays on the device. A live consultation intake is not configured: real attorney identity, jurisdiction, verified contact destination, privacy terms and secure handling must be supplied before use by a firm.

Local dependencies are pinned by the lockfile. Generated art is local, not hotlinked. Build and browser verification notes are in `design-qa.md`.
