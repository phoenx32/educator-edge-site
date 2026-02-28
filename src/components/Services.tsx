import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Lightbulb, Workflow, Users, Presentation, Sparkles, FolderOpen,
  GraduationCap, Monitor, BookOpen, Target, BarChart3, FileText,
  Podcast, Rocket, Laptop, Award, Layers, Wrench, Smartphone, ExternalLink,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
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
  const services = [
    {
      id: 'professional-development',
      title: 'Professional Development Cohorts',
      shortTitle: 'Professional Development',
      description: 'Practical, multi-week cohorts that help educators build confidence with new tools and strategies. Topics include digital literacy, AI, online instruction, and math—customized to your team\'s needs.',
      icon: Users,
      image: developmentImage,
      imagePosition: 'object-center',
    },
    {
      id: 'project-management',
      title: 'Project Management',
      shortTitle: 'Project Management',
      description: 'From grant deliverables to statewide rollouts, we keep complex initiatives on track. We handle timelines, reporting, stakeholder coordination, and capacity building so your team can focus on impact.',
      icon: Workflow,
      image: projectManagementImage,
      imagePosition: 'object-[50%_70%]',
    },
    {
      id: 'keynotes',
      title: 'Keynotes & Conference Workshops',
      shortTitle: 'Keynotes & Workshops',
      description: 'Engaging presentations for state and national conferences on digital learning, AI, workforce readiness, and instructional innovation. Sessions connect research to practice and spark action.',
      icon: Presentation,
      image: keynoteImage,
      imagePosition: 'object-center',
    },
    {
      id: 'curriculum',
      title: 'Curriculum & Instructional Design',
      shortTitle: 'Curriculum & Design',
      description: 'We design flexible, workforce-aligned learning materials for digital delivery. From interactive modules to media production, we build content that meets learners where they are.',
      icon: Lightbulb,
      image: aiImage,
      imagePosition: 'object-[50%_30%]',
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
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto top-[5vh] translate-y-0">
          <DialogHeader className="text-center">
            <DialogTitle className="text-xl text-center">{activeService?.shortTitle ?? 'Portfolio'}</DialogTitle>
            <DialogDescription className="text-center">Selected projects and outcomes</DialogDescription>
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
            We partner with state agencies, higher education institutions, and adult education programs to design and implement digital learning initiatives, professional development cohorts, instructional resources, and strategic projects that support effective teaching and help learners advance toward their academic and professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl border border-border/40 overflow-hidden flex flex-col"
            >
              <div className="p-3 pt-4 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className={cn("w-full h-44 object-cover rounded-xl", service.imagePosition)}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <service.icon className="w-5 h-5 text-primary mb-2" />
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <PortfolioDialog serviceId={service.id} serviceTitle={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

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
