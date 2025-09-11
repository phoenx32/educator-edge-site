import { Brain, BookOpen, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aiImage from '@/assets/services-ai.jpg';
import curriculumImage from '@/assets/services-curriculum.jpg';
import developmentImage from '@/assets/services-development.jpg';

const Services = () => {
  const services = [
    {
      title: 'AI Integration & Digital Tools',
      description: 'Transform your educational approach with cutting-edge AI technologies and digital tools that enhance learning outcomes and streamline instruction.',
      icon: Brain,
      image: aiImage,
      features: ['AI-powered learning analytics', 'Automated content creation', 'Personalized learning paths', 'Smart assessment tools']
    },
    {
      title: 'Curriculum Development',
      description: 'Build comprehensive, engaging curricula that meet modern educational standards and leverage digital innovation for maximum impact.',
      icon: BookOpen,
      image: curriculumImage,
      features: ['Standards-aligned content', 'Interactive digital materials', 'Assessment strategies', 'Learning outcome tracking']
    },
    {
      title: 'Professional Development',
      description: 'Empower educators with the skills and knowledge needed to excel in digital learning environments and modern teaching methodologies.',
      icon: Zap,
      image: developmentImage,
      features: ['Hands-on workshops', 'Ongoing coaching support', 'Certification programs', 'Best practice sharing']
    },
    {
      title: 'Resource Development',
      description: 'Create custom educational resources and materials that support diverse learning styles and enhance student engagement.',
      icon: Users,
      image: curriculumImage,
      features: ['Custom content creation', 'Multimedia resources', 'Accessibility compliance', 'Multi-format delivery']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            ✨ Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Education Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end professional development services that bridge the gap between traditional education and digital innovation.
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