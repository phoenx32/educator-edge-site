import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Check, Play } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * NAWDP AI Virtual Academy companion page (2026-11-22): the link in CLP's proposal to NAWDP.
 * Same layout as /elearning-samples. Sample 1 is the participant website, a static page under
 * public/aiforum/demo. Sample 2 is a recorded training session on COABE's YouTube channel.
 */

type Tone = 'blue' | 'green';

const TONES: Record<Tone, { ink: string; tint: string }> = {
  blue: { ink: 'text-uc-en-foreground', tint: 'bg-uc-en' },
  green: { ink: 'text-uc-cp-foreground', tint: 'bg-uc-cp' },
};

const DEMO_HREF = '/aiforum/demo';
const VIDEO_ID = 'Inh0c_Qdwa8';
const VIDEO_HREF = `https://youtu.be/${VIDEO_ID}`;

const space = {
  id: 'participant-space',
  kind: 'Participant website',
  title: 'The academy website',
  summary:
    'Participants use this website before, during and after each of the eight live sessions. It holds session materials and recordings, a shared library of walkthroughs and demos, and a way to find peers working on the same problems. It follows the website we built for the AI Leadership Academy with COABE, where 120 adult education leaders from 76 organizations share what they are building.',
  note: 'A short tour explains each part. Names, messages and data in the sample are fictional.',
  facts: [
    { label: 'Built for', value: 'Workforce professionals in the NAWDP AI Virtual Academy' },
    { label: 'Format', value: 'Eight live sessions, with materials before and after each one' },
    { label: 'Afterward', value: 'Stays online as a read-only library of what participants built' },
  ],
  features: [
    { title: 'Before, live and after', text: 'Each session page has a short warm-up, the live session with its conversation beside the materials, and what to take back to work.' },
    { title: 'Practice on everyday tasks', text: 'Prompts to try on case notes, job leads and outreach, with a checklist for catching the tool’s mistakes.' },
    { title: 'Demos from participants', text: 'Anyone can share a short demo of something they tried, and others reply with what worked in their own program.' },
    { title: 'A lab board', text: 'During the tools lab, people post what worked and what didn’t, so the group learns from every attempt.' },
    { title: 'A library that stays', text: 'Walkthroughs, demos and articles, filtered by session and tool, remain online after the academy ends.' },
    { title: 'Finding peers', text: 'A people directory and topic channels help participants find colleagues in similar roles. Email stays private until both people agree to connect.' },
  ],
  tone: 'blue' as Tone,
};

const video = {
  id: 'recorded-session',
  kind: 'Recorded training session',
  title: 'Building Custom Dashboards with AI and Google Sheets',
  summary:
    'One of our training sessions from COABE’s AI Virtual Summit on October 6, 2026, published on COABE’s YouTube channel. It shows how to build a custom dashboard in Google Sheets with help from AI. In the academy, Session 3 uses the same kind of build for a simple caseload dashboard.',
  facts: [
    { label: 'Recorded at', value: 'COABE AI Virtual Summit, October 2026' },
    { label: 'Published by', value: 'COABE, on YouTube' },
    { label: 'In the academy', value: 'Session 3, AI Tools for Case Management' },
  ],
  tone: 'green' as Tone,
};

const Kicker = ({ n, kind, tone }: { n: number; kind: string; tone: Tone }) => (
  <p className={`flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] ${TONES[tone].ink}`}>
    <span className="tabular-nums">{String(n).padStart(2, '0')}</span>
    <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
    {kind}
  </p>
);

const Facts = ({ facts }: { facts: { label: string; value: string }[] }) => (
  <dl className="mt-6 divide-y divide-border border-y border-border">
    {facts.map((f) => (
      <div key={f.label} className="grid grid-cols-[112px_1fr] gap-4 py-3 text-[15px]">
        <dt className="font-semibold text-muted-foreground">{f.label}</dt>
        <dd className="text-foreground">{f.value}</dd>
      </div>
    ))}
  </dl>
);

const Cta = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    {label}
    <ArrowUpRight size={18} aria-hidden="true" />
    <span className="sr-only">(opens in a new tab)</span>
  </a>
);

