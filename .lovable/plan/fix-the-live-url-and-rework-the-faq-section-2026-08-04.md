# Fix the live URL and rework the FAQ section

## 1. Why www.communitylearningpartners.com/bootcamp doesn't work

This project currently has no custom domain attached. Its only live address is
`communitylearningpartners.lovable.app`, so `/bootcamp` resolves there and nowhere else.
If `communitylearningpartners.com` is connected, it is connected to a different Lovable
project (most likely the original marketing site), which is why the domain loads but
`/bootcamp` 404s — that project has no bootcamp route.

This is a settings step, not a code step. Two possible paths, depending on which one you want:

- **Move the domain to this project** — in Project settings > Domains, connect
  `communitylearningpartners.com` and `www.communitylearningpartners.com` here. Ownership
  can be re-verified even when the domain sits on another project. Note: this makes the
  whole site serve from this project, so the homepage would need to be the one in this project.
- **Keep the domain where it is, and put the bootcamp page on that project instead** — the
  bootcamp components move to the project that owns the domain.

Tell me which one, and for option 2 I'll handle the move.

## 2. FAQ section rework

Current state: heading reads "Questions", a bare accordion of 12 items, and a one-line
mailto below. Changes:

- Heading becomes **Frequently asked questions**, matching the sentence-case style used by
  the other section headings ("About the facilitators", "What the course includes").
- Add an intro line under the heading in the same muted style the other sections use, so the
  section is framed rather than dropped in cold.
- Group the 12 questions under three quiet subheads so the eye can scan: **The course**
  (who it's for, experience needed, what you'll create, online/local layers), **Time and
  support** (weekly hours, live sessions, coaching), **Tools, policy, and logistics**
  (AI tools, privacy, certificate, colleagues, cost and cancellation).
- Tighten the accordion styling: more row padding, hairline dividers, question text sized to
  match section body copy.
- Replace the "Something else?" line with a small contact block consistent with the rest of
  the page, plus the register/webinar pair already used at the bottom.
- Update the nav link label from "FAQ" to "Questions" or keep "FAQ" — I'll keep "FAQ" since
  it's shorter for the nav bar; the section heading is the full phrase.

## Technical notes

- `BootcampFaq.tsx`: restructure the `faqs` array into three labelled groups, render one
  `Accordion` per group with a small uppercase group label above it, update the heading and
  the trailing contact block.
- No changes to routing, metadata, or the noindex behaviour on `/bootcamp`.
- Domain work happens in Project settings, not in code.
