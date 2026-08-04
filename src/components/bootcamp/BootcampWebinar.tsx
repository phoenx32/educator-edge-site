import { Button } from '@/components/ui/button';
import { WEBINAR_URL } from './RegisterButton';

const BootcampWebinar = () => (
  <section id="webinar-register" className="border-t border-border/60">
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p className="text-sm font-semibold">Not sure yet? Come to the free info webinar.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            One hour on September 17, before the cohort starts. See the course, meet the facilitators, ask anything.
          </p>
        </div>
        <Button variant="outline" asChild className="flex-shrink-0">
          <a href={WEBINAR_URL}>Save my seat</a>
        </Button>
      </div>
    </div>
  </section>
);

export default BootcampWebinar;
