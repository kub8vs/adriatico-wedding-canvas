import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const images = [
  { src: "/src/assets/srodek.jpg", title: "Eleganckie Wnętrza", size: "col-span-2 row-span-2" },
  { src: "/src/assets/big.jpg", title: "Sala Balowa", size: "col-span-1 row-span-1" },
  { src: "/src/assets/gastronomy.jpg", title: "Wykwintna Kuchnia", size: "col-span-1 row-span-2" },
  { src: "/src/assets/small-hall.jpg", title: "Sala Kameralna", size: "col-span-1 row-span-1" },
  { src: "/src/assets/5.jpg", title: "Ślub w Plenerze", size: "col-span-2 row-span-1" },
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

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[900px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${img.size} relative group overflow-hidden cursor-pointer`}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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