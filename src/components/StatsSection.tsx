import { useEffect, useRef, useState } from "react";
import { Package, Globe, Clock, Truck, FlaskConical, Box } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Verified Farm Partners", icon: Package },
  { value: 35, suffix: "+", label: "Countries Served", icon: Globe },
  { value: 72, suffix: "hr", label: "Sample Dispatch", icon: Clock },
  { value: 24, suffix: " MT", label: "Per Container Load", icon: Box },
  { value: 14, suffix: "-pt", label: "Quality Checks", icon: FlaskConical },
  { value: 7, suffix: " days", label: "Transit to GCC", icon: Truck },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold font-display text-metallic-gold">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-dark-earth border-y border-metallic-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 text-metallic-gold/50 mx-auto mb-2" />
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-off-white/50 mt-1 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
