import { Button } from '@/components/ui/button';
import { WEBINAR_URL } from './RegisterButton';

const BootcampWebinar = () => (
  <section id="webinar-register" className="border-t border-border/60">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p className="text-sm font-semibold">Free informational webinar &mdash; September 17, 2026</p>
          <p className="mt-1 text-sm text-muted-foreground">
            A one-hour overview of the course held before the cohort begins. Review the syllabus, meet the
            facilitators, and ask questions about fit for your program.
          </p>
        </div>
        <Button variant="outline" asChild className="flex-shrink-0">
          <a href={WEBINAR_URL}>Register for the webinar</a>
        </Button>
      </div>
    </div>
  </section>
);

export default BootcampWebinar;
