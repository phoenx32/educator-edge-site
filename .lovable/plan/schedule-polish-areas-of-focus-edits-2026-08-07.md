# Schedule polish + Areas of focus edits

## 1. Schedule rows: date styling

Drop the "Week 1 / Week 2 …" counter line. Each row's left column becomes a two-line stacked date:

```text
WEEK OF        <- small, uppercase, letter-spaced, muted
Oct 12         <- larger, semibold, foreground
```

Applied identically to all ten rows (and the Sep 17 webinar marker gets a compatible treatment).

## 2. Synchronous / Asynchronous badges

A small pill on the right edge of every row:

- **Synchronous** — meetups and spotlight/working sessions. Primary-tinted pill with a soft glow (tinted background, matching border, subtle ring/shadow in the same hue).
- **Asynchronous** — project-work and wrap-up weeks. Quiet neutral pill, muted text, no glow.

Both use existing semantic tokens (primary / accent / muted) — no new hardcoded colors. Rows stack the badge below the title on narrow screens.

## 3. Further readability pass

- Simplify the legend: since the badges now carry sync/async, the legend reduces to the session-type dots plus the asterisk note.
- Consistent row height and alignment: date column fixed width, dot, title, detail, badge right-aligned.
- Keep dashed accents for not-yet-scheduled live sessions and the existing asterisk footnote unchanged.
- Lighten detail text weight and tighten vertical spacing between months so the calendar reads as one calm list.

## 4. Section 01 — Areas of focus

Goes from seven to **eight** items (four per column):

| Item | Change |
| --- | --- |
| Student outreach and intake | Becomes **Student orientation** — orientation materials and a dashboard view of who is starting, kept focused on students arriving ready for a good first experience. Outreach/intake messaging language removed (moves to the new item). |
| Retention | Unchanged |
| Automation | Unchanged |
| Agents | Unchanged |
| Data and reporting | Rewritten around visualizations and program storytelling, and absorbs data cleaning, manipulation, and custom exports that bridge systems that do not talk to each other — framed as telling the WIOA/NRS story to boards and funders. |
| Student communication | Unchanged |
| Instructional support | Unchanged |
| NEW — **Student outreach** | AI design tools, marketing campaigns, landing pages, and automated follow-up so interested people are not lost between first contact and enrollment. |

## Technical notes

Files touched: `src/components/bootcamp/BootcampSchedule.tsx`, `src/components/bootcamp/BootcampOutcomes.tsx`. Presentation and copy only; no data or routing changes. The `Week` type loses nothing structurally — `n` stays for React keys, and a `mode: 'sync' | 'async'` is derived from `kind`.
