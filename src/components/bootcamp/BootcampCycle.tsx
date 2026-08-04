import { useState } from 'react';
import { Target, PenLine, Play, Ear, RefreshCw, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Target,
    label: 'Choose',
    caption: 'Name one priority that is already on your desk this fall.',
  },
  {
    icon: PenLine,
    label: 'Draft',
    caption: 'Build a first version with a facilitator working alongside you.',
  },
  {
    icon: Play,
    label: 'Try it',
    caption: 'Put the draft in front of two or three staff or students.',
  },
  {
    icon: Ear,
    label: 'Listen',
    caption: 'Note where people hesitated, and what they asked you next.',
  },
  {
    icon: RefreshCw,
    label: 'Revise',
    caption: 'Change what did not work. Bring the questions to the cohort.',
  },
  {
    icon: CheckCircle2,
    label: 'Keep it',
    caption: 'Decide who owns it, and how it stays in use after the course.',
  },
];

const size = 320;
const center = size / 2;
const ringRadius = 118;

const pos = (angle: number, radius: number) => {
  const rad = (angle - 90) * (Math.PI / 180);
  return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
};

const BootcampCycle = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = steps[active].icon;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[290px] h-[290px] md:w-[340px] md:h-[340px]">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
          <g
            className="animate-rotate-slow"
            style={{ transformOrigin: `${center}px ${center}px` }}
          >
            <circle
              cx={center}
              cy={center}
              r={ringRadius}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeDasharray="3 7"
              strokeLinecap="round"
              opacity="0.45"
            />
          </g>
          <circle
            cx={center}
            cy={center}
            r={72}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[130px] text-center">
            <ActiveIcon className="mx-auto h-5 w-5 text-primary" strokeWidth={1.75} />
            <p className="mt-2 text-sm font-semibold leading-tight">{steps[active].label}</p>
            <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
              {steps[active].caption}
            </p>
          </div>
        </div>

        {steps.map((step, i) => {
          const p = pos(i * 60, ringRadius);
          const Icon = step.icon;
          const isActive = i === active;
          return (
            <button
              key={step.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`${step.label}: ${step.caption}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border bg-background transition-all duration-300 ${
                isActive
                  ? 'border-primary text-primary scale-110 shadow-sm'
                  : 'border-border text-muted-foreground hover:border-primary/60 hover:text-primary'
              }`}
              style={{ left: `${(p.x / size) * 100}%`, top: `${(p.y / size) * 100}%` }}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
          );
        })}
      </div>

      <ol className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        {steps.map((s, i) => (
          <li key={s.label}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`transition-colors ${i === active ? 'text-primary font-medium' : 'hover:text-foreground'}`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BootcampCycle;
