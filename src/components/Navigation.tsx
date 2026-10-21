import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import clpLogo from '@/assets/logos/clp-logo.png';

/**
 * The site menu: Services, Approach, Team, Articles, AI Leadership Academy (Joey, 2026-10-21).
 * `page`: on a page other than the home page, the section links go to the home page.
 * `hideAcademy`: no Academy link (a single article, Joey 2026-10-21).
 * `current`: the page this is, marked in the menu.
 */
const Navigation = ({ page = false, hideAcademy = false, current }: { page?: boolean; hideAcademy?: boolean; current?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const home = page ? '/' : '';
  const navItems = [
    { label: 'Services', href: `${home}#services` },
    { label: 'Approach', href: `${home}#about` },
    { label: 'Team', href: `${home}#team` },
    { label: 'Articles', href: '/articles', isRoute: true },
    ...(hideAcademy ? [] : [{ label: 'AI Leadership Academy', href: '/bootcamp', isRoute: true }]),
  ];
  const isCurrent = (href: string) => !!current && href === current;

  return (
    <nav
      className={`bg-background border-b transition-shadow duration-200 ${
        isScrolled ? 'border-foreground/15 shadow-md' : 'border-border shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href={page ? '/' : '#top'}
            className="flex items-center"
            aria-label={page ? 'Community Learning Partners — home' : 'Community Learning Partners — back to top'}
          >
            <img
              src={clpLogo}
              alt="Community Learning Partners"
              className="h-7 md:h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className={`${isCurrent(item.href) ? 'text-primary font-medium' : 'text-foreground'} hover:text-primary transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            )}
            <Button variant="outline" size="sm" asChild>
              <a href={`${home}#contact`}>Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border max-h-[60vh] overflow-y-auto overscroll-contain">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                    className={`${isCurrent(item.href) ? 'text-primary font-medium' : 'text-foreground'} hover:text-primary transition-colors duration-200 py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <Button variant="outline" size="sm" className="self-start" asChild>
                <a href={`${home}#contact`}>Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;