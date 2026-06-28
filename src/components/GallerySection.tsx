import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import srodekImg from "@/assets/srodek.jpg";
import bigImg from "@/assets/big.jpg";
import gastronomyImg from "@/assets/gastronomy.jpg";
import smallHallImg from "@/assets/small-hall.jpg";
import ballroomImg from "@/assets/IMG_3562.jpg";
import banquetImg from "@/assets/IMG_3512.jpg";
import celebrationImg from "@/assets/IMG_3548.jpg";
import neonImg from "@/assets/IMG_3520.jpg";
import headTableImg from "@/assets/dom-weselny7.jpg";
import chandelierImg from "@/assets/dom-weselny8.jpg";

// Galeria w układzie masonry — aby dodać kolejne zdjęcia (np. od fotografa)
// wystarczy zaimportować plik i dopisać nową pozycję do tablicy `images`.
const images = [
  { src: srodekImg, title: "Eleganckie Wnętrza" },
  { src: ballroomImg, title: "Sala Balowa" },
  { src: bigImg, title: "Sala Kryształowa" },
  { src: banquetImg, title: "Przyjęcie w Sali" },
  { src: gastronomyImg, title: "Wykwintna Kuchnia" },
  { src: celebrationImg, title: "Komunie i Chrzciny" },
  { src: smallHallImg, title: "Mała Sala" },
  { src: headTableImg, title: "Stół Pary Młodej" },
  { src: chandelierImg, title: "Kryształowe Żyrandole" },
  { src: neonImg, title: "Detale Adriatico" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">Galeria</p>
            <h2 className="font-display text-5xl text-black uppercase tracking-widest">Uchwycone Chwile</h2>
            <div className="h-px w-24 bg-gold mx-auto mt-6" />
          </div>
        </RevealOnScroll>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.12 }}
              className="relative group overflow-hidden cursor-pointer mb-4 break-inside-avoid"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="text-center p-4">
                  <p className="text-white font-display text-2xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </p>
                  <div className="h-px w-12 bg-gold mx-auto mt-3 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
