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
  { value: "christening", label: "Chrzciny" },
  { value: "party", label: "Przyjęcie" },
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
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-gold" />
        </div>
        <h3 className="font-display text-3xl text-cream mb-4">Dziękujemy!</h3>
        <p className="font-body text-lg text-cream-dark text-center">
          Otrzymaliśmy Twoje zapytanie. Skontaktujemy się w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 font-body text-base text-cream placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors";

  return (
    <RevealOnScroll>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Imię i Nazwisko"
          required
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Telefon"
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <select
            value={formData.hall}
            onChange={(e) => update("hall", e.target.value)}
            className={inputClass}
          >
            <option value="grand">Sala Duża (150 os.)</option>
            <option value="boutique">Sala Mała (40 os.)</option>
          </select>
        </div>
        <div className={`${inputClass} flex items-center`}>
          {selectedDate ? (
            <span className="text-gold">
              {format(selectedDate, "d MMMM yyyy", { locale: pl })}
            </span>
          ) : (
            <span className="text-muted-foreground">
              ← Kliknij wolną datę w kalendarzu
            </span>
          )}
        </div>
        <textarea
          placeholder="Twoja wiadomość..."
          rows={4}
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass + " resize-none"}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 font-body text-xs tracking-[0.3em] uppercase border border-gold/30 px-10 py-4 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          <Send size={14} />
          Wyślij zapytanie
        </button>
      </form>
    </RevealOnScroll>
  );
};

export default ContactForm;
