const packingDetails = [
  "1 * 20 Ft Container Loads 24 MT.",
  "MT (20 sacks *50KG BAG)",
  "Total: (480 sacks *50KG Bags) / 20 FT container",
  "Fumigation of the container to protect the shipment from insects.",
  "Silica gel inside the container to prevent moisture.",
  "We choose thick bags material to protect the flour from outer weather conditions.",
  "Available plastic covering inside the container to prevent seawater access to the flour and bags.",
  "This Options depending on clients' desire and on clients account.",
];

const GallerySection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Gallery</h2>
        <div className="mt-10 bg-card rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Packing Details</h3>
          <ul className="space-y-3">
            {packingDetails.map((detail, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-brand-green font-bold mt-0.5">✔️</span>
                <span className="text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
