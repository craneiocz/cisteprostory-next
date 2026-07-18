# cisteprostory.eu — Next.js

Next.js verze webu cisteprostory.eu (přepis z Vite/React SPA při zachování stejného designu).

## Vývoj

```bash
npm install
cp .env.example .env.local   # a vyplň RESEND_API_KEY
npm run dev
```

Otevři http://localhost:3000

## Struktura

- `src/app/` — stránky (App Router): `/`, `/ciste-prostory`, `/vzduchotechnika`, `/mereni-a-validace`, `/servis`, `/ochrana-udaju`
- `src/app/api/contact/route.ts` — API endpoint pro kontaktní formulář (odesílá e-mail přes [Resend](https://resend.com))
- `src/components/` — sdílené komponenty (Header, Footer, Hero, Services, Industries, Standards, Contact)
- `src/components/ui/` — shadcn/ui primitivy použité na webu

## Kontaktní formulář

Formulář posílá POST na `/api/contact`, který přes Resend odešle e-mail na `info@cisteprostory.eu`.
Aby to fungovalo v produkci:

1. Založ si účet na [resend.com](https://resend.com) (zdarma do 3000 e-mailů/měsíc)
2. Ověř doménu `cisteprostory.eu` v Resend (přidej DNS záznamy dle jejich návodu)
3. Vygeneruj API klíč a nastav ho jako `RESEND_API_KEY` v env proměnných (lokálně `.env.local`, na Vercelu Project Settings → Environment Variables)

Bez doménového ověření lze pro testování posílat jen z `onboarding@resend.dev` a jen na vlastní e-mail účtu Resend.

## Nasazení na Vercel (zdarma)

1. Pushni repo na GitHub
2. Na [vercel.com](https://vercel.com) → "Add New Project" → vyber toto repo
3. Framework Preset: Next.js (detekuje se automaticky)
4. Přidej env proměnnou `RESEND_API_KEY`
5. Deploy
6. V Project Settings → Domains přidej `cisteprostory.eu` a nastav DNS dle instrukcí Vercelu (A/CNAME záznam u registrátora domény)

## Build

```bash
npm run build
npm run start
```
