import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HallsSection from "@/components/HallsSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import GastronomySection from "@/components/GastronomySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);

  const handleDateSelect = useCallback((date: Date, hall: string) => {
    setSelectedDate(date);
    setSelectedHall(hall);
    // Scroll to contact form
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HallsSection />
      <AvailabilitySection onDateSelect={handleDateSelect} />
      <GastronomySection />
      <TestimonialsSection />
      <ContactForm selectedDate={selectedDate} selectedHall={selectedHall} />
      <Footer />
    </div>
  );
};

export default Index;
