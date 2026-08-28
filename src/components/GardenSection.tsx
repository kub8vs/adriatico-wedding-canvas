import RevealOnScroll from "./RevealOnScroll";
import { TreePine, Heart, BedDouble, Car } from "lucide-react";
// Zdjęcia ogrodu / terenu obiektu.
// TODO (Marika): po otrzymaniu zdjęć ogrodu od fotografa wystarczy podmienić
// poniższe importy lub dodać kolejne pozycje do tablicy `gardenPhotos`.
import gardenFountainImg from "@/assets/5.jpg";
import gardenExteriorImg from "@/assets/1.jpg";

const gardenPhotos = [
  { src: gardenFountainImg, alt: "Ogród Adriatico z fontanną o zmierzchu" },
  { src: gardenExteriorImg, alt: "Dom weselny Adriatico — widok z zewnątrz" },
];

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
    <section id="garden" className="section-padding bg-meringue-dark">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Dodatkowe udogodnienia
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
          Ogród & Dodatki
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      {/* Galeria ogrodu i terenu */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto mb-20">
        {gardenPhotos.map((photo, i) => (
          <RevealOnScroll key={photo.src} direction={i % 2 === 0 ? "left" : "right"}>
            <div className="relative group overflow-hidden rounded-sm h-full">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-gold/20 m-3 pointer-events-none" />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {extras.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 0.1}>
            <div className="border border-border bg-background p-8 text-center hover:border-gold/40 hover:shadow-lg transition-all duration-500 h-full rounded-sm">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center border border-gold/20 rounded-full">
                <item.icon size={26} className="text-gold" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
              <p className="font-body text-sm text-charcoal-muted leading-relaxed">{item.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
};

export default GardenSection;
