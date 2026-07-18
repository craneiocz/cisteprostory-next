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

## Automatický deploy (GitHub Actions)

Repo obsahuje `.github/workflows/deploy.yml` — při každém pushi do `master` (nebo `main`) se projekt automaticky nasadí na Vercel.

Aby workflow fungoval, potřebuje 3 GitHub Secrets (Settings → Secrets and variables → Actions → New repository secret):

1. **`VERCEL_TOKEN`** — vytvoř na https://vercel.com/account/tokens ("Create Token")
2. **`VERCEL_ORG_ID`** a **`VERCEL_PROJECT_ID`** — získáš takto:
   ```bash
   npm install -g vercel
   vercel link      # spustit v rootu projektu, propojí ho s Vercel projektem
   cat .vercel/project.json
   ```
   Zkopíruj hodnoty `orgId` → `VERCEL_ORG_ID` a `projectId` → `VERCEL_PROJECT_ID`

Pozn.: Pokud projekt na Vercelu importuješ přes jejich webové UI (Add New Project → vyber repo), Vercel si normálně dělá auto-deploy sám i bez GitHub Actions. Tenhle workflow je pro případ, že chceš mít deploy řízený explicitně přes CI (např. kvůli testům před deployem) — pak si v nastavení Vercel projektu vypni "Git Integration auto-deploy", ať se nedeployuje 2×.

## Nasazení na Vercel (zdarma, prvotní setup)



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
