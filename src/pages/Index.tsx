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
          className="group block w-full bg-primary/10 border-b border-border py-2.5 md:py-3 hover:bg-primary/15 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base text-foreground">
              <Sparkles className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-medium">Introducing the AI Leadership Academy for Adult Education Administrators</span>
              <span className="text-muted-foreground hidden sm:inline">| Starting October 12, 2026 |</span>
              <span className="font-medium text-primary group-hover:underline">Learn more and Register!</span>
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
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
