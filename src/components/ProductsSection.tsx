import { ArrowRight } from "lucide-react";

const products = [
  {
    image: "https://image3.jdomni.in/banner/21012023/2D/3F/42/9803A53F34994C838768D78F32_1674310708741.jpg?output-format=webp",
    title: "Organic Fertilizers",
    description: "Premium organic fertilizers and supplements for sustainable agriculture, meeting global quality standards.",
    priceINR: "₹1,00,800 INR/Tonne",
    priceUSD: "$1,304 USD/Tonne",
    badge: "Best Seller",
  },
  {
    image: "https://image3.jdomni.in/banner/06122024/C7/D9/9A/C4631988F090EDB005FF5BE5BB_1733494175449.jpg?output-format=webp",
    title: "Dehydrated Fruits & Vegetables",
    description: "Export-grade dehydrated produce with extended shelf life, processed under strict FSSAI and FDA compliance.",
    priceINR: "₹1,35,000 INR/Tonne",
    priceUSD: "$1,658 USD/Tonne",
    badge: "High Demand",
  },
  {
    image: "https://image3.jdomni.in/banner/06122024/F0/6A/64/0F7678FD3BE8788B92CF68E016_1733493069157.jpg?output-format=webp",
    title: "Agro Commodities",
    description: "Fresh onions, sorghum, sugar, and staple commodities sourced directly from Indian farmlands.",
    priceINR: "₹27,000 INR/Tonne",
    priceUSD: "$326 USD/Tonne",
    badge: "Bulk Available",
  },
  {
    image: "https://image3.jdomni.in/banner/04122024/1F/D3/AA/FB495288F7A72D2BA9E1B2EC69_1733296140491.jpg?output-format=webp",
    title: "Spirulina Powder",
    description: "100% natural, nutrient-dense spirulina powder for health supplements and food industries worldwide.",
    priceINR: "₹900 INR/Kg",
    priceUSD: "",
    badge: "Premium",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase text-center block">Our Portfolio</span>
        <h1 className="section-title mt-3">Export-Ready Agro Products</h1>
        <p className="section-subtitle">
          Sourced from India's finest agricultural regions. Quality-certified, competitively priced, and ready for global markets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="product-card group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground font-bold text-sm">{product.priceINR}</p>
                  {product.priceUSD && (
                    <p className="text-muted-foreground text-xs">{product.priceUSD}</p>
                  )}
                </div>
                <button
                  onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 w-full btn-outline-primary text-sm py-2.5 flex items-center justify-center gap-2"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
