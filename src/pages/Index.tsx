import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import OriginSection from "@/components/OriginSection";
import TrustModule from "@/components/TrustModule";
import ProductsSection from "@/components/ProductsSection";
import IncotermCalculator from "@/components/IncotermCalculator";
import ComplianceMap from "@/components/ComplianceMap";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProgressBar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <OriginSection />
      <TrustModule />
      <ProductsSection />
      <IncotermCalculator />
      <ComplianceMap />
      <TestimonialsSection />
      <QuoteSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
