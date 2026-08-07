import { RegisterButton } from './RegisterButton';
import { Underline } from './Underline';
import SectionShell from './SectionShell';

type Kind = 'work' | 'meetup' | 'spotlight';
type Month = 'Oct' | 'Nov' | 'Dec';

type Week = {
  n: number;
  month: Month;
  day: string;
  kind: Kind;
  title: string;
  detail?: string;
};

const kinds: Record<Kind, { row: string }> = {
  work: { row: 'border-border/50' },
  meetup: { row: 'border-dashed border-primary/50 bg-primary/[0.04]' },
  spotlight: { row: 'border-dashed border-accent/50 bg-accent/[0.04]' },
};

const weeks: Week[] = [
  { n: 1, month: 'Oct', day: '12', kind: 'meetup', title: 'Opening meetup', detail: 'Course overview and choosing the priority you want to work on.' },
  { n: 2, month: 'Oct', day: '19', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 3, month: 'Oct', day: '26', kind: 'spotlight', title: 'Spotlight talk and open working session', detail: 'A half hour from an administrator using AI in their program, then a half hour of open working time.' },
  { n: 4, month: 'Nov', day: '2', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 5, month: 'Nov', day: '9', kind: 'meetup', title: 'Midpoint meetup', detail: 'Look at drafts in progress across the cohort and talk through what is coming up.' },
  { n: 6, month: 'Nov', day: '16', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 7, month: 'Nov', day: '23', kind: 'spotlight', title: 'Spotlight talk and open working session', detail: 'A second administrator spotlight, followed by open working time with facilitators and peers.' },
  { n: 8, month: 'Nov', day: '30', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 9, month: 'Dec', day: '7', kind: 'meetup', title: 'Closing meetup', detail: 'Participants share where their projects landed and what comes next in their programs.' },
  { n: 10, month: 'Dec', day: '14', kind: 'work', title: 'Wrap-up week', detail: 'Time to finish your project, gather feedback from colleagues, and schedule any last coaching before the course closes.' },
];

const months: { name: Month; label: string; weeks: Week[] }[] = [
  { name: 'Oct', label: 'October 2026', weeks: weeks.filter((w) => w.month === 'Oct') },
  { name: 'Nov', label: 'November 2026', weeks: weeks.filter((w) => w.month === 'Nov') },
  { name: 'Dec', label: 'December 2026', weeks: weeks.filter((w) => w.month === 'Dec') },
];

const BootcampSchedule = () => (
  <SectionShell id="schedule" index="04" label="Schedule" tone="muted" width="5xl">
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
        Ten weeks, <Underline>about an hour a week</Underline>
      </h2>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        The course is both synchronous and asynchronous. Coursework is done on your own schedule, and three live
        meetups and two spotlight and working sessions are held across the ten weeks. Live sessions are optional and
        recorded for on-demand viewing, and coaching is available throughout at times you arrange with a facilitator.
      </p>
    </div>

    {/* Pending-schedule note */}
    <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
      <span className="text-primary" aria-hidden="true">*</span>
      Day and time not yet set
    </div>


    {/* Pre-course marker */}
    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="h-2.5 w-2.5 rounded-full border border-dashed border-primary" aria-hidden="true" />
      <span className="font-medium tabular-nums">Sep 17</span>
      <span className="text-muted-foreground">Free informational webinar, held before registration closes</span>
    </div>

    {/* Month-grouped week rows */}
    <div className="mt-8 space-y-7">
      {months.map((m) => (
        <div key={m.name}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{m.label}</p>
          <ul className="mt-3 space-y-2">
            {m.weeks.map((w) => {
              const k = kinds[w.kind];
              const live = w.kind !== 'work';
              return (
                <li
                  key={w.n}
                  className={`flex flex-wrap items-start gap-x-4 gap-y-2 rounded-lg border px-4 py-3.5 sm:flex-nowrap sm:px-5 ${k.row}`}
                >
                  <div className="flex w-[5.5rem] shrink-0 flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Week of
                    </span>
                    <span className="mt-0.5 text-base font-semibold tabular-nums leading-tight">
                      {w.month} {w.day}
                    </span>
                  </div>



                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-medium leading-snug ${w.kind === 'work' ? 'text-muted-foreground' : ''}`}>
                      {w.title}
                      {live && (
                        <span
                          className={`ml-1 align-super text-xs ${w.kind === 'meetup' ? 'text-primary' : 'text-accent'}`}
                          aria-label="Day and time not yet set"
                        >
                          *
                        </span>
                      )}
                    </p>
                    {w.detail && (
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{w.detail}</p>
                    )}
                  </div>

                  <span
                    className={`mt-0.5 shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${
                      live
                        ? 'border-primary/40 bg-primary/10 text-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.07)]'
                        : 'border-border bg-muted/60 text-muted-foreground'
                    }`}
                  >
                    {live ? 'Synchronous' : 'Asynchronous'}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>


    <p className="mt-6 flex max-w-2xl gap-2 text-sm text-muted-foreground leading-relaxed">
      <span className="text-primary" aria-hidden="true">*</span>
      <span>
        These sessions are held during the week listed, but the day and time are not set yet. They are scheduled in
        collaboration with all participants through a Doodle poll after registration, so we can hopefully find a time
        that works for most people. Every live session is recorded and made available for on-demand viewing.
      </span>
    </p>


    <div className="mt-8">
      <RegisterButton />
    </div>
  </SectionShell>
);

export default BootcampSchedule;
