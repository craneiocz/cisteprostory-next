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
    <section className="py-16 lg:py-24 bg-secondary/30" id="faq">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Časté <span className="text-primary">dotazy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Odpovědi na nejčastější otázky ohledně validace čistých prostorů a vzduchotechniky.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-border rounded-lg bg-background overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
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
