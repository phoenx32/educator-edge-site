import { ReactNode } from 'react';

/** Single-color emphasis: text stays foreground, a hand-drawn stroke sits under it. */
export const Underline = ({ children }: { children: ReactNode }) => (
  <span className="relative inline-block whitespace-nowrap pb-[0.22em]">
    <span className="relative z-10">{children}</span>
    <svg
      className="pointer-events-none absolute left-0 bottom-0 w-full h-[0.22em] text-primary"
      viewBox="0 0 200 8"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6C38 2.5 78 1.5 118 2.2c28 .5 55 1.9 80 3.9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </span>
);

export default Underline;
