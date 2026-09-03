import { Link, NavLink } from 'react-router-dom';
import { RegisterButton } from './RegisterButton';
import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.png';

const navLinks = [
  { label: 'The Academy', to: '/bootcamp', end: true },
  { label: 'Sample Projects', to: '/bootcamp/use-cases', end: false },
];

const BootcampNav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
    <div className="container mx-auto px-4 md:px-6 py-3">
      <div className="flex items-center justify-between gap-3 md:gap-6">
        <Link to="/bootcamp" className="flex items-center gap-3 min-w-0 flex-shrink-0">
          <img src={clpLogo} alt="Community Learning Partners" className="h-7 md:h-8 w-auto object-contain" />
          <span className="hidden sm:block h-6 w-px bg-border" aria-hidden="true" />
          <img src={coabeLogo} alt="COABE" className="hidden sm:block h-6 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-xs md:text-sm whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-medium underline underline-offset-4 decoration-2'
                    : 'text-foreground hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <RegisterButton label="Register" size="sm" />
        </div>
      </div>
    </div>
  </nav>
);

export default BootcampNav;
