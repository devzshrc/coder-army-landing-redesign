# Coder Army

A course discovery and sales landing page with cobalt accents and Satoshi, Bricolage Grotesque, and Geist typography, built with Bun, React 19, TypeScript, and CSS. All fonts are locally hosted. Instructor images come from the existing Coder Army website.

## Run

```sh
bun install
bun run dev
```

Open http://localhost:3000. If that port is occupied, use `PORT=3017 bun run dev`.

```sh
bun run typecheck
bun run build
```

## Design and behavior

The page leads from a split hero and an interactive learning experience to course discovery, learning approach, mentors, free lessons, memberships, and FAQs. Course filters and curriculum dialogs are local interactions; enrollment, payment, and authentication use the existing Strike platform. The suggested starting points section includes all five free courses from the original landing page, with direct course links and an additional YouTube entry point. The hero demonstrates a pointer-scrubbable code walkthrough and tree visualization, a customizable project preview, and sample mentoring questions. These are illustrative learning demos, not an LMS backend or a general-purpose code execution engine.

The Tailark Hero 7 registry command requires an authenticated paid plan. This implementation uses original code inspired by its publicly documented composition: https://tailark.com/blog/shadcn-hero-section-block-seven. No paid source was imported.

Motion follows Emil Kowalski's design engineering and animation guidance: https://github.com/emilkowalski/skills. CSS handles brief button feedback, one-time entrance and scroll reveals, and native dialog entry. Reduced-motion preferences are supported. Curriculum dialogs use native modal focus behavior and Escape dismissal; experience tabs support arrow keys, Home, and End. The walkthrough supports pointer scrubbing, playback, reset, and an accessible range input. Its animation frame work is bounded to interaction updates; reduced motion disables scrambling.

Course data and curriculum summaries live in `src/lib/courses.ts`. Membership prices and course destinations were taken from https://coderarmy.in on October 20, 2026. Revalidate those on Strike before launching the redesign publicly.

## Asset sources

- Coder Army wordmark, favicon, instructor photography, and social icons: original coderarmy.in assets.
- All eleven course thumbnails: original landing page artwork from coderarmy.in and its CloudFront course CDN, retrieved October 20, 2026. Optimized JPEG copies preserve the entire artwork without cropping.
- The premium catalog shows all six courses by default in the original order; category filters remain available.
- Uber vector: the original Coder Army website’s Uber SVG.
- Ola: the original Ola Cabs wordmark, archived at https://commons.wikimedia.org/wiki/File:Ola_Cabs_logo.svg (original olacabs.com URL now returns 404).
- Oxyzo: the current logo served by https://www.oxyzo.in.
- IIT Guwahati emblem: https://iitg.ac.in/img/iitgfooter.png.
- Interaction reference: https://x.com/emilkowalski/status/2112146246299259017. Adapted into an educational code reveal, alongside a step-by-step visualizer.

The hero tour cycles through one feature every 11 seconds while visible. It pauses on content hover, stops on user interaction or keyboard focus, and provides explicit pause/resume controls. Background motion pauses while the document is hidden; automatic playback is disabled for reduced-motion preferences. The surrounding mockup uses Safari-inspired browser furniture. Hero and footer social icons are original brand vectors from Coder Army. The binary background is original SVG artwork inspired by the code field at https://code.visualstudio.com/.

The header theme toggle supports light and dark palettes across the landing page, course cards, interactive demos, and dialogs. The initial theme follows the system preference; an explicit choice is stored locally and restored before the app renders to prevent a light-theme flash. System changes are followed until a choice is saved, and theme changes sync between tabs. The toggle is keyboard accessible and respects reduced-motion preferences.

The current visual direction uses cobalt blue, raised gradient buttons, Satoshi reading text, Bricolage Grotesque headings, and Geist controls. The continuous binary background extends across the full viewport and pauses while the tab is hidden. Source-backed content choices, typography roles, and membership duration prices are documented in `docs/content-and-design.md`.

The landing also includes four ToDesktop-inspired interactive learning cards, a YouTube channel membership section with four original member-only thumbnails, system design examples, and seven verified X testimonials with native screenshot dialogs. Review sources and capture metadata are in `docs/review-evidence.json`. Tailark Hero 9 and Logo Cloud 2 require authenticated Blocks access; both commands were attempted, and original implementations were created from their public previews. See `docs/content-and-design.md` for details.
