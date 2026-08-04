import {
  CalendarDays, Clock, Globe, Video, MessageSquareHeart, Award, DollarSign, Sparkles,
} from 'lucide-react';
import { RegisterButton } from './RegisterButton';
import coabeLogo from '@/assets/logos/coabe-logo.png';

const glance = [
  { icon: CalendarDays, text: 'October 5 through the week of November 30, 2026' },
  { icon: Clock, text: 'Approximately one hour per week' },
  { icon: Globe, text: 'Online and flexible' },
  { icon: Video, text: 'Optional live cohort sessions' },
  { icon: MessageSquareHeart, text: 'Personalized coaching and feedback' },
  { icon: Award, text: 'Certificate of completion' },
  { icon: DollarSign, text: '$350 per participant' },
];

const BootcampHero = () => (
  <section id="overview" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-subtle">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
        <div>
          <div className="section-badge-primary">
            <Sparkles size={16} />
            Presented by COABE and Community Learning Partners
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Use AI to Support Priorities in Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Adult Education Program</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Join adult education administrators from across the country for a ten-week, project-based bootcamp.
            Choose a priority that matters in your local context and explore how AI can help you develop a
            practical resource for your program.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Projects may support recruitment, learner retention, educational gains, staff communication, data use,
            program planning, grant development, or another area selected by the participant.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <RegisterButton />
            <p className="text-sm text-muted-foreground max-w-xs">
              No COABE membership, coding background, or previous AI experience is required.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-elegant)] p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-5">
            At a glance
          </h2>
          <ul className="space-y-4">
            {glance.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm text-foreground leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
            <img src={coabeLogo} alt="COABE logo" className="h-8 w-auto object-contain" />
            <span className="text-xs text-muted-foreground leading-snug">
              In partnership with Community Learning Partners
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BootcampHero;
