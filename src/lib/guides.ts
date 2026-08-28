export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type Guide = {
  path: string;
  parentPath: string;
  parentLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  ctaLabel: string;
  ctaText: string;
  lastModified: string;
  sections: GuideSection[];
  relatedLinks: Array<{ href: string; label: string }>;
  sources: Array<{ href: string; label: string }>;
};

export const guides = {
  designBudget: {
    path: '/ciste-prostory/navrh-a-rozpocet',
    parentPath: '/ciste-prostory',
    parentLabel: 'Návrh a realizace',
    eyebrow: 'Návrh a rozpočet',
    title: 'Jak připravit zadání a rozpočet čistého prostoru',
    description:
      'Vstupy pro technický návrh a rozpočet čistého prostoru: proces, třída čistoty, dispozice, filtrace, dokumentace a provozní náklady.',
    intro:
      'Cena čistého prostoru nevychází pouze z plochy. Rozhoduje proces, provozní stav, požadovaná kontrola prostředí a rozsah dodávky, který musí být předem srovnatelně popsaný.',
    ctaLabel: 'Připravit zadání projektu',
    ctaText:
      'Do poptávky uveďte účel prostoru, předpokládanou plochu, proces, požadované parametry a termín. Nejasné body společně oddělíme od závazného zadání.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'proces',
        title: 'Rozpočet začíná procesem, ne metry čtverečními',
        paragraphs: [
          'Stejná plocha může vyžadovat rozdílné řešení podle toho, zda se chrání produkt, pracovník, pacient nebo okolí. Do návrhu vstupuje počet osob, otevřené operace, zdroje částic, pohyb materiálu, četnost úklidu a režim odstávek.',
          'Požadovaná třída čistoty je pouze jedna část zadání. Musí být spojena s provozním stavem, místem kritické operace a způsobem, kterým se bude dosažení podmínek ověřovat.',
        ],
        items: [
          'účel prostoru a popis kritické operace',
          'počet osob, směn a technologických zařízení',
          'materiálový a personální tok',
          'stav po vybudování, v klidu nebo za provozu',
        ],
      },
      {
        id: 'rozsah',
        title: 'Co musí být součástí srovnatelné nabídky',
        paragraphs: [
          'Nabídky lze porovnat pouze tehdy, když pracují se stejnou hranicí dodávky. Je potřeba určit, kdo řeší stavební připravenost, povrchy, dveře, prostupy, vzduchotechniku, elektro, měření a dokumentaci skutečného provedení.',
          'Samostatně se popíší položky, které vzniknou až po místním šetření. Patří sem stav stávajících rozvodů, dostupnost servisních tras, požadovaná odstávka a zásahy do navazujících profesí.',
        ],
        items: [
          'projekt a koordinace profesí',
          'konstrukce, povrchy a technologické prostupy',
          'filtrace, regulace a měření',
          'uvedení do provozu, protokoly a zaškolení',
        ],
      },
      {
        id: 'naklady',
        title: 'Investice a provozní náklady musí být posuzovány společně',
        paragraphs: [
          'Nižší pořizovací cena nemusí znamenat levnější provoz. Spotřebu ovlivňuje množství upravovaného vzduchu, tlaková ztráta filtrace, požadavky na teplotu a vlhkost, způsob regulace a režim mimo výrobu.',
          'Do rozhodnutí patří také dostupnost filtrů, prostor pro jejich bezpečnou výměnu, interval kontrol a dopad servisního zásahu na výrobu. Návrh bez servisního přístupu přesouvá náklady do každé další odstávky.',
        ],
      },
      {
        id: 'zmeny',
        title: 'Které změny obvykle upraví cenu nebo termín',
        paragraphs: [
          'Největší dopad mají změny procesu, dispozice, počtu osob, požadované třídy, tlakových vazeb a rozsahu dokumentace. Proto je vhodné před nabídkou oddělit pevné požadavky od variant, které lze technicky porovnat.',
          'Výstupem úvodní fáze má být seznam potvrzených vstupů, otevřených bodů a odpovědností. Teprve nad ním lze připravit nabídku, která nebude založená na skrytých předpokladech.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/ciste-prostory', label: 'Návrh a realizace čistých prostor' },
      { href: '/ciste-prostory/materialy-povrchy-a-dispozice', label: 'Materiály, povrchy a dispozice' },
      { href: '/vzduchotechnika/tlakova-kaskada-a-proudeni', label: 'Tlaková kaskáda a proudění' },
    ],
    sources: [
      { href: 'https://www.iso.org/standard/53394.html', label: 'ISO 14644-1:2015' },
      { href: 'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en', label: 'EudraLex Volume 4' },
    ],
  },
  materials: {
    path: '/ciste-prostory/materialy-povrchy-a-dispozice',
    parentPath: '/ciste-prostory',
    parentLabel: 'Návrh a realizace',
    eyebrow: 'Materiály a dispozice',
    title: 'Materiály, povrchy a dispozice čistých prostor',
    description:
      'Jak při návrhu čistého prostoru posoudit stěny, stropy, podlahy, dveře, prostupy, čistitelnost a pohyb osob a materiálu.',
    intro:
      'Povrch v čistém prostoru není samostatný katalogový prvek. Musí odpovídat provozu, čištění, zatížení a detailům, ve kterých se potkávají konstrukce, technologie a vzduchotechnika.',
    ctaLabel: 'Konzultovat dispozici a povrchy',
    ctaText:
      'Připravte půdorys, popis procesu, používané čisticí prostředky a seznam zařízení. Návrh pak může řešit skutečné styky a prostupy místo obecných materiálových požadavků.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'dispozice',
        title: 'Dispozice odděluje neslučitelné pohyby',
        paragraphs: [
          'Základ tvoří cesta pracovníků, materiálu, odpadu a servisních činností. Směry se navrhují tak, aby nevznikalo zbytečné křížení a aby přechod mezi zónami odpovídal provoznímu postupu.',
          'Propusti, šatny a přechodové prostory musí být posouzeny společně s tlakovými vazbami. Samotné dveře nebo čára v půdorysu nezajistí řízený přenos mezi zónami.',
        ],
        items: [
          'pohyb osob a převlékání',
          'vstup materiálu a výstup odpadu',
          'servisní trasy bez narušení kritické zóny',
          'prostor pro čištění a manipulaci',
        ],
      },
      {
        id: 'povrchy',
        title: 'Povrchy se volí podle údržby a chemické odolnosti',
        paragraphs: [
          'Stěny, stropy a podlahy mají umožnit opakovatelné čištění a nesmí vytvářet obtížně přístupná místa. Výběr ovlivňuje mechanické zatížení, používaná chemie, četnost dezinfekce a požadovaná opravitelnost.',
          'Důležitý je celý detail, nikoli jen plocha materiálu. Napojení podlahy na stěnu, rohy, dilatace, spáry a kotvení zařízení určují, zda bude povrch dlouhodobě udržovatelný.',
        ],
      },
      {
        id: 'dvere',
        title: 'Dveře, okna a prostupy jsou součástí vzduchotěsné hranice',
        paragraphs: [
          'Každý otvor mění obálku prostoru. Dveře musí odpovídat četnosti průchodů, požadavkům na čištění, tlakovému rozdílu a případné blokaci proti současnému otevření.',
          'Technologické prostupy se koordinují před montáží. Dodatečně utěsněné kabely, potrubí nebo nosné prvky často zhoršují čistitelnost, servisovatelnost a opakovatelnost výsledku.',
        ],
        items: [
          'zárubně a těsnění bez obtížně čistitelných hran',
          'průhledy a jejich napojení na panel',
          'utěsnění potrubí, kabelů a nosných konstrukcí',
          'přístup k požárním a servisním prvkům',
        ],
      },
      {
        id: 'predani',
        title: 'Předání musí zachytit skutečné provedení',
        paragraphs: [
          'Po dokončení se kontrolují detaily, čistitelnost, přístupnost a shoda se schváleným návrhem. Dokumentace skutečného provedení musí zaznamenat změny, které vznikly při koordinaci profesí.',
          'Tyto podklady navazují na uvedení do provozu a měření. Pokud dokumentace neodpovídá realitě, komplikuje další servis, změnové řízení i vyhodnocení odchylky.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/ciste-prostory', label: 'Návrh a realizace čistých prostor' },
      { href: '/ciste-prostory/navrh-a-rozpocet', label: 'Zadání a rozpočet' },
      { href: '/vzduchotechnika', label: 'Vzduchotechnika čistých prostor' },
    ],
    sources: [
      { href: 'https://www.iso.org/ics/13.040.35/x/', label: 'Přehled řady ISO 14644' },
      { href: 'https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf', label: 'EU GMP Annex 1' },
    ],
  },
  qualification: {
    path: '/mereni-a-validace/iq-oq-pq',
    parentPath: '/mereni-a-validace',
    parentLabel: 'Měření a validace',
    eyebrow: 'IQ, OQ a PQ',
    title: 'IQ, OQ a PQ: návaznost kvalifikace v praxi',
    description:
      'Rozdíly mezi IQ, OQ a PQ, potřebné vstupy, odpovědnosti, akceptační kritéria a dokumentace při kvalifikaci čistých prostor.',
    intro:
      'Zkratky IQ, OQ a PQ neoznačují tři zaměnitelné protokoly. Každá fáze odpovídá na jinou otázku a musí navazovat na schválené požadavky, skutečné provedení a provozní způsob použití.',
    ctaLabel: 'Připravit rozsah kvalifikace',
    ctaText:
      'Do poptávky přiložte dostupné uživatelské požadavky, projekt, seznam zařízení a plánovaný provozní stav. Rozsah zkoušek se stanoví podle zařízení a odpovědností projektu.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'zaklad',
        title: 'Kvalifikace musí mít společný základ',
        paragraphs: [
          'Než začne ověřování, musí být zřejmé, vůči čemu se zařízení nebo prostor posuzuje. Vstupem jsou uživatelské požadavky, schválený návrh, specifikace komponent, změnové záznamy a akceptační kritéria.',
          'Pokud jsou požadavky neúplné, protokol může pouze zaznamenat stav, ale nemůže spolehlivě prokázat shodu. Otevřené body se proto uzavírají nebo výslovně uvedou jako omezení.',
        ],
      },
      {
        id: 'iq',
        title: 'IQ ověřuje instalaci a dokumentaci',
        paragraphs: [
          'Installation Qualification porovnává instalované komponenty, identifikaci, připojení, kalibrace a dokumentaci se schváleným návrhem a požadavky výrobce. Nejde pouze o kontrolu existence zařízení.',
          'Výstup má umožnit dohledat, co bylo skutečně instalováno, v jaké konfiguraci a s jakými podklady pro další provoz. Odchylky se zaznamenají a vyhodnotí před navazující fází.',
        ],
        items: [
          'identifikace zařízení a komponent',
          'výkresy a dokumentace skutečného provedení',
          'kalibrační a materiálové doklady podle rozsahu',
          'záznam odchylek a jejich uzavření',
        ],
      },
      {
        id: 'oq',
        title: 'OQ ověřuje funkce v definovaných režimech',
        paragraphs: [
          'Operational Qualification posuzuje, zda systém pracuje v určených provozních mezích. Zkoušky mohou zahrnovat regulaci, alarmy, tlakové vazby, proudění, teplotu, vlhkost nebo další funkce podle schváleného protokolu.',
          'Každá zkouška má předem popsaný postup, měřidlo, podmínky a kritérium přijetí. Výsledek bez uvedení provozního stavu a limitu není dostatečně interpretovatelný.',
        ],
      },
      {
        id: 'pq',
        title: 'PQ propojuje technický systém se skutečným použitím',
        paragraphs: [
          'Performance Qualification ověřuje dosažení požadovaného výkonu při reprezentativním použití. U čistého prostoru je podstatné, jaké osoby, zařízení a činnosti byly během ověření přítomné.',
          'Rozsah PQ nelze automaticky převzít z jiného provozu. Musí vycházet z rizika procesu, interních postupů a požadavků, které pro dané použití skutečně platí.',
        ],
      },
      {
        id: 'predani',
        title: 'Předání zahrnuje protokoly, odchylky a odpovědnosti',
        paragraphs: [
          'Dokumentační sada musí spojit použité verze podkladů, naměřené hodnoty, vyhodnocení, odchylky a schválení. Zároveň má být jasné, kdo odpovídá za údržbu, kalibrace a další periodické kontroly.',
          'Kvalifikace nekončí podpisem protokolu. Je výchozím bodem pro provozní monitoring, změnové řízení a rozhodnutí, kdy bude potřeba nové ověření.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/mereni-a-validace', label: 'Měření a validace čistých prostor' },
      { href: '/mereni-a-validace/revalidace-a-intervaly', label: 'Revalidace a intervaly' },
      { href: '/ciste-prostory/mereni-v-klidovem-stavu-a-za-provozu', label: 'Měření v klidu a za provozu' },
    ],
    sources: [
      { href: 'https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en', label: 'EudraLex Volume 4, Annex 15' },
      { href: 'https://www.iso.org/standard/60598.html', label: 'ISO 14644-3:2019' },
    ],
  },
  revalidation: {
    path: '/mereni-a-validace/revalidace-a-intervaly',
    parentPath: '/mereni-a-validace',
    parentLabel: 'Měření a validace',
    eyebrow: 'Revalidace',
    title: 'Revalidace čistých prostor a volba intervalů',
    description:
      'Jak stanovit intervaly kontrol čistého prostoru a kdy opakovat měření po změně procesu, filtrace, dispozice nebo provozního režimu.',
    intro:
      'Kalendářní interval je pouze část plánu kontrol. Nové ověření může vyvolat změna procesu, zásah do filtrace, odchylka nebo trend, který ukazuje zhoršování provozních podmínek.',
    ctaLabel: 'Naplánovat revalidaci',
    ctaText:
      'Připravte poslední protokol, změny od předchozího měření a provozní záznamy. Rozsah kontroly pak lze navázat na skutečné riziko a historii zařízení.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'plan',
        title: 'Interval vychází z požadavků a rizika provozu',
        paragraphs: [
          'Plán kontrol spojuje požadavky použitelného předpisu, kritičnost procesu, zkušenosti z provozu a schopnost systému udržet stanovené parametry. Jednotný interval pro všechny místnosti a zařízení nemusí odpovídat jejich rozdílnému využití.',
          'Do plánu patří rozsah zkoušek, provozní stav, odpovědnost, akceptační kritéria a postup při odchylce. Díky tomu je výsledek porovnatelný s předchozími obdobími.',
        ],
      },
      {
        id: 'spoustece',
        title: 'Mimořádnou kontrolu spouští technická nebo provozní změna',
        paragraphs: [
          'Revalidace se posuzuje po výměně filtru, změně regulace, zásahu do rozvodů, úpravě dispozice nebo přemístění zařízení. Stejně důležitá může být změna počtu osob, pracovního postupu nebo režimu úklidu.',
          'Ne každá změna vyžaduje opakování všech zkoušek. Rozsah se odvodí z posouzení dopadu a zdokumentuje tak, aby bylo zřejmé, proč byly vybrány konkrétní kontroly.',
        ],
        items: [
          'výměna nebo oprava HEPA či ULPA filtrace',
          'změna tlakové kaskády nebo průtoku vzduchu',
          'nové zařízení, prostup nebo stavební úprava',
          'změna procesu, směny nebo počtu pracovníků',
        ],
      },
      {
        id: 'data',
        title: 'Trend provozních dat pomáhá rozhodnout dříve',
        paragraphs: [
          'Jednotlivý výsledek ukazuje stav v době zkoušky. Provozní monitoring a opakované protokoly umožňují sledovat, zda se tlakové rozdíly, částice nebo další parametry postupně přibližují k limitu.',
          'Trend není náhradou klasifikace nebo předepsané zkoušky. Je podkladem pro údržbu a pro rozhodnutí, zda je vhodné kontrolu provést před plánovaným termínem.',
        ],
      },
      {
        id: 'priprava',
        title: 'Příprava začíná porovnáním posledního a současného stavu',
        paragraphs: [
          'Před měřením se zkontrolují poslední protokoly, uzavřené odchylky, servisní zásahy, změny dokumentace a kalibrace použitých měřidel. Současně se potvrdí provozní stav, ve kterém má zkouška proběhnout.',
          'Výstup má umožnit porovnat podmínky s minulým měřením. Pokud jsou podmínky jiné, musí být rozdíl v protokolu popsán, nikoli skryt v samotných hodnotách.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/mereni-a-validace', label: 'Měření a validace' },
      { href: '/mereni-a-validace/iq-oq-pq', label: 'IQ, OQ a PQ' },
      { href: '/servis/vymena-hepa-filtru', label: 'Výměna HEPA filtru' },
    ],
    sources: [
      { href: 'https://www.iso.org/standard/53393.html', label: 'ISO 14644-2:2015' },
      { href: 'https://www.iso.org/standard/60598.html', label: 'ISO 14644-3:2019' },
    ],
  },
  pressureCascade: {
    path: '/vzduchotechnika/tlakova-kaskada-a-proudeni',
    parentPath: '/vzduchotechnika',
    parentLabel: 'Vzduchotechnika',
    eyebrow: 'Tlaková kaskáda',
    title: 'Tlaková kaskáda a proudění v čistém prostoru',
    description:
      'Návrh tlakových vazeb, přívodu a odvodu vzduchu, proudění, regenerace a provozních režimů čistého prostoru.',
    intro:
      'Tlakový rozdíl není samostatné číslo na displeji. Je výsledkem přívodu, odvodu, netěsností, otevírání dveří a regulace, která musí udržet požadovaný směr proudění v reálném provozu.',
    ctaLabel: 'Posoudit proudění a tlakové vazby',
    ctaText:
      'Pro technické posouzení připravte půdorys, směry požadovaného proudění, provozní režimy a dostupné hodnoty průtoků a tlaků.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'ucel',
        title: 'Směr proudění vychází z toho, co má být chráněno',
        paragraphs: [
          'Přetlak se používá tam, kde má být prostor chráněn před okolním prostředím. Podtlak může být potřebný tam, kde se omezuje únik z procesu do okolí. Konkrétní řešení závisí na riziku a návaznosti jednotlivých zón.',
          'Tlaková kaskáda musí být čitelná jako celek. Lokální změna jedné místnosti může ovlivnit sousední prostory, propusti i chování dveří.',
        ],
      },
      {
        id: 'bilance',
        title: 'Přívod, odvod a netěsnosti tvoří jednu bilanci',
        paragraphs: [
          'Regulace pracuje s množstvím přiváděného a odváděného vzduchu a s průtokem přes spáry nebo přestupní prvky. Netěsnosti, otevřené dveře a zanesené filtry proto mění výsledek i bez změny nastavené hodnoty.',
          'Návrh má zohlednit běžné i přechodové stavy. Patří sem start zařízení, útlum, otevření dveří, porucha ventilátoru a servisní režim.',
        ],
        items: [
          'jmenovité průtoky a regulační rozsahy',
          'stav dveří a propustí během provozu',
          'tlakové ztráty čistých a zanesených filtrů',
          'alarmy a reakce při ztrátě tlakového rozdílu',
        ],
      },
      {
        id: 'proudeni',
        title: 'Rozmístění přívodů a odvodů ovlivňuje účinnost výměny',
        paragraphs: [
          'Počet výměn vzduchu sám o sobě nepopisuje, jak se vzduch dostane ke kritickému místu a jak odvede částice. Důležitá je poloha přívodů, odvodů, zařízení a překážek i tepelné proudy vznikající při provozu.',
          'Vizualizace proudění nebo další zkoušky se volí podle účelu prostoru. Výsledek se interpretuje spolu s částicemi, tlaky a skutečným uspořádáním pracoviště.',
        ],
      },
      {
        id: 'regenerace',
        title: 'Regenerace ukazuje návrat k požadovanému stavu',
        paragraphs: [
          'Doba regenerace popisuje schopnost prostoru snížit zvýšenou koncentraci částic po definovaném zatížení. Ovlivňuje ji nejen množství vzduchu, ale také jeho distribuce a vnitřní uspořádání.',
          'Zkouška musí mít předem stanovenou metodiku a podmínky. Nelze ji zaměnit s obecným odhadem podle počtu výměn vzduchu.',
        ],
      },
      {
        id: 'chyby',
        title: 'Časté chyby vznikají na rozhraní projektu a provozu',
        paragraphs: [
          'Problematické bývá chybějící místo pro výměnu filtru, nevhodně umístěný snímač, současné otevírání dveří nebo změna zařízení bez přepočtu bilance. Tyto situace se často projeví až při zaregulování nebo měření.',
          'Před realizací je proto potřeba propojit půdorys, technologii, řízení a servisní postup. Měřicí plán pak ověřuje rozhodující předpoklady návrhu.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/vzduchotechnika', label: 'Vzduchotechnika a HEPA filtrace' },
      { href: '/ciste-prostory/materialy-povrchy-a-dispozice', label: 'Dispozice a prostupy' },
      { href: '/mereni-a-validace', label: 'Měření a validace' },
    ],
    sources: [
      { href: 'https://www.iso.org/standard/60598.html', label: 'ISO 14644-3:2019' },
      { href: 'https://www.iso.org/standard/53394.html', label: 'ISO 14644-1:2015' },
    ],
  },
  hepaReplacement: {
    path: '/servis/vymena-hepa-filtru',
    parentPath: '/servis',
    parentLabel: 'Servis',
    eyebrow: 'Výměna HEPA filtru',
    title: 'Výměna HEPA filtru a navazující kontrola',
    description:
      'Příprava odstávky, bezpečná výměna HEPA filtru, likvidace, kontrola uložení, test integrity a servisní dokumentace.',
    intro:
      'Výměna HEPA filtru není dokončena jeho osazením. Musí navazovat na posouzení příčiny, kontrolu rámu a těsnění, správné uvedení do provozu a ověření, že filtrační sestava plní svůj účel.',
    ctaLabel: 'Poptat servis filtrace',
    ctaText:
      'Uveďte typ zařízení, označení filtru, důvod výměny, dostupnou dokumentaci a požadovaný termín odstávky. Rozsah navazujících zkoušek se potvrdí před zásahem.',
    lastModified: '2026-08-28',
    sections: [
      {
        id: 'duvod',
        title: 'Nejdřív se určí důvod výměny',
        paragraphs: [
          'Filtr může být měněn kvůli poškození, nevyhovujícímu testu integrity, dosažené tlakové ztrátě, kontaminaci nebo plánované údržbě. Důvod ovlivňuje bezpečnostní opatření i rozsah následné kontroly.',
          'Pokud problém vznikl v rámu, těsnění nebo uložení, samotná výměna média nemusí příčinu odstranit. Před zásahem se proto kontroluje dostupná historie a konstrukce filtračního místa.',
        ],
      },
      {
        id: 'odstavka',
        title: 'Odstávka musí chránit prostor, obsluhu i zařízení',
        paragraphs: [
          'Příprava zahrnuje provozní stav, přístupovou trasu, zakrytí okolí, manipulaci se starým filtrem a způsob obnovení provozu. U rizikových aplikací se bezpečnostní postup stanoví podle charakteru zachycených látek.',
          'Současně se ověří rozměr, třída, těsnění, směr proudění a kompatibilita nového filtru. Náhrada se neposuzuje pouze podle vnějšího rozměru.',
        ],
        items: [
          'identifikace filtru a filtračního místa',
          'režim zařízení během odstávky',
          'manipulace, zabalení a předání použitého filtru',
          'přístup k rámu, těsnění a měřicím místům',
        ],
      },
      {
        id: 'montaz',
        title: 'Montáž zahrnuje kontrolu dosednutí a okolních částí',
        paragraphs: [
          'Před osazením se kontroluje čistota a stav rámu, těsnění a přítlačného mechanismu. Po instalaci musí být zřejmé označení filtru a návaznost na servisní evidenci.',
          'Přílišné nebo nerovnoměrné stlačení těsnění může být stejně problematické jako nedostatečný přítlak. Montážní postup proto vychází z konstrukce zařízení a údajů výrobce.',
        ],
      },
      {
        id: 'overeni',
        title: 'Po výměně následuje ověření podle dohodnutého plánu',
        paragraphs: [
          'Test integrity posuzuje filtrační médium, rám, těsnění a uložení jako instalovaný celek. Podle dopadu zásahu mohou navazovat další kontroly proudění, tlakových poměrů nebo částic.',
          'Rozsah se stanoví předem a uvede v servisním záznamu. Tím se oddělí samotná montáž od důkazu, že zařízení po zásahu splňuje požadované parametry.',
        ],
      },
      {
        id: 'zaznam',
        title: 'Servisní záznam vytváří historii pro další rozhodnutí',
        paragraphs: [
          'Záznam obsahuje identifikaci zařízení a filtru, datum, důvod výměny, provedené kontroly, použité měřidlo a výsledek. Připojí se zjištěné odchylky a doporučený další krok.',
          'Dohledatelná historie usnadňuje plánování náhradních filtrů, porovnání tlakových ztrát a přípravu další revalidace nebo auditu.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/servis', label: 'Servis čistých prostor a filtrace' },
      { href: '/integrita-hepa-filtru', label: 'Test integrity HEPA filtrů' },
      { href: '/mereni-a-validace/revalidace-a-intervaly', label: 'Revalidace po změně' },
    ],
    sources: [
      { href: 'https://www.iso.org/standard/60598.html', label: 'ISO 14644-3:2019' },
      { href: 'https://www.iso.org/ics/13.040.35/x/', label: 'Přehled řady ISO 14644' },
    ],
  },
} as const satisfies Record<string, Guide>;

export const guideList = Object.values(guides);
