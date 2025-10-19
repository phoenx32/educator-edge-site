import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-adult-learning.jpg';
import badgeImage from '@/assets/badge-professional-development.png';

const Hero = () => {
  return (
    <section className="bg-background pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Desktop layout - side by side */}
          <div className="hidden lg:flex lg:gap-12 lg:items-center">
            {/* Main Content */}
            <div className="flex-1">
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

            {/* Badge - larger on desktop */}
            <div className="w-[450px]">
              <img
                src={badgeImage}
                alt="Adult Education Professional Development"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            <div className="section-badge-primary">
              <GraduationCap size={16} />
              <span>Adult Education & Workforce Development</span>
            </div>
            
            <h1 className="mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Professional Development for Adult Educators</span>
            </h1>

            {/* Small mobile: badge as subtle background. Tablet: side by side */}
            <div className="relative mb-6">
              {/* Background badge on small mobile only */}
              <div className="absolute inset-0 flex items-center justify-end sm:hidden pointer-events-none">
                <img
                  src={badgeImage}
                  alt=""
                  className="w-[180px] h-auto object-contain opacity-15"
                />
              </div>

              {/* Content wrapper for tablet layout */}
              <div className="relative sm:flex sm:gap-4 sm:items-center">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed sm:flex-[0_0_65%]">
                  We help educators use technology to expand access and improve learning outcomes. Our work connects research, classroom practice, and digital innovation to create meaningful professional development experiences. By focusing on how adults learn, we support instructors and program leaders in building skills that make online, blended, and technology-supported instruction more accessible and effective.
                </p>

                {/* Badge visible on tablet+ */}
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <img
                    src={badgeImage}
                    alt="Adult Education Professional Development"
                    className="w-full h-auto object-contain max-w-[200px]"
                  />
                </div>
              </div>
            </div>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;