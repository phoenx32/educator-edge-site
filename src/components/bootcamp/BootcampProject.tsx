import { Underline } from './Underline';
import { RegisterButton } from './RegisterButton';
import BootcampCycle from './BootcampCycle';
import SectionShell from './SectionShell';

const BootcampProject = () => (
  <SectionShell id="project" index="02" label="Learning through practice" tone="muted" width="5xl">
    <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
      <div className="max-w-xl">
        <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
          Try something, <Underline>learn from it</Underline>, keep going
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Across the ten weeks, participants return to the same work: trying something, seeing what happens, and
          adjusting with what they learn. Coaching and peer conversation run alongside it.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The habit outlasts the project. It is a way of learning that administrators can keep using with whatever
          comes next.
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
