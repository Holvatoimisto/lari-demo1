/**
 * Keskitetty sisältökonfiguraatio — kaikki faktatiedot yhdessä paikassa.
 * Älä kovakoodaa näitä arvoja komponentteihin.
 * Lähteet ja varmistustila: docs/lari-saarinen-research.md & docs/claims-register.md
 */

export const site = {
  name: "Lari Saarinen",
  brand: "Lari Saarinen",
  tagline: "Välittämisestä välittämistä",
  title: "Asuntojen myynti",
  qualification: "KiLAT",
  qualificationFull:
    "Kiinteistönvälitykseen suunnattu liiketoiminnan ammattitutkinto (KiLAT)",
  company: "Zansen Real Estate",
  companyLegal: "Zansen Oy",
  companyId: "3327926-3",
  companyUrl: "https://www.zansen.fi",
  office: {
    street: "Sompasaarenlaituri 10 LT 2",
    zip: "00540",
    city: "Helsinki",
  },
  phone: "040 763 3374",
  phoneHref: "tel:+358407633374",
  email: "lari.saarinen@zansen.fi",
  area: "pääkaupunkiseutu",
  areaLong: "Helsinki, Espoo, Vantaa, Kauniainen ja Sipoo",
  languages: ["Suomi", "Englanti"],
  englishNote: "Service also in English",
  domain: "https://www.larisaarinen.fi",
  // Kokemus Zansenin tiimisivun mukaan (zansen.fi/tiimi)
  experienceYears: 6,
  // Nykyisen sivuston vastaustakuu — vahvistetaan Larilta ennen tuotantoa
  responsePromise: "Vastaan yhteydenottoihin tyypillisesti puolen työpäivän kuluessa",
  social: {
    instagram: "https://www.instagram.com/lari.saarinen/",
    linkedin: "https://www.linkedin.com/in/lari-saarinen/",
    youtube: "https://www.youtube.com/@larisaarinen6210",
    // Huom: vanhat Facebook-URL:t (aiempien työnantajien nimillä) jätetty pois.
    // Nykyinen Facebook-osoite varmistetaan Larilta ennen tuotantoa.
  },
  oikotieProfile:
    "https://asunnot.oikotie.fi/yritys/zansen-real-estate/lari-saarinen-22732684",
  zansenListings: "https://www.zansen.fi/kohteet",
  zansenPricing: "https://www.zansen.fi/hinnasto",
  zansenPrivacy: "https://www.zansen.fi/tietosuojaseloste",
} as const;

/**
 * Google-arvostelut — VAHVISTETTAVA ENNEN TUOTANTOA.
 * Näyttö 2025-08: 5,0/5 ja 47 arvostelua (GBP-kuvakaappaus omalla sivulla + Oikotie-bio).
 * Google Business Profile: "Kiinteistönvälitys – Lari Saarinen".
 * Päivitä nämä kaksi arvoa yhdestä paikasta.
 */
export const googleReviews = {
  rating: 5.0,
  ratingDisplay: "5,0 / 5",
  count: 47,
  verifiedAt: "2025-08 (uudelleenvarmistus ennen julkaisua)",
  profileUrl: "https://share.google/86o6ud7dFr066itTI",
} as const;

/** Esittelyvideo — Larin oma YouTube-kanava, kesto 0:53 (vahvistettu 2026-07-18) */
export const introVideo = {
  youtubeId: "AlQVegVI18I",
  title: "Lari Saarinen: esittelyvideo",
  durationSeconds: 53,
  durationDisplay: "53 s",
  watchUrl: "https://www.youtube.com/watch?v=AlQVegVI18I",
  channelUrl: "https://www.youtube.com/@larisaarinen6210",
  poster: "/assets/lari-landscape-1280.webp",
  transcript:
    "Hei, olen Lari Saarinen. Myyn asuntoja pääkaupunkiseudulla Zansen Real Estatessa. " +
    "Minulle tärkeintä on, että tiedät koko ajan missä myyntisi mennään: pidän sinut ajan tasalla " +
    "näytöistä, kyselyistä ja tarjouksista ilman että sinun tarvitsee kysellä perässä. " +
    "Jokaiseen kohteeseen teen yksilöllisen myyntisuunnitelman. Ei kahta samanlaista kohdetta, " +
    "ei kahta samanlaista suunnitelmaa. Tervetuloa maksuttomalle arviokäynnille, niin katsotaan " +
    "yhdessä, miten kotisi myynti kannattaa rakentaa.",
} as const;

export const mainNav = [
  { label: "Etusivu", to: "/" },
  { label: "Asunnon myynti", to: "/asunnon-myynti" },
  { label: "Palvelut", to: "/palvelut" },
  { label: "Kohteet", to: "/kohteet" },
  { label: "Asiakaspalautteet", to: "/asiakaspalautteet" },
  { label: "Minusta", to: "/minusta" },
  { label: "Oppaat", to: "/oppaat" },
  { label: "Yhteystiedot", to: "/ota-yhteytta" },
] as const;

export const serviceNav = [
  { label: "Asunnon myynti", to: "/asunnon-myynti" },
  { label: "Ostotoimeksianto", to: "/ostotoimeksianto" },
  { label: "Vuokrauspalvelu", to: "/vuokrauspalvelu" },
  { label: "Kaikki palvelut", to: "/palvelut" },
] as const;
