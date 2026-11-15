# Version C — engineering-led portfolio

Isolated prototype at `/version-c/`. A and B are unchanged. Delete only `public/version-c/` and redeploy to remove C.

## Pages

- `/version-c/`: project-first overview with filters, technical capabilities, experience, education, a small animated companion, and contact links.
- `/version-c/projects/`: all four case studies.
- `/version-c/projects/?project=baler` (also `robots`, `sensor`, `sdvx`): dedicated project pages. Query URLs load correctly on GitHub Pages without SPA fallback rules.
- `/version-c/resume.html`: curated résumé with a print/save-PDF layout. The original WIP PDF is not included in the public directory.

## Requirements and sources

Built from the user's `Requirement.md` and `Ray Toma Resume (F26) BSMS V2 wip.pdf`.

1. **Engineering first:** concise introduction, visual project cards, outcomes, individual responsibilities, and technical details.
2. **Clickable projects:** cards are real links to case-study pages; they support opening in another tab and browser history. The case-study gallery supports expanding drawings and photographs.
3. **Skills based on the résumé:** CAD, FEA, programming, manufacturing equipment, documentation, certification, languages, and education come from the supplied PDF. There are no invented skill levels or proficiency percentages.
4. **A little animation:** a restrained moving CAD illustration and a small independently animated body/hair companion. Motion can be paused and follows system reduced-motion settings. The companion reuses B's generated artwork; no new artwork was generated. This is layered web animation, not a Live2D Cubism rig.

References reviewed:

- [MIT Mechanical Engineering Communication Lab portfolio guide](https://mitcommlab.mit.edu/meche/commkit/portfolio/): organize technical work around visuals, objectives, individual contributions, and results, with focused project pages.
- [Thanh Tran's portfolio](https://thanhvtran.com/) and [project library](https://thanhvtran.com/projects/): clear access to engineering work and browsable project categories. C uses original layout, copy, typography, and existing user-owned project imagery.

Content priority: the supplied résumé is authoritative where it differs from the old website. In particular, C uses **30%**, as listed in the résumé, for the baler improvement. B's older 40% claim is not copied into C. The sensor's $4,000 figure describes the OEM replacement cost, not a verified net savings amount. Team competition outcomes are distinguished from Ray's own technical contribution.

## Implementation

Standalone HTML/CSS/JavaScript; no new application packages. Vite copies this directory through the existing build. Project details are in `data.js`, common interactions in `studio.js`, and all C styling is in `studio.css`. Assets are copied into this directory so it can be removed or moved independently.

No analytics, visitor assignment, autoplay audio, fake endorsements, placeholder contact details, or unpublished source résumé PDF are added. Contact email and LinkedIn come from the supplied résumé.

## Verify locally

Use the existing Vite dev server and visit `http://localhost:5173/version-c/`. Production uses the existing build command and GitHub Pages workflow. On Linux, use native Linux dependencies for verification; do not replace the user's Windows `node_modules/` unnecessarily.

Browser verification covered all filters, card navigation, direct case-study reloads, all gallery image dialogs and keyboard focus restoration, the library and unknown-project state, motion persistence, reduced motion, and résumé printing. Layouts were checked at 320, 390, 768, 1024, and 1440 pixels without horizontal overflow, missing assets, or JavaScript errors.
