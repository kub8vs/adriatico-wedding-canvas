import RevealOnScroll from "./RevealOnScroll";
import { Crown, Gem, Armchair, Clock } from "lucide-react";

const highlights = [
  { icon: Clock, label: "15 lat doświadczenia" },
  { icon: Crown, label: "Kryształowe żyrandole" },
  { icon: Gem, label: "Lustra sufitowe" },
  { icon: Armchair, label: "Bogaty ustrój" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-dark">
      <div className="max-w-5xl mx-auto text-center">
        <RevealOnScroll>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
            O Nas
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Tradycyjna Gościnność
          </h2>
          <div className="gold-line w-24 mx-auto mb-10" />
          <p className="font-accent text-xl md:text-2xl text-meringue-deep leading-relaxed max-w-3xl mx-auto mb-16">
            Od ponad 15 lat Adriatico w Andrespolu jest synonimem eleganckiego przyjęcia.
            Nasze sale zdobią kryształowe żyrandole, lustrzane sufity
            — bo wierzymy, że każde wydarzenie zasługuje na królewską oprawę.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <RevealOnScroll key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 flex items-center justify-center border border-gold/30 rounded-full">
                  <item.icon size={28} className="text-gold" />
                </div>
                <p className="font-body text-sm text-meringue-dark tracking-wide text-center uppercase">
                  {item.label}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
