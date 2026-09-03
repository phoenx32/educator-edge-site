import { ArrowUpRight } from 'lucide-react';
import SectionShell from './SectionShell';
import { Underline } from './Underline';


const areas = [
  {
    area: 'Student orientation',
    headline: 'Orientation materials and a view of who is enrolling',
    body: 'Short orientation videos in the languages students speak, a chatbot that answers scheduling and program questions between sessions, and a dashboard of who is starting and when.',
  },
  {
    area: 'Student outreach',
    headline: 'Recruitment materials and follow-up',
    body: 'Flyers, social posts, landing pages, and follow-up messages for people who inquire but have not yet enrolled.',
  },
  {
    area: 'Retention',
    headline: 'Attendance data you can act on',
    body: 'Attendance and progress pulled together in one place, so outreach to a student who has missed a few sessions takes less digging.',
  },
  {
    area: 'Automation',
    headline: 'Routine tasks that run on their own',
    body: 'Scans for open grant opportunities, deadline reminders, and other recurring checks that currently depend on someone remembering.',
  },
  {
    area: 'Agents',
    headline: 'More time with students',
    body: 'Assistants that handle routine tasks, leaving more time for staff to spend with the students they serve.',
  },
  {
    area: 'Data and reporting',
    headline: "Your program's numbers, in a form people can use",
    body: 'Visualizations of enrollment, attendance, and measurable skill gains, plus the cleaning and custom exports that bridge systems that do not talk to each other.',
  },
  {
    area: 'Student communication',
    headline: 'Plain language, in the languages your students use',
    body: 'Reminders, handbooks, and support materials written at a readable level and translated for the families you serve.',
  },
  {
    area: 'Instructional support',
    headline: 'Helping teachers plan and adapt materials',
    body: 'Lesson supports, leveled reading, and differentiation ideas teachers can review, adjust, and use in class.',
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

    <a
      href="/bootcamp/use-cases"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border bg-muted/30 px-5 py-4 transition-colors hover:border-primary"
    >
      <p className="text-sm text-muted-foreground leading-relaxed">
        Four worked examples from adult education programs, with the tools, prompts, and results.
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary flex-shrink-0">
        See sample projects
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>




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
