import { Underline } from './Underline';
import { RegisterButton } from './RegisterButton';
import BootcampCycle from './BootcampCycle';
import SectionShell from './SectionShell';

const examples = [
  'recruitment and enrollment',
  'student retention',
  'measurable skill gains',
  'staff communication',
  'data and reporting',
  'program planning',
  'grant development',
  'program evaluation',
];

const BootcampProject = () => (
  <SectionShell id="project" index="02" label="Your project" tone="muted" width="5xl">
    <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
          One project, <Underline>chosen by you</Underline>, developed over ten weeks
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          You choose the priority. Coaching starts from what you already know about your program, your role, and the
          people you serve, and builds from there.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Priorities administrators might take on include{' '}
          <span className="text-foreground">{examples.slice(0, -1).join(', ')}</span>, and{' '}
          <span className="text-foreground">{examples[examples.length - 1]}</span>. These are ideas to start from, and
          you are welcome to bring a priority that is not listed here.
        </p>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Each week moves your project one turn around the same improvement cycle. Select a step to see what it
          involves in practice.
        </p>


        <div className="mt-8">
          <RegisterButton />
        </div>
      </div>

      <div className="lg:pl-4">
        <BootcampCycle />
      </div>
    </div>
  </SectionShell>
);

export default BootcampProject;
