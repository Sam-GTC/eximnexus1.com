const products = [
  {
    image: "https://image3.jdomni.in/banner/21012023/2D/3F/42/9803A53F34994C838768D78F32_1674310708741.jpg?output-format=webp",
    title: "Fresh",
    description: "All kinds of organic Fertilizers/ Suppliments available here.",
    priceINR: "₹ 100800 INR/Tonne",
    priceUSD: "$1304 USD/Tonne",
    link: "#",
  },
  {
    image: "https://image3.jdomni.in/banner/06122024/C7/D9/9A/C4631988F090EDB005FF5BE5BB_1733494175449.jpg?output-format=webp",
    title: "Dehydrated Fruits and Vegetables",
    description: "All Dehydrated Products are available here.",
    priceINR: "₹ 135000 INR/Tonne",
    priceUSD: "$1658 USD/Tonne",
    link: "#",
  },
  {
    image: "https://image3.jdomni.in/banner/06122024/F0/6A/64/0F7678FD3BE8788B92CF68E016_1733493069157.jpg?output-format=webp",
    title: "Commodity",
    description: "All kinds of Sugar, Fresh Onions, Soughum, etc commodities available here.",
    priceINR: "₹ 27000 INR/Tonne",
    priceUSD: "$326 USD/Tonne",
    link: "#",
  },
  {
    image: "https://image3.jdomni.in/banner/04122024/1F/D3/AA/FB495288F7A72D2BA9E1B2EC69_1733296140491.jpg?output-format=webp",
    title: "Spirulina Powder",
    description: "100% NATURAL INGREDIENT",
    priceINR: "₹ 900.00 INR/Kg",
    priceUSD: "",
    link: "#",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title">Agro Products</h1>
        <p className="section-subtitle">Best Quality. Unbeatable Prices. Trusted Partner.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <p className="text-foreground font-semibold text-sm">Starting {product.priceINR}</p>
                {product.priceUSD && (
                  <p className="text-muted-foreground text-sm">{product.priceUSD}</p>
                )}
                <a href={product.link} className="inline-block mt-4 btn-primary text-sm">
                  {index === 3 ? "Enquire now" : "More Details"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
