import RevealOnScroll from "./RevealOnScroll";
import { TreePine, Heart, BedDouble, Car } from "lucide-react";

const extras = [
  {
    icon: TreePine,
    title: "Ogród Ceremonii",
    desc: "Piękny ogród z pełnym wyposażeniem do ślubów plenerowych.",
  },
  {
    icon: BedDouble,
    title: "Apartament dla Pary",
    desc: "Luksusowy apartament w prezencie dla Młodej Pary!",
  },
  {
    icon: Heart,
    title: "Pokoje Gościnne",
    desc: "Komfortowe pokoje dla gości — nikt nie musi jechać nocą.",
  },
  {
    icon: Car,
    title: "Parking 24/7",
    desc: "Duży, monitorowany parking — bezpłatny dla wszystkich gości.",
  },
];

const GardenSection = () => {
  return (
    <section id="garden" className="section-padding bg-secondary/30">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Dodatkowe udogodnienia
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-cream">
          Ogród & Dodatki
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {extras.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.1}>
            <div className="border border-border p-8 text-center hover:border-gold/30 transition-colors duration-500 h-full">
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gold/20 rounded-sm">
                <item.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default GardenSection;
