import { useEffect } from 'react';
import BootcampNav from '@/components/bootcamp/BootcampNav';
import BootcampHero from '@/components/bootcamp/BootcampHero';
import BootcampProgram from '@/components/bootcamp/BootcampProgram';
import BootcampLogistics from '@/components/bootcamp/BootcampLogistics';
import BootcampProof from '@/components/bootcamp/BootcampProof';
import BootcampFaq from '@/components/bootcamp/BootcampFaq';
import Footer from '@/components/Footer';

const TITLE = 'AI for Adult Education Administrators Bootcamp | COABE & CLP';
const DESCRIPTION =
  'A ten-week, project-based online bootcamp for adult education administrators. Build a practical AI-supported resource for a priority in your program. $350.';

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

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <BootcampNav />
      <main>
        <BootcampHero />
        <BootcampProgram />
        <BootcampLogistics />
        <BootcampProof />
        <BootcampFaq />
      </main>
      <Footer />
    </div>
  );
};

export default Bootcamp;
