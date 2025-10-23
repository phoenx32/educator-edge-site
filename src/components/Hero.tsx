import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-background pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl font-normal">
            We are <span className="italic font-medium">all teachers</span>. We are <span className="italic font-medium">all students</span>.
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed max-w-2xl">
            Come build the <span className="relative inline-block font-semibold">
              future
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 120 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,2 Q60,5 120,2" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span> of teaching and learning in the <span className="text-primary font-semibold">digital age</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="https://calendar.app.google/WF7LJ74vmmK92THEA" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;