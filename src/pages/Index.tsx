import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HallsSection from "@/components/HallsSection";
import GastronomySection from "@/components/GastronomySection";
import GardenSection from "@/components/GardenSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ConversionHub from "@/components/ConversionHub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HallsSection />
      <GastronomySection />
      <GardenSection />
      <TestimonialsSection />
      <FAQSection />
      <ConversionHub />
      <Footer />
    </div>
  );
};

export default Index;
