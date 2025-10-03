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
      description: 'Evidence-based training for adult education instructors, career navigators, and program administrators. Available in-person and online.',
      icon: Zap,
      image: developmentImage,
      features: ['Student-centered teaching approaches', 'Career pathway counseling', 'Data-driven program improvement', 'Trauma-informed practices']
    },
    {
      title: 'Curriculum Development',
      description: 'Create practical curricula that meet state standards and student needs. Aligned to WIOA requirements and college and career readiness standards.',
      icon: BookOpen,
      image: curriculumImage,
      features: ['WIOA-aligned curriculum design', 'College and career readiness pathways', 'Integrated education and training models', 'Contextualized learning approaches']
    },
    {
      title: 'Conference Presentations',
      description: 'Engaging presentations for adult education conferences, state meetings, and professional development events. Research-based content with practical takeaways.',
      icon: Presentation,
      image: keynoteImage,
      features: ['State and national conference keynotes', 'Workshop facilitation', 'Panel discussions on best practices', 'Program evaluation and improvement']
    },
    {
      title: 'Technology Integration Training',
      description: 'Practical training to help adult educators use digital tools effectively in ESL, ABE, and HSE programs. Focus on tools that actually improve student outcomes.',
      icon: Brain,
      image: aiImage,
      features: ['Canvas and Google Classroom setup', 'Digital assessment and progress tracking', 'Online tutoring and support tools', 'Mobile-friendly learning resources']
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
            Evidence-based professional development designed specifically for adult education programs. We help educators implement practical strategies that improve student outcomes.
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