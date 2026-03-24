import { useState, useCallback } from "react";
import RevealOnScroll from "./RevealOnScroll";
import AvailabilitySection from "./AvailabilitySection";
import ContactForm from "./ContactForm";

const ConversionHub = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHall, setSelectedHall] = useState<string | null>(null);

  const handleDateSelect = useCallback((date: Date, hall: string) => {
    setSelectedDate(date);
    setSelectedHall(hall);
  }, []);

  return (
    <section id="contact" className="section-padding">
      <RevealOnScroll className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Zarezerwuj termin
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-cream">
          Dostępność & Kontakt
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
        {/* Calendar side */}
        <AvailabilitySection onDateSelect={handleDateSelect} />
        {/* Form side */}
        <div>
          <h3 className="font-display text-2xl text-cream mb-6">
            Wyślij zapytanie
          </h3>
          <ContactForm selectedDate={selectedDate} selectedHall={selectedHall} />
        </div>
      </div>
    </section>
  );
};

export default ConversionHub;
