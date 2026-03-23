import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { Send, Check } from "lucide-react";

interface ContactFormProps {
  selectedDate?: Date | null;
  selectedHall?: string | null;
}

const eventTypes = [
  { value: "wedding", label: "Wesele" },
  { value: "communion", label: "Komunia" },
  { value: "party", label: "Przyjęcie" },
  { value: "corporate", label: "Event firmowy" },
  { value: "other", label: "Inne" },
];

const ContactForm = ({ selectedDate, selectedHall }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    hall: selectedHall || "grand",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <RevealOnScroll className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-gold" />
          </div>
          <h2 className="font-display text-3xl text-cream mb-4">Dziękujemy!</h2>
          <p className="font-body text-lg text-cream-dark">
            Otrzymaliśmy Twoje zapytanie. Skontaktujemy się w ciągu 24 godzin.
          </p>
        </RevealOnScroll>
      </section>
    );
  }

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 font-body text-base text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <section id="contact" className="section-padding">
      <RevealOnScroll className="text-center mb-12">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Zacznijmy rozmowę
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-cream">
          Kontakt
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <RevealOnScroll>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Imię i Nazwisko"
              required
              value={formData.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={(e) => update("email", e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Telefon"
              value={formData.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass}
            />
            <select
              value={formData.eventType}
              onChange={(e) => update("eventType", e.target.value)}
              className={inputClass}
            >
              {eventTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <select
              value={formData.hall}
              onChange={(e) => update("hall", e.target.value)}
              className={inputClass}
            >
              <option value="grand">Duża Sala (Grand Hall)</option>
              <option value="boutique">Mała Sala (Boutique Hall)</option>
            </select>
            <div className={`${inputClass} flex items-center`}>
              {selectedDate ? (
                <span className="text-gold">
                  {format(selectedDate, "d MMMM yyyy", { locale: pl })}
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Wybierz datę z kalendarza powyżej
                </span>
              )}
            </div>
          </div>
          <textarea
            placeholder="Twoja wiadomość..."
            rows={5}
            value={formData.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputClass + " resize-none"}
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.3em] uppercase border border-gold/30 px-10 py-4 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              <Send size={14} />
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </RevealOnScroll>
    </section>
  );
};

export default ContactForm;
