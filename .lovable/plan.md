# Schedule: shift start to the week of Oct 12 and mark live sessions as "time to be set"

## What changes

### 1. Dates shift forward one week
Week 1 becomes the week of Oct 12, and the remaining weeks follow:

```text
Week 1  Oct 12   Opening meetup
Week 2  Oct 19   Independent project work
Week 3  Oct 26   Spotlight talk + open working session
Week 4  Nov 2    Independent project work
Week 5  Nov 9    Midpoint meetup
Week 6  Nov 16   Independent project work
Week 7  Nov 23   Spotlight talk + open working session
Week 8  Nov 30   Independent project work
Week 9  Dec 7    Closing meetup
```

A December group is added alongside October and November. The pre-course webinar marker (Sep 17) stays as is.

### 2. "Week of" framing instead of fixed dates
Each row reads "Week of Oct 12" rather than a single date, so nothing implies a set day or time.

### 3. Visual treatment for sessions that are not yet scheduled
Applied only to the three meetups and two spotlight/working sessions:

- A small "Day and time to be set" chip with a clock icon next to the session title.
- A dashed (rather than solid) left accent on those rows, matching the dashed marker already used for the webinar, so "not yet scheduled" reads as a consistent visual language on the page.
- The color dot for those rows becomes a ring/outline dot rather than a filled dot, reinforcing "held this week, day pending."
- Independent-work rows keep their current quiet, solid styling.

### 4. Legend and supporting text
- Legend gains a fourth item explaining the dashed/outline state: "Day and time set with the cohort."
- The closing paragraph is rewritten to say plainly: live sessions are held during the week listed; the specific day and time are chosen with the cohort by Doodle poll after registration so they land when most people can attend; every live session is recorded and shared the same day.

## Technical notes

All changes are contained in `src/components/bootcamp/BootcampSchedule.tsx`:
- Update the `weeks` array dates and add a `Dec` month value to the `Kind`/`Week` types and the `months` grouping.
- Add a `scheduled: boolean` (or derive from `kind !== 'work'`) to drive the dashed border, outline dot, and TBD chip.
- Use existing semantic tokens (`primary`, `accent`, `muted-foreground`, `border`) — no new colors.
