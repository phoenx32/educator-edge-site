import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RegisterButton, WebinarLink } from './RegisterButton';
import { Underline } from './Underline';

const faqs = [
  { q: 'Who is this for?', a: 'Adult education administrators and program leaders: directors, state staff, professional development coordinators, data and accountability staff, instructional leaders, and anyone else working on program-level priorities. COABE membership is not required.' },
  { q: 'Do I need previous AI experience, or any technical background?', a: 'No. There is no coding and no prerequisite experience. The course is built to support a wide range of starting points.' },
  { q: 'What will I create?', a: 'A project connected to your own role and program priorities \u2014 recruitment, orientation, data, staff resources, workflows, planning, grants, evaluation, or something else you choose. Participants do not all build the same thing.' },
  { q: 'Is the course completely online?', a: 'The course itself is: the project work and resources are asynchronous, and the optional live sessions and coaching happen on Zoom. There is also a local layer \u2014 we encourage you to pilot your project in your own program, get feedback from staff and students, and bring what you learn back to the cohort. That part happens where you work.' },
  { q: 'How much time should I plan each week?', a: 'About one hour. Some participants spend more if they choose a larger project or involve a broader team.' },
  { q: 'Are the live sessions required?', a: 'No. The opening, midpoint, and closing sessions are optional and all are recorded. Times are chosen with the cohort by poll after registration.' },
  { q: 'How does coaching work?', a: 'Every participant has access to individual coaching from a course facilitator. Coaching can focus on choosing a project, planning, selecting tools, reviewing work in progress, or planning local implementation.' },
  { q: 'What AI tools will be used?', a: 'Every tool used in the course is free to use \u2014 some offer paid advanced tiers, but none are required. Examples include ChatGPT, Claude, NotebookLM, Gemini, and AI agents, with specific tools chosen to fit the projects in the cohort.' },
  { q: 'How is privacy and responsible use handled?', a: 'Privacy, accuracy, accessibility, transparency, and human review are part of building each project. Follow your own organizational policies, and do not enter protected or confidential information into tools that have not been approved for it.' },
  { q: 'Will I receive a certificate?', a: 'Yes. Participants who complete the core activities, develop a project tied to a local priority, and submit a final project summary receive a certificate of completion from COABE and Community Learning Partners. Attending the live sessions is not required.' },
  { q: 'Can I work with colleagues?', a: 'Yes, and it is encouraged. Each person who wants full access, coaching, and a certificate registers separately.' },
  { q: 'What does it cost, and can I cancel?', a: '$350 per participant, paid by credit card or purchase order. There are no group discounts, and registrations are final \u2014 refunds and cancellations are not available.' },
];

const BootcampFaq = () => (
  <>
    <section id="faq" className="py-20 md:py-28 border-t border-border/60">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Questions</h2>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-sm text-muted-foreground">
          Something else?{' '}
          <a href="mailto:hello@communitylearningpartners.com" className="text-primary underline underline-offset-4">
            hello@communitylearningpartners.com
          </a>
        </p>
      </div>
    </section>

    <section id="register" className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          Artificial Intelligence for <Underline>Adult Education Administrators</Underline>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          October 5 through the week of November 30, 2026. About an hour a week, online, $350.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <RegisterButton />
          <WebinarLink />
        </div>
      </div>
    </section>
  </>
);

export default BootcampFaq;
