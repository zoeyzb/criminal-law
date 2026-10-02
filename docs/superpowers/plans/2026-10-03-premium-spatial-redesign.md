# Premium Spatial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the existing Law Your Way landing page into a cinematic, layered, spatial criminal-defense experience while preserving working interactions and accessibility.

**Architecture:** Keep the current React/Vite app and existing functional checklist. Split the large page into focused visual components; use R3F/Three for environmental depth, GSAP/ScrollTrigger for scroll choreography, Motion for UI transitions, and Lenis for smooth scrolling. Preserve a complete static/reduced-motion fallback.

**Tech Stack:** React 19, Vite 7, Three.js, @react-three/fiber, GSAP, ScrollTrigger, Lenis, Motion, CSS.

**Spec:** `docs/superpowers/specs/2026-10-03-premium-spatial-redesign-design.md`

## Global Constraints

- No fabricated attorneys, results, testimonials, addresses, jurisdictions, or live-intake claims.
- One animation owner per element.
- Core content works without WebGL and with reduced motion.
- Mobile must not depend on hover or pinned desktop scenes.
- Preserve checklist/modal behavior.
- Avoid wholesale UI-library installs.

## Review Focus

- Reduced-motion users must receive complete readable content.
- 320–390px widths must not horizontally overflow.
- WebGL failure must leave the hero usable.
- Keyboard stage selection and FAQ interaction must remain functional.
- Scroll choreography must not trap or block navigation.

---

### Task 1: Refactor page composition and copy

**Files:**
- Modify: `src/main.jsx`
- Modify: `src/content.js`
- Create: `src/components/SiteHeader.jsx`
- Create: `src/components/AmbientBackdrop.jsx`

- [ ] Extract header/background responsibilities.
- [ ] Rewrite weak/generic section copy into concise criminal-defense-specific copy.
- [ ] Preserve existing IDs/anchors where compatibility matters.
- [ ] Run tests/build.

### Task 2: Cinematic hero and 3D depth

**Files:**
- Modify: `src/DepthScene.jsx`
- Modify: `src/components/DepthLayer.jsx`
- Create: `src/components/CinematicHero.jsx`
- Modify: `src/useMotion.js`

- [ ] Build three perceptible hero planes.
- [ ] Add staged entrance and restrained pointer/scroll depth.
- [ ] Keep lazy WebGL fallback and bounded DPR.
- [ ] Verify reduced-motion fallback.

### Task 3: Spatial principles and case-stage deck

**Files:**
- Create: `src/components/PrinciplesSequence.jsx`
- Create: `src/components/CaseStageDeck.jsx`
- Modify: `src/main.jsx`
- Modify: `src/criminal.css`

- [ ] Replace static two-column principles block with three spatial beats.
- [ ] Replace menu/document layout with depth card deck.
- [ ] Preserve keyboard semantics and stage state.

### Task 4: Preparation narrative and editorial FAQ

**Files:**
- Create: `src/components/PreparationSequence.jsx`
- Create: `src/components/EditorialFaq.jsx`
- Modify: `src/useMotion.js`
- Modify: `src/criminal.css`

- [ ] Add scroll-led 1/2/3 preparation choreography.
- [ ] Keep mobile unpinned.
- [ ] Restyle native FAQ details as editorial foreground panels.

### Task 5: Material system, responsive polish, verification

**Files:**
- Modify: `src/criminal.css`
- Modify: `README.md`
- Modify: `design-qa.md`

- [ ] Introduce deep layered palette with restrained bronze/oxblood accents.
- [ ] Add depth-aware borders, lighting, hover/perspective, and section transitions.
- [ ] Verify tests/build and responsive overflow.
- [ ] Record only evidence actually observed.
