import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  /** Sequence number shown in the eyebrow, e.g. "01". Omit for connective bands. */
  index?: string;
  /** Short eyebrow label, e.g. "The outcomes". */
  label?: string;
  /** Background tone. */
  tone?: 'plain' | 'muted';
  /** Vertical rhythm: full sections vs. connective bands. */
  size?: 'lg' | 'sm';
  /** Content measure. */
  width?: '3xl' | '4xl' | '5xl';
  className?: string;
  children: ReactNode;
};

const widths = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
} as const;

/**
 * Shared wrapper for the bootcamp page sections.
 * Draws a continuous vertical spine down the left of the content column
 * (desktop only) with a marker at each section start, plus a numbered eyebrow.
 */
export const SectionShell = ({
  id,
  index,
  label,
  tone = 'plain',
  size = 'lg',
  width = '4xl',
  className,
  children,
}: Props) => (
  <section
    id={id}
    className={cn(
      'relative',
      size === 'lg' ? 'py-20 md:py-28' : 'py-10 md:py-14',
      tone === 'muted' && 'bg-muted/30',
      className,
    )}
  >
    <div className={cn('container mx-auto px-4 md:px-6', widths[width])}>
      <div className="relative">
        {/* Continuous spine, joins section to section */}
        <span
          aria-hidden="true"
          className={cn(
            'hidden lg:block absolute -left-10 w-px bg-border/60',
            size === 'lg' ? '-top-20 -bottom-28' : '-top-10 -bottom-14',
          )}
        />
        {label && (
          <span
            aria-hidden="true"
            className="hidden lg:block absolute -left-10 top-[0.55rem] -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-primary/70"
          />
        )}

        {label && (
          <div className="mb-5 flex items-center gap-3">
            <span className="lg:hidden h-px w-10 bg-primary" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {index && <span className="tabular-nums text-primary">{index}</span>}
              {index && <span className="mx-2 text-border">/</span>}
              {label}
            </span>
          </div>
        )}

        {children}
      </div>
    </div>
  </section>
);

export default SectionShell;
