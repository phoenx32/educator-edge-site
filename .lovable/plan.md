# Making the bootcamp page feel connected

The page currently reads as a stack of independent blocks: every section is a full-width band separated by a hairline rule, with the same left-aligned heading and the same vertical padding. Nothing carries the eye from one to the next, so the gap after the hero feels like a dead zone.

No images, no AI illustrations. The fix is structural and typographic.

## 1. A continuous spine down the page

Introduce a thin vertical rule that runs down the left edge of the content column from the end of the hero to the start of the FAQ, with a small marker where each section begins. It echoes the improvement-cycle language already in the project section and gives the eye an unbroken line to follow.

- Rule is `border-border/50`, 1px, hidden below `md` (mobile keeps the current flow).
- Each section start gets a small dot or short tick on the spine, in primary at low opacity.
- On mobile, the same idea shows up as a short 40px accent bar above each section heading instead.

## 2. Numbered, labelled section headers

Give each major section a quiet eyebrow label above its H2, in the same small uppercase tracking style already used in the hero (`Dates`, `Presented by`) and in the outcomes cards:

```text
01 / THE OUTCOMES        Applied to the work adult education programs...
02 / YOUR PROJECT        One project, chosen by you...
03 / WHAT IS INCLUDED
04 / SCHEDULE
05 / COST
06 / FACILITATORS
```

This reuses an existing type treatment rather than adding a new one, and it tells the reader where they are in a sequence — which is exactly what course registration pages do well.

## 3. Fix the hero-to-outcomes handoff specifically

Right now the facts row and logo lockup end, then a hard border, then a new heading. Add:

- A short bridging line at the end of the hero block, set in the muted eyebrow style, that names what follows (one sentence, e.g. pointing to the outcomes below) plus a small downward chevron anchor linking to `#outcomes`.
- Remove the hard `border-t` between hero and outcomes; let the spine and the eyebrow carry the transition instead.

## 4. Alternate the rhythm instead of repeating it

Currently: white, white, muted, white, muted, white… but every section is otherwise identical in shape. Vary the internal composition so consecutive sections don't mirror each other:

- Outcomes: keep the two-column grid, but let the heading sit in a narrower measure with the intro paragraph beside it rather than under it.
- What is included: pull the icon grid into three columns at `md` and give each item a hairline top rule so the grid reads as a table of contents rather than floating text.
- Webinar band: tighten to a single centred line so it reads as a divider between the schedule and cost, not another full section.

## 5. Section-to-section breathing

Replace the uniform `py-20 md:py-28` with a two-step scale: primary sections keep the large padding, connective bands (webinar, pricing footnote) drop to a smaller step. Uneven spacing signals hierarchy; even spacing signals a list.

## Technical notes

- New shared component `src/components/bootcamp/SectionSpine.tsx` (or a `SectionShell` wrapper) rendering the eyebrow label, the spine marker, and consistent padding, so each section file just passes `index`, `label`, and children.
- Spine drawn with a `before:` pseudo-element on the wrapper so no extra DOM per section.
- All colours from existing tokens (`border`, `primary`, `muted-foreground`). No new tokens, no images, no new dependencies.
- Files touched: `Bootcamp.tsx` (wrapper), plus header/padding edits in `BootcampHero`, `BootcampOutcomes`, `BootcampProject`, `BootcampIncludes`, `BootcampSchedule`, `BootcampWebinar`, `BootcampPricing`, `BootcampFacilitators`, `BootcampFaq`.
- Verified against desktop and mobile viewports with screenshots before handing back.
