# SEO audit webu cisteprostory.eu

## A) Audit summary

Scope: full-site audit aktuálního lokálního exportu `out/` podle Agentic SEO Skill a porovnání s produkčními URL.

Datum auditu: 2026-08-22.

Směrové skóre: **68/100 — Needs Improvement**.

Jistota skóre: nízká až střední; chybí Search Console, backlink data a Core Web Vitals z PageSpeed API.

Typ webu: odborná B2B služba / technická konzultace a realizace čistých prostor.

### Závěr

Lokální export má správnou technickou strukturu a `/ciste-prostory` je logicky nastavená jako pilířová stránka. Po redesignu jsou ale lokální služební stránky výrazně kratší než produkční odborný obsah. Nasazení současného `out/` bez doplnění textu by proto mohlo znamenat obsahový ústup, zejména u HEPA, částic a servisu.

Produkční `/ciste-prostory` aktuálně vrací jiný obsah než lokální export: produkce má H1 „Čisté prostory – kompletní řešení pro farmacie, laboratoře a operační sály“ a přibližně 1 355 slov, zatímco lokální export má nový H1 „Čisté prostory podle procesu, ne pouze podle plochy“ a přibližně 834 slov.

První stránku Google nelze z auditu slíbit. Po nasazení je nutné měřit skutečné pozice, impresi a CTR.

### Top 3 issues

1. **Nasazení není sjednocené:** produkce a lokální export obsahují různé title, H1 a odborné bloky.
2. **Lokální service pages jsou obsahově krátké:** 362–569 slov oproti quality gate 800 slov pro service page.
3. **Produkční bezpečnostní hlavičky chybí:** security audit naměřil 25/100 a šest chybějících hlaviček.

### Top 3 opportunities

1. Zachovat nový vizuální systém, ale vrátit důležité odborné bloky do kratších služebních stránek.
2. Doplnit skutečně doložitelné odborné signály: metodika, autor/recenzent, výstupy a anonymizované případové studie.
3. Po nasazení ověřit Search Console, Core Web Vitals a skutečné SERP zobrazení.

## B) Findings table

| Area | Severity | Confidence | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| Deployment | Warning | Confirmed | Produkční obsah není shodný s lokálním exportem. | Produkční `/ciste-prostory` má jiný title/H1 a cca 1 355 slov; lokální export má nový title/H1 a cca 834 slov. | Před nahráním porovnat všechny HTML routy, rozhodnout o cílovém obsahu a nasadit kompletní konzistentní `out/`. |
| Content depth | Warning | Confirmed | Lokální služební stránky jsou kratší než doporučený quality gate. | `/vzduchotechnika` 465, `/mereni-a-validace` 569, `/integrita-hepa-filtru` 362, `/pocet-castic-iso-14644` 389, `/servis` 441 slov. | Vrátit pouze užitečné odborné bloky: metodika, podmínky, výstupy, rozhodovací příklady a provozní otázky. |
| E-E-A-T | Warning | Confirmed | Chybí veřejné doložitelné signály odbornosti. | Lokální stránky nemají autora/recenzenta, případové studie ani anonymizované protokoly. | Doplnit jen ověřitelné informace o metodice, odpovědnostech, výstupech a skutečných realizacích. |
| Security | Warning | Confirmed | Produkce postrádá šest běžných bezpečnostních hlaviček. | `security_headers.py`: score 25/100; chybí HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy a Permissions-Policy. | Doplnit hlavičky v Apache konfiguraci; CSP nejdříve otestovat kvůli GA4, CookieConsent a externím assetům. |
| AI crawlers | Warning | Confirmed | AI crawlery nejsou explicitně řízené. | `robots_checker.py`: 11 crawlerů včetně GPTBot, ClaudeBot, PerplexityBot a Google-Extended dědí obecné pravidlo `*`. | Rozhodnout obchodní politiku; pokud je přístup žádoucí, explicitně ji zdokumentovat, jinak cíleně omezit. |
| Social metadata | Warning | Confirmed | Produkční homepage má příliš dlouhý `og:title`. | `social_meta.py`: score 85/100; `og:title` 64 znaků, doporučené maximum skriptu 60. | Zkrátit homepage title/OG title při zachování hlavního záměru. |
| Schema | Warning | Confirmed | Stránkové graphy odkazují na `#website`, ale samostatný `WebSite` objekt nebyl nalezen. | Lokální `validate_schema.py` označuje graph wrapper jako missing `@type`; `PageSchema` používá `isPartOf` s `#website`. | Doplnit `WebSite` schema na homepage nebo odstranit nevyužitou referenci. |
| Schema | Warning | Confirmed | Homepage obsahuje `FAQPage` JSON-LD na komerčním webu. | `validate_schema.py out/index.html` označil FAQPage jako restricted; auditní skill jej nedoporučuje pro komerční weby. | Viditelné FAQ ponechat, `FAQPage` JSON-LD zvážit k odstranění. |
| Sitemap | Pass | Confirmed | Deklarovaná sitemap je dostupná a obsahuje 8 URL. | Produkční `sitemap_checker.py`: sitemap `sitemap.xml` dostupná, 8 URL; dva alternativní název sitemap indexu vrací 404 a jsou pouze probe varianty. | Zachovat deklarovanou sitemapu a ověřit její přijetí v Search Console. |
| Robots | Pass | Confirmed | Základní crawl pravidla jsou otevřená. | Produkční `robots_checker.py`: HTTP 200, Googlebot/Bingbot/obecný agent bez disallow. | Zachovat po rozhodnutí o AI crawlerech. |
| Internal links | Pass | Confirmed | Web nemá nalezené sirotčí routy ani broken links v základní kontrole. | `internal_links.py`: 8 pages, 72 internal links; `broken_links.py`: 0 broken, 7 redirected. | Zachovat popisné anchor texty; přezkoumat 9 prázdných odkazů, většinou navigační/logo odkazy. |
| Redirects | Info | Confirmed | Child URL bez koncového lomítka přesměrovává jedním 301 na variantu s lomítkem. | `redirect_checker.py`: `/ciste-prostory` → `/ciste-prostory/` → 200. | Sjednotit canonical a preferovaný tvar URL; jeden redirect není kritický. |
| llms.txt | Pass | Confirmed | `llms.txt` je dostupný a kvalitně strukturovaný. | `llms_txt_checker.py`: HTTP 200, 5 sekcí, 9 odkazů, score 95/100; `llms-full.txt` chybí. | `llms-full.txt` není nutný; doplnit jen pokud bude udržovatelný a skutečně užitečný. |
| Metadata | Pass | Confirmed | Lokální export má unikátní title, description, canonical a jeden H1 na všech 8 routách. | `parse_html.py`: 8/8 rout; title 41–66 znaků, description 102–146 znaků, H1 count 1. | Zachovat a po nasazení porovnat s produkčními HTML. |
| Images | Pass | Confirmed | Lokální obsahové obrázky mají alt text, rozměry a lazy loading. | Parse audit `/ciste-prostory`: 4 obrázky s alt/width/height; fotografie mají lazy loading. | Změřit skutečný LCP po nasazení. |
| Core Web Vitals | Info | Unknown | LCP, INP a CLS nejsou změřené. | PageSpeed API vrátilo rate limit. | Spustit PageSpeed/CrUX později z autorizovaného prostředí. |

