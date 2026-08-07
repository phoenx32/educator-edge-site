import SectionShell from './SectionShell';
import { Underline } from './Underline';

const areas = [
  {
    area: 'Student orientation',
    headline: 'Arriving prepared for a good first experience',
    body: 'Orientation materials that answer what new students actually ask, alongside a simple dashboard view of who is starting, so no one falls through in their first weeks.',
  },
  {
    area: 'Student outreach',
    headline: 'Reaching people who have not found you yet',
    body: 'Design tools, outreach campaigns, simple landing pages, and follow-up messages that keep interested people connected between first contact and enrollment.',
  },
  {
    area: 'Retention',
    headline: 'Noticing sooner when a student stops coming',
    body: 'Reading attendance patterns earlier and reaching out with support.',
  },
  {
    area: 'Automation',
    headline: 'Recurring work that runs in the background',
    body: 'Regular scans for open grant opportunities, deadline reminders, and other routine checks that otherwise depend on someone remembering.',
  },
  {
    area: 'Agents',
    headline: 'More staff time with students',
    body: 'Assistants that take on routine tasks so staff have more time to build relationships with the students they serve.',
  },
  {
    area: 'Data and reporting',
    headline: 'Telling your program story with your own numbers',
    body: 'Visualizations of enrollment, attendance, and measurable skill gains, plus the cleaning and custom exports that bridge systems that do not talk to each other, so WIOA and funder reporting becomes something a board can read.',
  },
  {
    area: 'Student communication',
    headline: 'Plain language, in the languages your students use',
    body: 'Reminders, handbooks, and support materials rewritten at a readable level and translated for the families you serve.',
  },
  {
    area: 'Instructional support',
    headline: 'Helping teachers plan and adapt materials',
    body: 'Lesson supports, leveled reading, and differentiation ideas that teachers can review, adjust, and use in class.',
  },
];


const BootcampOutcomes = () => (
  <SectionShell id="outcomes" index="01" label="Areas of focus">
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight">
        One project, <Underline>chosen by you</Underline>, grounded in your program
      </h2>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        Administrators choose a project and develop it with support from peer administrators and AI subject matter
        experts. The areas below are possible starting points. Participants choose based on local needs, goals, and
        context.
      </p>
    </div>


    <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-14 gap-y-10">
      {areas.map(({ area, headline, body }) => (
        <div key={area} className="border-t border-border/60 pt-5">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{area}</span>
          <h3 className="mt-2.5 text-lg md:text-xl font-semibold leading-snug">{headline}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default BootcampOutcomes;
