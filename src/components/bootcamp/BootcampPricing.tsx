import { Check } from 'lucide-react';
import { RegisterButton, WebinarLink } from './RegisterButton';
import SectionShell from './SectionShell';

const includes = [
  'Ten weeks of course access',
  'Individual coaching on your project',
  'Three live cohort meetups plus two spotlight sessions, all optional and recorded',
  'Administrator spotlight talks',
  'Open working sessions with peers and facilitators',
  'Templates, examples, and planning resources',
  'Certificate of completion',
];

const BootcampPricing = () => (
  <SectionShell id="cost" index="05" label="Cost" width="3xl">
      <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="flex items-baseline gap-3">
          <span className="text-5xl md:text-6xl font-bold tracking-tight">$350</span>
          <span className="text-muted-foreground">per participant</span>
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {includes.map((i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2.25} />
              {i}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <RegisterButton className="w-full sm:w-auto" />
          <WebinarLink />
        </div>

        <p className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
          Pay by credit card or purchase order. Registrations are final &mdash; refunds, cancellations, and group
          discounts are not available. Working with colleagues is encouraged; each person who wants coaching and a
          certificate registers separately.
        </p>
      </div>
  </SectionShell>
);

export default BootcampPricing;
