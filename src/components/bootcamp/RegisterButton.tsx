import { Button } from '@/components/ui/button';

export const REGISTRATION_URL = '#register';

export const RegisterButton = ({
  label = 'Register for the Bootcamp',
  size = 'lg',
  className,
  variant = 'default',
}: {
  label?: string;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
}) => (
  <Button size={size} variant={variant} className={className} asChild>
    <a href={REGISTRATION_URL}>{label}</a>
  </Button>
);
