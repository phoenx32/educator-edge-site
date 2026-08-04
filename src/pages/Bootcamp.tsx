import { useEffect } from 'react';
import BootcampNav from '@/components/bootcamp/BootcampNav';
import BootcampHero from '@/components/bootcamp/BootcampHero';
import BootcampOutcomes from '@/components/bootcamp/BootcampOutcomes';
import BootcampProject from '@/components/bootcamp/BootcampProject';
import BootcampIncludes from '@/components/bootcamp/BootcampIncludes';
import BootcampSchedule from '@/components/bootcamp/BootcampSchedule';
import BootcampWebinar from '@/components/bootcamp/BootcampWebinar';
import BootcampPricing from '@/components/bootcamp/BootcampPricing';
import BootcampFacilitators from '@/components/bootcamp/BootcampFacilitators';
import BootcampFaq from '@/components/bootcamp/BootcampFaq';
import BootcampStickyCta from '@/components/bootcamp/BootcampStickyCta';
import Footer from '@/components/Footer';

const TITLE = 'Artificial Intelligence for Adult Education Administrators | COABE & CLP';
const DESCRIPTION =
  'An online course for adult education administrators. About an hour a week, individual coaching, and one project built around a priority in your program. $350.';

const Bootcamp = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', DESCRIPTION);

    // Unlisted page: reachable by direct URL only, kept out of search results.
    const robots = document.createElement('meta');
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'noindex, nofollow');
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta?.setAttribute('content', previousDescription);
      robots.remove();
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <BootcampNav />
      <main className="pb-20">
        <BootcampHero />
        <BootcampOutcomes />
        <BootcampProject />
        <BootcampIncludes />
        <BootcampSchedule />
        <BootcampWebinar />
        <BootcampPricing />
        <BootcampFacilitators />
        <BootcampFaq />
      </main>
      <Footer />
      <BootcampStickyCta />
    </div>
  );
};

export default Bootcamp;
