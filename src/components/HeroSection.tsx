import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-wedding.jpg";

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
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax-like scale */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Adriatico sala weselna Andrespol"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6">
            Sala Weselna & Bankietowa · Andrespol
          </p>

          {/* Massive title with gold gradient */}
          <h1
            className="font-display text-7xl sm:text-8xl md:text-[10rem] tracking-[0.15em] text-gold-gradient leading-none mb-6"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(43 65% 62%), hsl(43 72% 45%), hsl(43 60% 35%))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ADRIATICO
          </h1>

          <div className="gold-line w-32 mx-auto mb-8" />

          {/* Rotating slogans */}
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={sloganIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-body text-xl md:text-2xl text-cream-dark max-w-xl mx-auto leading-relaxed italic"
              >
                {slogans[sloganIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 font-body text-xs tracking-[0.3em] uppercase border border-gold/30 px-8 py-4 text-gold hover:bg-gold/10 transition-all duration-500"
        >
          Odkryj Naszą Historię
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Przewiń w dół
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
