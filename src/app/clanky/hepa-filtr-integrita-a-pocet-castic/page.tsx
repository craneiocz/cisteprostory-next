import type { Metadata } from 'next';
import ArticleLayout, { ArticleCallout, ArticleChecklist } from '@/components/ArticleLayout';
import { articles, getArticle } from '@/lib/articles';
import { createPageMetadata } from '@/lib/seo';

const article = getArticle('hepa-filtr-integrita-a-pocet-castic')!;
const relatedArticles = articles.filter((item) => item.slug !== article.slug);

export const metadata: Metadata = createPageMetadata({
  path: article.path,
  title: `${article.title} | Čisté prostory`,
  description: article.description,
  type: 'article',
});

export default function ArticlePage() {
  return (
    <ArticleLayout
      article={article}
      relatedArticles={relatedArticles}
      relatedLinks={[
        { href: '/integrita-hepa-filtru', label: 'Integrita HEPA filtrů' },
        { href: '/pocet-castic-iso-14644', label: 'Počet částic podle ISO 14644' },
        { href: '/servis', label: 'Servis a údržba' },
      ]}
    >
      <h2 id="dve-kontroly">Dvě kontroly, dva odlišné cíle</h2>
      <p>Test integrity HEPA nebo ULPA filtru ověřuje, zda filtrační prvek a jeho uložení nepropouštějí aerosol mimo požadovanou úroveň. Měření počtu částic naproti tomu sleduje koncentraci částic v konkrétních bodech čistého prostoru. Výsledek jedné zkoušky proto nemůže automaticky nahradit druhou.</p>
      <p>Filtr může být bez zjevné netěsnosti, ale prostor přesto nemusí dosahovat požadované čistoty kvůli proudění, otevřeným dveřím, nevhodnému provozu nebo částicím vznikajícím uvnitř místnosti. Naopak zvýšený počet částic nemusí znamenat poškozené filtrační médium. Příčinou může být také nedostatečný průtok, obtok, nesprávné zaregulování nebo provozní činnost.</p>
      <ArticleCallout title="Důležitý rozdíl">Integrita filtru odpovídá na otázku, zda filtr a jeho uložení těsní. Počet částic odpovídá na otázku, jaké prostředí vzniká v konkrétních měřicích bodech.</ArticleCallout>

      <h2 id="integrita">Jak probíhá test integrity</h2>
      <p>Před zkouškou se připraví aerosol na vstupní straně filtru a ověří se podmínky, za kterých bude měření probíhat. Skenuje se plocha filtračního média, rám, těsnění a místo uložení. Pozornost se věnuje také obtoku kolem filtru, protože netěsnost nemusí být přímo v médiu.</p>
      <p>Příprava zahrnuje identifikaci filtru, kontrolu přístupu, ověření měřicí techniky a dohodu o provozním stavu vzduchotechniky. Pokud je filtr součástí stropního systému nebo technologické skříně, musí se posoudit také spoje, rámy a místa, kde by mohl vzduch filtr obejít.</p>
      <p>Výsledek se vyhodnocuje podle použité metody, typu filtru, požadovaných limitů a provozního zadání. Protokol má uvést identifikaci filtru, místo instalace, použitý aerosol a detektor, rychlost skenování, zjištěné hodnoty a závěr. Při nevyhovujícím výsledku je nutné rozlišit poškození média od netěsnosti těsnění nebo rámu.</p>
      <h3>Co připravit před zkouškou</h3>
      <p>Je vhodné mít k dispozici seznam filtrů, označení jejich umístění a informace o posledním zásahu. Technik pak může výsledek spojit s konkrétním filtrem, kazetou nebo stropním modulem a později dohledat, kdy byl prvek instalován, kontrolován nebo vyměněn.</p>
      <p>Přístup k filtru musí umožnit skenování celé relevantní plochy i kontrolu rámu a těsnění. Pokud je část konstrukce zakrytá nebo obtížně přístupná, má být omezení uvedeno v protokolu. Takový záznam je důležitější než zdánlivě úplný výsledek, který nepopisuje skutečný rozsah kontroly.</p>
      <p>Při přípravě se také ověřuje, zda je systém v režimu odpovídajícím zadání. Změna průtoku, regulace nebo stavu okolních místností může ovlivnit podmínky testu. Po zásahu do filtru se proto vyplatí naplánovat nejen samotný test integrity, ale i následné měření provozních parametrů a částic.</p>
      <p>Test integrity se neprovádí proto, aby vzniklo jediné číslo do protokolu. Jeho význam spočívá v dohledatelné kontrole konkrétního filtračního stupně. Výsledek má umožnit rozhodnout, zda je možné filtr ponechat v provozu, zda je třeba opravit uložení, nebo zda má být prvek vyměněn.</p>
      <p>U sestav s více filtry je důležitá jejich jednoznačná identifikace a zakreslení. Pokud se kontrolují pouze vybrané prvky, musí být zřejmé, podle jakého rizika byly vybrány. Provoz pak může plánovat další kontroly podle skutečné konfigurace a ne podle obecného názvu místnosti.</p>

      <h2 id="kdy-testovat">Kdy má test smysl</h2>
      <ArticleChecklist items={[
        'Po první instalaci nebo uvedení filtračního stupně do provozu.',
        'Po výměně HEPA nebo ULPA filtru.',
        'Po zásahu do stropního systému, skříně nebo uložení filtru.',
        'Při periodické kontrole podle plánu provozu.',
        'Při podezření na obtok, poškození nebo zhoršení výsledků.',
        'Po změně regulace, průtoku nebo související části systému.',
      ]} />
      <p>Po opravě nebo výměně filtru je vhodné navázat na test integrity také měřením částic, tlaků a případně proudění. Teprve kombinace výsledků ukáže, zda je problém izolovaný ve filtračním prvku, nebo se týká celého systému distribuce vzduchu.</p>
      <p>Periodická kontrola nemusí mít stejný rozsah jako počáteční uvedení do provozu, ale musí být srovnatelná a dohledatelná. Pokud se změní metoda, měřicí body nebo provozní stav, je potřeba tuto změnu zaznamenat, jinak může být porovnání výsledků zavádějící.</p>

      <h2 id="interpretace">Co sledovat při interpretaci</h2>
      <p>Při porovnání s předchozí kontrolou je důležitá stejná identifikace filtru, podobný provozní stav a dohledatelná dokumentace. Změna zařízení, tlakových poměrů, regulace nebo úklidového režimu může ovlivnit prostředí i bez výměny filtru.</p>
      <p>Pokud test integrity ukáže netěsnost, je nutné určit její místo a příčinu. Oprava může spočívat ve správném usazení, dotažení, výměně těsnění nebo výměně filtračního prvku. Po zásahu se kontrola opakuje a výsledek se doplní do servisní dokumentace.</p>
      <p>Pokud je integrita v pořádku, ale počet částic nevyhovuje, je vhodné prověřit průtoky, tlakové rozdíly, směr proudění, provozní kázeň a čištění. V některých případech může být problém lokální a projeví se pouze v jednom pracovním místě. Proto je důležitá mapa měřicích bodů a popis skutečných podmínek.</p>
      <p>Po servisním zásahu je užitečné postupovat v návaznosti: nejdříve ověřit správné uložení a těsnost filtru, potom zkontrolovat související provozní parametry a podle účelu prostoru zopakovat měření částic. Pokud se mění průtok nebo regulace, může být nutné doplnit také kontrolu proudění a tlakové kaskády. Výsledky je vhodné spojit s identifikací filtru, místem zásahu a verzí servisního protokolu, aby bylo při další kontrole zřejmé, co se změnilo.</p>

      <h2 id="shrnuti">Shrnutí pro servis a kontrolu</h2>
      <p>Test integrity HEPA filtru a měření částic jsou samostatné, ale navazující kontroly. První ověřuje filtrační prvek a jeho uložení, druhé ověřuje výsledné prostředí. Servisní rozhodnutí proto nemá vycházet z jediné hodnoty, ale z celého řetězce filtrace, proudění, regulace, provozu a měření.</p>
    </ArticleLayout>
  );
}
