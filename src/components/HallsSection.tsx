import { motion } from "framer-motion";
// NAPRAWA: Usunięto klamerki z importu RevealOnScroll
import RevealOnScroll from "./RevealOnScroll";
// NAPRAWA: Zmiana nazw plików na zgodne z Twoim folderem assets (grand-hall i boutique-hall)
import grandHallImg from "../assets/big-hall.jpg";
import boutiqueHallImg from "../assets/small-hall.jpg";

const halls = [
  {
    title: "Sala Kryształowa",
    subtitle: "Big Hall",
    description:
      "Nasza największa przestrzeń, idealna na huczne wesela do 150 osób. Wysokie sufity, kryształowe żyrandole i eleganckie wykończenie tworzą iście królewski klimat.",
    image: grandHallImg,
    features: ["Do 150 gości", "Parkiet taneczny", "Scena dla zespołu", "Bezpośrednie wyjście na taras"],
  },
  {
    title: "Sala Butikowa",
    subtitle: "Small Hall",
    description:
      "Kameralna i przytulna przestrzeń na intymne przyjęcia do 40 osób. Idealna dla par ceniących bliskość i subtelną elegancję w nowoczesnym wydaniu.",
    image: boutiqueHallImg,
    features: ["Do 40 gości", "Klimatyczne oświetlenie", "Prywatny bar", "Widok na ogród"],
  },
];

const HallsSection = () => {
  return (
    <section id="halls" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Nasze Sale</h2>
            <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 font-body leading-relaxed">
              Oferujemy dwie unikalne przestrzenie, które możemy dostosować do Państwa wizji. 
              Od wielkich bali po kameralne kolacje.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-32">
          {halls.map((hall, index) => (
            <div 
              key={hall.title}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}
            >
              <div className="w-full md:w-1/2">
                <RevealOnScroll direction={index % 2 === 1 ? "right" : "left"}>
                  <div className="relative group overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      src={hall.image}
                      alt={hall.title}
                      className="w-full aspect-[4/5] object-cover shadow-2xl"
                    />
                    <div className="absolute inset-0 border-[1px] border-gold/20 m-4 pointer-events-none" />
                  </div>
                </RevealOnScroll>
              </div>

              <div className="w-full md:w-1/2 space-y-8">
                <RevealOnScroll direction={index % 2 === 1 ? "left" : "right"}>
                  <div className="space-y-4">
                    <span className="text-gold font-body text-sm tracking-[0.3em] uppercase block">
                      {hall.subtitle}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl">{hall.title}</h3>
                    <p className="text-gray-600 font-body leading-relaxed text-lg">
                      {hall.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 gap-4 py-6">
                    {hall.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-body text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 px-8 py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500">
                    Zapytaj o dostępność
                  </button>
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallsSection;