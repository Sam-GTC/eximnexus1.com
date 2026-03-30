import { useEffect, useRef } from "react";
import { Sprout, Factory, FlaskConical, Ship } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Farm Sourcing",
    location: "Maharashtra & Gujarat",
    description: "Direct procurement from 500+ verified farms across India's premier agricultural belts. No middlemen — securing the 3–7% pricing advantage for our buyers.",
  },
  {
    icon: Factory,
    title: "Processing Facility",
    location: "Aurangabad, Maharashtra",
    description: "State-of-the-art dehydration and processing under ISO 22000 and HACCP protocols. Automated sorting, washing, slicing, and drying to precise moisture specifications.",
  },
  {
    icon: FlaskConical,
    title: "Quality Laboratory",
    location: "In-House Testing",
    description: "Every batch undergoes 14-point quality analysis — moisture content (<5%), microbial load, pesticide residue, and heavy metal testing per EU MRL standards.",
  },
  {
    icon: Ship,
    title: "Global Dispatch",
    location: "JNPT & Mundra Ports",
    description: "Containerized shipping via major Indian ports with 7-day transit to GCC and 21-day to EU destinations. Full documentation including Phytosanitary, COO, and Bill of Lading.",
  },
];

const OriginSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.2 }
    );
    const items = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="origin" className="py-24 px-4 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Farm-to-Factory</span>
        <h2 className="section-heading">Direct-from-Source Integrity</h2>
        <p className="section-subtitle mt-4">
          By eliminating intermediaries, we guarantee traceability, competitive pricing, and consistent quality from harvest to your warehouse.
        </p>

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal-on-scroll relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-chilli-green flex items-center justify-center z-10">
                <step.icon className="w-6 h-6 text-off-white" />
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="text-barn-red text-xs font-bold tracking-[0.2em] uppercase">{step.location}</span>
                <h3 className="text-xl font-display font-bold text-foreground mt-1 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;
