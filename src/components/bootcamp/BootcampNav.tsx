import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RegisterButton } from './RegisterButton';

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'What You Can Build', href: '#build' },
  { label: 'Experience', href: '#experience' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Cost', href: '#cost' },
  { label: 'FAQ', href: '#faq' },
];

const BootcampNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#overview" className="text-sm md:text-base font-semibold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI for Adult Education</span>
            <span className="hidden sm:inline text-muted-foreground font-normal"> · Administrators Bootcamp</span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <RegisterButton label="Register Now" size="sm" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <RegisterButton label="Register" size="sm" />
            <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 pt-3 border-t border-border flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground hover:text-primary transition-colors"
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
