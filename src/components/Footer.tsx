import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="font-display text-2xl tracking-[0.2em] text-gold-gradient mb-4">
            ADRIATICO
          </h3>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Ekskluzywna sala weselna i bankietowa nad brzegiem morza.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MapPin size={14} className="text-gold" />
            <span className="font-body text-sm text-cream-dark">ul. Nadmorska 42, 80-001 Gdańsk</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone size={14} className="text-gold" />
            <span className="font-body text-sm text-cream-dark">+48 58 123 45 67</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Mail size={14} className="text-gold" />
            <span className="font-body text-sm text-cream-dark">kontakt@adriatico.pl</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Pon–Wt: Zamknięte
          </p>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Śr–Ndz: 10:00–22:00
          </p>
        </div>
      </div>
      <div className="gold-line max-w-7xl mx-auto mt-12 mb-6" />
      <p className="text-center font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        © 2026 Adriatico. Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  );
};

export default Footer;
