import { useState } from 'react';
import { 
  Lightbulb, Workflow, Users, Presentation, Sparkles, FolderOpen,
  GraduationCap, Monitor, BookOpen, Target, BarChart3, FileText,
  Podcast, Rocket, Laptop, Award, Layers, Wrench, Smartphone, ExternalLink,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';
import aiImage from '@/assets/services-curriculum-dev-new.png';
import developmentImage from '@/assets/services-professional-dev.png';
import keynoteImage from '@/assets/services-keynote-presentation.png';
import projectManagementImage from '@/assets/services-project-management.jpg';

const portfolioItems: Record<string, { title: string; description: string; icon: LucideIcon; link?: string }[]> = {
  'professional-development': [
    { title: 'National Professional Learning Portfolio', description: 'Designed and delivered professional learning to 3,000+ educators across 100+ organizations, earning 4.9/5 satisfaction ratings.', icon: GraduationCap },
    { title: 'Statewide Staff Digital Skills Training', description: 'Built modular curricula and facilitator guides for a state agency, achieving 100% completion among participating staff.', icon: Monitor },
    { title: 'AI Professional Learning Series', description: 'Designed national AI-focused professional learning translating emerging technologies into applied practice for adult educators and workforce systems.', icon: Sparkles },
    { title: 'Digital Literacy Train-the-Trainer Toolkit', description: 'Built a comprehensive toolkit enabling statewide implementation across six content subareas with pacing guides, slide decks, and facilitator scripts.', icon: BookOpen }
  ],
  'project-management': [
    { title: '$2M+ National Digital Skills Initiative', description: 'Coordinated cross-functional teams producing national frameworks, curricula, and tools adopted by 40+ organizations. Improved course completion by ~40%.', icon: Target },
    { title: 'Data Infrastructure and Compliance Systems', description: 'Managed 24+ monthly reporting workflows tied to $3.5M+ in WIOA funding. Built dashboards that reduced attrition 10-25%.', icon: BarChart3 },
    { title: 'OTAN Digital Learning Guidance Update', description: 'Led revision of statewide Digital Learning Guidance, synthesizing field input, research, and policy into a practical framework.', icon: FileText, link: 'https://otan.us/Resources/DigitalLearningGuidance' },
    { title: 'National TA Podcast and Content Operations', description: 'Managed multi-stakeholder production of three podcast seasons and multi-format TA resources with structured editorial systems.', icon: Podcast },
    { title: "Louisiana's First Fully Remote Adult Education Program", description: "Designed the state's first remote model, growing enrollment from ~30 to 5,000+ learners across 15 colleges. Earned COABE State Innovation of the Year.", icon: Rocket },
    { title: 'Google Workspace Integration', description: 'Led integration into SIS platforms serving 15,000+ students across 15+ programs, increasing digital access and instructional consistency.', icon: Laptop },
    { title: 'Micro-Credentialing and Digital Credential Systems', description: 'Designed badging systems with reflection workflows and dashboards, improving skill articulation and program transparency.', icon: Award }
  ],
  'keynotes': [
    { title: 'Arizona Teachers N Technology Day', description: 'Keynote presentation on digital learning and technology integration for adult educators.', icon: Presentation },
    { title: 'North Carolina CCR Professional Development Days', description: 'Conference sessions connecting research to practice for college and career readiness.', icon: Users },
    { title: 'Applied Technology Workshops', description: 'Conference sessions on practical technology integration, including Desmos for teaching math, Google Sheets for data dashboards, and building digital intake systems to support adult education retention.', icon: Laptop },
    { title: 'AI and Digital Resilience in Adult Learning', description: 'Sessions exploring emerging approaches, including getting started with AI for higher education and non-linear learning models that nurture digital resilience and lifelong learning.', icon: Sparkles }
  ],
  'curriculum': [
    { title: 'SkillRise Digital Skills Framework', description: 'Designed a competency model translating workforce expectations into structured digital skills, adopted as a shared language across programs.', icon: Layers, link: 'https://skillrise.org/digital-skills' },
    { title: 'SkillRise MLE Interactive Skills Story', description: 'Led design and deployment of an interactive, mobile-friendly story for skill exploration and alignment to workforce pathways.', icon: Smartphone, link: 'https://mle.skillrise.org/skills' },
    { title: 'Goodwill Industries International Toolkits', description: 'Designed two national toolkits: a skills-based hiring course and a technical training development guide, scaled across a national network.', icon: Wrench },
    { title: 'Digital Literacy Curriculum', description: 'Co-designed a digital literacy curriculum with campus libraries, serving 500+ learners and contributing to ~40% increases in persistence.', icon: BookOpen }
  ]
};

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

  const PortfolioDialog = ({ serviceId }: { serviceId: string; serviceTitle: string }) => {
    const [activeTab, setActiveTab] = useState(serviceId);

    const activeService = services.find(s => s.id === activeTab);

    return (
      <Dialog onOpenChange={(open) => { if (open) setActiveTab(serviceId); }}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <FolderOpen className="w-4 h-4" />
            View Portfolio
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{activeService?.shortTitle ?? 'Portfolio'}</DialogTitle>
            <DialogDescription>Selected projects and outcomes</DialogDescription>
          </DialogHeader>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full h-auto bg-muted/50 p-1">
              {services.map(s => (
                <TabsTrigger key={s.id} value={s.id} className="flex items-center gap-2 py-2 text-xs">
                  <s.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.shortTitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(portfolioItems).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[400px]">
                  {items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="p-4 rounded-xl border border-border/60 bg-muted/30">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <ItemIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:text-primary/80 transition-colors"
                          >
                            View Resource <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  };

  const ServiceContent = ({ service }: { service: typeof services[0] }) => (
    <div className="h-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <PortfolioDialog serviceId={service.id} serviceTitle={service.title} />
        </div>
        <div className="md:w-80 flex-shrink-0 self-start">
          <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );

  const MobileServiceContent = ({ service }: { service: typeof services[0] }) => (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <service.icon className="w-6 h-6 text-primary flex-shrink-0" />
        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
      <ul className="space-y-2 mb-4">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-foreground/80 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mb-6">
        <PortfolioDialog serviceId={service.id} serviceTitle={service.title} />
      </div>
      <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-xl" />
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

        {!isMobile ? (
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="professional-development" className="flex flex-col">
              <TabsList className="grid grid-cols-4 h-auto bg-transparent p-0 gap-0 rounded-none">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex flex-col items-start gap-1 px-5 py-4 rounded-none bg-transparent border border-border/40 first:rounded-tl-xl last:rounded-tr-xl transition-all duration-200 hover:bg-card/50 data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:z-10 data-[state=active]:relative"
                  >
                    <div className="flex items-center gap-2">
                      <service.icon className="w-5 h-5" />
                      <span className="font-semibold text-sm">{service.shortTitle}</span>
                    </div>
                    <span className="text-xs opacity-80 text-left">{service.tagline}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="-mt-px p-6 bg-card border border-border/40 border-t-border/40 rounded-b-2xl data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:duration-300"
                >
                  <ServiceContent service={service} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        ) : (
          <div className="max-w-full mx-auto">
            <Tabs defaultValue="professional-development" className="flex flex-col">
              <TabsList className="grid grid-cols-4 h-auto bg-transparent p-0 gap-0 rounded-none">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center justify-center p-4 rounded-none bg-transparent border border-border/40 first:rounded-tl-xl last:rounded-tr-xl transition-all duration-200 hover:bg-card/50 data-[state=active]:bg-card data-[state=active]:border-b-transparent data-[state=active]:z-10 data-[state=active]:relative"
                  >
                    <service.icon className="w-5 h-5" />
                  </TabsTrigger>
                ))}
              </TabsList>
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className="-mt-px p-4 bg-card border border-border/40 border-t-border/40 rounded-b-2xl"
                >
                  <MobileServiceContent service={service} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
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
