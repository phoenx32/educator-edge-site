import { useEffect } from 'react';
import { ArrowUpRight, Check, MessageSquare, Users, FileText, Vote, SmilePlus, ClipboardList, BarChart3, Presentation } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Facilitation portfolio (Joey, 2026-11-20): the work sample CLP gives funders who ask how we run
 * convenings and gather stakeholder input. Built in the same style as the e-learning portfolio.
 * First sample: the stakeholder engagement behind the 2025 California Adult Education Digital
 * Learning Guidance with OTAN. All prompts and questions below are the ones used in that work.
 */

const facts = [
  { label: 'Client', value: 'OTAN, for the California Department of Education and the California Community Colleges Chancellor’s Office' },
  { label: 'When', value: 'January 2025 to June 2026' },
  { label: 'Who took part', value: 'An advisory group of 60 subject matter experts and 200 reviewers from across California adult education' },
  { label: 'Our role', value: 'Planned and facilitated the engagement, synthesized the input and led the revision' },
];

type Step = { title: string; text: string; mode: 'Live' | 'On their own time' | 'Both' };

const steps: Step[] = [
  { title: 'Pre-work', text: 'Advisors skimmed one chapter of the existing guidance, so the first conversation started from their own reading.', mode: 'On their own time' },
  { title: 'Advisory meeting 1', text: 'Small mixed groups talked about how people use the guidance and what they need from it.', mode: 'Live' },
  { title: 'Document review', text: 'Advisors and reviewers marked up the draft in comment mode and completed a review form for the chapters closest to their work.', mode: 'On their own time' },
  { title: 'Survey and research', text: 'A statewide survey of technology use and a review of current research filled in what the group could not cover alone.', mode: 'On their own time' },
  { title: 'Advisory meeting 2', text: 'We shared back the themes from all of the input and asked advisors to confirm, challenge and rank them.', mode: 'Live' },
  { title: 'Field sessions', text: 'We shared the revised guidance at OTAN’s advisory committee and statewide conferences and asked participants to react.', mode: 'Both' },
];

type AgendaItem = { title: string; who: 'Participants' | 'Facilitators'; text: string };

const meeting1: AgendaItem[] = [
  {
    title: 'Warm-up in the chat',
    who: 'Participants',
    text: 'Two prompts anyone can answer in a line: “Describe the Digital Learning Guidance in one sentence” and “What is the last resource you shared with a colleague?”',
  },
  { title: 'Overview', who: 'Facilitators', text: 'The revision timeline and how advisor input will be used. This is the longest stretch of facilitator talk in the meeting.' },
  {
    title: 'Breakout rooms',
    who: 'Participants',
    text: 'Small mixed groups, each with a shared notes document and a note-taker who records the big ideas. Groups follow what matters to them and do not need to answer every question.',
  },
  { title: 'Next steps', who: 'Facilitators', text: 'What happens to the notes, what advisors will see next and how to join the document review.' },
];

const breakoutQuestions = [
  'When have you referenced the guidance in the past, or when could you have? Think of someone in adult education who might need it. Who are they, what are they trying to do, and how would it help?',
  'What would make the guidance a go-to resource for you and your colleagues? Consider structure, examples, tools and ease of use.',
  'If the guidance were only 10 pages long, what absolutely needs to be included?',
  'Set the guidance aside for a minute. What digital learning strategies or tools do you already use and share with colleagues? Should they be reflected in the guidance?',
];

type Channel = { icon: typeof MessageSquare; title: string; text: string; when: 'Live' | 'On their own time'; kind: 'Open text' | 'Quick response' | 'Both' };

const channels: Channel[] = [
  { icon: MessageSquare, title: 'Chat warm-ups', text: 'One-line answers that put each person’s experience in the room in the first few minutes.', when: 'Live', kind: 'Open text' },
  { icon: Users, title: 'Breakout conversations', text: 'Peer conversation across roles and organizations, recorded in a shared notes document.', when: 'Live', kind: 'Open text' },
  { icon: SmilePlus, title: 'Emoji reactions', text: 'Reactions placed directly on passages of the draft to show agreement or concern at a glance.', when: 'Live', kind: 'Quick response' },
  { icon: Vote, title: 'Polls', text: 'Participants chose the professional development they wanted next.', when: 'Live', kind: 'Quick response' },
  { icon: FileText, title: 'Comments on the draft', text: 'Line-by-line markup in comment mode, so feedback sits next to the words it is about.', when: 'On their own time', kind: 'Open text' },
  { icon: ClipboardList, title: 'Chapter review form', text: 'The same six questions for every chapter, mixing open text with yes or no items.', when: 'On their own time', kind: 'Both' },
  { icon: BarChart3, title: 'Statewide survey', text: 'A survey of technology use across the field, for people outside the advisory group.', when: 'On their own time', kind: 'Both' },
  { icon: Presentation, title: 'Notice and wonder', text: 'Side-by-side passages from the 2022 and 2025 editions, with the prompt “What do you notice? What do you wonder?”', when: 'Live', kind: 'Open text' },
];

