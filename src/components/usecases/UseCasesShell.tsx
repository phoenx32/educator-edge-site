import { ReactNode, useEffect } from 'react';
import BootcampNav from '@/components/bootcamp/BootcampNav';
import Footer from '@/components/Footer';
import AcademyCallout from './AcademyCallout';

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Page shell for the use-case pages: bootcamp nav, content measure, closing CTA, footer. */
const UseCasesShell = ({ title, description, children }: Props) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    const robots = document.createElement('meta');
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'noindex, nofollow');
    document.head.appendChild(robots);

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) meta?.setAttribute('content', previousDescription);
      robots.remove();
    };
  }, [title, description]);

  return (
    <div className="min-h-screen">
      <BootcampNav />
      <main className="pt-28 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {children}
          <AcademyCallout />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesShell;
