import { Button } from '@/components/ui/button';

export const REGISTRATION_URL = 'https://www.tfaforms.com/5232185';
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
    <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  </Button>
);
