import RevealOnScroll from "./RevealOnScroll";
import { Phone } from "lucide-react";

/**
 * Menu Domu Weselnego Adriatico — przepisane z menu przesłanego przez Klientkę.
 * Aby zaktualizować ofertę, wystarczy edytować tablice `menuSections` i `poprawiny`.
 */
const menuSections = [
  {
    title: "Obiad",
    items: [
      "Rosół z kury z makaronem",
      "Sznycel po wiedeńsku, pierś z ananasem i serem żółtym, udko pieczone, sakiewka schabowa ze szpinakiem, kotlet de Volaille, wołowina w sosie własnym",
      "Ziemniaki, frytki, surówki z czerwonej kapusty, marchwi oraz sezonowa",
      "Bukiet warzyw gotowanych (brokuły, kalafior, marchewka)",
    ],
  },
  {
    title: "Deser",
    items: ["Puchar lodów z owocami, bitą śmietaną i polewą czekoladową"],
  },
  {
    title: "II danie",
    items: ["Barszczyk czerwony z pasztecikami"],
  },
  {
    title: "III danie",
    items: [
      "Kluski śląskie z sosem grzybowym, pieczeń wieprzowa, zawijas, golonka pieczona",
      "Kapusta młoda lub kapusta zasmażana",
    ],
  },
  {
    title: "IV danie",
    items: ["Boeuf Stroganow"],
  },
  {
    title: "V danie",
    items: ["Barszczyk biały z kiełbaską"],
  },
  {
    title: "Przystawki",
    items: [
      "Schab po warszawsku",
      "Deska mięs pieczonych",
      "Rolada z drobiu z rodzynkami",
      "Rolada z drobiu z ciastem omletowym",
      "Pasztet z suszoną śliwką",
      "Ryba po japońsku",
      "Królewska kaczka faszerowana",
      "Deska serów",
      "Tymbaliki wieprzowe i drobiowe",
      "Łosoś z kawiorem i jajkiem",
      "Półmisek wędlin dymionych",
      "Śledź w oleju z bazylią",
      "Rolmopsy",
      "Śledź w sosie śmietanowo-koperkowym",
      "Rolada szpinakowa z łososiem",
      "Polędwica wieprzowa faszerowana grana padano i orzechami",
      "Sałatka gracka",
      "Sałatka z grillowanym kurczakiem i brzoskwinią",
      "Sałatka z selera naciowego",
      "Nuggetsy z kurczaka",
    ],
  },
  {
    title: "Ciasta domowe",
    items: ["Sernik, Marchewkowe, Szarlotka, Balowe, Snikers"],
  },
  {
    title: "Napoje",
    items: [
      "Mix herbat, kawa z ekspresu",
      "Sok pomarańczowy",
      "Coca cola, Sprite, Mirinda, Woda gazowana, Woda z miętą, limonką i cytryną",
    ],
  },
];

const poprawiny = [
  {
    title: "Danie I",
    items: ["Flaki Staropolskie"],
  },
  {
    title: "Danie II",
    items: [
      "Udko faszerowane, żeberko w miodzie, szaszłyk wieprzowy",
      "Frytki i ziemniaki pieczone w ziołach",
      "Surówka z kapusty pekińskiej",
    ],
  },
  {
    title: "Przystawki",
    items: [
      "Schab po warszawsku",
      "Deska mięs pieczonych",
      "Rolada z drobiu z rodzynkami",
      "Rolada z drobiu z ciastem omletowym",
      "Pasztet z suszoną śliwką",
      "Ryba po japońsku",
      "Królewska kaczka faszerowana",
      "Deska serów",
      "Tymbaliki wieprzowe i drobiowe",
      "Łosoś z kawiorem i jajkiem",
      "Półmisek wędlin dymionych",
      "Śledź w oleju z bazylią",
      "Rolmopsy",
      "Śledź w sosie śmietanowo-koperkowym",
      "Rolada szpinakowa z łososiem",
      "Polędwica wieprzowa faszerowana grana padano i orzechami",
      "Sałatka gracka",
      "Sałatka z grillowanym kurczakiem i brzoskwinią",
      "Sałatka z selera naciowego",
      "Nuggetsy z kurczaka",
    ],
  },
  {
    title: "Ciasta domowe",
    items: ["Sernik, Marchewkowe, Szarlotka, Balowe, Snikers"],
  },
  {
    title: "Napoje",
    items: [
      "Mix herbat, kawa z ekspresu",
      "Sok pomarańczowy",
      "Coca cola, Sprite, Mirinda, Woda gazowana, Woda z miętą, limonką i cytryną",
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <RevealOnScroll className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-4">
          Dom Weselny Adriatico
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal">
          Menu
        </h2>
        <div className="gold-line w-24 mx-auto mt-6 mb-8" />
        <p className="font-accent text-xl md:text-2xl text-charcoal-light leading-relaxed max-w-3xl mx-auto">
          Pełne menu naszych przyjęć — od obiadu, przez bogaty stół przystawek i domowe ciasta,
          aż po poprawiny. Każdy zestaw omawiamy z Klientem i dopasowujemy do potrzeb imprezy.
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto columns-1 md:columns-2 gap-x-16">
          {menuSections.map((section) => (
            <div key={section.title} className="break-inside-avoid mb-10">
              <h3 className="font-display text-2xl text-charcoal mb-1">{section.title}</h3>
              <div className="gold-line w-16 mb-5" style={{ marginLeft: 0 }} />
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-[15px] text-charcoal-light leading-relaxed pl-4 border-l border-gold/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Poprawiny */}
      <RevealOnScroll className="max-w-4xl mx-auto mt-16">
        <div className="border border-gold/30 rounded-sm p-8 md:p-12 bg-meringue-dark/40">
          <h3 className="font-display text-3xl text-charcoal text-center mb-2">Poprawiny</h3>
          <div className="gold-line w-20 mx-auto mb-8" />
          <div className="grid sm:grid-cols-2 gap-8">
            {poprawiny.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-xl text-charcoal mb-3">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[15px] text-charcoal-light leading-relaxed pl-4 border-l border-gold/20"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="text-center mt-16">
        <p className="font-accent text-lg text-charcoal-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Proponujemy Państwu smaczne wyroby własnej produkcji. Wszystkie zakąski i dania główne
          przygotowują nasi kucharze. Każdy zestaw menu jest omawiany z Klientem i dostosowany
          do potrzeb imprez.
        </p>
        <a
          href="tel:+48506813729"
          className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-500"
        >
          <Phone size={14} />
          Zapytaj o szczegóły menu
        </a>
      </RevealOnScroll>
    </section>
  );
};

export default MenuSection;