import { CheckCircle, Target, Lightbulb, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Sustained & Context-Specific',
      description: 'Professional development designed for implementation over time, not one-time events. We create space for educators to apply new practices, reflect, and refine with support.'
    },
    {
      icon: Lightbulb,
      title: 'Peer Learning & Coaching',
      description: 'Learning happens through shared inquiry and collaboration. Participants engage with trusted colleagues in emotionally safe environments with non-evaluative feedback.'
    },
    {
      icon: CheckCircle,
      title: 'Flexible & Differentiated',
      description: 'Non-linear pathways that meet educators where they are. Participants explore topics relevant to their role and setting, at a pace that allows for meaningful change.'
    }
  ];

  const achievements = [
    'Multi-week professional development cohorts',
    'Coaching-based learning with peer collaboration',
    'Flexible pathways tailored to educator roles',
    'Project management for sustained initiatives',
    'Technology integration through practice and reflection'
  ];

  return (
    <section id="about" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/5 border border-secondary/10 rounded-full text-secondary text-sm font-medium mb-6">
              🎯 Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Development <span className="bg-gradient-primary bg-clip-text text-transparent">Grounded in How Adults Learn</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We design professional development that respects how adults learn. Our work is grounded in research showing that meaningful change happens when educators have time to apply new practices, reflect with peers, and receive non-evaluative support. We create sustained learning experiences—not one-off workshops—that allow for experimentation, feedback, and continuous growth.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-background rounded-xl border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300">
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
        <div className="mt-20 p-8 bg-primary/5 border border-primary/10 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Making a Real Impact</h3>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence drives measurable results for educators and learners alike.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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