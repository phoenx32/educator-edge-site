# Bootcamp page: publish unlisted, plus a design and language pass

## 1. Publishing at /bootcamp, unlisted

The page already lives at `/bootcamp` and is not linked from the main site navigation or footer, so publishing the project makes it reachable only by direct URL. No one browsing the homepage will find it.

Two things to confirm before publishing:

- Project settings currently list no custom domain for this project — the published site is `communitylearningpartners.lovable.app`. If `communitylearningpartners.com` should serve it, the domain needs to be connected in Project settings > Domains (root + `www`), which is a settings step, not a code step.
- Publishing pushes the whole site live, including any other pending changes.

Also added: `noindex` on the bootcamp page only, so it stays out of search results while linked-only. The rest of the site keeps normal indexing.

## 2. Continuous Improvement Cycle, reworked for this course

The homepage's animated six-step cycle (Build, Try, Observe, Reflect, Revise, Iterate) becomes the visual anchor of "One project, start to finish" — rebuilt as a course-specific component rather than reused as-is:

- Steps relabeled to what an administrator actually does in the ten weeks: Choose a priority, Draft with AI, Try it with staff or learners, Listen to what happened, Revise, Put it into practice.
- Each step carries a short, concrete caption in plain terms (for example, "Show the draft intake form to two intake staff and watch where they hesitate").
- Same slow-rotation motion, but toned to the bootcamp page's quieter palette: one accent color, hairline rings, no purple/green secondary ring.
- Placed beside the section text on desktop, above it on mobile. The current numbered four-step row is removed — the cycle replaces it.

## 3. Underline spacing

The `Underline` component's stroke sits too tight at smaller type sizes because the offset is a fixed `-bottom-1`. Change to an em-relative offset and slightly thinner stroke so it scales with the text, then check hero (large), section headings (medium), and inline body use at the three sizes in use.

## 4. Language pass

Replace vague headline copy with specific, plainly worded lines that name the work adult education administrators do. Examples of the direction:

- "What changes for the people in your program" becomes something naming the actual change, e.g. "By December, one thing in your program works differently."
- Outcome headlines get concrete anchors: intake and orientation, follow-up with students who stop attending, the reports you pull for your funder, the hours spent rewriting the same documents.
- Remove remaining idiom and filler ("walk through the door", "get hours back", "eats a workday", "yours to fit into the week").
- Keep sentences short and declarative, no exclamation, no hype about AI.

## 5. Project priorities framed as examples

The eight-item list currently reads as a menu of the only options. It becomes: one sentence stating you choose your own project based on what is in front of you locally, the list presented explicitly as examples other administrators have chosen, and a closing line inviting a project outside the list. Visually, lighter treatment (comma-separated or a loose inline list) so it reads as illustrative rather than a form to select from.

## 6. Schedule: weekly cadence, not a daily calendar

The three-month day grid goes away. Replaced with a horizontal ten-week track:

- Weeks 1 through 10 as ticks along a single line, with the date of each week's Monday under the tick, grouped visually by month.
- Markers only where something happens: info webinar (before Week 1, styled as a pre-course marker), course opens, midpoint live session, feedback window spanning two weeks as a bar rather than a point, closing session.
- Between-marker weeks carry a light label for the rhythm ("about an hour, on your own time").
- Stacks to a vertical timeline on mobile rather than compressing.

## 7. Overall design audit

A pass over the full page for a course-registration feel closer to well-made online course pages: a persistent compact enrollment bar on scroll (course title, price, Register) so the CTA is always one click away; consistent vertical rhythm between sections; a short at-a-glance course facts block (duration, effort, format, level, certificate) near the top; tightened heading scale so section headings do not compete with the H1; and reduced repetition of the Register button where two appear close together.

## Technical notes

- New `BootcampCycle.tsx` (course-specific fork of `DesignCycle`, sharing the existing rotate animations from Tailwind config). `DesignCycle.tsx` on the homepage is untouched.
- `BootcampSchedule.tsx` rewritten around a week-track model; the `MonthGrid` code is removed.
- `Underline.tsx` offset changed to em-based.
- New `BootcampStickyCta.tsx`, mounted in `Bootcamp.tsx`, appearing after the hero scrolls out.
- Copy edits across `BootcampHero`, `BootcampOutcomes`, `BootcampProject`, `BootcampIncludes`, `BootcampSchedule`, `BootcampWebinar`, `BootcampPricing`, `BootcampFaq`.
- Bootcamp page adds a `robots` `noindex` meta in its existing `useEffect`, cleaned up on unmount.
- Publish happens after the edits, on your go-ahead.
