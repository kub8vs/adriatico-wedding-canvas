import grandHall from "@/assets/grand-hall.jpg";
import boutiqueHall from "@/assets/boutique-hall.jpg";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

const halls = [
  {
    name: "Duża Sala",
    subtitle: "Grand Hall",
    image: grandHall,
    capacity: "do 250 gości",
    description: "Przestronna, majestatyczna sala z kryształowymi żyrandolami i panoramicznym widokiem. Idealna na wielkie celebracje.",
    icon: Users,
  },
  {
    name: "Mała Sala",
    subtitle: "Boutique Hall",
    image: boutiqueHall,
    capacity: "do 80 gości",
    description: "Kameralna elegancja w ciepłym blasku świec. Perfekcyjna na intymne przyjęcia w gronie najbliższych.",
    icon: Sparkles,
  },
];

const HallsSection = () => {
  return (
    <section id="halls" className="section-padding">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Nasze przestrzenie
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-cream">
          Dwie Sale, Jedna Wizja
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {halls.map((hall, i) => (
          <RevealOnScroll key={hall.name} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={hall.image}
                  alt={hall.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <hall.icon size={18} className="text-gold" />
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold">
                    {hall.capacity}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-cream mb-1">
                  {hall.name}
                </h3>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {hall.subtitle}
                </p>
                <p className="font-body text-lg text-cream-dark leading-relaxed max-w-md">
                  {hall.description}
                </p>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default HallsSection;
