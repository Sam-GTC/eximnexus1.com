import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
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
      <CTABanner
        title="Ready to Source Premium Dehydrated Products?"
        subtitle="Get a 72-hour sample kit with full lab reports and competitive FOB pricing."
        buttonText="Request Sample Kit"
        href="#quote"
        variant="green"
      />
      <OriginSection />
      <TrustModule />
      <ProductsSection />
      <CTABanner
        title="Calculate Your Landed Cost in Seconds"
        subtitle="Use our Incoterms calculator to estimate CIF pricing with RoDTEP savings included."
        buttonText="Open Calculator"
        href="#calculator"
        variant="red"
      />
      <IncotermCalculator />
      <ComplianceMap />
      <TestimonialsSection />
      <CTABanner
        title="Your Next Shipment Starts Here"
        subtitle="Tell us your product, volume, and destination — we'll handle the rest."
        buttonText="Get Quote Now"
        href="#quote"
        variant="gold"
      />
      <QuoteSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
