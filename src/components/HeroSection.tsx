import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/1.jpg"; 
import logoImage from "@/assets/adriatico.jpg"; 

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
          loading="eager" 
        />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/70" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center w-full max-w-7xl mx-auto"
        >
          <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.6em] uppercase text-gold font-bold mb-6 px-2">
            Sala Weselna & Bankietowa · Andrespol
          </p>

          {/* 
            ZMIANA: clamp(4.5rem, 10vw, 10.5rem)
            - 4.5rem: duży i czytelny na telefonach (z zachowaniem ciasnego rozstawu liter)
            - 10vw: płynne, stabilne skalowanie
            - 10.5rem: zmniejszony, lżejszy i bardziej prestiżowy rozmiar na komputerach
          */}
          <h1 
            style={{ fontSize: "clamp(4.5rem, 10vw, 10.5rem)" }}
            className="font-display tracking-tight md:tracking-[0.15em] leading-none mb-4 text-black font-medium drop-shadow-sm uppercase break-words block w-full px-2"
          >
            ADRIATICO
          </h1>

          <div className="h-[2px] w-24 sm:w-48 bg-black mx-auto mb-10" />

          {/* Slogany */}
          <div className="h-24 flex items-center justify-center px-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={sloganIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8 }}
                className="font-accent text-xl sm:text-2xl md:text-4xl text-black max-w-2xl mx-auto leading-relaxed italic font-medium"
              >
                {slogans[sloganIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Przycisk CTA */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 sm:mt-16 font-body text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase border-2 border-black px-8 sm:px-12 py-4 sm:py-5 text-black font-bold hover:bg-black hover:text-white transition-all duration-500 whitespace-nowrap"
        >
          Odkryj Naszą Historię
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3"
      >
        <span className="font-body text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-black font-bold">
          SCROLL
        </span>
        <div className="w-[2px] h-8 sm:h-12 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;