const reviewForm = [
  'Is anything outdated or no longer relevant in this chapter?',
  'Is anything unclear or difficult to apply in practice?',
  'Are there specific examples, case studies, lesson plans or real-world stories that would make this section more actionable?',
  'Are there digital tools that should be added, or existing tools that need clearer explanations or examples?',
  'If you could change one thing in this section today to make it immediately more useful, what would it be?',
  'Would you be open to us including an example or story from your program in the updated guidance?',
];

const principles = [
  { title: 'Start from what people know', text: 'Every meeting opened with a prompt about participants’ own work, not with a presentation.' },
  { title: 'Peer learning in small groups', text: 'Most of each meeting was spent in breakouts where people from different roles and organizations talked with each other.' },
  { title: 'No single right answer', text: 'Prompts asked about experience and judgment, which made room for differing views.' },
  { title: 'Notes that add up', text: 'Each group wrote in a shared document, so input stayed in participants’ own words and could be combined across groups.' },
  { title: 'Less facilitator talk', text: 'Facilitators set up the work and handed the time to participants. The overview was the longest stretch of talk from the front.' },
  { title: 'Show people what we heard', text: 'Themes went back to participants before they went into the revision, so they could correct them.' },
];

const SectionHead = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => (
  <div className="max-w-[720px]">
    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-uc-en-foreground">{eyebrow}</p>
    <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-tight text-foreground md:text-[32px]">{title}</h2>
    {intro && <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{intro}</p>}
  </div>
);

