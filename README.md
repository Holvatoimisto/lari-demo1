# Lari Saarinen — verkkosivusto

Premium-tason henkilöbrändi- ja konversiosivusto kiinteistöalan ammattilaiselle
Lari Saariselle (KiLAT, Asuntojen myynti, Zansen Real Estate, pääkaupunkiseutu).

## Tekniikka

- React 19 + TypeScript + Vite 7
- Tailwind CSS 3.4 + shadcn/ui (vain käytetyt komponentit)
- react-router 7 (SPA, legacy-ohjaukset vanhoista URL:eista)
- @fontsource: Playfair Display 500/600/700, Inter 400/500/600 (self-hosted)

## Komennot

```bash
npm install
npm run dev       # kehityspalvelin
npm run build     # tuotantobuild (tsc -b && vite build)
npm run preview   # buildin esikatselu
```

Huom: `vite.config.ts` käyttää `kimi-plugin-inspect-react`-lisäosaa
dev-työkaluna. Se on devDependency eikä vaadita tuotantobuildiin muualla.

## Rakenne

- `src/data/` — keskitetty sisältö ja faktatiedot (site.ts on ainoa totuudenlähde
  numeroille ja yhteystiedoille; reviews/faqs/services/articles eriteltyinä)
- `src/components/` — jaetut komponentit (layout/, Reveal, SectionHeading, lomake…)
- `src/pages/` — reititetyt sivut (14 reittiä + legacy-ohjaukset)
- `src/lib/` — seo.tsx (per-route metat + JSON-LD), analytics.ts (evästetietoinen)
- `public/assets/` — aito valokuvamateriaali (2025-kuvasarja, WebP-srcSetit)
- `docs/` — auditointi-, sisältö- ja vaatimusdokumentaatio

## Tärkeät säännöt

- Ei keksittyjä faktoja: kaikki luvut ja väitteet `src/data/site.ts`:ssä tai
  claims-registerissä (docs/) varmistusmerkinnöillä.
- Asiakasarvostelujen sanamuotoja ei muuteta koskaan (src/data/reviews.ts).
- Suojatut titteleitä (LKV, kiinteistönvälittäjä, LVV) ei käytetä.
- Brändihierarkia: Lari Saarinen ensisijainen, Zansen Real Estate tukeva.
- Ääni: minä-persoona. "Me"-muoto vain suorassa Zansen-viittauksessa.
