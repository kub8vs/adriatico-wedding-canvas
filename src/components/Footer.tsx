import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* Google Maps embed */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.5!2d19.65!3d51.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQzJzEyLjAiTiAxOcKwMzknMDAuMCJF!5e0!3m2!1spl!2spl!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.4) brightness(0.95) sepia(0.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokalizacja Adriatico — ul. Rokicińska 102b, Andrespol"
        />
      </div>

      <div className="py-16 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl tracking-[0.2em] text-gold-gradient mb-4">
              ADRIATICO
            </h3>
            <p className="font-body text-base text-charcoal-muted leading-relaxed mb-6">
              Ekskluzywna sala weselna i bankietowa w sercu Andrespola.
              Ponad 15 lat tradycji i elegancji.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-muted hover:text-gold transition-colors"
              >
                Facebook
              </a>
              <span className="text-border">·</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-muted hover:text-gold transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin size={14} className="text-gold flex-shrink-0" />
              <span className="font-body text-sm text-charcoal-light">
                ul. Rokicińska 102b, Andrespol
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone size={14} className="text-gold flex-shrink-0" />
              <a href="tel:+48506813729" className="font-body text-sm text-charcoal-light hover:text-gold transition-colors">
                506 813 729
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={14} className="text-gold flex-shrink-0" />
              <a href="mailto:michalec.grzegorz@wp.pl" className="font-body text-sm text-charcoal-light hover:text-gold transition-colors">
                michalec.grzegorz@wp.pl
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-muted">
              Pon–Wt: Zamknięte
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-muted">
              Śr–Ndz: 10:00–22:00
            </p>
          </div>
        </div>

        <div className="gold-line max-w-7xl mx-auto mt-12 mb-6" />
        <p className="text-center font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-muted">
          © 2026 Adriatico. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
