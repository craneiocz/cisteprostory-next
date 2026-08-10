'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Jak dlouho trvá validace čistého prostoru dle ISO 14644?',
    answer:
      'Doba měření závisí na velikosti a počtu zón, obvykle jde o jeden až tři pracovní dny přímo na místě. Protokol s výsledky a certifikátem obvykle dodáváme do několika pracovních dnů po měření.',
  },
  {
    question: 'Jak často je potřeba čisté prostory revalidovat?',
    answer:
      'Dle EU GMP Annex 1 a ISO 14644-2 se doporučuje periodická validace jednou ročně u tříd čistoty ISO 5–8, u kritičtějších tříd (ISO 5 a přísnější, např. GMP třída A/B) je interval kratší. Konkrétní frekvenci přizpůsobíme typu provozu a interním předpisům klienta.',
  },
  {
    question: 'Co je součástí testu integrity HEPA filtrů?',
    answer:
      'Testujeme těsnost filtru i jeho uložení pomocí aerosolového skenování dle EN 1822/ISO 14644-3, abychom vyloučili obtok (bypass) kontaminovaného vzduchu kolem filtrační vložky.',
  },
  {
    question: 'Provádíte i servis a výměnu HEPA filtrů, nebo jen měření?',
    answer:
      'Zajišťujeme obojí — dodávku a montáž vzduchotechniky a HEPA/ULPA filtrace, pravidelný servis a údržbu i následnou validaci a měření podle příslušných norem.',
  },
  {
    question: 'V jakých oborech nejčastěji pracujete?',
    answer:
      'Nejčastěji ve farmacii, zdravotnictví a nemocnicích, výzkumných laboratořích, elektronice a optice a v automotive/aerospace výrobě, kde je vyžadována kontrolovaná čistota prostředí.',
  },
  {
    question: 'Jak vás mohu kontaktovat a jak rychle odpovídáte?',
    answer:
      'Jsme dostupní online 24/7 přes e-mail nebo kontaktní formulář na webu. Na poptávky standardně odpovídáme do 24 hodin.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/10" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Často <span className="text-primary">kladené otázky</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Odpovědi na nejčastější otázky ohledně realizace čistých prostorů, validace dle ISO 14644 a EU GMP, vzduchotechniky a HEPA filtrů.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border/70 bg-card transition-shadow duration-200 hover:shadow-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-primary/4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/60 bg-gradient-to-br from-primary/4 to-transparent px-6 pb-5 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
