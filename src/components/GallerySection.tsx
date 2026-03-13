import { CheckCircle, Package, Droplets, Bug, Shield } from "lucide-react";

const packingDetails = [
  { icon: Package, text: "1 × 20 Ft Container Loads 24 MT (480 sacks × 50KG bags)" },
  { icon: Bug, text: "Container fumigation to protect shipments from insects and contamination" },
  { icon: Droplets, text: "Industrial silica gel placement to prevent moisture damage during transit" },
  { icon: Shield, text: "Heavy-duty bag materials to protect cargo from external weather conditions" },
  { icon: Package, text: "Optional plastic lining inside containers to prevent seawater ingress" },
  { icon: CheckCircle, text: "All packaging options customizable per client requirements and destination standards" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase text-center block">Quality Assurance</span>
        <h2 className="section-title mt-3">Packaging & Logistics Standards</h2>
        <p className="section-subtitle">
          We adhere to international packaging standards to ensure your cargo arrives safely, regardless of destination.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Container loading and packaging operations"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Details */}
          <div className="glass-card p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">Container Loading Specifications</h3>
            <ul className="space-y-5">
              {packingDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed pt-2">{detail.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
