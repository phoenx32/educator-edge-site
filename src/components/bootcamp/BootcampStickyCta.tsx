import { useEffect, useState } from 'react';
import { RegisterButton } from './RegisterButton';

const BootcampStickyCta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            AI Leadership Academy
          </p>
          <p className="text-xs text-muted-foreground">
            Oct 12 &ndash; Dec 18, 2026 &middot; $350
          </p>
        </div>
        <RegisterButton label="Register" size="sm" className="flex-shrink-0" />
      </div>
    </div>
  );
};

export default BootcampStickyCta;
