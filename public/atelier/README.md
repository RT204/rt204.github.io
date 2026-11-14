# Komorebi / portfolio B

A disposable, self-contained design study inspired by the supplied sunlit Japanese café reference and Hatsune Miku. The original React portfolio stays at `/`; this alternative lives at `/atelier/` (including the trailing slash).

## Compare

- **A:** `/` — the existing portfolio.
- **B:** `/atelier/` — the café atelier experiment.
- Use the A/B switch at the top of B to return to A.
- Locally, run the existing Vite development server and visit `http://localhost:5173/atelier/`.

This is a manual design comparison, not a statistical experiment. It adds no visitor assignment, cookies, analytics, or tracking. Motion and lighting choices are stored only in the visitor's local browser. Sound starts only after an explicit click and pauses in background tabs.

## What is in this folder

- `index.html`, `style.css`, `atelier.js`: the complete standalone design; no additional application dependencies.
- `assets/`: optimized generated WebP artwork, existing portfolio project photos, and a small SVG favicon.
- `ART-DIRECTION.md`: the original prompts and asset provenance.

The scene uses independent character, hair, background, sunlight, shadow, leaf, and dust layers, with pointer parallax and breathing/sway animation. It is a layered web animation, not a Live2D Cubism model. Motion follows the device's reduced motion preference and can be paused. The page includes working project filters, accessible native project dialogs, expandable field notes, afternoon/golden-hour lighting, and opt-in synthesized ambience.

Project descriptions reuse the existing portfolio's information. No contact details were invented: external contact links use the existing public GitHub profile.

## Remove

Delete only `public/atelier/`, commit, and push. GitHub Pages will remove the experiment on the next deployment. No changes to the original portfolio need to be reversed.

Vite copies `public/` into the normal production build, so the existing GitHub Pages workflow publishes this directory automatically. The experiment does not alter the original app's routes, stylesheet, or dependency lockfile.
