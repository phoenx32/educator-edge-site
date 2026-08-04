import { RegisterButton, WebinarLink } from './RegisterButton';
import { Underline } from './Underline';
import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.jpg';

const meta = [
  'Oct 5 – Nov 30, 2026',
  '~1 hour per week',
  'Online',
  '$350',
];

const BootcampHero = () => (
  <section id="top" className="pt-32 md:pt-44 pb-16 md:pb-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
          A ten-week online course
        </p>

        <h1 className="mt-5 text-3xl md:text-[3.25rem] md:leading-[1.08] font-bold tracking-tight">
          Artificial Intelligence for Adult Education Administrators
        </h1>

        <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed">
          Spend an hour a week and leave with something your program actually uses &mdash; built around{' '}
          <Underline>a priority you choose</Underline>.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {meta.map((m, i) => (
            <li key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />}
              {m}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4">
          <RegisterButton />
          <WebinarLink />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Presented by</p>
          <div className="flex items-center gap-8">
            <img src={coabeLogo} alt="COABE, Coalition on Adult Basic Education" className="h-9 md:h-10 w-auto object-contain" />
            <span className="h-8 w-px bg-border" aria-hidden="true" />
            <img src={clpLogo} alt="Community Learning Partners" className="h-24 md:h-28 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BootcampHero;
