import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * AI Virtual Academy proposal companion site (2026-11-22). Same layout and type as /elearning-samples.
 * Sample 1 is the participant website, a static page under public/aiforum/demo.
 * Sample 2 is a recorded training session on COABE's YouTube channel.
 */

const DEMO_HREF = '/aiforum/demo';
const VIDEO_ID = 'Inh0c_Qdwa8';
const VIDEO_HREF = `https://youtu.be/${VIDEO_ID}`;
const VIDEO_TITLE = 'Building Custom Dashboards with AI and Google Sheets';

const Kicker = ({ n, label, ink }: { n: number; label: string; ink: string }) => (
  <p className={`flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] ${ink}`}>
    <span className="tabular-nums">{String(n).padStart(2, '0')}</span>
    <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
    {label}
  </p>
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
    document.title = 'AI Virtual Academy · Community Learning Partners';
    return () => { document.title = before; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navigation page />
      </header>

      <main className="flex-1">
        <section className="pt-14 pb-14 md:pt-20 md:pb-16">
          <div className="container mx-auto px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-uc-en-foreground">Proposal companion site</p>
            <h1 className="mt-3 text-[36px] font-bold leading-tight tracking-tight text-foreground md:text-[48px]">AI Virtual Academy</h1>
            <p className="mt-4 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              This page has a working sample of the academy’s participant website and a recording of a training session we led.
            </p>
          </div>
        </section>

        {/* 01: the academy website */}
        <section id="academy-website" aria-labelledby="academy-website-title" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Kicker n={1} label="Participant website" ink="text-uc-en-foreground" />
                <h2 id="academy-website-title" className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
                  Tour the participant website
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">
                  The academy will meet for eight live sessions, and participants will use the participant website before, during and after each one. Before a session, they’ll try a short AI activity using a task from their own job. During the live session, they’ll ask questions and share ideas in a chat that sits beside the slides and examples. Afterward, they’ll post short demos of what they made in the session and get feedback from peers in similar roles.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">
                  When the academy ends, the website will stay online as a library of everything participants made.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  Opening the website starts a short guided tour of each part. The people, messages and data on the website are fictional.
                </p>
                <Cta href={DEMO_HREF} label="Open the participant website" />
              </div>

              <a
                href={DEMO_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the participant website (opens in a new tab)"
                className="group relative block aspect-[3/2] overflow-hidden rounded-2xl bg-uc-en px-6 pt-8 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-10 sm:pt-10 lg:col-span-7"
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
                      alt="Home page of the sample participant website, with the day’s schedule, a live session and notes from participants"
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* 02: the recorded training session */}
        <section id="recorded-session" aria-labelledby="recorded-session-title" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Kicker n={2} label="Recorded session" ink="text-uc-cp-foreground" />
                <h2 id="recorded-session-title" className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
                  {VIDEO_TITLE}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">
                  We led this session at the Coalition on Adult Basic Education’s AI Virtual Summit on October 6, 2026. In Session 3 of the academy, participants will use AI tools to build a caseload dashboard of their own in Google Sheets or Excel.
                </p>
                <Cta href={VIDEO_HREF} label="Watch on YouTube" />
              </div>

              <div className="rounded-2xl bg-uc-cp p-4 sm:p-8 lg:col-span-7">
                <div className="aspect-video overflow-hidden rounded-xl bg-foreground shadow-[0_14px_40px_-18px_hsl(215_30%_20%/0.5)]">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0`}
                    title={`Video: ${VIDEO_TITLE}`}
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
