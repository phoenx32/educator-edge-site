import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.jpg';

const facilitators = [
  {
    name: 'Joey Lehrman',
    role: 'Co-Founder, Community Learning Partners',
    bio: 'Joey has led statewide and national adult education initiatives, from remote program design to large-scale professional learning, and focuses on applied AI that solves real operational problems for program leaders.',
    logo: clpLogo,
    logoAlt: 'Community Learning Partners',
    logoClass: 'h-10',
  },
  {
    name: 'Christin Smith',
    role: 'Co-Founder, Community Learning Partners',
    bio: 'Christin designs curriculum and professional learning for adult education and workforce programs, coaching teams as they translate emerging technology into everyday practice.',
    logo: clpLogo,
    logoAlt: 'Community Learning Partners',
    logoClass: 'h-10',
  },
  {
    name: 'Sharon Bonney',
    role: 'Chief Executive Officer, COABE',
    bio: 'Sharon leads COABE, the national organization advancing adult education and family literacy, and brings a nationwide view of the priorities and pressures facing programs today.',
    logo: coabeLogo,
    logoAlt: 'COABE',
    logoClass: 'h-6',
  },
];

const BootcampFacilitators = () => (
  <section className="py-20 md:py-28 border-t border-border/60 bg-muted/30">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">About the facilitators</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {facilitators.map(({ name, role, bio, logo, logoAlt, logoClass }) => (
          <div key={name} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-primary">{role}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{bio}</p>
            <div className="mt-6 pt-5 border-t border-border/60">
              <img src={logo} alt={logoAlt} className={`${logoClass} w-auto object-contain`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BootcampFacilitators;
