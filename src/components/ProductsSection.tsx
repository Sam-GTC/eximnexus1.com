import { useState } from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Dehydrated Onion",
    variants: [
      { mesh: "Flakes", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <5% | Mesh: 10-20mm | Color: White/Pink" },
      { mesh: "Granules", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <5% | Mesh: 1-3mm | Color: White/Cream" },
      { mesh: "Powder", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <5% | Mesh: 80-120 | Color: Off-White" },
    ],
    fobPrice: "$1,350 – $1,550 /MT FOB",
  },
  {
    name: "Dehydrated Garlic",
    variants: [
      { mesh: "Flakes", image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2571?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <6% | Mesh: 10-20mm | Pungency: High" },
      { mesh: "Granules", image: "https://images.unsplash.com/photo-1615477550927-6ec8445b1c2d?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <6% | Mesh: 1-3mm | Pungency: High" },
      { mesh: "Powder", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <6% | Mesh: 80-120 | Pungency: High" },
    ],
    fobPrice: "$2,200 – $2,500 /MT FOB",
  },
  {
    name: "Dehydrated Ginger",
    variants: [
      { mesh: "Flakes", image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <8% | Mesh: 10-20mm | Origin: Cochin" },
      { mesh: "Granules", image: "https://images.unsplash.com/photo-1573414404892-ddf30db27070?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <8% | Mesh: 1-3mm | Origin: Cochin" },
      { mesh: "Powder", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=600&q=80", specs: "Moisture: <8% | Mesh: 80-120 | Origin: Cochin" },
    ],
    fobPrice: "$2,800+ /MT FOB",
  },
];

const meshOptions = ["Flakes", "Granules", "Powder"] as const;

const ProductsSection = () => {
  const [activeMesh, setActiveMesh] = useState<Record<number, number>>({});

  const getMesh = (idx: number) => activeMesh[idx] ?? 0;

  return (
    <section id="products" className="py-24 px-4 section-alt-muted">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Product Matrix</span>
        <h2 className="section-heading">Interactive Catalog</h2>
        <p className="section-subtitle mt-4">
          Toggle mesh size to explore our premium dehydrated range. Each variant processed to exact buyer specifications.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map((product, idx) => {
            const meshIdx = getMesh(idx);
            const variant = product.variants[meshIdx];

            return (
              <div
                key={idx}
                className="product-card group"
                style={{ perspective: "1000px" }}
              >
                <div className="relative overflow-hidden h-64 transition-transform duration-700 group-hover:[transform:rotateY(3deg)]">
                  <img
                    src={variant.image}
                    alt={`${product.name} ${variant.mesh}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/60 to-transparent" />
                  <span className="absolute top-4 left-4 bg-metallic-gold text-dark-earth text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {variant.mesh}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{product.name}</h3>

                  {/* Mesh toggle */}
                  <div className="flex gap-0 mb-4">
                    {meshOptions.map((mesh, mi) => (
                      <button
                        key={mesh}
                        onClick={() => setActiveMesh(prev => ({ ...prev, [idx]: mi }))}
                        className={`flex-1 py-2 text-xs font-bold tracking-wider uppercase transition-all ${
                          meshIdx === mi
                            ? "bg-chilli-green text-off-white"
                            : "border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {mesh}
                      </button>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-xs mb-4 font-mono">{variant.specs}</p>

                  <div className="border-t border-border pt-4 flex items-center justify-between">
                    <p className="text-foreground font-bold text-sm">{product.fobPrice}</p>
                    <button
                      onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
                      className="text-barn-red text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Enquire <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
