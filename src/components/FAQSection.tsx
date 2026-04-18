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
    q: "Jakie są dostępne terminy na nadchodzący sezon?",
    a: "Kalendarz rezerwacji na najbliższy rok jest już otwarty. Najpopularniejsze terminy sobotnie w sezonie letnim znikają najszybciej, dlatego zachęcamy do kontaktu telefonicznego w celu sprawdzenia konkretnej daty lub rozważenia organizacji przyjęcia w piątek lub niedzielę na preferencyjnych warunkach.",
  },
  {
    q: "Ile osób pomieści Sala Kryształowa, a ile Sala Butikowa?",
    a: "Sala Kryształowa jest idealna dla hucznych wesel nawet do 150 osób! Dla par planujących bardziej kameralne uroczystości przygotowaliśmy Salę Butikową, która komfortowo ugości do 40 osób, zachowując przytulną i intymną atmosferę.",
  },
  {
    q: "Czy można zorganizować ślub w ogrodzie?",
    a: "Tak, nasz prywatny ogród z przygotowaną strefą ceremonii jest do Państwa dyspozycji. Zapewniamy elegancką oprawę, krzesła dla gości oraz nagłośnienie, aby przysięga w otoczeniu zieleni była niezapomnianym przeżyciem.",
  },
  {
    q: "Czy oferujecie noclegi dla gości weselnych?",
    a: "Tak, dysponujemy komfortową bazą noclegową bezpośrednio w naszym obiekcie. Dla Nowożeńców przygotowaliśmy luksusowy apartament w prezencie, natomiast dla gości weselnych oferujemy pokoje w specjalnych, niższych cenach.",
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
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
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
                className="border border-border px-6 data-[state=open]:border-gold/40 transition-colors rounded-sm"
              >
                <AccordionTrigger className="font-display text-lg text-charcoal hover:text-gold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-charcoal-muted leading-relaxed pb-5">
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
