import SectionShell from './SectionShell';

const areas = [
  {
    area: 'Enrollment and intake',
    headline: 'What people need to know before they commit',
    body: 'Intake messages, orientation materials, and follow-up that answer the questions prospective students actually ask.',
  },
  {
    area: 'Retention',
    headline: 'Noticing sooner when a student stops coming',
    body: 'Ways to read attendance patterns earlier and reach out with something more useful than a generic reminder.',
  },
  {
    area: 'Staff time',
    headline: 'The documents that get rewritten every term',
    body: 'Reports, letters, job aids, and meeting summaries drafted quickly, then reviewed by the person who knows the program.',
  },
  {
    area: 'Data and reporting',
    headline: 'Making NRS and funder numbers readable',
    body: 'Enrollment, attendance, and measurable skill gains turned into something you can put in front of a board or a state monitor.',
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
        Areas you might explore
      </h2>
      <p className="mt-5 text-muted-foreground leading-relaxed">
        Adult education programs share a lot of the same everyday work. The areas below are a starting point for
        thinking about where you could try something during the course. You are welcome to take a direction that is
        not listed here.
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
