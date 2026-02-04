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
      tagline: 'Support staff growth',
      description: 'Multi-week learning experiences that support educators in applying new tools, testing strategies, and improving instruction. Cohorts are collaborative, practical, and customizable to local needs.',
      icon: Users,
      image: developmentImage,
      features: ['Getting Started with Online Learning', 'Integrating Digital Literacy', 'Math for Multi-Level Classrooms', 'Foundations of AI for Teaching and Learning', 'Custom Course Development']
    },
    {
      id: 'project-management',
      title: 'Project Management',
      shortTitle: 'Project Management',
      tagline: 'Move initiatives from plans to practice',
      description: 'We support initiatives from concept through implementation, applying adult learning principles to project management. Our work builds internal capacity while supporting collaboration, reflection, and shared ownership.',
      icon: Workflow,
      image: projectManagementImage,
      features: ['Statewide guidance, toolkits, and training', 'Stakeholder engagement and communication', 'Literature reviews, scans, and needs assessments', 'Timeline, deliverables, and grant reporting support']
    },
    {
      id: 'keynotes',
      title: 'Keynotes and Conference Workshops',
      shortTitle: 'Keynotes & Workshops',
      tagline: 'Turn complexity into action',
      description: 'We share insights from adult learning, workforce development, and edtech at state and national events. Sessions connect research to practice and create space for reflection and planning.',
      icon: Presentation,
      image: keynoteImage,
      features: ['Keynotes and panels on digital learning, AI, and readiness', 'Interactive workshops across roles and regions', 'Case studies from local and statewide efforts', 'Examples that support system-level improvement']
    },
    {
      id: 'curriculum',
      title: 'Curriculum Development and Instructional Design',
      shortTitle: 'Curriculum & Design',
      tagline: 'Build effective digital learning',
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
      
      {/* Two-column layout: Text left, Image right aligned to top */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Text content */}
        <div className="flex-1">
          <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
          
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Image - Aligned to top */}
        <div className="md:w-80 flex-shrink-0 self-start order-first md:order-last">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-48 md:h-72 object-cover rounded-xl shadow-lg"
          />
        </div>
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
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="professional-development" className="flex flex-col">
              {/* Tab Row - Grid Layout */}
              <TabsList className="grid grid-cols-4 h-auto bg-transparent p-0 gap-0 rounded-none">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex flex-col items-start gap-1 px-5 py-4 rounded-none 
                      bg-transparent border border-border/40 
                      first:rounded-tl-xl last:rounded-tr-xl 
                      transition-all duration-200
                      hover:bg-card/50 hover:shadow-sm hover:scale-[1.02]
                      data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:shadow-md data-[state=active]:z-10 data-[state=active]:relative"
                  >
                    <div className="flex items-center gap-2">
                      <service.icon className="w-5 h-5" />
                      <span className="font-semibold text-sm">{service.shortTitle}</span>
                    </div>
                    <span className="text-xs opacity-80 text-left">{service.tagline}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Content Card - Connected to tabs */}
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="-mt-px p-8 bg-card border border-border/40 border-t-border/40 rounded-b-2xl shadow-lg min-h-[420px] data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
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
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-3">
                      <service.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-left">{service.shortTitle}</span>
                    </div>
                    <span className="text-xs opacity-70 ml-8">{service.tagline}</span>
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
