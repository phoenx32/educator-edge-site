# Use Cases pages on /bootcamp, webinar cleanup, and cross-links

## 1. New pages: `/bootcamp/use-cases` and `/bootcamp/use-cases/:slug`

Port the full Use Cases experience from the "Backup AI for Adult Ed Administrators" project, restyled to this site's theme (same nav, footer, spine/section rhythm, type scale, and color tokens as `/bootcamp`).

**Index page** — a heading, short intro, and four cards, one per use case:

| Category | Use case |
| --- | --- |
| Enrollment | Recruitment, Intake, and Student Onboarding |
| Career Pathways | Career pathway alignment with local labor market data |
| Data Analysis | Attendance and student persistence analysis |
| Instruction | A simple, mobile-friendly class home |

Each card keeps its category tag, description, and AI-skill chips, and links to its detail page.

**Detail pages** — all four, with all their content:
- Header with category tag, title, subtitle, and a back link to all use cases
- Narrative sections: the situation, the challenge, what they built, how AI helped, what changed / how the results can be used, what they learned
- "Explore the pathway / solution" step lists with bullets, notices, and action buttons
- External links that open in new tabs: the sample class site, the Madion adult school site, the Google Career Dreamer tool, and the published Apps Script dashboard
- The PDF report in an in-page modal viewer plus an "open in new tab" link, and the career-pathway infographic in an image modal
- The collapsible research prompt panel with copy-to-clipboard
- The Data Analysis workbook viewer: original workbook, AI analysis, and survey-questions views, including the spreadsheet grids and the bar/line charts

## 2. Bootcamp page: remove the past webinar

The Sep 2, 2026 informational webinar has passed, so every mention comes out:
- Hero: the "Or attend the free informational webinar" link and the date/time line
- The standalone webinar band between the schedule and pricing (whole section removed)
- Pricing card: webinar link and date/time next to the register button
- FAQ: the webinar link, date/time, and the "bring your question to the free informational webinar" phrasing (rewritten to point to email only)
- Schedule: the Sep 2 webinar marker row
- The webinar constants and `WebinarLink` component

## 3. "See sample projects" callout in section 01

In "01 / Areas of focus", below the intro copy and above the eight-item grid, add a callout linking to `/bootcamp/use-cases` — opens in a new tab. Styled as a bordered, low-key panel consistent with the page (short line of context plus a "See sample projects" link with an arrow).

## 4. Back-to-bootcamp box on the use-cases pages

At the bottom of the use-cases pages, a compact bordered box in the style of the attached reference: a small eyebrow, a short heading and sentence about the AI Leadership Academy, and a primary button back to `/bootcamp`, with the dates line. Placed on the index page and at the foot of each detail page.

## Technical notes

- Routes registered in `src/App.tsx` as `/bootcamp/use-cases` and `/bootcamp/use-cases/:slug` (React Router; the source project used TanStack Router, so route definitions and `Link` usage get rewritten).
- Copy over `case-studies.json`, `attendance-before.json`, `attendance-after.json`, and `student-survey.json` into `src/data/`, plus the static-data, use-case metadata, and text helpers into `src/lib/`.
- Port `WorkbookViewer` (recharts) and the use-case tag/dot components; recharts is already a dependency here.
- Category tint tokens (`uc-en`, `uc-cp`, `uc-da`, `uc-in`) and the `surface`/`highlight` tokens the source uses are added to `src/index.css` and `tailwind.config.ts` as semantic tokens, tuned to this site's palette. No hardcoded color utilities.
- The PDF report and the infographic are project-scoped assets in the source project: they get downloaded from that project's preview origin and re-uploaded here, then referenced from the case-study data. If the download fails I will report it rather than leave a broken link.
- Both new pages get their own titles/descriptions and, like `/bootcamp`, `noindex, nofollow`.
