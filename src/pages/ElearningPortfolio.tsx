import { useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * E-learning portfolio (Joey, 2026-11-19): the link CLP gives funders who ask for work samples.
 * Same header and footer as the rest of the site. Each project shows a real screenshot, who it was
 * built for, and the design choices inside it. Samples 1 and 2 are static pages under
 * public/elearning-samples; sample 3 lives on SkillRise's site.
 */

type Tone = 'blue' | 'green' | 'brown';

type Project = {
  id: string;
  kind: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  features: { title: string; text: string }[];
  href: string;
  cta: string;
  tone: Tone;
  shots: { src: string; alt: string }[];
  phone?: boolean;
  thumb: string;
};

const TONES: Record<Tone, { ink: string; tint: string; dot: string }> = {
  blue: { ink: 'text-uc-en-foreground', tint: 'bg-uc-en', dot: 'bg-primary' },
  green: { ink: 'text-uc-cp-foreground', tint: 'bg-uc-cp', dot: 'bg-secondary' },
  brown: { ink: 'text-uc-in-foreground', tint: 'bg-uc-in', dot: 'bg-uc-in-foreground' },
};

const projects: Project[] = [
  {
    id: 'course-module',
    kind: 'Self-paced course module',
    title: 'Career Navigation in a Digital Economy',
    summary:
      'A six-lesson online module we built for the career navigation staff of a national workforce development partner. Learners work with labor market data, digital credentials, job search tools, AI and program dashboards, then finish with a written action plan.',
    facts: [
      { label: 'Built for', value: 'A national workforce development partner' },
      { label: 'Audience', value: 'Staff who coach adult learners and job seekers' },
      { label: 'Format', value: 'Fully online and self-paced, about 70 minutes' },
    ],
    features: [
      { title: 'Branching scenarios', text: 'Learners coach a job seeker through a conversation and see how each choice plays out.' },
      { title: 'Knowledge checks with retry', text: 'Each check explains why an answer is right or wrong, then lets the learner try again.' },
      { title: 'Hands-on practice tools', text: 'A research tool, an AI prompt builder and a data dashboard put each skill to work.' },
      { title: 'Short sections', text: 'Content opens one section at a time as the learner moves forward.' },
      { title: 'Saved progress', text: 'The course remembers where each learner stopped and which lessons are done.' },
      { title: 'Personal action plan', text: 'The last lesson turns the learner’s choices into a plan they can use at work.' },
      { title: 'Accessible by design', text: 'Keyboard and screen reader support, WCAG AA contrast, and layouts that fit phones.' },
    ],
    href: '/elearning-samples/career-navigation/',
    cta: 'Open the course module',
    tone: 'blue',
    shots: [{ src: '/media/elearning-samples/career-navigation.webp', alt: 'Lesson 3 of the Career Navigation module: an interactive LinkedIn profile with numbered parts and notes on each' }],
    thumb: '/media/elearning-samples/career-navigation-thumb.webp',
  },
  {
    id: 'peer-learning',
    kind: 'Cohort learning platform',
    title: 'AI Leadership Academy',
    summary:
      'A ten-week cohort course we built for a national partner and a national community of adult educators. Live sessions sit alongside self-paced work, so administrators build an AI project for their own program and get feedback from peers and a coach in one place. Visitors see the course as it runs, with learner names and organizations redacted.',
    facts: [
      { label: 'Built for', value: 'A national partner and its adult educator community' },
      { label: 'Audience', value: 'Adult education administrators and program leaders' },
      { label: 'Format', value: 'Blended over ten weeks: live sessions and self-paced project work' },
    ],
    features: [
      { title: 'Project gallery', text: 'Learners publish their projects, post updates and give feedback, and filter the gallery by program, focus and AI tool.' },
      { title: 'Peers on the same problem', text: 'Each project points to similar ones, so learners find colleagues working on the same thing.' },
      { title: 'Walkthroughs and demos', text: 'Step-by-step walkthroughs and short demos show AI tools on real adult education tasks.' },
      { title: 'Cohort chat', text: 'One course-wide chat, sorted into questions, ideas, challenges and wins.' },
      { title: 'One-on-one coaching', text: 'Each learner books a session at the point it helps most: brainstorming, feedback or planning what comes next.' },
      { title: 'A clear weekly rhythm', text: 'The home page shows the week, the next live session and what is coming, with recordings and slides after each session.' },
    ],
    href: 'https://academy.communitylearningpartners.com/',
    cta: 'Open the course',
    tone: 'green',
    phone: true,
    shots: [
      { src: '/media/elearning-samples/academy-home.webp', alt: 'The AI Leadership Academy home page on a phone, with the week, a project card and the next live session' },
      { src: '/media/elearning-samples/academy-gallery.webp', alt: 'The AI Leadership Academy project gallery on a phone, with 100 projects and goal statements' },
    ],
    thumb: '/media/elearning-samples/academy-gallery.webp',
  },
  {
    id: 'mobile-story',
    kind: 'Mobile interactive story',
    title: 'Skills-Based Hiring Micro-Learning',
    summary:
      'A short, phone-first story we built for SkillRise, an ISTE initiative for adult learning and workforce programs. It shows how people build skills at school, at work, while volunteering and on their own, and how digital credentials make those skills visible to employers.',
    facts: [
      { label: 'Built for', value: 'SkillRise, an ISTE initiative' },
      { label: 'Audience', value: 'Adult learners, job seekers and the staff who support them' },
      { label: 'Format', value: 'Mobile micro-learning in short story segments' },
    ],
    features: [
      { title: 'Character-driven stories', text: 'Learners pick one of four people and follow how their skills came from work, school and life.' },
      { title: 'Learner choices', text: 'Quick polls, skill picks and story choices let learners answer and steer what comes next.' },
      { title: 'Made for phones', text: 'Short screens and large tap targets suit a few spare minutes.' },
      { title: 'Reflection on your own skills', text: 'Prompts ask learners to name skills from their own work, school and life.' },
      { title: 'Credentials in context', text: 'Digital credentials appear inside the stories, tied to a real job search.' },
    ],
    href: 'https://mle.skillrise.org/skills',
    cta: 'Open the story',
    tone: 'brown',
    phone: true,
    shots: [
      { src: '/media/elearning-samples/skillrise-open.webp', alt: 'Opening screen of the SkillRise story on a phone' },
      { src: '/media/elearning-samples/skillrise-story.webp', alt: 'An illustrated story screen showing two people at a work site' },
    ],
    thumb: '/media/elearning-samples/skillrise-story.webp',
  },
];

const external = (href: string) => href.startsWith('http');

/** A screenshot in a plain browser window. */
const BrowserShot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="overflow-hidden rounded-t-xl border border-b-0 border-foreground/10 bg-white shadow-[0_-8px_40px_-16px_hsl(215_30%_20%/0.35)]">
    <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3.5 py-2.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
    </div>
    <img src={src} alt={alt} width={1600} height={1000} loading="lazy" className="block h-auto w-full" />
  </div>
);

