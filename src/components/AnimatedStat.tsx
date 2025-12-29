import { useCountUp } from '@/hooks/use-count-up';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  colorClass?: string;
}

const AnimatedStat = ({ value, suffix = '', label, colorClass = 'text-primary' }: AnimatedStatProps) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <div ref={ref}>
      <div className={`text-3xl md:text-4xl font-bold mb-2 ${colorClass}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
};

export default AnimatedStat;