const AiForum = () => {
  useEffect(() => {
    const before = document.title;
    document.title = 'NAWDP AI Virtual Academy · Community Learning Partners';
    return () => { document.title = before; };
  }, []);

  const index = [
    { id: space.id, kind: space.kind, title: space.title, tone: space.tone, thumb: true },
    { id: video.id, kind: video.kind, title: video.title, tone: video.tone, thumb: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navigation page />
      </header>

      <main className="flex-1">
        <section className="pt-14 pb-14 md:pt-20 md:pb-20">
          <div className="container mx-auto px-6">
            <h1 className="text-[36px] font-bold leading-tight tracking-tight text-foreground md:text-[48px]">NAWDP AI Virtual Academy</h1>
            <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              Two samples that go with our proposal: the website participants would use across the academy, and a recording of one of our training sessions.
            </p>
            <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-muted-foreground">
              The academy builds on AI learning we have designed with COABE, Goodwill Industries International, ISTE+ASCD and Google, and with state partners OTAN in California, TCALL in Texas and TCSG in Georgia.
            </p>

            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:max-w-[860px]">
              {index.map((p, i) => {
                const t = TONES[p.tone];
                return (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow duration-200 hover:shadow-[0_14px_34px_-14px_hsl(200_40%_30%/0.35)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-primary"
                    >
                      <span className={`hidden h-36 overflow-hidden md:block ${t.tint}`} aria-hidden="true">
                        {p.thumb ? (
                          <img
                            src="/media/aiforum/participant-space-thumb.webp"
                            alt=""
                            className="ml-6 mt-5 w-[118%] max-w-none rounded-tl-lg border-l border-t border-foreground/10 shadow-sm"
                          />
                        ) : (
                          <span className="grid h-full place-items-center">
                            <span className={`grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm ${t.ink}`}>
                              <Play size={22} className="ml-0.5" fill="currentColor" />
                            </span>
                          </span>
                        )}
                      </span>
                      <span className="flex flex-1 items-start justify-between gap-3 p-4">
                        <span>
                          <span className={`block text-xs font-semibold uppercase tracking-[0.12em] ${t.ink}`}>
                            {String(i + 1).padStart(2, '0')} · {p.kind}
                          </span>
                          <span className="mt-1.5 block font-semibold leading-snug text-foreground">{p.title}</span>
                        </span>
                        <ArrowDown size={18} className="mt-0.5 flex-none text-muted-foreground transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 01: the participant website */}
        <section id={space.id} aria-labelledby={`${space.id}-title`} className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Kicker n={1} kind={space.kind} tone={space.tone} />
                <h2 id={`${space.id}-title`} className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
                  {space.title}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{space.summary}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{space.note}</p>
                <Facts facts={space.facts} />
                <Cta href={DEMO_HREF} label="Open the academy website" />
              </div>

              <a
                href={DEMO_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the academy website (opens in a new tab)"
                className={`group relative block aspect-[3/2] overflow-hidden rounded-2xl ${TONES[space.tone].tint} px-6 pt-8 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-10 sm:pt-10 lg:col-span-7`}
              >
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
                  <div className="overflow-hidden rounded-t-xl border border-b-0 border-foreground/10 bg-white shadow-[0_-8px_40px_-16px_hsl(215_30%_20%/0.35)]">
                    <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3.5 py-2.5" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                    </div>
                    <img
                      src="/media/aiforum/participant-space.webp"
                      alt="Home page of the sample academy website: the day's schedule with a live session, and notes from other participants"
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-14 md:mt-16">
              <h3 className="text-base font-semibold tracking-normal text-foreground">Instructional design features</h3>
              <ul className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {space.features.map((f) => (
                  <li key={f.title} className="flex gap-3.5">
                    <span className={`mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full ${TONES[space.tone].tint} ${TONES[space.tone].ink}`} aria-hidden="true">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="font-semibold leading-snug text-foreground">{f.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02: the recorded training session */}
        <section id={video.id} aria-labelledby={`${video.id}-title`} className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Kicker n={2} kind={video.kind} tone={video.tone} />
                <h2 id={`${video.id}-title`} className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
                  {video.title}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{video.summary}</p>
                <Facts facts={video.facts} />
                <Cta href={VIDEO_HREF} label="Watch on YouTube" />
              </div>

              <div className={`rounded-2xl ${TONES[video.tone].tint} p-4 sm:p-8 lg:col-span-7`}>
                <div className="aspect-video overflow-hidden rounded-xl bg-foreground shadow-[0_14px_40px_-18px_hsl(215_30%_20%/0.5)]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
                    title={`Video: ${video.title}`}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="block h-full w-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer page />
    </div>
  );
};

export default AiForum;
