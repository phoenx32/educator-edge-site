import { useEffect } from 'react';
import { ArrowUpRight, MessageSquare, Users, FileText, Vote, SmilePlus, ClipboardList, BarChart3, Presentation } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Facilitation portfolio (Joey, 2026-11-20): the work sample CLP gives funders who ask how we run
 * convenings and gather stakeholder input. Built in the same style as the e-learning portfolio.
 * First sample: the stakeholder engagement behind the 2025 California Adult Education Digital
 * Learning Guidance with OTAN. All prompts and questions below are the ones used in that work.
 */

const stats = [
  { value: '60', label: 'advisors' },
  { value: '200', label: 'reviewers' },
  { value: '6', label: 'steps' },
  { value: '8', label: 'ways to give input' },
];

type Mode = 'Live' | 'On their own time' | 'Both';

const steps: { title: string; text: string; mode: Mode }[] = [
  { title: 'Pre-work', text: 'Everyone read the same chapter before meeting 1.', mode: 'On their own time' },
  { title: 'Advisory meeting 1', text: 'Small mixed groups on how they use the guidance.', mode: 'Live' },
  { title: 'Document review', text: 'Comments on the draft and a six-question review form.', mode: 'On their own time' },
  { title: 'Survey and research', text: 'A statewide survey and a literature review.', mode: 'On their own time' },
  { title: 'Advisory meeting 2', text: 'Advisors confirmed, challenged and ranked the themes.', mode: 'Live' },
  { title: 'Field sessions', text: 'Conference sessions on the revised guidance.', mode: 'Both' },
];

const meeting1 = [
  { title: 'Warm-up in the chat', who: 'Participants' },
  { title: 'Overview', who: 'Facilitators' },
  { title: 'Breakout rooms', who: 'Participants' },
  { title: 'Next steps', who: 'Facilitators' },
];

const breakoutQuestions = [
  'When have you referenced the guidance, or when could you have?',
  'What would make the guidance a go-to resource for you and your colleagues?',
  'If the guidance were only 10 pages long, what absolutely needs to be included?',
  'What digital learning strategies or tools do you already share with colleagues?',
];

const channels: { icon: typeof MessageSquare; title: string; when: 'Live' | 'On their own time' }[] = [
  { icon: MessageSquare, title: 'Chat warm-ups', when: 'Live' },
  { icon: Users, title: 'Breakout notes', when: 'Live' },
  { icon: SmilePlus, title: 'Emoji reactions', when: 'Live' },
  { icon: Vote, title: 'Polls', when: 'Live' },
  { icon: Presentation, title: 'Notice and wonder', when: 'Live' },
  { icon: FileText, title: 'Comments on the draft', when: 'On their own time' },
  { icon: ClipboardList, title: 'Chapter review form', when: 'On their own time' },
  { icon: BarChart3, title: 'Statewide survey', when: 'On their own time' },
];

const added = ['Artificial intelligence', 'Career navigation', 'Digital wallets', 'Universal design for learning', 'Learner well-being', 'Digital citizenship'];

const modeClass = (m: Mode) =>
  m === 'Live' ? 'bg-uc-en text-uc-en-foreground' : m === 'Both' ? 'bg-uc-in text-uc-in-foreground' : 'bg-uc-cp text-uc-cp-foreground';

const Eyebrow = ({ children }: { children: string }) => (
  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-uc-en-foreground">{children}</p>
);

