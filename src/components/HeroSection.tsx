import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// Upewnij się, że masz plik hero-wedding.jpg w folderze assets
import heroImage from "@/assets/1.jpg"; 
import logoImage from "@/assets/adriatico.jpg"; // Dodany import logo

const slogans = [
  "Tradycja Spotyka Elegancję.",
  "Twoje Wymarzone Wesele w Sercu Andrespola.",
  "Miejsce, Gdzie Tworzą się Wspomnienia.",
];

const HeroSection = () => {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Background Image Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Adriatico sala weselna Andrespol - wnętrze"
          className="w-full h-full object-cover"
          // Dodaj te atrybuty dla optymalizacji ładowania
          loading="eager" 
        />
        
        {/* Luksusowy Overlay - delikatna biała mgiełka dla kontrastu czarnych napisów */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.6em] uppercase text-gold font-bold mb-6">
            Sala Weselna & Bankietowa · Andrespol
          </p>

          {/* Wyrazisty, czarny napis Adriatico */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-[11rem] tracking-[0.15em] leading-none mb-4 text-black font-medium drop-shadow-sm">
            ADRIATICO
          </h1>

          <div className="h-[2px] w-48 bg-black mx-auto mb-10" />

          {/* Slogany w głębokiej czerni */}
          <div className="h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={sloganIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8 }}
                className="font-accent text-3xl md:text-4xl text-black max-w-2xl mx-auto leading-relaxed italic font-medium"
              >
                {slogans[sloganIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Przycisk CTA - minimalistyczny, czarny */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 font-body text-[11px] tracking-[0.4em] uppercase border-2 border-black px-12 py-5 text-black font-bold hover:bg-black hover:text-white transition-all duration-500"
        >
          Odkryj Naszą Historię
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-black font-bold">
          SCROLL
        </span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;