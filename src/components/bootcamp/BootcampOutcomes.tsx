import { Underline } from './Underline';

const outcomes = [
  {
    headline: 'More learners walk through the door — and stay',
    body: 'Clearer outreach, faster follow-up, and orientation materials that answer the questions people actually ask before they enroll.',
  },
  {
    headline: 'Your staff get hours back each week',
    body: 'The repetitive writing, summarizing, and formatting that eats a workday becomes something you can hand off and review.',
  },
  {
    headline: 'People get an answer the same day they ask',
    body: 'Learners, instructors, and partners stop waiting on the one person who knows how to find the information.',
  },
  {
    headline: 'You can see what your data is telling you',
    body: 'Enrollment, attendance, and gains turned into something you can read at a glance and bring to a planning meeting.',
  },
];

const BootcampOutcomes = () => (
  <section id="outcomes" className="py-20 md:py-28 border-t border-border/60">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-2xl">
        What changes for the people in <Underline>your program</Underline>
      </h2>

      <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-14 gap-y-10">
        {outcomes.map(({ headline, body }, i) => (
          <div key={headline}>
            <span className="text-sm font-medium text-primary tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 text-lg md:text-xl font-semibold leading-snug">{headline}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BootcampOutcomes;
