# Bootcamp Landing Page — Redesign for Clarity and Outcomes

A full rebuild of `/bootcamp` as a real course landing page: fewer sections, far less text, one visual language, and a clear path to two actions — register for the bootcamp (primary) and register for the free informational webinar (secondary).

## Design direction

- Distinct from the main site: no zebra section striping, no badge pills, no gradient text, no card-in-card stacks.
- Type-led layout. Emphasis comes from a **single-color heading with a hand-drawn style underline** (a thin SVG/`::after` stroke in the brand blue) — never multi-color text.
- One accent color, generous whitespace, hairline rules instead of boxes. Cards used only where a card is genuinely a unit (facilitators, pricing, calendar weeks).
- Icons only where they carry meaning (calendar, coaching, live session), not decoratively on every list item.
- Logos: CLP and COABE added as real assets, proportionally sized (CLP is square/stacked, COABE is wide — so they get different heights, aligned on a common optical baseline). Placed in the nav lockup ("Presented by" line), and again in the facilitator cards next to the person from that org. No logo elsewhere.

## New page structure

1. **Nav** — course title "Artificial Intelligence for Adult Education Administrators", short anchor set (Outcomes, Project, Schedule, Cost, FAQ), Register button.
2. **Hero** — clear course title as the H1, one-line promise, underline-emphasized phrase, dates + weekly time + price as a single quiet meta line. Primary: Register. Secondary text link: "or join the free info webinar". The "No COABE membership…" line is removed.
3. **Outcomes** — replaces "Build something your program can use". Framed around felt human outcomes: more learners enrolling and staying, staff spending less time on repetitive work, faster answers for the people you serve, decisions backed by data you can actually see. Three or four outcome statements with a short supporting line each, no boxes.
4. **Your project** — one tight section. A single sentence of framing, then the priority areas as a plain two-column text list (recruitment, retention, educational gains, staff communication, data use, planning, grants, evaluation). The four-step process becomes a slim horizontal 4-step line: Choose → Build → Test with real people → Refine.
5. **What's included** — six short items, label + one line each, in a clean grid with no borders: project coaching, three optional live sessions (recorded), spotlight talks, tool walkthroughs, peer cohort, certificate.
6. **Schedule** — a lightweight calendar-style view: Oct/Nov month strips with the milestone weeks highlighted (kickoff week of Oct 5, midpoint live session, feedback window, closing week of Nov 30), plus a marker for the pre-cohort informational webinar. Visual, minimal text.
7. **Informational webinar** — a slim horizontal band (not a full section): free, before the cohort starts, see what the bootcamp covers and ask questions. Secondary-style button. Sits between schedule and pricing so it catches the undecided reader without competing with the main CTA.
8. **Cost and registration** — one focused pricing block: $350, what's included as a short checklist, payment options, final-sale note, primary Register button.
9. **About the facilitators** — Joey Lehrman and Christin Smith (CLP) and Sharon Bonney (COABE), each a card with name, role, short bio, and their organization's logo in the card.
10. **FAQ** — accordion, with the edits below.
11. **Close** — course title, dates, one line, Register button, small webinar link.

Removed entirely: "What participants can explore", "Who it's for" badge grid (folded into a single FAQ answer and one hero line), "Individuals and teams", "Time commitment and format", "Certificate of completion", "Develop a resource for a priority you choose", the voluntary-participation paragraph.

## FAQ changes

- Remove "Is the bootcamp required for my job or role?"
- "Is the bootcamp completely online?" → rewritten: the coursework, coaching, and Zoom sessions are online (asynchronous project work plus optional synchronous sessions), and participants are encouraged to pilot their work locally and gather feedback from staff and students — that layer happens in your own program.
- "How does coaching work?" → "course facilitators" instead of "CLP facilitators".
- "What AI tools will be used?" → every tool used is free to use; some offer paid advanced tiers that are not required. Examples: ChatGPT, Claude, NotebookLM, Gemini, and AI agents, chosen to fit cohort projects.
- Add a short "Who is this for?" answer absorbing the removed roles section, and a certificate answer covering the removed section.

## Technical notes

- Logos uploaded via `lovable-assets` and referenced by pointer JSON; existing `src/assets/logos/coabe-logo.png` import replaced with the new COABE asset.
- Underline emphasis implemented as a small reusable `<Underline>` component (single accent color, slightly rotated SVG stroke), used sparingly — hero and two section headings.
- Sections rewritten in place: `BootcampNav`, `BootcampHero`, and new `BootcampOutcomes`, `BootcampProject`, `BootcampIncludes`, `BootcampSchedule`, `BootcampWebinar`, `BootcampPricing`, `BootcampFacilitators`, `BootcampFaq`. `BootcampProgram`, `BootcampLogistics`, `BootcampProof` deleted.
- `RegisterButton` gains a `WEBINAR_URL` sibling; both remain single-constant placeholders to swap when links are ready.
- Page stays at `/bootcamp`, unpublished; title/meta updated to the full course title.
