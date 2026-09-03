import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

/** Closing box on the use-case pages: sends readers back to the Academy page. */
const AcademyCallout = () => (
  <section className="mt-16 rounded-2xl border border-border bg-muted/30 px-6 py-7 md:px-8 md:py-8">
    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">What comes next</p>
    <h2 className="mt-2 text-xl md:text-2xl font-bold tracking-tight">
      The AI Leadership Academy
    </h2>
    <p className="mt-3 max-w-2xl text-sm md:text-[15px] text-muted-foreground leading-relaxed">
      These use cases are examples of the kind of project administrators build in the Academy: a ten-week
      professional development course where you develop one project for your own program, with coaching along
      the way.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
      <Button asChild>
        <Link to="/bootcamp">
          Learn more and register
          <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
      <p className="text-xs text-muted-foreground">Oct 12 &ndash; Dec 18, 2026 &middot; about an hour a week &middot; $350</p>
    </div>
  </section>
);

export default AcademyCallout;
