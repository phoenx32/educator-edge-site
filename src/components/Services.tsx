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
    <div className="flex flex-col h-full">
      {/* Title + Paragraph + Image row */}
      <div className="flex gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </div>
        
        <img 
          src={service.image} 
          alt={service.title}
          className="w-36 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
        />
      </div>
      
      {/* Bullet list below */}
      <ul className="space-y-3 mt-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-foreground/80">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
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

        {/* Desktop: Tabbed Interface */}
        {!isMobile ? (
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="professional-development" className="flex gap-8">
              <TabsList className="flex flex-col h-auto bg-transparent p-0 w-64 flex-shrink-0 gap-3">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="w-full justify-start gap-3 px-4 py-4 text-left rounded-lg border transition-all duration-200
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md
                      data-[state=inactive]:bg-card data-[state=inactive]:border-border/50 data-[state=inactive]:shadow-sm data-[state=inactive]:hover:bg-muted/50"
                  >
                    <service.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{service.shortTitle}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1">
                {services.map((service) => (
                <TabsContent
                    key={service.id}
                    value={service.id}
                    className="mt-0 p-6 bg-card border border-border/40 rounded-xl shadow-md min-h-[320px] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
                  >
                    <ServiceContent service={service} />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        ) : (
          /* Mobile: Accordion Interface */
          <Accordion type="single" collapsible defaultValue="professional-development" className="space-y-3">
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
