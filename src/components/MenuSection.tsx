import RevealOnScroll from "./RevealOnScroll";
import { Phone } from "lucide-react";

/**
 * UWAGA: Poniższe pozycje to PRZYKŁADOWE, reprezentatywne menu, spójne z ofertą
 * prezentowaną na stronie. Należy je zastąpić dokładnym menu przesłanym przez
 * Klientkę (załącznik z e-maila). Wystarczy edytować tablicę `menu` poniżej —
 * układ dopasuje się automatycznie. Alternatywnie, jeśli menu ma być pokazane
 * jako gotowy plik (PDF / zdjęcie), można dodać przycisk z linkiem do pliku.
 */
const menu = [
  {
    category: "Powitanie Gości",
    items: [
      { name: "Toast powitalny", desc: "Lampka wina musującego lub tradycyjna nalewka" },
      { name: "Chleb i sól", desc: "Staropolskie powitanie Pary Młodej / Jubilatów" },
    ],
  },
  {
    category: "Zimne Przekąski",
    items: [
      { name: "Półmiski wędlin i serów", desc: "Selekcja dojrzewających wędlin i serów" },
      { name: "Roladki z szynki", desc: "Z kremem chrzanowym i świeżą rukolą" },
      { name: "Sałatka jarzynowa", desc: "Tradycyjna, według domowej receptury" },
      { name: "Śledź po staropolsku", desc: "W oleju z cebulką lub pod pierzynką" },
      { name: "Deska wiejska", desc: "Domowe pasztety, smalec i ogórki kiszone" },
    ],
  },
  {
    category: "Zupy",
    items: [
      { name: "Rosół babci", desc: "Złocisty, z domowym makaronem" },
      { name: "Krem z borowików", desc: "Z prażonymi pestkami i nutą oliwy truflowej" },
    ],
  },
  {
    category: "Dania Główne",
    items: [
      { name: "Tradycyjny kotlet schabowy", desc: "Panierowany, z młodych ziemniaków" },
      { name: "Zraz wołowy po staropolsku", desc: "Duszony, podawany z kaszą gryczaną" },
      { name: "Filet z kurczaka", desc: "Nadziewany szpinakiem i serem" },
      { name: "Dodatki", desc: "Ziemniaki pieczone, kluski śląskie, bukiet surówek" },
    ],
  },
  {
    category: "Dania Gorące (Wieczorne)",
    items: [
      { name: "Żurek staropolski", desc: "Podany w bochenku chleba" },
      { name: "Barszcz czerwony", desc: "Z pasztecikiem lub krokietem" },
      { name: "Bigos myśliwski", desc: "Z trzech rodzajów mięsa i leśnych grzybów" },
      { name: "Strogonow", desc: "Aromatyczny gulasz z pieczywem" },
    ],
  },
  {
    category: "Słodki Stół & Desery",
    items: [
      { name: "Fontanna czekoladowa", desc: "Belgijska czekolada i świeże owoce" },
      { name: "Wybór ciast domowych", desc: "Sernik, szarlotka i torty bezowe" },
      { name: "Tort okolicznościowy", desc: "Przygotowany według życzeń Gości" },
    ],
  },
  {
    category: "Napoje",
    items: [
      { name: "Napoje bez ograniczeń", desc: "Soki, woda, kawa i herbata przez całą imprezę" },
      { name: "Drinkbar", desc: "Barman i selekcja drinków na życzenie" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Propozycje kulinarne
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
          Menu
        </h2>
        <div className="gold-line w-24 mx-auto mt-6 mb-8" />
        <p className="font-accent text-xl md:text-2xl text-charcoal-light leading-relaxed max-w-3xl mx-auto">
          Poniżej prezentujemy przykładowy zakres naszego menu — na wesela, komunie, chrzty
          oraz przyjęcia okolicznościowe. Każde przyjęcie komponujemy indywidualnie i z radością
          dopasujemy potrawy do Państwa gustu oraz tradycji rodzinnych.
        </p>
      </RevealOnScroll>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
        {menu.map((group, i) => (
          <RevealOnScroll key={group.category} delay={(i % 2) * 0.1}>
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-1">{group.category}</h3>
              <div className="gold-line w-16 mb-6" style={{ marginLeft: 0 }} />
              <ul className="space-y-5">
                {group.items.map((item) => (
                  <li key={item.name} className="border-l border-gold/25 pl-4">
                    <h4 className="font-display text-lg text-charcoal">{item.name}</h4>
                    <p className="font-body text-sm text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="text-center mt-20">
        <p className="font-body text-sm text-charcoal-muted max-w-2xl mx-auto mb-6">
          Pełne menu wraz z propozycjami na komunie, chrzty święte i przyjęcia okolicznościowe
          prześlemy na życzenie. Zapraszamy do kontaktu.
        </p>
        <a
          href="tel:+48506813729"
          className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500"
        >
          <Phone size={14} />
          Zapytaj o pełne menu
        </a>
      </RevealOnScroll>
    </section>
  );
};

export default MenuSection;
