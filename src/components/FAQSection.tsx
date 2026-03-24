import RevealOnScroll from "./RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Jaka jest pojemność sal?",
    a: "Sala Duża mieści do 150 gości, a Sala Mała do 40 gości. Obie sale posiadają pełne wyposażenie i klimatyzację.",
  },
  {
    q: "Czy oferujecie nocleg?",
    a: "Tak! Młoda Para otrzymuje w prezencie luksusowy apartament. Dla gości przygotowaliśmy dodatkowe komfortowe pokoje.",
  },
  {
    q: "Czy można zorganizować ślub w ogrodzie?",
    a: "Oczywiście! Nasz piękny ogród jest w pełni wyposażony do ceremonii plenerowych — ołtarz, dekoracje i nagłośnienie w cenie.",
  },
  {
    q: "Czy są opcje dietetyczne?",
    a: "Tak, oferujemy menu wegetariańskie, bezglutenowe i inne opcje dietetyczne. Każde menu dopasowujemy indywidualnie.",
  },
  {
    q: "Jak wygląda kwestia parkingu?",
    a: "Dysponujemy dużym, monitorowanym parkingiem 24/7 — całkowicie bezpłatnym dla Państwa gości.",
  },
  {
    q: "Czy są ukryte koszty?",
    a: "Nie! Nie pobieramy korkowego. Klimatyzacja, oświetlenie LED i prąd są wliczone w cenę — żadnych niespodzianek.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <RevealOnScroll className="text-center mb-12">
        <HelpCircle size={24} className="text-gold mx-auto mb-4" />
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Często zadawane pytania
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-cream">
          FAQ
        </h2>
        <div className="gold-line w-24 mx-auto mt-6" />
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="font-display text-lg text-cream hover:text-gold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-cream-dark leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default FAQSection;
