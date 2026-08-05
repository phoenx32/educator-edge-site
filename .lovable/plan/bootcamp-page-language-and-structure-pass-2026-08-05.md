# Bootcamp page: language and structure pass

A round of edits focused on removing over-promising language, simplifying the schedule visual, and restructuring "What is included."

## 1. Top navigation
Strip the nav to two elements: the CLP + COABE logos on the left, Register button on the right. Remove the section links (Outcomes, Your project, Schedule, Cost, FAQ), the mobile hamburger, and the mobile dropdown panel.

## 2. Remove the hero-to-outcomes bridge
Delete the "What the ten weeks change in your program" chevron link at the bottom of the hero. The presented-by logos become the hero's closing element.

## 3. Outcomes section rewrite
The section is a menu of possibilities, not a report on what anyone is doing. Nothing has happened yet; every direction is the administrator's to choose.
- New headline: "Areas you might explore" — no claim about where people are focusing, no promise of change.
- Move to a standard stacked layout: headline, then a short subheading beneath it, then the two-column grid below — no side-by-side heading/intro.
- Remove the invented claim "These are the areas administrators in this cohort are most often addressing." Replace with an invitation: these are common areas of adult education work where administrators could try something; the list is a starting point, and participants are welcome to take a direction that is not listed.
- Add two more entries to the grid alongside the existing four (enrollment/intake, retention, staff time, data and reporting):
  - Student communication and support (multilingual messaging, plain-language materials)
  - Instructional support for staff (helping teachers plan and adapt materials)
- Rewrite each card so the headline names a question or an area to try, not a result the course delivers.


## 4. Your project section
- Remove "There is no common assignment."
- Remove "Projects in past cohorts have addressed…" — there have been no past cohorts. Reframe as "Priorities administrators might take on include…" with the same list.
- Keep the framing invitational and asset-based: participants bring a priority they already care about.

## 5. Improvement cycle
Rename the "Listen" step to "Reflect" and swap the ear icon for a reflective icon (Lightbulb or MessageCircle). Caption becomes about gathering feedback and reflecting on what the draft surfaced.

## 6. What is included — nine items, reordered
Reordered so the highest-value, most human items lead:
1. Individual coaching
2. A project you choose
3. Three live meetups (opening, midpoint, closing)
4. Administrator spotlight talks
5. Open working sessions
6. Peer feedback
7. Tool demonstrations
8. Resources to continue learning
9. Certificate of completion

Each gets a distinct icon and one short line of resonant, positive copy. Note: this corrects "five live sessions" to three live meetups, with spotlight talks counted separately.

## 7. Schedule redesign
Replace the current dense rail with a calmer calendar-style visual:
- A month-grouped layout (October / November) with one row per week, not per date.
- Color coding via a small legend, four types: independent project work, live meetup, spotlight talk, open working session.
- Each week shows the date, a colored type marker, and a single short line. Quiet weeks read as "Project work, on your own schedule" in a muted tone.
- Same structure on mobile as a simple vertical list — no separate cramped rail.
- Update the intro text to say three live meetups plus two spotlight and working sessions.

## 8. FAQ contact block
Replace the "Questions about your program or registration?" block with:
- Heading: "Questions about the cohort?"
- Copy: email us and we will respond, or bring the question to the informational webinar.

## Technical notes
Files touched: `BootcampNav.tsx`, `BootcampHero.tsx`, `BootcampOutcomes.tsx`, `BootcampProject.tsx`, `BootcampCycle.tsx`, `BootcampIncludes.tsx`, `BootcampSchedule.tsx`, `BootcampFaq.tsx`. Schedule type colors use existing semantic tokens (primary, accent, muted-foreground, border) — no new hardcoded colors. All changes are presentation and copy; no data or routing changes.
