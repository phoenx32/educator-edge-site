import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky header: announcement banner + navigation */}
      <header className="sticky top-0 z-50">
        {/* AI Leadership Academy announcement banner */}
        <Link
          to="/bootcamp"
          className="group block w-full bg-muted border-b border-border py-2 md:py-3"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-x-1.5 md:gap-x-2 text-sm md:text-base text-foreground">
              <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-medium truncate sm:hidden">AI Leadership Academy — Starting Oct 12</span>
              <span className="hidden sm:inline font-medium">Introducing the AI Leadership Academy for Adult Education Administrators</span>
              <span className="hidden sm:inline text-muted-foreground">| Starting October 12, 2026 |</span>
              <span className="hidden sm:inline font-medium text-primary group-hover:underline">Learn more and Register!</span>
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </div>
          </div>
        </Link>

        <Navigation />
      </header>

      <Hero />
      <Services />
      <Clients />
      <About />
      <Testimonials />
      <Team />

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
