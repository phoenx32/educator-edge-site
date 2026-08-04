import { RegisterButton } from './RegisterButton';
import { Underline } from './Underline';

type Week = {
  date: string;
  month: string;
  day: string;
  tone: 'plain' | 'soft' | 'primary';
  label?: string;
  detail?: string;
};

const weeks: Week[] = [
  { date: '2026-10-05', month: 'Oct', day: '5', tone: 'primary', label: 'Course opens', detail: 'Optional opening session on Zoom. Choose your project.' },
  { date: '2026-10-12', month: 'Oct', day: '12', tone: 'plain' },
  { date: '2026-10-19', month: 'Oct', day: '19', tone: 'soft', label: 'Coaching', detail: 'Individual time with a facilitator, scheduled when it suits you.' },
  { date: '2026-10-26', month: 'Oct', day: '26', tone: 'plain' },
  { date: '2026-11-02', month: 'Nov', day: '2', tone: 'primary', label: 'Midpoint session', detail: 'Show a draft. Hear what other administrators are building.' },
  { date: '2026-11-09', month: 'Nov', day: '9', tone: 'plain' },
  { date: '2026-11-16', month: 'Nov', day: '16', tone: 'soft', label: 'Pilot locally', detail: 'Try your draft with staff or students and collect what they say.' },
  { date: '2026-11-23', month: 'Nov', day: '23', tone: 'soft', label: 'Revise', detail: 'Adjust based on the feedback you gathered.' },
  { date: '2026-11-30', month: 'Nov', day: '30', tone: 'primary', label: 'Closing session', detail: 'Share your project and decide what continues in your program.' },
];

const dotClass = (tone: Week['tone']) =>
  tone === 'primary'
    ? 'h-3.5 w-3.5 bg-primary border-primary'
    : tone === 'soft'
      ? 'h-3.5 w-3.5 bg-background border-primary'
      : 'h-2 w-2 bg-border border-border';

const BootcampSchedule = () => (
  <section id="schedule" className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
          A weekly rhythm, <Underline>not a class schedule</Underline>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          About an hour a week, done when your week allows. Only three dates are scheduled, all optional, all recorded.
        </p>
      </div>

      {/* Pre-course marker */}
      <div className="mt-12 flex items-center gap-3 text-sm">
        <span className="h-3.5 w-3.5 rounded-full border border-dashed border-primary" aria-hidden="true" />
        <span className="font-medium tabular-nums">Sep 17</span>
        <span className="text-muted-foreground">Free informational webinar, before registration closes</span>
      </div>

      {/* Desktop rail */}
      <div className="mt-10 hidden md:block">
        <div className="grid grid-cols-9">
          {weeks.map((w) => (
            <div key={w.date} className="relative flex flex-col items-center text-center px-1.5">
              <span className="absolute top-[7px] left-0 right-0 h-px bg-border" aria-hidden="true" />
              <span
                className={`relative z-10 rounded-full border ${dotClass(w.tone)} ${w.tone === 'plain' ? 'mt-[3px]' : ''}`}
                aria-hidden="true"
              />
              <span className="mt-3 text-xs font-medium tabular-nums">
                {w.month} {w.day}
              </span>
              {w.label ? (
                <>
                  <span className="mt-2 text-sm font-semibold leading-snug">{w.label}</span>
                  <span className="mt-1 text-xs text-muted-foreground leading-snug">{w.detail}</span>
                </>
              ) : (
                <span className="mt-2 text-xs text-muted-foreground/70 leading-snug">
                  Project work, on your own time
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile timeline */}
      <ul className="mt-10 md:hidden border-l border-border pl-5 space-y-6">
        {weeks.map((w) => (
          <li key={w.date} className="relative">
            <span
              className={`absolute -left-[27px] top-1.5 rounded-full border ${dotClass(w.tone)}`}
              aria-hidden="true"
            />
            <p className="text-xs font-medium tabular-nums text-muted-foreground">
              {w.month} {w.day}
            </p>
            <p className={`mt-0.5 text-sm ${w.label ? 'font-semibold' : 'text-muted-foreground'}`}>
              {w.label ?? 'Project work, on your own time'}
            </p>
            {w.detail && <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.detail}</p>}
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-muted-foreground max-w-xl leading-relaxed">
        Session times are set with the cohort by poll after registration, so they land when most people can attend.
        Recordings go out the same day.
      </p>

      <div className="mt-8">
        <RegisterButton />
      </div>
    </div>
  </section>
);

export default BootcampSchedule;
