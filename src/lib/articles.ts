export type ArticleSection = {
  id: string;
  title: string;
};

export type ArticleSummary = {
  slug: string;
  path: string;
  legacyPath: string;
  topic: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  sections: ArticleSection[];
};

export const articleAuthor = 'Redakce Čisté prostory';

export const articles: ArticleSummary[] = [
  {
    slug: 'jak-vybrat-tridu-cistoty',
    path: '/ciste-prostory/jak-vybrat-tridu-cistoty-iso-14644',
    legacyPath: '/clanky/jak-vybrat-tridu-cistoty',
    topic: 'ISO 14644',
    title: 'Jak vybrat třídu čistoty podle ISO 14644',
    description: 'Praktický postup pro volbu třídy čistoty ISO 1 až ISO 9 podle procesu, produktu, provozního stavu a požadovaného měření.',
    intro: 'Třída čistoty není univerzální známka kvality místnosti. Je to výsledek posouzení konkrétního procesu, částicového rizika a provozního režimu.',
    readingTime: '6 min čtení',
    sections: [
      { id: 'proces', title: 'Začněte procesem, ne číslem ISO' },
      { id: 'zadani', title: 'Co ověřit před návrhem' },
      { id: 'volba-reseni', title: 'Celý prostor, nebo lokální ochrana?' },
      { id: 'overeni', title: 'Jak třídu následně ověřit' },
      { id: 'shrnuti', title: 'Shrnutí pro zadání projektu' },
    ],
  },
  {
    slug: 'mereni-cistoty-v-klidovem-stavu-a-za-provozu',
    path: '/ciste-prostory/mereni-v-klidovem-stavu-a-za-provozu',
    legacyPath: '/clanky/mereni-cistoty-v-klidovem-stavu-a-za-provozu',
    topic: 'Měření a validace',
    title: 'Měření čistoty v klidovém stavu a za provozu',
    description: 'Jak se liší měření čistého prostoru v klidovém stavu a za provozu, jak připravit měřicí plán a co má obsahovat protokol.',
    intro: 'Stejný prostor může mít odlišné výsledky bez osob, zařízení a procesu a při běžné práci. Proto musí být provozní stav součástí měřicího plánu.',
    readingTime: '7 min čtení',
    sections: [
      { id: 'provozni-stav', title: 'Proč na provozním stavu záleží' },
      { id: 'merici-plan', title: 'Co má obsahovat měřicí plán' },
      { id: 'typy-kontrol', title: 'Počáteční, periodické a mimořádné měření' },
      { id: 'protokol', title: 'Výstup pro provoz a audit' },
      { id: 'shrnuti', title: 'Shrnutí pro měřicí plán' },
    ],
  },
  {
    slug: 'hepa-filtr-integrita-a-pocet-castic',
    path: '/ciste-prostory/integrita-hepa-filtru-a-pocet-castic',
    legacyPath: '/clanky/hepa-filtr-integrita-a-pocet-castic',
    topic: 'HEPA filtrace',
    title: 'HEPA filtr: integrita, nebo počet částic?',
    description: 'Vysvětlení rozdílu mezi testem integrity HEPA filtru a měřením počtu částic v čistém prostoru včetně návaznosti na servis.',
    intro: 'Test integrity filtru a měření částic odpovídají na dvě různé otázky. Pro spolehlivé ověření čistého prostoru je potřeba rozumět jejich návaznosti.',
    readingTime: '6 min čtení',
    sections: [
      { id: 'dve-kontroly', title: 'Dvě kontroly, dva odlišné cíle' },
      { id: 'integrita', title: 'Jak probíhá test integrity' },
      { id: 'kdy-testovat', title: 'Kdy má test smysl' },
      { id: 'interpretace', title: 'Co sledovat při interpretaci' },
      { id: 'shrnuti', title: 'Shrnutí pro servis a kontrolu' },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
