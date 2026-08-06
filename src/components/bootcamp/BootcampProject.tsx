import { Underline } from './Underline';
import { RegisterButton } from './RegisterButton';
import BootcampCycle from './BootcampCycle';
import SectionShell from './SectionShell';

const BootcampProject = () => (
  <SectionShell id="project" index="02" label="How the work moves" tone="muted" width="5xl">
    <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
          Small steps, <Underline>tried and revised</Underline>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Projects tend to take the same shape: something small gets drafted, tried with a few people, and revised
          with what that surfaced. Most weeks cover one turn of that cycle.
        </p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Each step is described below.
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
