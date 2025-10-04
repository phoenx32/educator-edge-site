import { Lightbulb, Workflow, Users, Presentation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aiImage from '@/assets/services-curriculum-dev.png';
import curriculumImage from '@/assets/services-curriculum-dev.jpg';
import developmentImage from '@/assets/services-professional-dev.png';
import keynoteImage from '@/assets/services-keynote-presentation.png';

const Services = () => {
  const services = [
    {
      title: 'Professional Development Cohorts',
      description: 'Our professional development cohorts help instructors build confidence and apply new tools and strategies that strengthen online and blended instruction. These multi-week experiences allow educators to learn collaboratively, test new approaches in their classrooms, and improve over time.',
      icon: Users,
      image: developmentImage,
      features: ['Getting Started with Online Learning', 'Integrating Digital Literacy', 'Math for Multi-Level Classrooms', 'Foundations of Artificial Intelligence for Teaching and Learning']
    },
    {
      title: 'Project Management',
      description: 'We support education and workforce initiatives from planning through implementation. Our work brings structure and clarity to complex projects that involve multiple partners and moving parts.',
      icon: Workflow,
      image: curriculumImage,
      features: ['Developing resources such as statewide guidance, training materials, and toolkits', 'Coordinating stakeholder engagement and communication', 'Conducting literature reviews, landscape scans, and needs assessments', 'Managing timelines, deliverables, and reporting for grant-funded projects']
    },
    {
      title: 'Keynote Sessions and Conference Workshops',
      description: 'We bring real-world perspectives from adult education, workforce development, and digital learning to state and national events. Our sessions connect current research with classroom and program practice, helping educators and leaders reflect, share, and plan for improvement.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Keynotes and panels on digital learning, AI, and workforce readiness', 'Interactive workshops that encourage dialogue across roles and regions', 'Case studies from statewide and community-based initiatives', 'Practical examples that support professional learning and system improvement']
    },
    {
      title: 'Curriculum Development',
      description: 'We work with educators and program leaders to design and adapt curriculum that reflects the realities of adult education and the modern workplace. Our approach integrates technology, digital tools, and flexible delivery models into instruction and program operations.',
      icon: Lightbulb,
      image: aiImage,
      features: ['Designing curriculum aligned with workforce and digital skills goals', 'Integrating online learning and blended instruction', 'Supporting digitized intake, onboarding, and learner data systems', 'Developing adaptable materials that connect learning to employment pathways']
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
            How We Support <span className="bg-gradient-primary bg-clip-text text-transparent">Educators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional development and project management that build your team's capacity and improve outcomes for students. We believe meaningful change comes from collaboration and thoughtful design. Our work blends research, technology, and practitioner insight to create solutions that are adaptable, inclusive, and built to sustain improvement over time.
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