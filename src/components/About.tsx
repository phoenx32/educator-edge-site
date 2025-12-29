import { CheckCircle, ArrowLeftRight, Users, BookOpen, Star, Zap, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: ArrowLeftRight,
      title: 'Shared Learning',
      description: 'We learn alongside our partners. Practice, reflection, and collaboration create shared understanding and drive ongoing improvement in our work.'
    },
    {
      icon: Users,
      title: 'Collaborative Growth',
      description: 'We value the diverse experiences of every participant. Our learning environments foster mutual growth, shared insight, and collective capacity-building.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Improvement',
      description: 'Learning is never finished. Our approach is iterative, grounded in trying ideas, testing them in practice, and refining through reflection. We apply these same principles to teaching, program design, and systems change.'
    }
  ];

  const achievements = [
    'Multi-week professional development cohorts',
    'Peer learning through inquiry and dialogue',
    'Edtech coaching focused on classroom application',
    'Flexible pathways aligned to educator roles and needs',
    'Technology integration through iterative practice'
  ];

  return (
    <section id="about" className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-badge-secondary">
              <Zap size={16} />
              Our Approach
            </div>
            <h2 className="mb-6">
              Professional Development <span className="bg-gradient-primary bg-clip-text text-transparent">Rooted in How Adults Learn</span>
            </h2>
            <p className="text-lg text-muted-foreground content-gap-sm leading-relaxed">
              Our learning experiences are designed around the core principles of adult learning: reflection, relevance, and collaboration. We provide structure for educators to explore new strategies, engage in peer dialogue, and apply what they learn in practice.
            </p>
            <p className="text-lg text-muted-foreground content-gap-sm leading-relaxed">
              The result is not just training, but sustained development that supports real-world application and long-term growth.
            </p>

            <div className="space-y-3 content-gap-sm">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-5">
            <div className="section-badge-accent mb-4">
              <Lightbulb size={16} />
              Our Values
            </div>
            {values.map((value, index) => (
              <div key={index} className="p-5 md:p-6 bg-background rounded-xl border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">100+</div>
              <div className="text-muted-foreground text-sm">Adult education providers, state agencies, and community organizations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">3,000+</div>
              <div className="text-muted-foreground text-sm">Adult education teachers, career navigators, and administrators</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-accent">20,000+</div>
              <div className="text-muted-foreground text-sm">Adult learners supported through our programs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">2+</div>
              <div className="text-muted-foreground text-sm">Hours saved per week through skills learned in courses</div>
            </div>
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