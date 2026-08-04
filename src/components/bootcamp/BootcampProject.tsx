import { Underline } from './Underline';
import { RegisterButton } from './RegisterButton';
import BootcampCycle from './BootcampCycle';

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
  <section id="project" className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
            You bring the problem. <Underline>You keep the work.</Underline>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            There is no set assignment. You choose a project based on what your program is actually dealing with this
            year &mdash; your students, your staffing, your funder, your local conditions. Coaching starts from
            whatever you bring.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Past participants have worked on{' '}
            <span className="text-foreground">{examples.slice(0, -1).join(', ')}</span>, and{' '}
            <span className="text-foreground">{examples[examples.length - 1]}</span>. If your priority is not on that
            list, that is a good sign &mdash; bring it anyway.
          </p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            Each week moves your project one turn around the same cycle. Hover a step to see what it looks like in
            practice.
          </p>

          <div className="mt-8">
            <RegisterButton />
          </div>
        </div>

        <div className="lg:pl-4">
          <BootcampCycle />
        </div>
      </div>
    </div>
  </section>
);

export default BootcampProject;
