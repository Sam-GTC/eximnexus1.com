import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hans Müller",
    role: "Head of Procurement, Gewürz GmbH — Hamburg",
    text: "Nexus's dehydrated onion flakes consistently meet our EU MRL standards. Their 72-hour sample dispatch and transparent pricing structure have made them our sole India sourcing partner for three consecutive years.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashidi",
    role: "Director of Imports, Gulf Food Trading — Dubai",
    text: "The Halal certification and SFDA compliance documentation was flawless from day one. Transit from JNPT to Jebel Ali averages just 7 days. Nexus understands the GCC market better than any Indian supplier we've worked with.",
    rating: 5,
  },
  {
    name: "Sarah van den Berg",
    role: "Category Manager, EuroSpice BV — Rotterdam",
    text: "We switched to Nexus for their direct-source model and the RoDTEP savings they pass on. The 14-point quality check gives us complete confidence — zero RASFF rejections since we started sourcing from them.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 section-alt-muted">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Client Testimonials</span>
        <h2 className="section-heading">Trusted by Global Buyers</h2>
        <p className="section-subtitle mt-4">
          Procurement leaders across the EU and Middle East rely on Nexus for consistent quality, compliant documentation, and competitive pricing.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 shadow-md border border-border relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" style={{ boxShadow: undefined }}>
              <Quote className="absolute top-6 right-6 w-8 h-8 text-barn-red/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-metallic-gold text-metallic-gold" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
