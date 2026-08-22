# SEO action plan cisteprostory.eu

## Priorita 1 — nesmí se nasadit nesjednocený obsah

1. **Rozhodnout cílovou obsahovou verzi.**
   - Produkční `/ciste-prostory` má přibližně 1 355 slov.
   - Lokální nový `/ciste-prostory` má přibližně 834 slov.
   - Nejdříve sjednotit obsah a metadata; až poté nahrát `out/`.
2. **Nesnižovat odbornou hloubku služebních stránek redesignem.**
   - Největší riziko mají `/integrita-hepa-filtru`, `/pocet-castic-iso-14644` a `/servis`.
   - Zachovat editorial layout, ale vrátit konkrétní metodiky, výstupy, provozní scénáře a FAQ.
3. **Nasadit kompletní konzistentní export.**
   - Ověřit všech 8 HTML rout, `robots.txt`, `sitemap.xml`, canonical a title po nahrání.

## Priorita 2 — technické opravy

4. **Doplnit bezpečnostní hlavičky na hostingu.**
   - HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy a Permissions-Policy.
   - CSP nasazovat nejdříve v report-only režimu kvůli GA4, CookieConsent a externím zdrojům.
5. **Sjednotit `WebSite` schema.**
   - Buď doplnit samostatný objekt `WebSite`, nebo odstranit `isPartOf` odkaz na `#website`.
6. **Zvážit odstranění `FAQPage` JSON-LD.**
   - Viditelné FAQ ponechat, ale nepoužívat komerční FAQ schema jako hlavní růstovou strategii.
7. **Rozhodnout politiku AI crawlerů.**
   - Produkční `robots.txt` nyní nechává 11 AI crawlerů dědit obecné `Allow: /`.
   - Explicitní pravidla přidat jen podle obchodního rozhodnutí.
8. **Zkrátit homepage `og:title`.**
   - Produkční kontrola naměřila 64 znaků a score social meta 85/100.

## Priorita 3 — důvěryhodnost a měření

9. **Doplnit ověřitelné E-E-A-T signály.**
   - Autor nebo odborný recenzent.
   - Metodický přístup a odpovědnosti.
   - Anonymizované protokoly nebo případové studie.
   - Žádné smyšlené reference, certifikace, počty let praxe nebo klienti.
10. **Po nasazení aktivovat měření.**
   - Google Search Console: URL inspection, sitemap, indexace.
   - GA4: organické landing pages, konverzní formulář a engagement.
   - PageSpeed/CrUX: LCP, INP, CLS.
11. **Vyhodnotit změnu až na datech.**
   - Porovnat 2–6 týdnů před/po nasazení: dotaz „čisté prostory“, imprese, CTR, průměrná pozice a organické konverze.

## Ověření dokončení

- [ ] Lokální a produkční title/H1/description odpovídají schválené verzi.
- [ ] `/ciste-prostory` zachovává požadovanou odbornou hloubku.
- [ ] Kratší služební stránky mají doplněné užitečné odborné bloky.
- [ ] `out/` je kompletně nasazený.
- [ ] Sitemap je přijata v Search Console.
- [ ] Produkční URL jsou znovu procházené Googlebotem.
- [ ] Bezpečnostní hlavičky jsou ověřené.
- [ ] Core Web Vitals jsou změřené.
