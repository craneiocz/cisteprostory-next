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

  return (
    <section className="py-16 lg:py-24 bg-muted/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Časté otázky k čistým prostorům, měření a filtraci
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Odpovědi na nejčastější otázky ohledně realizace čistých prostorů, validace ISO 14644 a EU GMP Annex 1, vzduchotechniky a HEPA filtrů H13/H14.
          </p>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-150 hover:text-primary-dark"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    strokeWidth={1.5}
                    className={`h-[18px] w-[18px] flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!isOpen} className="pb-6 pr-8 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
