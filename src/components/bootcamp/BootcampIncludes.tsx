import { MessageSquareHeart, Video, Mic, Users2, Wrench, Users, Award } from 'lucide-react';
import SectionShell from './SectionShell';

const items = [
  { icon: MessageSquareHeart, label: 'Individual coaching', body: 'One-to-one time with a facilitator on your own project, scheduled when it works for you.' },
  { icon: Video, label: 'Five live sessions', body: 'Opening, midpoint, and closing sessions plus two spotlight sessions. All optional, all recorded.' },
  { icon: Mic, label: 'Administrator spotlight talks', body: 'Colleagues from other programs describing what they tried, what worked, and what did not.' },
  { icon: Users2, label: 'Open working sessions', body: 'A half hour after each spotlight talk to bring a question, work on your project, or think through a problem with peers and facilitators.' },
  { icon: Wrench, label: 'Tool walkthroughs', body: 'Free tools demonstrated against everyday program tasks.' },
  { icon: Users, label: 'A cohort of colleagues', body: 'Administrators from other programs working on comparable priorities.' },
  { icon: Award, label: 'Certificate of completion', body: 'Issued by COABE and Community Learning Partners.' },
];

const BootcampIncludes = () => (
  <SectionShell index="03" label="Course components">
    <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
      What is included
    </h2>
    <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
      The course combines independent work with regular opportunities to learn alongside other administrators.
    </p>

    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">
      {items.map(({ icon: Icon, label, body }) => (
        <div key={label} className="border-t border-border/60 pt-4">
          <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
          <h3 className="mt-3 text-base font-semibold">{label}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default BootcampIncludes;
