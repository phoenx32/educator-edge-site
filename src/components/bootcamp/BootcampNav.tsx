import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RegisterButton } from './RegisterButton';
import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.jpg';

const links = [
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Your project', href: '#project' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Cost', href: '#cost' },
  { label: 'FAQ', href: '#faq' },
];

const BootcampNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img src={clpLogo} alt="Community Learning Partners" className="h-8 w-8 object-contain" />
            <span className="hidden md:block h-6 w-px bg-border" aria-hidden="true" />
            <img src={coabeLogo} alt="COABE" className="hidden md:block h-5 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <RegisterButton label="Register" size="sm" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <RegisterButton label="Register" size="sm" />
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 pt-3 border-t border-border/60 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default BootcampNav;
