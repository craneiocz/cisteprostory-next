# cisteprostory.eu — Next.js

Next.js verze webu cisteprostory.eu (přepis z Vite/React SPA při zachování stejného designu).

## Vývoj

```bash
npm install
npm run dev
```

Otevři http://localhost:3000

## Struktura

- `src/app/` — stránky (App Router): `/`, `/ciste-prostory`, `/vzduchotechnika`, `/mereni-a-validace`, `/servis`, `/ochrana-udaju`
- `src/components/` — sdílené komponenty (Header, Footer, Hero, Services, Industries, Standards, Contact)
- `src/components/ui/` — shadcn/ui primitivy použité na webu

## Kontaktní formulář

Formulář posílá POST na `https://api.cisteprostory.eu/email.php` s payloadem `{ name, email, phone, message }`.
Backend je mimo tento repozitář (externí PHP endpoint), žádná další konfigurace na frontendu není potřeba.

## Nasazení na Vercel (zdarma)

1. Pushni repo na GitHub
2. Na [vercel.com](https://vercel.com) → "Add New Project" → vyber toto repo
3. Framework Preset: Next.js (detekuje se automaticky)
4. Deploy
5. V Project Settings → Domains přidej `cisteprostory.eu` a nastav DNS dle instrukcí Vercelu (A/CNAME záznam u registrátora domény)

## Build

```bash
npm run build
npm run start
```
