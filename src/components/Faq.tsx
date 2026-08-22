'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Co potřebujete vědět před návrhem čistého prostoru?',
    answer:
      'Pro návrh je důležitý účel prostoru, proces, citlivost produktu, počet pracovníků, materiálový tok, požadovaná třída čistoty a provozní režim. Z těchto údajů se odvíjí dispozice, filtrace, tlakové poměry i rozsah měření.',
  },
  {
    question: 'Jak se určuje rozsah validace?',
    answer:
      'Rozsah vychází z účelu prostoru, klasifikace, vybavení a interního plánu kontrol. Může zahrnovat částice, tlakové rozdíly, proudění, teplotu, vlhkost, integritu HEPA filtrů a dokumentované vyhodnocení.',
  },
  {
    question: 'Co ověřuje test integrity HEPA filtru?',
    answer:
      'Aerosolovým skenováním ověřuje těsnost filtračního média, rámu, těsnění a uložení. Součástí je vyhodnocení naměřených hodnot proti použité metodice a limitům.',
  },
  {
    question: 'Navazuje měření na servis nebo výměnu filtru?',
    answer:
      'Ano. Po zásahu do filtrace nebo vzduchotechniky dává smysl ověřit stav systému měřením. Konkrétní kombinace servisu, testu integrity a dalších zkoušek se určuje podle zařízení a provozního rizika.',
  },
  {
    question: 'Jaký výstup z měření obdržíte?',
    answer:
      'Výstupem je protokol podle sjednaného rozsahu: identifikace měřeného prostoru, podmínky měření, použité body a přístroje, hodnoty, limity, vyhodnocení a případné doporučení k dalšímu postupu.',
  },
  {
    question: 'Jak připravit poptávku?',
    answer:
      'Uveďte účel prostoru nebo zařízení, místo realizace, požadovaný rozsah, dostupnou dokumentaci a termín, který potřebujete řešit. Pokud část údajů chybí, pomůže jejich doplnění při úvodní konzultaci.',
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
            Často <span className="text-primary">kladené otázky o čistých prostorech a validaci ISO 14644</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Odpovědi na nejčastější otázky ohledně realizace čistých prostorů, validace ISO 14644 a EU GMP Annex 1, vzduchotechniky a HEPA filtrů H13/H14.
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
