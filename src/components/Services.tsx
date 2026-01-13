import { Lightbulb, Workflow, Users, Presentation, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';
import aiImage from '@/assets/services-curriculum-dev-new.png';
import developmentImage from '@/assets/services-professional-dev.png';
import keynoteImage from '@/assets/services-keynote-presentation.png';
import projectManagementImage from '@/assets/services-project-management.jpg';

const Services = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      id: 'professional-development',
      title: 'Professional Development Cohorts',
      shortTitle: 'Professional Development',
      description: 'Multi-week learning experiences that support educators in applying new tools, testing strategies, and improving instruction. Cohorts are collaborative, practical, and customizable to local needs.',
      icon: Users,
      image: developmentImage,
      features: ['Getting Started with Online Learning', 'Integrating Digital Literacy', 'Math for Multi-Level Classrooms', 'Foundations of AI for Teaching and Learning', 'Custom Course Development']
    },
    {
      id: 'project-management',
      title: 'Project Management',
      shortTitle: 'Project Management',
      description: 'We support initiatives from concept through implementation, applying adult learning principles to project management. Our work builds internal capacity while supporting collaboration, reflection, and shared ownership.',
      icon: Workflow,
      image: projectManagementImage,
      features: ['Statewide guidance, toolkits, and training', 'Stakeholder engagement and communication', 'Literature reviews, scans, and needs assessments', 'Timeline, deliverables, and grant reporting support']
    },
    {
      id: 'keynotes',
      title: 'Keynotes and Conference Workshops',
      shortTitle: 'Keynotes & Workshops',
      description: 'We share insights from adult learning, workforce development, and edtech at state and national events. Sessions connect research to practice and create space for reflection and planning.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Keynotes and panels on digital learning, AI, and readiness', 'Interactive workshops across roles and regions', 'Case studies from local and statewide efforts', 'Examples that support system-level improvement']
    },
    {
      id: 'curriculum',
      title: 'Curriculum Development and Instructional Design',
      shortTitle: 'Curriculum & Design',
      description: 'We collaborate with programs to design flexible, modern learning materials that align with workforce needs and digital delivery. Services range from content design to media production.',
      icon: Lightbulb,
      image: aiImage,
      features: ['Curriculum aligned to workforce and digital skills', 'Modules in Articulate Rise and similar platforms', 'Graphic and AI-assisted media creation', 'Online/blended learning design', 'Materials linked to career pathways']
    }
  ];

  const ServiceContent = ({ service }: { service: typeof services[0] }) => (
    <div className="h-full">
      {/* Title - Full Width with Icon */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
        <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
        {service.title}
      </h3>
      
      {/* Float Layout: Image floats right, text wraps naturally */}
      <div className="relative">
        {/* Image - Floats right on desktop, full width on mobile */}
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full md:w-72 md:h-72 h-48 object-cover rounded-xl shadow-lg mb-4 md:mb-0 md:ml-6 md:float-right"
        />
        
        {/* Text content wraps around floated image */}
        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-foreground/80">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
    </div>
  );

  return (
    <section id="services" className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <Sparkles size={16} />
            Our Services
          </div>
          <h2 className="mb-6">
            How We Support <span className="bg-gradient-primary bg-clip-text text-transparent">Educators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We help educators and institutions design, deliver, and sustain high-quality learning experiences for adults. Our services include curriculum development, professional learning, technology integration, and project management.
          </p>
        </div>

        {/* Desktop: Horizontal Tabbed Interface */}
        {!isMobile ? (
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="professional-development" className="flex flex-col">
              {/* Horizontal Tab Row */}
              <TabsList className="flex flex-row h-auto bg-transparent p-0 justify-center gap-8 mb-8 border-b border-border/30 pb-4">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex flex-col items-center gap-2 px-4 py-3 rounded-none bg-transparent border-b-2 border-transparent transition-all duration-200
                      data-[state=active]:border-b-primary data-[state=active]:text-primary
                      data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground"
                  >
                    <service.icon className="w-6 h-6" />
                    <span className="font-medium text-sm whitespace-nowrap">{service.shortTitle}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Content Card */}
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="mt-0 p-8 bg-card border border-border/40 rounded-2xl shadow-lg min-h-[400px] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
                >
                  <ServiceContent service={service} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          /* Mobile: Accordion Interface */
          <Accordion type="single" collapsible className="space-y-3">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border border-border/30 rounded-xl bg-card shadow-card overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-primary [&[data-state=open]]:text-primary-foreground">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-left">{service.shortTitle}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <ServiceContent service={service} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="text-center mt-12 md:mt-16">
          <Button size="lg" asChild>
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
