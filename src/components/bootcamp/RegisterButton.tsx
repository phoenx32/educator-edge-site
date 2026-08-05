import { Button } from '@/components/ui/button';

export const REGISTRATION_URL = '#register';
export const WEBINAR_URL = '#webinar-register';

export const RegisterButton = ({
  label = 'Register for the course',
  size = 'lg',
  className,
  variant = 'default',
}: {
  label?: string;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
}) => (
  <Button size={size} variant={variant} className={className} asChild>
    <a href={REGISTRATION_URL}>{label}</a>
  </Button>
);

export const WebinarLink = ({ className = '' }: { className?: string }) => (
  <a
    href={WEBINAR_URL}
    className={`text-sm text-muted-foreground underline underline-offset-4 decoration-border hover:text-primary hover:decoration-primary transition-colors ${className}`}
  >
    Or attend the free informational webinar
  </a>
);
