import { Hammer, FlaskConical, MessageCircle, Lightbulb, Pencil, RefreshCw, Infinity } from 'lucide-react';

const DesignCycle = () => {
  const cycleSteps = [
    { icon: Hammer, label: 'Build', angle: 0 },
    { icon: FlaskConical, label: 'Test', angle: 60 },
    { icon: MessageCircle, label: 'Feedback', angle: 120 },
    { icon: Lightbulb, label: 'Reflect', angle: 180 },
    { icon: Pencil, label: 'Revise', angle: 240 },
    { icon: RefreshCw, label: 'Iterate', angle: 300 },
  ];

  const size = 320;
  const center = size / 2;
  const outerRadius = 130;
  const middleRadius = 95;
  const innerRadius = 55;

  // Calculate position on circle
  const getPosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: center + radius * Math.cos(radian),
      y: center + radius * Math.sin(radian),
    };
  };

  return (
    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto">
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className="w-full h-full"
      >
        {/* Outer ring - rotates slowly */}
        <g className="animate-rotate-slow origin-center" style={{ transformOrigin: `${center}px ${center}px` }}>
          <circle
            cx={center}
            cy={center}
            r={outerRadius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="8 4"
            opacity="0.3"
          />
          
          {/* Connector dots between steps */}
          {cycleSteps.map((_, index) => {
            const midAngle = index * 60 + 30;
            const pos = getPosition(midAngle, outerRadius);
            return (
              <circle
                key={`dot-${index}`}
                cx={pos.x}
                cy={pos.y}
                r="4"
                fill="hsl(var(--primary))"
                opacity="0.5"
              />
            );
          })}
        </g>

        {/* Middle ring - rotates opposite direction */}
        <g className="animate-rotate-slow-reverse origin-center" style={{ transformOrigin: `${center}px ${center}px` }}>
          <circle
            cx={center}
            cy={center}
            r={middleRadius}
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            strokeDasharray="12 6"
            opacity="0.25"
          />
        </g>

        {/* Inner ring - static */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="hsl(var(--primary) / 0.08)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Center infinity icon background */}
        <circle
          cx={center}
          cy={center}
          r="35"
          fill="hsl(var(--background))"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
      </svg>

      {/* Center infinity icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <Infinity className="w-8 h-8 text-primary" strokeWidth={2.5} />
        </div>
      </div>

      {/* Step nodes positioned around the circle */}
      {cycleSteps.map((step, index) => {
        const pos = getPosition(step.angle, outerRadius);
        const Icon = step.icon;
        
        // Calculate label position (further out than icon, extra for Feedback)
        const labelOffset = step.label === 'Feedback' ? 50 : 42;
        const labelPos = getPosition(step.angle, outerRadius + labelOffset);
        
        return (
          <div key={step.label}>
            {/* Icon node */}
            <div
              className="absolute w-11 h-11 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              style={{
                left: `${(pos.x / size) * 100}%`,
                top: `${(pos.y / size) * 100}%`,
              }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            
            {/* Label */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-semibold text-foreground whitespace-nowrap"
              style={{
                left: `${(labelPos.x / size) * 100}%`,
                top: `${(labelPos.y / size) * 100}%`,
              }}
            >
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesignCycle;
