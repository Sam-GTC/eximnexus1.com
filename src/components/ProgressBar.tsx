import { useEffect, useState } from "react";

const stages = [
  { id: "home", label: "Harvesting" },
  { id: "about", label: "Processing" },
  { id: "products", label: "Quality Check" },
  { id: "quote", label: "Global Transit" },
];

const ProgressBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = stages.length - 1; i >= 0; i--) {
        const el = document.getElementById(stages[i].id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveIndex(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] md:top-[80px] left-0 right-0 z-40 bg-dark-earth/90 backdrop-blur-sm border-b border-metallic-gold/20 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-8">
        {stages.map((stage, i) => (
          <div key={stage.id} className="flex items-center flex-1">
            <div className={`flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-bold transition-colors duration-500 ${
              i <= activeIndex ? "text-metallic-gold" : "text-off-white/30"
            }`}>
              <span className={`w-2 h-2 transition-colors duration-500 ${
                i <= activeIndex ? "bg-metallic-gold" : "bg-off-white/20"
              }`} />
              {stage.label}
            </div>
            {i < stages.length - 1 && (
              <div className={`flex-1 h-px mx-3 transition-colors duration-500 ${
                i < activeIndex ? "bg-metallic-gold/50" : "bg-off-white/10"
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
