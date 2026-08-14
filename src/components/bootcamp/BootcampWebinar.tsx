import { ArrowRight } from 'lucide-react';
import { WEBINAR_URL } from './RegisterButton';
import SectionShell from './SectionShell';

const BootcampWebinar = () => (
  <SectionShell id="webinar-register" size="sm">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-x-4 gap-y-2 text-center sm:text-left border-y border-border/60 py-5">
      <p className="text-sm">
        <span className="font-semibold">Free informational webinar</span>
        <span className="text-muted-foreground"> &mdash; Sep 2, 2026 at 3:00 PM Eastern Time / 12:00 PM Pacific Time. A one-hour overview of the course before the cohort begins.</span>
      </p>
      <a
        href={WEBINAR_URL}
        className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:underline flex-shrink-0"
      >
        Register for the webinar
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </SectionShell>
);

export default BootcampWebinar;
