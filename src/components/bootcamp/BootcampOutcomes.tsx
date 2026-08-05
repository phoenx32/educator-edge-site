const outcomes = [
  {
    area: 'Enrollment and intake',
    headline: 'Fewer people fall out between the first call and the first class',
    body: 'Intake messages, orientation materials, and follow-up that answer the questions students ask before they commit.',
  },
  {
    area: 'Retention',
    headline: 'You notice a student is missing before the term is over',
    body: 'A way to see attendance patterns early and reach out with something better than a generic reminder.',
  },
  {
    area: 'Staff time',
    headline: 'The same document stops getting rewritten from scratch',
    body: 'Reports, letters, job aids, and meeting summaries drafted in minutes, then reviewed by the person who knows the program.',
  },
  {
    area: 'Data and reporting',
    headline: 'Your NRS and funder numbers are readable before the deadline',
    body: 'Enrollment, attendance, and measurable skill gains turned into something you can put in front of a board or a state monitor.',
  },
];

const BootcampOutcomes = () => (
  <section id="outcomes" className="py-20 md:py-28 border-t border-border/60">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold tracking-tight max-w-2xl">
        Applied to the work adult education programs are already doing
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
        Participants work on the operational problems that recur in adult education every term. These are the areas
        administrators in this cohort are most often addressing.
      </p>

      <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-14 gap-y-10">
        {outcomes.map(({ area, headline, body }) => (
          <div key={area}>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{area}</span>
            <h3 className="mt-2.5 text-lg md:text-xl font-semibold leading-snug">{headline}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BootcampOutcomes;
