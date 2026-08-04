import { Quote, Building2, ExternalLink } from 'lucide-react';
import coabeLogo from '@/assets/logos/coabe-logo.png';

const stats = [
  { value: '95%', label: 'found the learning experience useful' },
  { value: '90%', label: 'felt prepared to begin using AI in their practice' },
  { value: '90%', label: 'would recommend the experience to others' },
];

const quotes = [
  { quote: 'This was honestly the best online course I\u2019ve ever attended.', author: 'Program Director, Texas' },
  { quote: 'It helped me to accomplish something I was postponing for a long time.', author: 'Adult Education Administrator, Georgia' },
  { quote: 'I feel inspired to go update my systems.', author: 'State Adult Education Director, Kentucky' },
];

const leaders = [
  {
    initials: 'JL',
    name: 'Joey Lehrman',
    role: 'Co-Founder, Community Learning Partners',
    bio: 'Joey has led statewide and national adult education initiatives, including remote program design, digital literacy frameworks, and large-scale professional learning. He focuses on applied uses of AI that help program leaders solve real operational problems.',
  },
  {
    initials: 'CS',
    name: 'Christin Smith',
    role: 'Co-Founder, Community Learning Partners',
    bio: 'Christin designs curriculum and professional learning for adult education and workforce programs, with deep experience in instructional design, coaching, and helping teams translate emerging technology into everyday practice.',
  },
];

const BootcampProof = () => (
  <>
    <section className="section-spacing bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center content-gap">
          <div className="section-badge-primary">
            <Quote size={16} />
            Participant Experiences
          </div>
          <h2>Professional Learning Centered on Practical Work</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="rounded-2xl border border-border/50 bg-card p-6 text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{value}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map(({ quote, author }) => (
            <figure key={author} className="rounded-2xl border border-border/50 bg-card p-5">
              <Quote className="h-4 w-4 text-primary mb-3" />
              <blockquote className="text-sm text-foreground leading-relaxed">{quote}</blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">{author}</figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          These results and comments are drawn from previous professional learning delivered by Community Learning Partners.
        </p>
      </div>
    </section>

    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="section-badge-primary">
          <Building2 size={16} />
          About
        </div>
        <h2 className="mt-4 mb-6">About Community Learning Partners</h2>
        <p className="text-muted-foreground leading-relaxed">
          Community Learning Partners provides professional learning, curriculum development, digital
          transformation, and program management support for adult education and workforce development organizations.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Led by Joey Lehrman and Christin Smith, CLP has worked with COABE, ISTE, Google, Goodwill Industries
          International, TCALL, TCSG, OTAN, and state adult education offices across the country. Its work includes
          professional learning cohorts, train-the-trainer initiatives, digital literacy programs, curriculum
          development, and program-level capacity building.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {leaders.map(({ initials, name, role, bio }) => (
            <div key={name} className="rounded-2xl border border-border/50 bg-card p-5 flex gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                {initials}
              </span>
              <div>
                <h3 className="text-base font-semibold">{name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-6">
            <img src={coabeLogo} alt="COABE logo" className="h-10 w-auto object-contain mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              COABE is the national membership organization advancing adult education and family literacy,
              connecting practitioners, programs, and leaders across the country.
            </p>
            <a
              href="https://coabe.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Visit COABE <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/30 p-6">
            <div className="h-10 flex items-center mb-4">
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Community Learning Partners
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Community Learning Partners designs and facilitates practical, project-based professional learning
              for adult education and workforce development organizations nationwide.
            </p>
            <a
              href="https://communitylearningpartners.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Visit Community Learning Partners <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          This national bootcamp combines COABE&rsquo;s adult education network with Community Learning Partners&rsquo;
          experience designing and facilitating practical, project-based professional learning.
        </p>
      </div>
    </section>
  </>
);

export default BootcampProof;
