import { Brain, BookOpen, Zap, Users, Presentation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aiImage from '@/assets/services-digital-learning.jpg';
import curriculumImage from '@/assets/services-curriculum-dev.jpg';
import developmentImage from '@/assets/services-collaboration.jpg';
import keynoteImage from '@/assets/services-keynote.jpg';

const Services = () => {
  const services = [
    {
      title: 'Professional Development Workshops',
      description: 'Help your instructors build confidence and skills that translate directly into better student outcomes. We focus on practical strategies teachers can use immediately.',
      icon: Zap,
      image: developmentImage,
      features: ['Teaching strategies that increase student engagement', 'Supporting students through career transitions', 'Using program data to improve instruction', 'Creating supportive learning environments']
    },
    {
      title: 'Curriculum Development',
      description: 'Build curricula that meet compliance requirements while giving students clear paths forward. We create materials your teachers will actually want to use.',
      icon: BookOpen,
      image: curriculumImage,
      features: ['Curricula that meet state and federal requirements', 'Clear skill progressions students can follow', 'Materials that connect learning to employment', 'Flexible resources that work across program types']
    },
    {
      title: 'Keynote Sessions',
      description: 'Bring fresh perspectives to your conferences and convenings. We share insights from the field that spark meaningful conversations about the future of adult education.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Opening and closing keynotes for state conferences', 'Interactive sessions that energize attendees', 'Honest conversations about what works', 'Practical takeaways for program improvement']
    },
    {
      title: 'Technology Integration Support',
      description: 'Make digital learning manageable for your staff and accessible for your students. We help programs use technology without the overwhelm.',
      icon: Brain,
      image: aiImage,
      features: ['Set up learning platforms that staff can manage', 'Track student progress more effectively', 'Expand student access through online options', 'Choose tools that fit your program reality']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Development</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional development that strengthens your programs from the inside out. We help your teams gain confidence, improve instruction, and see real results with learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border border-border/30 shadow-card bg-background hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;