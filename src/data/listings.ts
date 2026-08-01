/**
 * Myyntikohteet — Larin vahvistetut aktiiviset Oikotie-kohteet.
 * Tiedot kerätty ja varmistettu Oikotiesta 1.8.2026: jokaisen kohteen
 * kohdesivulta tarkistettu myyjä (Lari Saarinen), aktiivisuus ja tiedot.
 * Suomalainen numeromuotoilu säilytetty (NBSP tuhaterottimena ja ennen €:ta).
 *
 * Päivitys: kun kohde myydään, poista rivi; uusi kohde lisätään vastaavasti.
 * Kuvat: /public/assets/listings/<nimi>-800.webp ja -1200.webp (Oikotien
 * ensisijainen kohdekuva, vesileima säilytetty tarkoituksella).
 */

export type Listing = {
  id: string;
  /** Koko osoiterivi Oikotien muodossa, esim. "Tankomäenkatu 11 A, Mellunkylä, Helsinki" */
  address: string;
  price: string;
  area: string;
  rooms: string;
  /** Esim. "Kerros 2/5" tai "Kerroksia 2" — puuttuu jos ei saatavilla */
  floor?: string;
  propertyType: string;
  constructionYear: string;
  image: string;
  imageLarge: string;
  imageAlt: string;
  listingUrl: string;
  agentName: "Lari Saarinen";
  status: "active";
  /** object-position kuvan rajaukseen tarvittaessa */
  imagePosition?: string;
};

/** Osion CTA:n kohde — Larin kohteet Oikotie-haussa */
export const oikotieListingsSearchUrl =
  "https://asunnot.oikotie.fi/myytavat-asunnot?pagination=1&cardType=100&secondarySearchType=1&keywords%5B%5D=Lari%20Saarinen&keywords%5B%5D=zansen%20real%20estate";

const NBSP = " ";

export const listings: Listing[] = [
  {
    id: "tankomaenkatu",
    address: "Tankomäenkatu 11 A, Mellunkylä, Helsinki",
    price: `194${NBSP}500${NBSP}€`,
    area: `49,5${NBSP}m²`,
    rooms: "Huoneita 2",
    floor: "Kerros 2/5",
    propertyType: "Kerrostalo",
    constructionYear: "2023",
    image: "/assets/listings/tankomaenkatu-800.webp",
    imageLarge: "/assets/listings/tankomaenkatu-1200.webp",
    imageAlt: "Tankomäenkadun asunnon keittiö ja olohuone, Mellunkylä",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/helsinki/24464031",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "puolukkatie",
    address: "Puolukkatie 9 A, Westend, Espoo",
    price: `1${NBSP}100${NBSP}000${NBSP}€`,
    area: `101${NBSP}m²`,
    rooms: "Huoneita 4",
    floor: "Kerroksia 1",
    propertyType: "Omakotitalo",
    constructionYear: "2025",
    image: "/assets/listings/puolukkatie-800.webp",
    imageLarge: "/assets/listings/puolukkatie-1200.webp",
    imageAlt: "Puolukkatien omakotitalon olohuone ja keittiö, Westend",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/espoo/24384981",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "kelohongantie",
    address: "Kelohongantie 14 A, Tapiola, Espoo",
    price: `339${NBSP}000${NBSP}€`,
    area: `61${NBSP}m²`,
    rooms: "Huoneita 3",
    floor: "Kerros 3/3",
    propertyType: "Kerrostalo",
    constructionYear: "1960",
    image: "/assets/listings/kelohongantie-800.webp",
    imageLarge: "/assets/listings/kelohongantie-1200.webp",
    imageAlt: "Kelohongantien asunnon keittiö, Tapiola",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/espoo/24618224",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "saaristolaivastonkatu",
    address: "Saaristolaivastonkatu 10 A, Kruunuvuorenranta, Helsinki",
    price: `399${NBSP}000${NBSP}€`,
    area: `60${NBSP}m²`,
    rooms: "Huoneita 3",
    floor: "Kerros 3/6",
    propertyType: "Kerrostalo",
    constructionYear: "2021",
    image: "/assets/listings/saaristolaivastonkatu-800.webp",
    imageLarge: "/assets/listings/saaristolaivastonkatu-1200.webp",
    imageAlt: "Saaristolaivastonkadun kerrostalon julkisivu, Kruunuvuorenranta",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/helsinki/24291559",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "niittaajankatu",
    address: "Niittaajankatu 4 C, Herttoniemenranta, Helsinki",
    price: `322${NBSP}000${NBSP}€`,
    area: `76,5${NBSP}m²`,
    rooms: "Huoneita 3",
    floor: "Kerros 5/5",
    propertyType: "Kerrostalo",
    constructionYear: "2008",
    image: "/assets/listings/niittaajankatu-800.webp",
    imageLarge: "/assets/listings/niittaajankatu-1200.webp",
    imageAlt: "Niittaajankadun asunnon olohuone, Herttoniemenranta",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/helsinki/24348928",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "hallainvuorentie",
    address: "Hallainvuorentie 8 D, Myllypuro / Hallainvuori, Helsinki",
    price: `337${NBSP}000${NBSP}€`,
    area: `89,5${NBSP}m²`,
    rooms: "Huoneita 3",
    floor: "Kerroksia 2",
    propertyType: "Rivitalo",
    constructionYear: "2000",
    image: "/assets/listings/hallainvuorentie-800.webp",
    imageLarge: "/assets/listings/hallainvuorentie-1200.webp",
    imageAlt: "Hallainvuorentien rivitalon piha ja terassi, Myllypuro",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/helsinki/24483931",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "parnunkatu",
    address: "Pärnunkatu 5 C, Vuosaari, Helsinki",
    price: `348${NBSP}000${NBSP}€`,
    area: `77${NBSP}m²`,
    rooms: "Huoneita 3",
    propertyType: "Rivitalo",
    constructionYear: "2008",
    image: "/assets/listings/parnunkatu-800.webp",
    imageLarge: "/assets/listings/parnunkatu-1200.webp",
    imageAlt: "Pärnunkadun rivitalon terassi, Vuosaari",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/helsinki/24319052",
    agentName: "Lari Saarinen",
    status: "active",
  },
  {
    id: "halkivahantie",
    address: "Halkivahantie 24, Halkivaha, Tuusula",
    price: `589${NBSP}000${NBSP}€`,
    area: `164/195${NBSP}m²`,
    rooms: "Huoneita 6",
    floor: "Kerroksia 2",
    propertyType: "Omakotitalo",
    constructionYear: "2008",
    image: "/assets/listings/halkivahantie-800.webp",
    imageLarge: "/assets/listings/halkivahantie-1200.webp",
    imageAlt: "Halkivahantien omakotitalon julkisivu, Tuusula",
    listingUrl: "https://asunnot.oikotie.fi/myytavat-asunnot/tuusula/24601215",
    agentName: "Lari Saarinen",
    status: "active",
  },
];
