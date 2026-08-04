import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Mail, CalendarDays, Globe, Clock, Video, MessageSquareHeart, Sparkles, Award, DollarSign } from 'lucide-react';
import { RegisterButton } from './RegisterButton';

const faqs = [
  { q: 'Who can participate?', a: 'The bootcamp is open to adult education administrators, program leaders, state staff, professional development coordinators, data and accountability staff, instructional leaders, and others working on program-level priorities.' },
  { q: 'Is COABE membership required?', a: 'No. COABE membership is not required.' },
  { q: 'Is the bootcamp required for my job or role?', a: 'No. This is an optional professional learning opportunity for people who choose to explore how AI might support their work.' },
  { q: 'Do I need previous AI experience?', a: 'No. The bootcamp is designed to support participants with a range of experience levels.' },
  { q: 'Do I need coding or technical skills?', a: 'No coding or technical background is required.' },
  { q: 'What will I create?', a: 'Each participant will choose a project connected to their role, program, and local priorities. Projects may focus on recruitment, orientation, data, staff resources, workflows, planning, grants, evaluation, or another area selected by the participant.' },
  { q: 'Does everyone complete the same project?', a: 'No. Participants choose a project that fits their own program and responsibilities.' },
  { q: 'Can I work with colleagues on my project?', a: 'Yes. Participants are encouraged to involve colleagues and may work with a team on a shared project. Each person who wants full course access, coaching, and a certificate of completion should register separately.' },
  { q: 'How much time should I plan each week?', a: 'Approximately one hour per week. Participants may spend additional time if they choose a larger project or involve a broader team.' },
  { q: 'Is the bootcamp completely online?', a: 'Yes.' },
  { q: 'Are the live sessions required?', a: 'No. The opening, midpoint, and closing sessions are optional.' },
  { q: 'When will the live sessions take place?', a: 'Registered participants will receive a Doodle poll. Session times will be selected in collaboration with the group.' },
  { q: 'Will the live sessions be recorded?', a: 'Yes. All live sessions will be recorded.' },
  { q: 'How does coaching work?', a: 'Each participant will have access to individual coaching from a Community Learning Partners facilitator. Coaching can focus on project selection, planning, tool selection, work in progress, local implementation, or another question connected to the participant\u2019s project.' },
  { q: 'What AI tools will be used?', a: 'The bootcamp will introduce a range of tools based on the projects and interests of the cohort. Participants will decide which tools are useful and appropriate for their work.' },
  { q: 'Will I need to pay for AI software?', a: 'No. Every tool introduced will have a free version that participants can use. Some tools offer additional features through paid accounts, but a paid subscription is not required.' },
  { q: 'How will privacy and responsible use be addressed?', a: 'Participants will consider privacy, accuracy, accessibility, transparency, and human review as part of their project development. Participants should follow their own organizational policies and avoid entering protected or confidential information into tools that have not been approved for that use.' },
  { q: 'Will I receive a certificate?', a: 'Yes. Participants who complete the bootcamp requirements will receive a certificate of completion.' },
  { q: 'What is the registration fee?', a: 'Registration is $350 per participant.' },
  { q: 'Are group discounts available?', a: 'No.' },
  { q: 'What payment methods are accepted?', a: 'Registration can be paid by credit card or purchase order.' },
  { q: 'Can I cancel my registration or request a refund?', a: 'Registrations are final. Refunds and cancellations are not available.' },
];

const finalPoints = [
  { icon: CalendarDays, text: 'October 5 through the week of November 30, 2026' },
  { icon: Globe, text: 'Online and flexible' },
  { icon: Clock, text: 'Approximately one hour per week' },
  { icon: Video, text: 'Optional live sessions with recordings' },
  { icon: MessageSquareHeart, text: 'Individual coaching and personalized feedback' },
  { icon: Sparkles, text: 'Free AI tools' },
  { icon: Award, text: 'Certificate of completion' },
  { icon: DollarSign, text: '$350 per participant' },
];

const BootcampFaq = () => (
  <>
    <section id="faq" className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <HelpCircle size={16} />
            FAQ
          </div>
          <h2>Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm md:text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 text-primary" />
          Questions? Email{' '}
          <a href="mailto:hello@communitylearningpartners.com" className="text-primary hover:text-primary/80 transition-colors">
            hello@communitylearningpartners.com
          </a>
        </div>
      </div>
    </section>

    <section id="register" className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h2 className="mb-4">Develop a Resource for a Priority You Choose</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select a project that matters in your local context. Use the ten-week bootcamp to explore ideas, build a
          working resource, gather feedback, and decide how the work might continue within your program.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
          {finalPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
              <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="text-sm text-foreground leading-relaxed">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <RegisterButton label="Register for the AI for Adult Education Administrators Bootcamp" />
        </div>
      </div>
    </section>
  </>
);

export default BootcampFaq;
