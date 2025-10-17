import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-adult-learning.jpg';
import badgeImage from '@/assets/badge-professional-development.png';

const Hero = () => {
  return (
    <section className="bg-background pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="section-badge-primary">
              <GraduationCap size={16} />
              <span>Adult Education & Workforce Development</span>
            </div>
            
            <h1 className="mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Professional Development for Adult Educators</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground content-gap-sm leading-relaxed">
              We help educators use technology to expand access and improve learning outcomes. Our work connects research, classroom practice, and digital innovation to create meaningful professional development experiences. By focusing on how adults learn, we support instructors and program leaders in building skills that make online, blended, and technology-supported instruction more accessible and effective.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

          {/* Right Image/Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-subtle rounded-2xl p-4 md:p-8 shadow-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-4 -translate-x-4"></div>
              
              <img
                src={badgeImage}
                alt="Adult Education Professional Development"
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;