const FacilitationPortfolio = () => {
  useEffect(() => {
    const before = document.title;
    document.title = 'Facilitation Portfolio · Community Learning Partners';
    return () => { document.title = before; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navigation page />
      </header>

      <main className="flex-1">
        {/* Intro and overview */}
        <section className="pt-14 pb-14 md:pt-20 md:pb-16">
          <div className="container mx-auto px-6">
            <h1 className="text-[36px] font-bold leading-tight tracking-tight text-foreground md:text-[48px]">Facilitation Portfolio</h1>
            <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              California Adult Education Digital Learning Guidance, revised with OTAN in 2025.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <li key={s.label} className="rounded-2xl bg-uc-en p-6">
                  <p className="text-[44px] font-bold leading-none tabular-nums text-uc-en-foreground md:text-[56px]">{s.value}</p>
                  <p className="mt-2 text-[15px] font-semibold text-foreground/80">{s.label}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[760px] text-[15px] leading-relaxed text-muted-foreground">
              For OTAN, the California Department of Education and the California Community Colleges Chancellor’s Office. January 2025 to June 2026. Advisors included state policymakers, local elected officials, educators and adult learners.
            </p>
          </div>
        </section>

        {/* Sequence */}
        <section aria-labelledby="sequence-title" className="border-t border-border bg-surface py-14 md:py-16">
          <div className="container mx-auto px-6">
            <Eyebrow>The engagement</Eyebrow>
            <h2 id="sequence-title" className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-foreground md:text-[32px]">Six steps</h2>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex flex-col rounded-xl border border-border bg-white p-4">
                  <span className="text-sm font-semibold tabular-nums text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-semibold leading-snug text-foreground">{s.title}</h3>
                  <p className="mt-1 flex-1 text-sm leading-snug text-muted-foreground">{s.text}</p>
                  <span className={`mt-3 self-start rounded-full px-2 py-0.5 text-xs font-semibold ${modeClass(s.mode)}`}>{s.mode}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Meeting 1 */}
        <section aria-labelledby="agenda-title" className="border-t border-border py-14 md:py-16">
          <div className="container mx-auto px-6">
            <Eyebrow>Sample agenda</Eyebrow>
            <h2 id="agenda-title" className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-foreground md:text-[32px]">Advisory meeting 1</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <ol className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col">
                {meeting1.map((a, i) => (
                  <li key={a.title} className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface text-sm font-semibold tabular-nums">{i + 1}</span>
                    <span className="font-semibold text-foreground">{a.title}</span>
                    <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-semibold ${a.who === 'Participants' ? 'bg-uc-cp text-uc-cp-foreground' : 'bg-surface text-muted-foreground'}`}>{a.who}</span>
                  </li>
                ))}
              </ol>
              <div className="rounded-2xl bg-uc-cp p-6 lg:col-span-8">
                <h3 className="font-semibold text-uc-cp-foreground">Breakout questions</h3>
                <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                  {breakoutQuestions.map((q, i) => (
                    <li key={i} className="rounded-lg bg-white p-4 text-[15px] leading-snug text-foreground shadow-sm">
                      <span className="mr-2 font-semibold tabular-nums text-uc-cp-foreground">Q{i + 1}</span>
                      {q}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to give input */}
        <section aria-labelledby="channels-title" className="border-t border-border bg-surface py-14 md:py-16">
          <div className="container mx-auto px-6">
            <Eyebrow>Ways to give input</Eyebrow>
            <h2 id="channels-title" className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-foreground md:text-[32px]">Five live, three on their own time</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.title} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                    <span className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${c.when === 'Live' ? 'bg-uc-en text-uc-en-foreground' : 'bg-uc-cp text-uc-cp-foreground'}`} aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-foreground">{c.title}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-uc-en" aria-hidden="true" />Live</span>
              <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-uc-cp" aria-hidden="true" />On their own time</span>
            </p>
          </div>
        </section>

        {/* Results */}
        <section aria-labelledby="results-title" className="border-t border-border py-14 md:py-16">
          <div className="container mx-auto px-6">
            <Eyebrow>Results</Eyebrow>
            <h2 id="results-title" className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-foreground md:text-[32px]">Added in the 2025 edition</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {added.map((a) => (
                <li key={a} className="rounded-full bg-uc-en px-4 py-2 text-[15px] font-semibold text-uc-en-foreground">{a}</li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-muted-foreground">
              Companion resources built with OTAN: a facilitator’s guide, one-page reader’s guides, a self-paced course and a ten-week cohort course.
            </p>
            <a
              href="https://otan.us/Resources/DigitalLearningGuidance"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Read the published guidance
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </section>
      </main>

      <Footer page />
    </div>
  );
};

export default FacilitationPortfolio;
