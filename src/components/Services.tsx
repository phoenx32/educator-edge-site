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
      title: 'Technology Integration Training',
      description: 'Help adult educators integrate digital tools and AI into ESL, ABE, and HSE classrooms. Hands-on training for practical classroom applications.',
      icon: Brain,
      image: aiImage,
      features: ['Learning management systems', 'Digital assessment tools', 'Online classroom platforms', 'Educational apps and software']
    },
    {
      title: 'Curriculum Development',
      description: 'Develop curricula for adult education programs including ESL, Adult Basic Education, and High School Equivalency preparation.',
      icon: BookOpen,
      image: curriculumImage,
      features: ['ESL curriculum design', 'ABE program materials', 'HSE test preparation', 'Workforce readiness modules']
    },
    {
      title: 'Educator Training Workshops',
      description: 'Professional development workshops for adult education instructors, administrators, and support staff in classroom and online formats.',
      icon: Zap,
      image: developmentImage,
      features: ['Teaching methodology', 'Student engagement strategies', 'Assessment techniques', 'Program evaluation']
    },
    {
      title: 'Keynote Presentations',
      description: 'Conference presentations and talks on adult education, workforce development, and technology integration for educational events.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Conference keynotes', 'Workshop presentations', 'Panel discussions', 'Educational leadership topics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Development</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Training and support for adult educators teaching ESL, ABE, HSE, and workforce development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-card bg-gradient-card hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
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
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;