/** An illustration of a shared board, using the perspectives, review questions and additions from the real engagement. */
const BoardPreview = () => {
  const columns = [
    { theme: 'Views to consider', notes: ['Teachers', 'Students', 'Administrators', 'Career navigators', 'Support staff'] },
    { theme: 'Reviewers asked', notes: ['What is outdated?', 'What is unclear?', 'What one change would help most?'] },
    { theme: 'Added in 2025', notes: ['Artificial intelligence', 'Career navigation', 'Learner well-being', 'Digital citizenship'] },
  ];
  const tones = ['bg-[#FFF4C2]', 'bg-[#DDF3E4]', 'bg-[#DCEBFA]'];
  return (
    <div className="overflow-hidden rounded-t-xl border border-b-0 border-foreground/10 bg-white shadow-[0_-8px_40px_-16px_hsl(215_30%_20%/0.35)]" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">Shared notes board (illustration)</span>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
        {columns.map((c, i) => (
          <div key={c.theme} className="rounded-lg bg-surface p-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">{c.theme}</p>
            <div className="mt-2 space-y-2">
              {c.notes.map((n, j) => (
                <div
                  key={n}
                  className={`${tones[i]} rounded px-2 py-1.5 text-[11px] font-medium leading-snug text-foreground shadow-sm sm:text-[13px]`}
                  style={{ transform: `rotate(${((i + j) % 3) - 1}deg)` }}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
        {/* Intro */}
        <section className="pt-14 pb-14 md:pt-20 md:pb-16">
          <div className="container mx-auto px-6">
            <h1 className="text-[36px] font-bold leading-tight tracking-tight text-foreground md:text-[48px]">Facilitation Portfolio</h1>
            <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              How Community Learning Partners plans and runs convenings where the participants do most of the talking, and how we turn what they say into decisions and products.
            </p>
          </div>
        </section>

        {/* Sample overview */}
        <section aria-labelledby="otan-title" className="border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-uc-en-foreground">
                  <span className="tabular-nums">01</span>
                  <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
                  Statewide stakeholder engagement
                </p>
                <h2 id="otan-title" className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
                  California Adult Education Digital Learning Guidance
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">
                  OTAN asked us to revise the state’s framework for digital learning in adult education with the field rather than for it. We designed a sequence of live meetings and on-your-own-time reviews so state policymakers, local elected officials, educators and adult learners could each contribute in the way that fit their role and schedule.
                </p>
                <dl className="mt-6 divide-y divide-border border-y border-border">
                  {facts.map((f) => (
                    <div key={f.label} className="grid grid-cols-[112px_1fr] gap-4 py-3 text-[15px]">
                      <dt className="font-semibold text-muted-foreground">{f.label}</dt>
                      <dd className="text-foreground">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-uc-en px-6 pt-8 sm:px-10 sm:pt-10 lg:col-span-7">
                <BoardPreview />
              </div>
            </div>
          </div>
        </section>

        {/* Sequence */}
        <section aria-labelledby="sequence-title" className="border-t border-border bg-surface py-16 md:py-20">
          <div className="container mx-auto px-6">
            <SectionHead
              eyebrow="The engagement"
              title="Six steps, live and on participants’ own time"
              intro="Each activity built on the last. People who could not join a live meeting still had a full way to take part."
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="flex flex-col rounded-xl border border-border bg-white p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold tabular-nums text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        s.mode === 'Live' ? 'bg-uc-en text-uc-en-foreground' : s.mode === 'Both' ? 'bg-uc-in text-uc-in-foreground' : 'bg-uc-cp text-uc-cp-foreground'
                      }`}
                    >
                      {s.mode}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Meeting 1 agenda */}
        <section aria-labelledby="agenda-title" className="border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-6">
            <SectionHead
              eyebrow="Sample agenda"
              title="Advisory meeting 1"
              intro="Participants open the meeting and fill most of it. Facilitators set up the work and say what happens next."
            />
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <ol className="space-y-3 lg:col-span-5">
                {meeting1.map((a, i) => (
                  <li key={a.title} className="flex gap-4 rounded-xl border border-border bg-white p-4">
                    <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-surface text-sm font-semibold tabular-nums text-foreground">{i + 1}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-foreground">{a.title}</h3>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            a.who === 'Participants' ? 'bg-uc-cp text-uc-cp-foreground' : 'bg-surface text-muted-foreground'
                          }`}
                        >
                          {a.who}
                        </span>
                      </div>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{a.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="rounded-2xl bg-uc-cp p-6 sm:p-8 lg:col-span-7">
                <h3 className="text-lg font-semibold text-uc-cp-foreground">Breakout questions</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/80">
                  Groups consider the views of teachers, students, administrators, career navigators and support staff. None of the questions has one correct answer.
                </p>
                <ol className="mt-5 space-y-3">
                  {breakoutQuestions.map((q, i) => (
                    <li key={i} className="flex gap-3 rounded-lg bg-white p-4 text-[15px] leading-relaxed text-foreground shadow-sm">
                      <span className="font-semibold tabular-nums text-uc-cp-foreground">Q{i + 1}</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="mt-10 rounded-xl border border-border bg-surface p-5 md:p-6">
              <h3 className="font-semibold text-foreground">Advisory meeting 2</h3>
              <p className="mt-1.5 max-w-[860px] text-[15px] leading-relaxed text-muted-foreground">
                Each advisor shares one insight from their own review. Facilitators read back the themes from the breakout notes, review forms, survey and research, organized so advisors can find their own words. Groups then test the themes: which priorities are right, what is missing, and whether they would share the revised guidance with colleagues.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to contribute */}
        <section aria-labelledby="channels-title" className="border-t border-border bg-surface py-16 md:py-20">
          <div className="container mx-auto px-6">
            <SectionHead
              eyebrow="Ways to contribute"
              title="Eight ways to give input"
              intro="Some people think out loud, some write, and some need a quick way to react. We mixed live and on-your-own-time channels, and open text with quick responses."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.title} className="flex flex-col rounded-xl border border-border bg-white p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-uc-en text-uc-en-foreground" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-3 font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-muted-foreground">{c.text}</p>
                    <p className="mt-4 flex flex-wrap gap-1.5 text-xs font-semibold">
                      <span className={`rounded-full px-2 py-0.5 ${c.when === 'Live' ? 'bg-uc-en text-uc-en-foreground' : 'bg-uc-cp text-uc-cp-foreground'}`}>{c.when}</span>
                      <span className="rounded-full bg-surface px-2 py-0.5 text-muted-foreground">{c.kind}</span>
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="text-lg font-semibold text-foreground">The chapter review form</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  Every reviewer answered the same questions, so input from 200 people could be compared chapter by chapter. The last question invited programs to contribute their own stories.
                </p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                {reviewForm.map((q, i) => (
                  <li key={i} className="rounded-lg border border-border bg-white p-4 text-[15px] leading-relaxed text-foreground">
                    <span className="mr-2 font-semibold tabular-nums text-muted-foreground">{i + 1}.</span>
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section aria-labelledby="principles-title" className="border-t border-border py-16 md:py-20">
          <div className="container mx-auto px-6">
            <SectionHead eyebrow="Design choices" title="What guided the facilitation" />
            <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-uc-en text-uc-en-foreground" aria-hidden="true">
                    <Check size={15} strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-semibold leading-snug text-foreground">{p.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results */}
        <section aria-labelledby="results-title" className="border-t border-border bg-surface py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <SectionHead
                  eyebrow="Results"
                  title="What came out of it"
                  intro="The revised guidance was published in 2025. It added a chapter on artificial intelligence and new content on career navigation, digital wallets, universal design for learning, learner well-being and trauma-informed practice, and digital citizenship, along with new Voices from the Field from adult education programs."
                />
                <a
                  href="https://otan.us/Resources/DigitalLearningGuidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Read the published guidance
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <div className="lg:col-span-6">
                <h3 className="text-lg font-semibold text-foreground">Companion resources built with OTAN</h3>
                <ul className="mt-4 divide-y divide-border border-y border-border">
                  {[
                    ['Facilitator’s guide', 'Programs use it to lead their own staff sessions on each chapter.'],
                    ['Reader’s guides', 'One page per chapter.'],
                    ['Self-paced course', 'An online course on the guidance.'],
                    ['Ten-week cohort course', '26 of 44 enrolled educators completed a project for their own program in Spring 2026, rating the course 4.7 out of 5.'],
                  ].map(([t, d]) => (
                    <li key={t} className="grid grid-cols-[150px_1fr] gap-4 py-3 text-[15px]">
                      <span className="font-semibold text-foreground">{t}</span>
                      <span className="text-muted-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer page />
    </div>
  );
};

export default FacilitationPortfolio;
