import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HallsSection from "@/components/HallsSection";
import GastronomySection from "@/components/GastronomySection";
import GardenSection from "@/components/GardenSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HallsSection />
      <GastronomySection />
      <GardenSection />
      <GallerySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
