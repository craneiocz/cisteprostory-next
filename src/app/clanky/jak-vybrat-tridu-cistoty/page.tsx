import type { Metadata } from 'next';
import ArticleLayout, { ArticleCallout, ArticleChecklist } from '@/components/ArticleLayout';
import { articles, getArticle } from '@/lib/articles';
import { createPageMetadata } from '@/lib/seo';

const article = getArticle('jak-vybrat-tridu-cistoty')!;
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
        { href: '/ciste-prostory', label: 'Čisté prostory' },
        { href: '/pocet-castic-iso-14644', label: 'Měření počtu částic' },
      ]}
    >
      <h2 id="proces">Začněte procesem, ne číslem ISO</h2>
      <p>Volba třídy čistoty by měla vycházet z toho, co se v prostoru skutečně děje. Důležité je, zda chráníme produkt, pracovníka, pacienta nebo okolní prostředí, jak citlivý je proces na částice a kdy vzniká největší riziko kontaminace. Jiná úroveň řízení může být potřebná pro otevřenou operaci, jiná pro uzavřené zařízení a jiná pro prostor, kde je kritická pouze lokální pracovní zóna.</p>
      <p>ISO 14644-1 popisuje klasifikaci čistoty vzduchu podle koncentrace částic ve stanovených velikostech. Třídy ISO 1 až ISO 9 proto neoznačují automaticky celý technologický proces ani úroveň mikrobiologické čistoty. Při návrhu je nutné propojit klasifikaci s dispozicí, filtrací, prouděním, úklidem, pohybem osob a materiálu.</p>
      <ArticleCallout title="Praktické pravidlo">Nejprve popište kritickou operaci, její citlivost a provozní stav. Teprve potom vybírejte klasifikaci a technické řešení, které ji dokáže stabilně udržet.</ArticleCallout>

      <h2 id="zadani">Co ověřit před návrhem</h2>
      <p>Technické zadání by nemělo obsahovat pouze plochu místnosti a požadovanou třídu. Pro návrh jsou důležité také rozměry zařízení, počet pracovníků, frekvence otevírání dveří, způsob vstupu materiálu, úklid a servisní přístup. Tyto údaje ovlivní proudění, tlakové poměry, umístění filtrů i budoucí provozní náklady.</p>
      <ArticleChecklist items={[
        'Které operace jsou otevřené a které probíhají v uzavřeném zařízení.',
        'Jaké částice mohou vznikat při práci, manipulaci nebo úklidu.',
        'Kolik pracovníků a zařízení bude v prostoru současně.',
        'Zda je potřebná ochrana celého prostoru, nebo pouze lokální ochrana.',
        'V jakém provozním stavu se bude čistota posuzovat.',
        'Jak bude řešena výměna filtrů a přístup k servisním místům.',
      ]} />
      <p>Výsledkem tohoto posouzení má být zadání, které lze převést do dispozice, filtrace a měřicího plánu. Pokud se třída zvolí pouze podle vzoru jiné místnosti, může vzniknout zbytečně nákladné řešení nebo naopak prostor, který nebude dostatečně stabilní při běžném provozu.</p>
      <h3>Provozní riziko se mění v čase</h3>
      <p>Čistý prostor se neposuzuje pouze v okamžiku, kdy je nový a prázdný. V průběhu směny se mění počet osob, množství materiálu, otevření dveří i zatížení technologie. Pokud zadání tyto změny nepopíše, může být návrh správný na papíře, ale obtížně použitelný v běžném provozu.</p>
      <p>Za důležitý podklad se považuje také režim vstupu a výstupu. Předávací místnosti, šatny, pass boxy a tlakové kaskády ovlivňují, kolik částic se do kritické zóny dostane. Stejnou pozornost si zaslouží cesta odpadu, servisních nástrojů a materiálu, který se do prostoru přináší opakovaně.</p>
      <p>U výrobních nebo laboratorních procesů je vhodné označit kritická místa přímo v půdorysu. Může jít o místo otevření nádoby, plnění, vážení, odběru vzorku nebo práce s citlivou součástí. Taková místa mohou vést k lokální ochraně i tehdy, když celý prostor nepotřebuje nejvyšší klasifikaci.</p>

      <h2 id="volba-reseni">Celý prostor, nebo lokální ochrana?</h2>
      <p>Pro více pracovišť, definovaný tok materiálu a řízený vstup osob dává smysl koncepce celého čistého prostoru. Takové řešení umožňuje řídit zóny, tlakové kaskády, přívod a odvod vzduchu i návaznost na obslužné místnosti. Je však náročnější na dispozici, regulaci, kvalifikaci a každodenní provoz.</p>
      <p>Pokud je kritická jediná operace, může být účelnější laminární box, izolátor nebo jiné lokální zařízení. Kombinované řešení propojuje čistý prostor s lokální bariérou a umožňuje rozdělit požadavky podle rizika jednotlivých kroků. Při rozhodování se posuzuje také způsob čištění, manipulace s materiálem, požadavky na ochranu obsluhy a četnost servisních zásahů.</p>
      <div className="not-prose my-10 overflow-hidden rounded-xl border border-border">
        <div className="grid bg-accent/30 text-sm font-semibold text-foreground sm:grid-cols-3"><div className="p-4">Řešení</div><div className="p-4">Typická situace</div><div className="p-4">Co ověřit</div></div>
        <div className="grid border-t border-border text-sm text-muted-foreground sm:grid-cols-3"><div className="p-4 font-semibold text-foreground">Celý prostor</div><div className="p-4">Více pracovišť a řízený tok</div><div className="p-4">Zóny, kaskády, provozní režim</div></div>
        <div className="grid border-t border-border text-sm text-muted-foreground sm:grid-cols-3"><div className="p-4 font-semibold text-foreground">Lokální ochrana</div><div className="p-4">Jedna kritická operace</div><div className="p-4">Zařízení, obsluha, okolní prostor</div></div>
        <div className="grid border-t border-border text-sm text-muted-foreground sm:grid-cols-3"><div className="p-4 font-semibold text-foreground">Kombinace</div><div className="p-4">Rozdělené riziko procesu</div><div className="p-4">Návaznost bariér a materiálu</div></div>
      </div>
      <p>Rozhodnutí se vyplatí posuzovat také z hlediska budoucích změn. Pokud se plánuje nový výrobek, další pracovní místo nebo změna zařízení, může být vhodné ponechat určitou provozní rezervu. Rezerva však nemá nahrazovat technické zadání; má být popsáno, které parametry lze později upravit a jak se změna ověří.</p>
      <p>U farmaceutických a zdravotnických provozů se technické požadavky propojují s provozními postupy, kvalifikací a dokumentací. Třída čistoty proto není izolované rozhodnutí projektanta. Musí být srozumitelná také pro obsluhu, údržbu a osobu, která bude vyhodnocovat výsledky kontrol.</p>
      <p>Praktickým výsledkem této úvahy má být jasné zadání: která zóna se klasifikuje, při jaké činnosti, s jakou ochranou produktu a podle jakých limitů se bude výsledek posuzovat. Takové zadání usnadní projektování i pozdější změnové řízení.</p>

      <h2 id="overeni">Jak třídu následně ověřit</h2>
      <p>Po uvedení systému do provozu se stanoví měřicí body, referenční velikosti částic a provozní stav. Klasifikace může probíhat v klidovém stavu nebo za provozu podle účelu prostoru a validačního plánu. Protokol má uvést použité zařízení, místo měření, počet vzorků, vyhodnocení a závěr, zda výsledek odpovídá požadované třídě.</p>
      <p>Výsledek je potřeba číst v souvislosti s tlakem, prouděním, teplotou, vlhkostí a stavem filtrace. Pokud je překročení pouze v jednom bodě, může být příčinou lokální proudění nebo provozní činnost. Pokud se zhoršení objevuje v celé zóně, je vhodné prověřit regulaci, filtraci, úklid a provozní postupy.</p>
      <p>Samotné měření částic nenahrazuje test integrity HEPA filtru. Měření ověřuje stav prostředí v definovaných bodech, zatímco integrita filtru hledá netěsnosti filtračního média, rámu, těsnění nebo uložení. Obě kontroly se proto doplňují.</p>

      <h2 id="shrnuti">Shrnutí pro zadání projektu</h2>
      <p>Kvalitní zadání třídy čistoty spojuje proces, riziko, provozní stav, dispozici a způsob ověření. Číslo ISO je důležitý parametr, ale samo o sobě neříká, zda bude prostor vhodný pro konkrétní operaci. Návrh má proto od začátku počítat s měřením, úklidem, servisem a změnami, které mohou v provozu nastat.</p>
    </ArticleLayout>
  );
}
