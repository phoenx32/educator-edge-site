# Areas of focus rewrite + schedule declutter

## 1. Section 01 copy rewrite

Same eight items, same order. Rewritten in plain practitioner language — no marketing framing, no deficit framing, no claims about what educators aren't already doing.

| Area | Headline | Body |
| --- | --- | --- |
| Student orientation | Orientation materials and a view of who is enrolling | Orientation handouts, intake packets, and a simple dashboard of new enrollments, so staff can see who is starting and when. |
| Student outreach | Recruitment materials and follow-up | Flyers, social posts, landing pages, and follow-up messages for people who inquire but have not yet enrolled. |
| Retention | Attendance data you can act on | Attendance and progress pulled together in one place, so outreach to a student who has missed a few sessions takes less digging. |
| Automation | Routine tasks that run on their own | Scans for open grant opportunities, deadline reminders, and other recurring checks that currently depend on someone remembering. |
| Agents | More time with students | Assistants that handle routine tasks, leaving more time for staff to spend with the students they serve. |
| Data and reporting | Your program's numbers, in a form people can use | Visualizations of enrollment, attendance, and measurable skill gains, plus the cleaning and custom exports that bridge systems that do not talk to each other. |
| Student communication | Plain language, in the languages your students use | Reminders, handbooks, and support materials written at a readable level and translated for the families you serve. |
| Instructional support | Helping teachers plan and adapt materials | Lesson supports, leveled reading, and differentiation ideas teachers can review, adjust, and use in class. |

Specific removals: "what new students actually ask", "a good first experience", "Reaching people who have not found you yet", "Noticing sooner when a student stops coming", "more staff time with students" → "more time with students", and the trailing "so WIOA and funder reporting becomes something a board can read."

## 2. Schedule: drop the legend and dots

Agreed — the color key adds a decoding step that the row title, detail line, and Synchronous/Asynchronous badge already answer. Changes:

- Remove the three-item legend row (independent project work / live cohort meetup / spotlight talk) and the colored dot on each row.
- Keep the asterisk note about sessions not yet scheduled — it moves to a standalone line where the legend was, or stays only in the footnote below the table.
- Keep the subtle row treatment (dashed border and faint tint on live weeks) so synchronous weeks still read differently at a glance without needing a key.
- Keep the Sep 17 webinar marker, the Synchronous/Asynchronous badges, and the Doodle-poll footnote unchanged.

## Technical notes

Files touched: `src/components/bootcamp/BootcampOutcomes.tsx` (copy only) and `src/components/bootcamp/BootcampSchedule.tsx` (remove legend markup and the `dot` field usage; `kinds` keeps `label`/`row`). Presentation and copy only.
