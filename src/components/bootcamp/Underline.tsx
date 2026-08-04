import { ReactNode } from 'react';

/** Single-color emphasis: text stays foreground, a hand-drawn stroke sits under it. */
export const Underline = ({ children }: { children: ReactNode }) => (
  <span className="relative inline-block whitespace-nowrap">
    <span className="relative z-10">{children}</span>
    <svg
      className="absolute left-0 -bottom-1 w-full h-[0.38em] text-primary"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8.5C38 4 78 2.5 118 3.5c28 .7 55 2.6 80 5.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

export default Underline;
