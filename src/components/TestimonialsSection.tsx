import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const testimonials = [
  {
    names: "Anna & Tomasz",
    date: "Czerwiec 2025",
    quote: "Adriatico to nie tylko sala weselna — to miejsce, które sprawiło, że nasz dzień był absolutnie magiczny. Każdy detal był perfekcyjny.",
    hall: "Duża Sala",
  },
  {
    names: "Kasia & Michał",
    date: "Wrzesień 2025",
    quote: "Kameralna atmosfera Małej Sali pozwoliła nam poczuć bliskość z każdym gościem. Jedzenie? Goście mówią o nim do dziś!",
    hall: "Mała Sala",
  },
  {
    names: "Marta & Jakub",
    date: "Maj 2025",
    quote: "Od pierwszego spotkania czuliśmy się zaopiekowani. Zespół Adriatico rozumie, czym jest prawdziwa elegancja i gościnność.",
    hall: "Duża Sala",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-meringue-dark">
      <RevealOnScroll className="text-center mb-16">
        <Heart size={24} className="text-gold mx-auto mb-4" />
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Opinie par
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
          Historie Miłosne
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <blockquote className="font-accent text-2xl md:text-3xl text-charcoal leading-relaxed italic mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="gold-line w-12 mx-auto mb-6" />
            <p className="font-display text-xl text-gold">
              {testimonials[current].names}
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-muted mt-2">
              {testimonials[current].hall} · {testimonials[current].date}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-8 mt-12">
          <button onClick={prev} className="text-charcoal-muted hover:text-gold transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-charcoal-muted/30"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="text-charcoal-muted hover:text-gold transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