## C) Local export evidence

| Route | Title chars | Description chars | H1 | Words | Internal links | Schema |
|---|---:|---:|---:|---:|---:|---|
| `/` | 55 | 108 | 1 | 679 | 30 | LocalBusiness, FAQPage |
| `/ciste-prostory` | 62 | 138 | 1 | 834 | 25 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/vzduchotechnika` | 66 | 138 | 1 | 465 | 23 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/mereni-a-validace` | 52 | 146 | 1 | 569 | 23 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/integrita-hepa-filtru` | 52 | 124 | 1 | 362 | 22 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/pocet-castic-iso-14644` | 56 | 121 | 1 | 389 | 22 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/servis` | 55 | 136 | 1 | 441 | 21 | LocalBusiness, WebPage, BreadcrumbList, Service |
| `/ochrana-udaju` | 41 | 102 | 1 | 386 | 18 | LocalBusiness |

## D) Positive signals

- `/ciste-prostory` má přesný tematický záměr a přirozené odkazy na validaci, vzduchotechniku, částice a servis.
- Metadata a canonical URL jsou v lokálním exportu unikátní a sjednocené na `https://www.cisteprostory.eu`.
- JSON-LD obsahuje `WebPage`, `BreadcrumbList` a `Service` na služebních routách.
- Sitemap má 8 URL a `lastmod` nepoužívá náhodné datum při každém buildu.
- Produkční kontrola našla 0 broken links.
- `llms.txt` je dostupný a obsahuje 5 sekcí a 9 odkazů.

## E) Environment limitations

- PageSpeed API bylo rate-limited; Core Web Vitals jsou `Unknown`.
- Některé skripty vypisovaly při prvním běhu chyby kvůli Windows code page; byly zopakovány s `PYTHONIOENCODING=utf-8`.
- Lokální URL přes `127.0.0.1` auditní skripty blokují jako private/internal IP; lokální export byl proto ověřen přes `parse_html.py` nad soubory.
- Search Console, backlink profil, autorita domény, Googlebot crawl a historické pozice nejsou dostupné.

## F) Final verdict

Nový design zlepšuje skenovatelnost a lokální technické SEO je dobré. Obsahová bezpečnost nasazení ale vyžaduje nejdříve rozhodnout, zda je kratší lokální verze skutečně cílová. Z pohledu organické relevance je bezpečnější zachovat nový layout a vrátit do něj odbornou hloubku produkční verze, zejména na kratších služebních stránkách.
