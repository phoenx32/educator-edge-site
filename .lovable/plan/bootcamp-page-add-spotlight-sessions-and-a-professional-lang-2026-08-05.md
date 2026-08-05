# Bootcamp page: add spotlight sessions and a professional language pass

## 1. Two additional optional live sessions

The schedule currently has three optional Zoom dates (opening Oct 5, midpoint Nov 2, closing Nov 30). Two more optional sessions are added, both structured the same way:

- First half hour: a spotlight talk from an adult education administrator describing how they are using AI in their own program.
- Second half hour: an open working session — questions, shared troubleshooting, and time to work on your project alongside colleagues.

Proposed placement in the ten-week track (adjustable): **Oct 19** and **Nov 16**. These currently show as "Coaching" and "Pilot locally" week markers; they become spotlight + working session markers, with coaching described as always-available rather than a fixed week.

Schedule updates:
- Both new dates appear on the week rail and mobile timeline with a distinct marker style so they read as a different kind of session than the three cohort sessions.
- The intro line changes from "Only three dates are scheduled" to reflect five optional sessions, all recorded, all optional.
- Each new entry names both halves in its detail text.

## 2. Open working sessions as a named feature

The working-session half hour is surfaced beyond the schedule:

- Added as its own item in "What your registration covers" — an unstructured half hour after each spotlight talk to bring a question, work through something with peers, or think out loud with facilitators.
- Added to the pricing checklist ("Five optional live sessions, all recorded" plus the working-session line).
- New FAQ entry under "Time and support" explaining what happens in an open working session, that attendance is optional, and that the spotlight half is recorded while the working half is conversational.
- Hero facts row and course description updated where session counts are stated.

## 3. Language and headline audit

The tone moves toward professional development for community college and public agency staff: formal enough to forward to a supervisor, still welcoming and collaborative. Sales-style phrasing is removed.

Specific changes:

- "You bring the problem. You keep the work." → a plain section heading naming the work, e.g. "One project, chosen by you, developed over ten weeks."
- "Not sure yet? Come to the free info webinar." / "Save my seat" → "Free informational webinar, September 17" with a "Register for the webinar" button.
- "Still deciding?" → "Questions about your program or registration?"
- "If your priority is not on that list, that is a good sign — bring it anyway." → a straightforward statement that participants choose a priority relevant to their own context; the list is illustrative.
- "What your registration covers" → "What is included."
- Remove second-person imperative punchiness and any implied hype about AI; keep short declarative sentences.
- Framing shifts from individual achievement to shared inquiry: the cohort is a group of administrators examining a new set of tools together, with facilitators, not an audience being taught a solution.
- Review every heading on the page (hero, outcomes, project, includes, schedule, webinar, pricing, facilitators, FAQ, closing) against the same standard and rewrite any that read as marketing rather than course description.
- Keep the specific, concrete outcome language already in place (intake, retention, NRS reporting, staff time) — that section is working.

## Technical notes

- `BootcampSchedule.tsx`: two new week entries with a fourth marker tone for spotlight/working sessions; intro and footnote copy updated.
- `BootcampIncludes.tsx`: new item for open working sessions; session count corrected.
- `BootcampPricing.tsx`: checklist updated.
- `BootcampFaq.tsx`: new working-session question; "Are the live sessions required?" updated for five sessions; "Still deciding?" block retitled.
- Copy-only edits in `BootcampHero.tsx`, `BootcampProject.tsx`, `BootcampWebinar.tsx`, `BootcampOutcomes.tsx`, `BootcampCycle.tsx`, `BootcampFacilitators.tsx`, `BootcampStickyCta.tsx`.
- No layout framework changes; underline emphasis and section rhythm stay as they are.
