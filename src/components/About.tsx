import { CheckCircle, ArrowLeftRight, Users, BookOpen, Star, Zap, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: ArrowLeftRight,
      title: 'Shared Learning',
      description: 'We are all teachers, and we are all students. Everyone brings experience and insight that strengthens the collective learning process.'
    },
    {
      icon: Users,
      title: 'Inclusive Growth',
      description: 'Varied skill levels and backgrounds are an asset. We build learning environments that value every participant\'s perspective and create space for mutual growth.'
    },
    {
      icon: BookOpen,
      title: 'Lifelong Learning',
      description: 'We see learning as ongoing work. As new tools and practices emerge, we explore them together, applying what we learn to improve teaching and program design.'
    }
  ];

  const achievements = [
    'Multi-week professional development cohorts',
    'Peer learning through shared inquiry and dialogue',
    'Edtech coaching to support classroom practice and reflection',
    'Flexible pathways tailored to educator roles and needs',
    'Technology integration through practice and reflection'
  ];

  return (
    <section id="about" className="section-spacing bg-muted/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-badge-secondary">
              <Zap size={16} />
              Our Approach
            </div>
            <h2 className="mb-6">
              Professional Development <span className="bg-gradient-primary bg-clip-text text-transparent">Grounded in How Adults Learn</span>
            </h2>
            <p className="text-lg text-muted-foreground content-gap-sm leading-relaxed">
              We design professional development aligned with how adults learn. Our work is grounded in research showing that lasting improvement happens when educators have time to try new strategies, learn through peer dialogue, and reflect on their practice. We create sustained learning experiences that allow for experimentation, collaboration, and continuous growth.
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
            <h3 className="mb-4">Our Impact</h3>
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