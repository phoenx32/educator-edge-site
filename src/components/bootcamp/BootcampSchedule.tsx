import { RegisterButton } from './RegisterButton';
import { Underline } from './Underline';
import SectionShell from './SectionShell';

type Kind = 'work' | 'meetup' | 'spotlight';

type Week = {
  n: number;
  month: 'Oct' | 'Nov';
  day: string;
  kind: Kind;
  title: string;
  detail?: string;
};

const kinds: Record<Kind, { label: string; dot: string; chip: string; row: string }> = {
  work: {
    label: 'Independent project work',
    dot: 'bg-border',
    chip: 'text-muted-foreground',
    row: 'border-border/50',
  },
  meetup: {
    label: 'Live cohort meetup',
    dot: 'bg-primary',
    chip: 'text-primary',
    row: 'border-primary/40 bg-primary/[0.04]',
  },
  spotlight: {
    label: 'Spotlight talk and open working session',
    dot: 'bg-accent',
    chip: 'text-accent',
    row: 'border-accent/40 bg-accent/[0.04]',
  },
};

const weeks: Week[] = [
  { n: 1, month: 'Oct', day: '5', kind: 'meetup', title: 'Opening meetup', detail: 'Course overview and choosing the priority you want to work on.' },
  { n: 2, month: 'Oct', day: '12', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 3, month: 'Oct', day: '19', kind: 'spotlight', title: 'Spotlight talk and open working session', detail: 'A half hour from an administrator using AI in their program, then a half hour of open working time.' },
  { n: 4, month: 'Oct', day: '26', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 5, month: 'Nov', day: '2', kind: 'meetup', title: 'Midpoint meetup', detail: 'Look at drafts in progress across the cohort and talk through what is coming up.' },
  { n: 6, month: 'Nov', day: '9', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 7, month: 'Nov', day: '16', kind: 'spotlight', title: 'Spotlight talk and open working session', detail: 'A second administrator spotlight, followed by open working time with facilitators and peers.' },
  { n: 8, month: 'Nov', day: '23', kind: 'work', title: 'Project work, on your own schedule' },
  { n: 9, month: 'Nov', day: '30', kind: 'meetup', title: 'Closing meetup', detail: 'Participants share where their projects landed and what comes next in their programs.' },
];

const months: { name: string; label: string; weeks: Week[] }[] = [
  { name: 'Oct', label: 'October 2026', weeks: weeks.filter((w) => w.month === 'Oct') },
  { name: 'Nov', label: 'November 2026', weeks: weeks.filter((w) => w.month === 'Nov') },
];

const BootcampSchedule = () => (
  <SectionShell id="schedule" index="04" label="Schedule" tone="muted" width="5xl">
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
        Ten weeks, <Underline>about an hour a week</Underline>
      </h2>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        Coursework is asynchronous and done on your own schedule. Three live meetups and two spotlight and working
        sessions are held across the ten weeks. All are optional and recorded, and individual coaching is available
        throughout at times you arrange with a facilitator.
      </p>
    </div>

    {/* Legend */}
    <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-muted-foreground">
      {(Object.keys(kinds) as Kind[]).map((k) => (
        <span key={k} className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${kinds[k].dot}`} aria-hidden="true" />
          {kinds[k].label}
        </span>
      ))}
    </div>

    {/* Pre-course marker */}
    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="h-2.5 w-2.5 rounded-full border border-dashed border-primary" aria-hidden="true" />
      <span className="font-medium tabular-nums">Sep 17</span>
      <span className="text-muted-foreground">Free informational webinar, held before registration closes</span>
    </div>

    {/* Month-grouped week rows */}
    <div className="mt-8 space-y-8">
      {months.map((m) => (
        <div key={m.name}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{m.label}</p>
          <ul className="mt-3 space-y-2">
            {m.weeks.map((w) => {
              const k = kinds[w.kind];
              return (
                <li
                  key={w.n}
                  className={`flex gap-4 rounded-lg border px-4 py-3.5 sm:px-5 ${k.row}`}
                >
                  <div className="flex w-16 shrink-0 flex-col items-start">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      Week {w.n}
                    </span>
                    <span className="mt-0.5 text-sm font-semibold tabular-nums">
                      {w.month} {w.day}
                    </span>
                  </div>

                  <span
                    className={`mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full ${k.dot}`}
                    aria-hidden="true"
                  />

                  <div className="min-w-0">
                    <p className={`text-sm font-medium leading-snug ${w.kind === 'work' ? 'text-muted-foreground' : ''}`}>
                      {w.title}
                    </p>
                    {w.detail && (
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.detail}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>

    <p className="mt-10 text-sm text-muted-foreground max-w-xl leading-relaxed">
      Session times are set with the cohort by poll after registration so they fall when most participants can
      attend. Recordings are shared the same day.
    </p>

    <div className="mt-8">
      <RegisterButton />
    </div>
  </SectionShell>
);

export default BootcampSchedule;