/** A screenshot in a phone outline. */
const PhoneShot = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`w-[46%] max-w-[230px] rounded-[30px] border-[7px] border-foreground bg-foreground shadow-[0_-8px_40px_-16px_hsl(215_30%_20%/0.45)] ${className}`}>
    <img src={src} alt={alt} width={384} height={844} loading="lazy" className="block aspect-[384/844] w-full rounded-[23px] object-cover" />
  </div>
);

const ProjectSection = ({ p, n }: { p: Project; n: number }) => {
  const t = TONES[p.tone];
  const linkProps = { href: p.href, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <section id={p.id} aria-labelledby={`${p.id}-title`} className="scroll-mt-24 border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Words, always on the left */}
          <div className="lg:col-span-5">
            <p className={`flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] ${t.ink}`}>
              <span className="tabular-nums">{String(n).padStart(2, '0')}</span>
              <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
              {p.kind}
            </p>
            <h2 id={`${p.id}-title`} className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-foreground md:text-[34px]">
              {p.title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{p.summary}</p>

            <dl className="mt-6 divide-y divide-border border-y border-border">
              {p.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[96px_1fr] gap-4 py-3 text-[15px]">
                  <dt className="font-semibold text-muted-foreground">{f.label}</dt>
                  <dd className="text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>

            <a
              {...linkProps}
              className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {p.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          {/* Picture, always on the right: the screen rises out of a tinted panel and runs off its bottom edge */}
          <a
            {...linkProps}
            aria-label={`${p.cta}: ${p.title} (opens in a new tab)`}
            className={`group relative block aspect-[3/2] overflow-hidden rounded-2xl ${t.tint} px-6 pt-8 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-primary sm:px-10 sm:pt-10 lg:col-span-7`}
          >
            <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
              {p.phone ? (
                <div className="flex justify-center gap-5 sm:gap-8">
                  <PhoneShot src={p.shots[0].src} alt={p.shots[0].alt} className="mt-8" />
                  <PhoneShot src={p.shots[1].src} alt={p.shots[1].alt} />
                </div>
              ) : (
                <BrowserShot src={p.shots[0].src} alt={p.shots[0].alt} />
              )}
            </div>
          </a>
        </div>

        {/* Design features */}
        <div className="mt-14 md:mt-16">
          <h3 className="text-base font-semibold tracking-normal text-foreground">Instructional design features</h3>
          <ul className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <li key={f.title} className="flex gap-3.5">
                <span className={`mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full ${t.tint} ${t.ink}`} aria-hidden="true">
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
  );
};

const ElearningPortfolio = () => {
  useEffect(() => {
    const before = document.title;
    document.title = 'E-learning Portfolio · Community Learning Partners';
    return () => { document.title = before; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <Navigation page />
      </header>

      <main className="flex-1">
        <section className="pt-14 pb-14 md:pt-20 md:pb-20">
          <div className="container mx-auto px-6">
            <h1 className="text-[36px] font-bold leading-tight tracking-tight text-foreground md:text-[48px]">E-learning Portfolio</h1>
            <p className="mt-4 max-w-[640px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              Courses and learning platforms Community Learning Partners designed and built for national partners in adult education and workforce development.
            </p>

            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {projects.map((p, i) => {
                const t = TONES[p.tone];
                return (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow duration-200 hover:shadow-[0_14px_34px_-14px_hsl(200_40%_30%/0.35)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-3 focus-visible:outline-primary"
                    >
                      <span className={`hidden h-36 overflow-hidden md:block ${t.tint}`} aria-hidden="true">
                        <img
                          src={p.thumb}
                          alt=""
                          className={p.phone ? 'mx-auto mt-4 w-28 rounded-t-xl border-x-4 border-t-4 border-foreground' : 'ml-6 mt-5 w-[118%] max-w-none rounded-tl-lg border-l border-t border-foreground/10 shadow-sm'}
                        />
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

        {projects.map((p, i) => (
          <ProjectSection key={p.id} p={p} n={i + 1} />
        ))}
      </main>

      <Footer page />
    </div>
  );
};

export default ElearningPortfolio;
