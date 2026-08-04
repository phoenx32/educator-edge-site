# AI for Adult Education Administrators Bootcamp — Landing Page

A new standalone page at `/bootcamp`, viewable in Preview only. Nothing is published, and the main site navigation stays unchanged.

## Page structure

1. **Sticky page nav** — compact bar with the bootcamp title, anchor links (Overview, What You Can Build, Experience, Schedule, Cost, FAQ) and a persistent "Register" button. Collapses to a menu on mobile.
2. **Hero** — "Presented by COABE and Community Learning Partners" eyebrow, headline, intro paragraphs, an "At a glance" card with icon rows (dates, ~1 hr/week, online, live sessions, coaching, certificate, $350), primary Register button, and the no-prerequisites supporting line.
3. **Apply AI to a Priority That Matters** — narrative plus a compact icon-chip list of the nine focus areas, closing with the voluntary-participation note.
4. **Build Something Your Program Can Use** — 3-column card grid of the nine project types, each with its own icon and description; a callout for team projects. Register button after the grid.
5. **How the Bootcamp Works** — 4-step numbered process (Choose and Plan, Build, Gather Local Input, Refine and Continue) as a connected vertical/horizontal stepper with numbers and icons.
6. **What the Bootcamp Includes** — feature cards (flexible project work, coaching, three optional live sessions, spotlight talks, resources, peer learning), with the live-session list and Doodle/recording notes.
7. **What Participants Can Explore** — two-column checklist of the ten exploration items plus the responsible-use paragraph in a bordered note.
8. **Who It's For** — role list as badges/list with icons, plus the "no membership, no coding" reassurances.
9. **Individuals and Teams** — short section on team participation and per-participant registration.
10. **Schedule** — timeline with dated milestones (Week of Oct 5, October, Early–Mid November, Late November, Week of Nov 30) and the live-session scheduling note. Register button follows.
11. **Time Commitment and Format** — three-up cards for Duration, Weekly Time, Format, plus a Technology note.
12. **Registration / Cost** — highlighted pricing card: $350, full inclusion list with check icons, payment options, no-discounts and final-sale policy, large Register button.
13. **Certificate of Completion** — requirements list and the note that live attendance is not required.
14. **Participant Experiences** — three stat figures (95% / 90% / 90%) and three quote cards with attribution, plus the source line.
15. **About Community Learning Partners** — org description; Joey Lehrman and Christin Smith bios with styled initial avatars (placeholder professional bios, easy to swap for photos later).
16. **Presented by COABE and CLP** — two logo/description blocks with outbound links. CLP uses the existing brand mark; COABE uses a text/placeholder mark until a logo file is supplied.
17. **FAQ** — accordion (shadcn Accordion) with all questions grouped, contact email at the end.
18. **Final registration section** — closing headline, at-a-glance bullet list, and the full-width "Register for the AI for Adult Education Administrators Bootcamp" button.

Register buttons appear in: sticky nav, hero, after the project grid, after the schedule, in the pricing card, and in the final section — six thoughtful placements.

## Design approach

- Uses existing design tokens only (`primary`, `secondary`, `accent`, `muted`, gradients, shadows) — no hardcoded colors, consistent with the current site.
- Alternating white / `bg-muted/40` section bands per the site's existing zebra rhythm.
- Lucide icons throughout to signal meaning (Target, Users, BarChart3, FileText, GraduationCap, Calendar, Clock, Sparkles, CheckCircle2, etc.).
- Lightweight cards with soft borders and generous whitespace; mobile-first typography scaling with a bold hero H1.
- Semantic HTML, single H1, accessible accordion and anchor navigation, smooth scroll offsets for the sticky bar.

## Technical notes

- New route `/bootcamp` added above the catch-all in `src/App.tsx`.
- New page `src/pages/Bootcamp.tsx` composed of small section components under `src/components/bootcamp/` (BootcampNav, Hero, Projects, Process, Includes, Schedule, Pricing, Testimonials, About, FAQ, FinalCTA) to keep files focused.
- All Register buttons point to a single `REGISTRATION_URL` constant set to a `#` placeholder, so the real link is a one-line change later.
- Page-level `<title>`/meta description set via a small effect on the page for SEO.
- No publish step; review at the preview URL `/bootcamp`.
