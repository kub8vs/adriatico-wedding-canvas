import gastronomyImg from "@/assets/gastronomy.jpg";
import RevealOnScroll from "./RevealOnScroll";
import { UtensilsCrossed, Beef, CakeSlice, Salad } from "lucide-react";

const specialties = [
  { icon: Beef, title: "Kaczka Pieczona", desc: "Serwowana tradycyjnie z jabłkami i modrą kapustą" },
  { icon: UtensilsCrossed, title: "Rosół Babci", desc: "Złocisty, aromatyczny — jak u mamy" },
  { icon: Salad, title: "Wiejski Stół", desc: "Obfitość wędlin, serów i domowych przetworów" },
  { icon: CakeSlice, title: "Fontanna Czekoladowa", desc: "Z najlepszą belgijską czekoladą i świeżymi owocami" },
];

const GastronomySection = () => {
  return (
    <section id="gastronomy" className="section-padding section-dark">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <RevealOnScroll direction="left">
          <div className="overflow-hidden rounded-sm">
            <img
              src={gastronomyImg}
              alt="Kuchnia Adriatico"
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
            Domowe smaki
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Gastronomia
          </h2>
          <div className="gold-line w-16 mb-8" style={{ marginLeft: 0 }} />
          <p className="font-accent text-xl text-meringue-dark leading-relaxed mb-4">
            Stawiamy na obfitość i domowe smaki. U nas nie ma porcjowania — serwujemy tradycyjne
            <strong className="text-gold"> półmiski</strong>, żeby każdy gość mógł jeść ile dusza zapragnie.
          </p>
          <p className="font-body text-base text-meringue-deep mb-10">
            Nasze specjały to kwintesencja polskiej kuchni — przygotowywane z pasją i najświeższych składników.
          </p>

          <div className="space-y-6">
            {specialties.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.12}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-gold/30 rounded-full">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-0.5">{item.title}</h3>
                    <p className="font-body text-sm text-meringue-deep">{item.desc}</p>
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
