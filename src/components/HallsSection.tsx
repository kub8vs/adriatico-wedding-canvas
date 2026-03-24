import grandHall from "@/assets/grand-hall.jpg";
import boutiqueHall from "@/assets/boutique-hall.jpg";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

const halls = [
  {
    name: "Sala Duża",
    subtitle: "Grand Hall",
    image: grandHall,
    capacity: "do 150 gości",
    features: [
      "Profesjonalna scena",
      "Klimatyzacja",
      "Wysokie sufity z żyrandolami",
      "Wyjście na ogród",
      "Oświetlenie LED w cenie",
    ],
    description:
      "Majestatyczna przestrzeń z kryształowymi żyrandolami, lustrzanymi sufitami i sceną. Idealna na wielkie wesela i bankiety.",
    icon: Users,
  },
  {
    name: "Sala Mała",
    subtitle: "Boutique Hall",
    image: boutiqueHall,
    capacity: "do 40 gości",
    features: [
      "Styl staropolski",
      "Ciepłe drewniane akcenty",
      "Prywatny bar",
      "Idealna na komunie i chrzciny",
      "Kameralna atmosfera",
    ],
    description:
      "Kameralna elegancja w stylu staropolskim — ciepłe drewno, przytulna atmosfera i prywatny bar. Perfekcyjna na intymne uroczystości.",
    icon: Sparkles,
  },
];

const HallsSection = () => {
  return (
    <section id="halls" className="section-padding">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Nasze przestrzenie
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
          Dwie Sale, Jedna Wizja
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {halls.map((hall, i) => (
          <RevealOnScroll key={hall.name} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden cursor-pointer rounded-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={hall.image}
                  alt={hall.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-3">
                  <hall.icon size={18} className="text-gold" />
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
                    {hall.capacity}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-meringue mb-1">
                  {hall.name}
                </h3>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-meringue-deep mb-4">
                  {hall.subtitle}
                </p>
                <p className="font-body text-base text-meringue-dark leading-relaxed max-w-md mb-4">
                  {hall.description}
                </p>
                <ul className="space-y-1">
                  {hall.features.map((f) => (
                    <li key={f} className="font-body text-sm text-gold-light flex items-center gap-2">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default HallsSection;
