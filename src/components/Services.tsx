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
      title: 'Professional Development Cohorts',
      description: 'Help your instructors build confidence and skills that translate directly into better student outcomes. Multi-week cohorts give educators time to try new strategies, learn through shared inquiry with peers, and refine their practice.',
      icon: Zap,
      image: developmentImage,
      features: ['Time to implement and reflect on new approaches', 'Learn through peer dialogue and collaboration', 'Flexible pacing that fits participant schedules', 'Focus on digital learning, distance education, and online instruction']
    },
    {
      title: 'Project Management',
      description: 'Keep your initiatives on track and your teams aligned. We help you manage complex projects from planning through implementation.',
      icon: BookOpen,
      image: curriculumImage,
      features: ['Strategic planning for program improvements', 'Managing grant-funded initiatives', 'Coordinating multi-stakeholder projects', 'Building systems that support sustainability']
    },
    {
      title: 'Keynote Sessions and Conference Workshops',
      description: 'Bring fresh perspectives to your conferences and convenings. We share insights from the field that spark meaningful conversations about the future of adult education.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Opening and closing keynotes for state conferences', 'Interactive sessions that energize attendees', 'Honest conversations about what works', 'Practical takeaways for program improvement']
    },
    {
      title: 'Curriculum Development',
      description: 'Build curricula that give students clear paths forward. We create materials your teachers will actually want to use.',
      icon: Brain,
      image: aiImage,
      features: ['Curricula that meet your program needs', 'Clear skill progressions students can follow', 'Materials that connect learning to employment', 'Flexible resources that work across program types']
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
            Professional development that builds your team's capacity and improves outcomes for students.
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant" asChild>
            <a href="https://calendar.app.google/SZwbrXx7TvHrrCZG8" target="_blank" rel="noopener noreferrer">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;