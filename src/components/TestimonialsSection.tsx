import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    role: "Director, AgroExports India Pvt Ltd",
    text: "Nexus International transformed our export operations. Their expertise in customs documentation and DGFT compliance saved us months of delays. Highly recommended for any serious exporter.",
    rating: 5,
  },
  {
    name: "Amina Sheikh",
    role: "CEO, Gulf Spice Trading LLC",
    text: "Working with Nexus on our India sourcing has been exceptional. Their attention to packaging standards and regulatory compliance gives us complete confidence in every shipment.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Founder, Greenfield Organics",
    text: "From IEC registration to our first container shipment, Nexus held our hand through every step. Their duty drawback advisory alone has increased our margins by 12%.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase text-center block">Client Success Stories</span>
        <h2 className="section-title mt-3">Trusted by Exporters Nationwide</h2>
        <p className="section-subtitle">
          Hear from businesses that have scaled their international trade operations with our consulting expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
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
