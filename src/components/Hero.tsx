import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-adult-learning.jpg';

const Hero = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span>Adult Education & Workforce Development</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Professional Development for</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Adult Educators</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Practical professional development for adult educators. We provide training, curriculum development, and consultation services for adult learning, higher education, and workforce development programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-muted-foreground text-sm">Adult Education Providers</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-1">3,000+</div>
                <div className="text-muted-foreground text-sm">Educators Supported</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">20,000+</div>
                <div className="text-muted-foreground text-sm">Adult Learners Impacted</div>
              </div>
            </div>
          </div>

          {/* Right Image/Card */}
          <div className="relative">
            <div className="relative bg-gradient-subtle rounded-2xl p-8 shadow-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-4 -translate-x-4"></div>
              
              <img
                src={heroImage}
                alt="Adult educators in professional development session"
                className="w-full h-[400px] object-cover rounded-xl shadow-card"
              />
              
              <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-elegant">
                <div className="text-sm text-muted-foreground mb-1">Course Rating</div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Based on educator feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;