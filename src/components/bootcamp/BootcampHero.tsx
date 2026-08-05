import { RegisterButton, WebinarLink } from './RegisterButton';
import { Underline } from './Underline';
import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.jpg';

const facts = [
  { label: 'Dates', value: 'Oct 5 – Nov 30, 2026' },
  { label: 'Weekly time', value: 'About 1 hour' },
  { label: 'Format', value: 'Online, mostly on your own schedule' },
  { label: 'Prerequisites', value: 'None' },
  { label: 'Cost', value: '$350' },
];

const BootcampHero = () => (
  <section id="top" className="pt-32 md:pt-44 pb-14 md:pb-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
          An online course for adult education administrators
        </p>

        <h1 className="mt-5 text-3xl md:text-[3.25rem] md:leading-[1.08] font-bold tracking-tight">
          Artificial Intelligence for Adult Education Administrators
        </h1>

        <p className="mt-6 text-base md:text-xl text-muted-foreground leading-relaxed">
          A ten-week professional development course for adult education administrators. About an hour a week, with
          facilitator support, developing <Underline>one project for your own program</Underline>.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <RegisterButton />
          <WebinarLink />
        </div>
      </div>

      <dl className="mt-14 md:mt-16 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-5 gap-y-6 border-y border-border/60 py-6">
        {facts.map(({ label, value }) => (
          <div key={label} className="px-4 text-center md:border-r md:border-border/60 md:last:border-r-0">
            <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
            <dd className="mt-1.5 text-sm font-medium leading-snug">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Presented by</p>
        <div className="flex items-center gap-8">
          <img src={coabeLogo} alt="COABE, Coalition on Adult Basic Education" className="h-9 md:h-10 w-auto object-contain" />
          <span className="h-8 w-px bg-border" aria-hidden="true" />
          <img src={clpLogo} alt="Community Learning Partners" className="h-20 md:h-24 w-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default BootcampHero;
