import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
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
      <Navigation />

      {/* AI Leadership Academy announcement banner */}
      <Link
        to="/bootcamp"
        className="block w-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-b border-border/50 py-2.5 md:py-3 hover:from-primary/10 hover:via-secondary/10 hover:to-accent/10 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base text-foreground">
            <Sparkles className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
            <span className="font-medium">Introduce the AI Leadership Academy for Adult Education Administrators</span>
            <span className="text-muted-foreground">| Starting October 12, 2026 |</span>
            <span className="font-medium text-primary">Learn more and Register!</span>
            <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
          </div>
        </div>
      </Link>

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
