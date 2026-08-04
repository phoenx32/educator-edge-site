import { RegisterButton } from './RegisterButton';
import { Underline } from './Underline';

type Milestone = { date: string; label: string; tone: 'primary' | 'soft' };

const milestones: Milestone[] = [
  { date: '2026-09-17', label: 'Free informational webinar', tone: 'soft' },
  { date: '2026-10-05', label: 'Course opens · optional opening session', tone: 'primary' },
  { date: '2026-11-04', label: 'Midpoint live session', tone: 'primary' },
  { date: '2026-11-18', label: 'Gather feedback from staff and learners', tone: 'soft' },
  { date: '2026-11-30', label: 'Closing showcase · plan what continues', tone: 'primary' },
];

const byDate = new Map(milestones.map((m) => [m.date, m]));

const months = [
  { year: 2026, month: 8, name: 'September' },
  { year: 2026, month: 9, name: 'October' },
  { year: 2026, month: 10, name: 'November' },
];

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const iso = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

const MonthGrid = ({ year, month, name }: { year: number; month: number; name: string }) => {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: first }, () => null),
    ...Array.from({ length: days }, (_, i) => i + 1),
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide">{name}</h3>
      <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
        {weekdays.map((w, i) => (
          <span key={i} className="text-[10px] uppercase text-muted-foreground/70 pb-1">
            {w}
          </span>
        ))}
        {cells.map((d, i) => {
          const m = d ? byDate.get(iso(year, month, d)) : undefined;
          return (
            <span
              key={i}
              title={m?.label}
              className={[
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs tabular-nums',
                !d ? 'opacity-0' : '',
                m?.tone === 'primary' ? 'bg-primary text-primary-foreground font-semibold' : '',
                m?.tone === 'soft' ? 'border border-primary/50 text-primary font-medium' : '',
                d && !m ? 'text-muted-foreground/70' : '',
              ].join(' ')}
            >
              {d ?? ''}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const BootcampSchedule = () => (
  <section id="schedule" className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
        Ten weeks, <Underline>lightly paced</Underline>
      </h2>

      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="grid grid-cols-3 gap-6 sm:gap-8">
          {months.map((m) => (
            <MonthGrid key={m.name} {...m} />
          ))}
        </div>

        <ul className="space-y-4">
          {milestones.map(({ date, label, tone }) => {
            const d = new Date(`${date}T12:00:00`);
            return (
              <li key={date} className="flex items-baseline gap-4">
                <span
                  className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                    tone === 'primary' ? 'bg-primary' : 'border border-primary/60'
                  }`}
                  aria-hidden="true"
                />
                <span className="w-16 flex-shrink-0 text-sm font-medium tabular-nums">
                  {d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted-foreground max-w-xl leading-relaxed">
        Live session times are set with the cohort by poll after registration, and every session is recorded.
        Everything else is yours to fit into the week.
      </p>

      <div className="mt-10">
        <RegisterButton />
      </div>
    </div>
  </section>
);

export default BootcampSchedule;
