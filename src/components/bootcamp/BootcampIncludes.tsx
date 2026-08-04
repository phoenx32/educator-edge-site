import { MessageSquareHeart, Video, Mic, Wrench, Users, Award } from 'lucide-react';

const items = [
  { icon: MessageSquareHeart, label: 'Individual coaching', body: 'One-to-one time with a facilitator on your own project.' },
  { icon: Video, label: 'Three live sessions', body: 'Optional, scheduled with the cohort, always recorded.' },
  { icon: Mic, label: 'Spotlight talks', body: 'Administrators describing what they tried and what happened.' },
  { icon: Wrench, label: 'Tool walkthroughs', body: 'Free tools, shown against real program tasks.' },
  { icon: Users, label: 'A cohort of peers', body: 'Other administrators working on the same kinds of problems.' },
  { icon: Award, label: 'Certificate', body: 'Issued by COABE and Community Learning Partners on completion.' },
];

const BootcampIncludes = () => (
  <section className="py-20 md:py-28 border-t border-border/60">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
        What your registration covers
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {items.map(({ icon: Icon, label, body }) => (
          <div key={label}>
            <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
            <h3 className="mt-3 text-base font-semibold">{label}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BootcampIncludes;
