import { Button } from '@/components/ui/button';

export const REGISTRATION_URL = 'https://www.tfaforms.com/5232185';
export const WEBINAR_URL = 'https://coabe-org.zoom.us/webinar/register/WN_L6sN_uECRA2BOc90t2sWDw#/registration';
export const WEBINAR_DATE = 'Sep 2, 2026';
export const WEBINAR_TIME = '3:00 PM ET / 12:00 PM PT';

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
