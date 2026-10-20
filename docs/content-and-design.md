# Coder Army content and design notes

Source: https://coderarmy.in/, reviewed in Chrome on October 20, 2026.

## Copy direction

Diagnosis B: the original site has a recognizable community-led voice, centered on “Be a part of our Future,” coding skills, and Rohit Negi and Aditya Tandon. Preserve that argument and vocabulary while replacing broad promises with course subjects, learning formats, and verified instructor backgrounds.

The primary action is choosing a paid course. YouTube and five free courses provide a starting point for students who want to understand the teaching before enrolling. Existing course names, thumbnails, instructors, lecture counts, links, and membership terms remain anchored to the original site. The interactive learning demos illustrate the experience; their sample code and conversations are examples rather than student testimonials.

## Locked copy choices

- Hero: “Be a part of our future.” Keeps the original community invitation. Alternatives considered: “Learn to code with Coder Army” (clear but loses the original invitation), and “Learn, build, and grow with Coder Army” (retained in the final CTA).
- Courses: “Build the skills for your next role.” The adjacent paragraph names DSA, development, system design, and DevOps, making the offer concrete. Alternative: “Explore our premium courses” (retained as the section label).
- Free learning: “Start with a free course.” The supporting copy names all five paths. Alternative: “What will you learn?” was less explicit about the free offer.
- Mentors: “Learn with Rohit Negi and Aditya Tandon.” Names the actual teachers rather than relying on generic expertise claims.
- Membership: “Pay once. Keep learning with Strike.” The price, access period, and plan inclusions sit together. Alternatives considered: “Our membership” (retained as the label) and “Choose your Strike membership” (functional, but the one-time payment is more useful here).

Career outcomes are not guaranteed. No invented placement rates, student quotes, or unsupported statistics were added. The original's 202K+ students, two instructors, six premium courses, and five free courses are reflected explicitly.

## Membership data

| Duration | Strike Plus | Strike Ultra |
| --- | --- | --- |
| 2 years | ₹9,999 | ₹11,999 |
| 3 years | ₹11,999 | ₹12,999 |
| 4 years | ₹12,499 | ₹13,499 |

Prices and enrollment query parameters were checked against the original landing page's duration selectors. Strike remains the source for final current pricing and enrollment.

## Visual system

Cobalt #2563EB is the primary light-theme accent; #7AA7FF is the corresponding dark-theme text accent. Warm orange remains a small secondary highlight. Existing course artwork retains its original colors.

Satoshi is the reading face. Bricolage Grotesque gives headings their character and distinguishes the page from the controls. Geist remains the compact UI face for navigation, actions, filters, and course metadata. Code samples retain a monospace font.

Buttons use the supplied reference's raised construction: a lighter top, cobalt base, thin outer border, inset highlights, and a short press response. Secondary actions use the same construction in neutral tones. Text-only titles and navigation remain legible links rather than being turned into competing primary actions.

The viewport-sized binary field and two slow blue glows continue behind the full landing page and its outer margins. Content surfaces quiet the pattern. CSS motion pauses when the document is hidden and is disabled for reduced-motion preferences.

Font sources: Satoshi via Fontshare (https://www.fontshare.com/fonts/satoshi), Bricolage Grotesque via Google Fonts (https://fonts.google.com/specimen/Bricolage+Grotesque), and the existing locally hosted Geist files. Satoshi and Bricolage assets are locally hosted in src/assets.

## Bento and reference integration

The learning benefits use the ToDesktop feature section's neutral rounded containers, layered raised illustrations, generous scene area, centered captions, and quiet dividers. All four illustrations are original React/CSS/SVG implementations for understanding concepts, practice, mentorship, and career preparation. Their animations run once when each scene appears and have explicit replay controls. https://www.todesktop.com/ was inspected in Chrome.

Both requested Tailark CLI commands were attempted with Bun:

- `bunx --bun shadcn@latest add @tailark/logo-cloud-2 --yes`
- `bunx --bun shadcn@latest add @tailark/hero-section-9 --yes`

Both returned an authorization error requiring a plan that includes Blocks. The paid source was not imported. The public block previews at https://tailark.com/view/hero-section-9?theme=light and https://tailark.com/view/logo-cloud-2?theme=light were inspected instead. The resulting original implementation uses a centered headline and actions, a framed interactive product preview, and a clean row of actual instructor-experience logos. It does not imply that the logo organizations are customers or endorse the courses.

The page ground is now true #000 in dark mode and #fff in light mode, with a very faint binary field and no colored ambient glow. The Ultra CTA adapts the supplied white button reference with a thin colored bottom edge and a soft blue glow. Its access is explicitly limited to the selected membership duration.

## YouTube membership

Public channel membership page verified in Chrome: https://www.youtube.com/@CoderArmy9/membership . Four real member-only lesson thumbnails are shown, with their actual lesson links:

- Bloom Filter in System Design: https://www.youtube.com/watch?v=ZJAOMFct_XA
- Consistent Hashing in System Design: https://www.youtube.com/watch?v=hqQpKjBpYPY
- Production-Style API Gateway in Spring Boot: https://www.youtube.com/watch?v=ZxCcYHL96x8
- Production-Grade Full Stack Project with Spring Boot: https://www.youtube.com/watch?v=-Wv5uCu2PIg

Membership access remains on YouTube. No channel subscription was purchased, and no member-only video was accessed. Only publicly visible titles, thumbnails, and durations were used. The channel subscription is labeled separately from Strike memberships.

## Technical section

The user's ink-orbit feature design document was adapted into `src/components/ui/ink-orbit-features.tsx`. The bracketed panels and live diagram aesthetic were retained while generic SaaS collaboration, report counters, and forecast claims were replaced with platform-relevant educational examples:

- Request trace from client to API gateway, service, cache, and database, with keyboard-accessible nodes and controlled playback. The phone diagram uses a readable vertical layout.
- A consistent-hashing ring: nodes A=30°, B=150°, C=270°; adding D=210° moves key 2 at 180° from C to D. Other illustrated keys keep their destinations.
- A 12-bit Bloom filter using two transparent toy hashes. Stored keys are user:42 and user:24; user:99 is definitely absent, while user:33 demonstrates a false positive. These examples teach the concepts and do not claim measured production performance.

## Real student posts

The testimonial design document was adapted into `src/components/ui/testimonial.tsx` for this Bun/React application. Native images and dialogs replace Next.js-only dependencies. The asymmetric three-column design uses seven real public posts verified on X on October 20, 2026. No sample names, stock portraits, invented job titles, or template quotes were used.

Each excerpt links to its original post and opens an authentic screenshot. Screenshots were captured in Chrome and cropped to the public author/post content, excluding unrelated page chrome and account navigation. The crops were not regenerated or rewritten. Public avatar images were downloaded from the respective original posts. Excerpts preserve the authors' wording with whitespace normalized, and each excerpt is under 25 words.

- Gopal jha: https://x.com/Gopaljha04/status/1979919555901190365
- Rehana Akter: https://x.com/Rehana_27/status/2050489919848747368
- Shubham Mishra: https://x.com/Shubham05689029/status/1968339268495171831
- Priyanka Lakhara: https://x.com/codewithpri/status/1978398377948959099
- Mohanish Lambole: https://x.com/MohanishLambole/status/2024445155693253079
- Abhishek Rai: https://x.com/AbhishekRai1972/status/1973379557202747825
- Sumit Mishra: https://x.com/Sumit0431/status/2105881435831967807

Capture metadata is stored in `docs/review-evidence.json`; screenshots and avatars are in `src/assets/reviews`. These are selected positive public learning experiences, not a comprehensive or statistically representative review survey.
