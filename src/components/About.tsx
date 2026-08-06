import { ArrowLeftRight, Users, BookOpen, Star, TrendingUp, Lightbulb, Heart } from 'lucide-react';
import AnimatedStat from './AnimatedStat';
import DesignCycle from './DesignCycle';

const About = () => {
  const values = [
    {
      icon: ArrowLeftRight,
      title: 'Shared Learning',
      description: 'We learn alongside our partners through practice, reflection, and collaboration.'
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'Our learning environments foster mutual growth and collective capacity-building.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Improvement',
      description: 'We iterate, test ideas in practice, and refine through ongoing reflection.'
    }
  ];

  return (
    <section id="about" className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        {/* Design Cycle Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="section-badge-secondary inline-flex mb-4">
            <Lightbulb size={16} />
            Our Approach
          </div>
          <h2 className="mb-6">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Continuous Improvement</span> Cycle
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Learning is never finished. We build, test, gather feedback, reflect, revise, and set new goals—bringing lifelong learning and design thinking into the daily work of education.
          </p>
          
          {/* Design Cycle Animation */}
          <DesignCycle />
        </div>

        {/* Values Section */}
        <div className="text-center mb-8">
          <div className="section-badge-primary inline-flex">
            <Heart size={16} />
            Our Values
          </div>
        </div>

        {/* Values Cards - Horizontal on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {values.map((value, index) => (
            <div key={index} className="p-5 md:p-6 bg-background rounded-xl border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <div className="p-3 bg-primary/10 rounded-lg text-primary inline-flex mb-4">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 lg:mt-20 p-6 md:p-8 lg:p-10 bg-primary/5 border border-primary/10 rounded-2xl">
          <div className="text-center content-gap-sm">
            <div className="section-badge-primary justify-center mx-auto">
              <TrendingUp size={16} />
              Our Impact
            </div>
            <h2 className="mb-4">By the Numbers</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Working together to support educators and learners across the country.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
            <AnimatedStat 
              value={100} 
              suffix="+" 
              label="Adult education providers, state agencies, and community organizations"
              colorClass="text-primary"
            />
            <AnimatedStat 
              value={3000} 
              suffix="+" 
              label="Adult education teachers, career navigators, and administrators"
              colorClass="text-secondary"
            />
            <AnimatedStat 
              value={20000} 
              suffix="+" 
              label="Adult learners supported through our programs"
              colorClass="text-accent"
            />
            <AnimatedStat 
              value={2} 
              suffix="+" 
              label="Hours saved per week through skills learned in courses"
              colorClass="text-primary"
            />
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-yellow-500" />
                ))}
              </div>
              <div className="text-muted-foreground text-sm">4.9/5 Course Evaluation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;