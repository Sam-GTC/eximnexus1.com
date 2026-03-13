import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductsSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
