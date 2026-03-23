import gastronomyImg from "@/assets/gastronomy.jpg";
import RevealOnScroll from "./RevealOnScroll";
import { UtensilsCrossed, Wine, Cake } from "lucide-react";

const menuItems = [
  { icon: UtensilsCrossed, title: "Kolacja Degustacyjna", desc: "5-daniowe menu autorskie dopasowane do wizji Waszego przyjęcia" },
  { icon: Wine, title: "Open Bar Premium", desc: "Najwyższej jakości alkohole, koktajle autorskie i napoje bezalkoholowe" },
  { icon: Cake, title: "Słodki Stół", desc: "Artystyczne torty weselne i desery przygotowane przez naszych cukierników" },
];

const GastronomySection = () => {
  return (
    <section id="gastronomy" className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <RevealOnScroll direction="left">
          <div className="overflow-hidden">
            <img
              src={gastronomyImg}
              alt="Gastronomia Adriatico"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Kulinarne doznania
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Gastronomia
          </h2>
          <div className="gold-line w-16 mb-8" style={{ marginLeft: 0 }} />
          <p className="font-body text-lg text-cream-dark leading-relaxed mb-12">
            Nasi szefowie kuchni tworzą menu, które jest podróżą smaków — od tradycyjnych polskich potraw po nowoczesną kuchnię europejską, każde danie jest dziełem sztuki.
          </p>

          <div className="space-y-8">
            {menuItems.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.15}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cream mb-1">{item.title}</h3>
                    <p className="font-body text-base text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default GastronomySection;
