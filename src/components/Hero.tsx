import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-digital-learning.png';

const Hero = () => {
  return (
    <section className="bg-background pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-badge-primary mb-8">
            <GraduationCap size={16} />
            Adult Education and Workforce Development
          </div>
          
          <div className="grid lg:grid-cols-[1fr,240px] gap-8 items-start">
            <div className="max-w-2xl lg:max-w-none">
              <h1 className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl font-semibold lg:whitespace-nowrap">
                We are <span className="italic">all teachers</span>. We are <span className="italic">all students</span>.
              </h1>

              <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed max-w-2xl">
                Come build the <span className="relative inline-block font-semibold">
                  future
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 120 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,6 Q60,2 120,6 L125,4" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span> of teaching and learning in the <span className="text-primary font-semibold">digital age</span>.
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                We design digital learning solutions that help educators, learners, and communities thrive. Our work bridges technology and teaching to make education more human, connected, and accessible for everyone.
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

            <div className="hidden lg:block -ml-8 mt-8">
              <img 
                src={heroImage} 
                alt="Digital learning and adult education technology illustration"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;