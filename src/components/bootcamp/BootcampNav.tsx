import { RegisterButton } from './RegisterButton';
import clpLogo from '@/assets/logos/clp-logo.png';
import coabeLogo from '@/assets/logos/coabe-logo-full.png';

const BootcampNav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
    <div className="container mx-auto px-4 md:px-6 py-3">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={clpLogo} alt="Community Learning Partners" className="h-10 w-10 object-contain" />
          <span className="hidden sm:block h-6 w-px bg-border" aria-hidden="true" />
          <img src={coabeLogo} alt="COABE" className="hidden sm:block h-5 w-auto object-contain" />
        </a>

        <RegisterButton label="Register" size="sm" />
      </div>
    </div>
  </nav>
);

export default BootcampNav;
