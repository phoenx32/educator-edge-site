import { Underline } from './Underline';
import { RegisterButton } from './RegisterButton';

const priorities = [
  'Recruitment and enrollment',
  'Learner retention',
  'Educational gains',
  'Staff communication',
  'Data and reporting',
  'Program planning',
  'Grant development',
  'Program evaluation',
];

const steps = [
  { label: 'Choose', body: 'Pick one priority that is already on your plate.' },
  { label: 'Build', body: 'Make a first working version with coaching alongside you.' },
  { label: 'Test with people', body: 'Put it in front of staff or learners and listen.' },
  { label: 'Refine', body: 'Adjust it, and decide how it keeps living in your program.' },
];

const BootcampProject = () => (
  <section id="project" className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
        One project, <Underline>start to finish</Underline>
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
        You work on a real priority from your own program for ten weeks. Choose one:
      </p>

      <ul className="mt-8 grid sm:grid-cols-2 gap-x-14 gap-y-0 max-w-2xl">
        {priorities.map((p) => (
          <li key={p} className="py-2.5 border-b border-border/60 text-foreground">
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ label, body }, i) => (
          <div key={label} className="relative pt-5 border-t-2 border-primary/25">
            <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
            <h3 className="text-base font-semibold">
              <span className="text-muted-foreground font-normal mr-2 tabular-nums">{i + 1}</span>
              {label}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <RegisterButton />
      </div>
    </div>
  </section>
);

export default BootcampProject;
