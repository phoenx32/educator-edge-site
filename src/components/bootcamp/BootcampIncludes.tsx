import { MessageSquareHeart, Compass, Video, Mic, Users2, MessagesSquare, Wrench, BookOpen, Award } from 'lucide-react';
import SectionShell from './SectionShell';

const items = [
  { icon: MessageSquareHeart, label: 'Individual coaching', body: 'Feedback and support from an AI subject matter expert on your own project.' },
  { icon: Compass, label: 'A project you choose', body: 'You pick the priority. Everything else in the course is built around helping you move it forward.' },
  { icon: Video, label: 'Three live meetups', body: 'Time with the whole cohort to give and get feedback, answer questions together, and work through shared challenges.' },
  { icon: Mic, label: 'Administrator spotlight talks', body: 'Colleagues from other programs sharing what they tried, what worked, and what they would do differently.' },
  { icon: Users2, label: 'Open working sessions', body: 'A half hour after each spotlight talk to bring a question, work on your project, or think something through with others.' },
  { icon: MessagesSquare, label: 'Peer feedback', body: 'A place to share a draft with administrators who understand the constraints you are working within.' },
  { icon: Wrench, label: 'Tool demonstrations', body: 'Free tools and how they can help with common challenges in adult education programs.' },
  { icon: BookOpen, label: 'Resources to keep learning', body: 'Guides, prompts, and examples you keep after the course and can share with your staff.' },
  { icon: Award, label: 'Certificate of completion', body: 'Issued by COABE and Community Learning Partners.' },
];

const BootcampIncludes = () => (
  <SectionShell index="03" label="Course components">
    <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
      What is included
    </h2>
    <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
      The course pairs independent work with regular chances to learn alongside other administrators.
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
