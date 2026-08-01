/**
 * Asiakaspalautteet — sanamuodot alkuperäisiä, lähteinä Oikotie-profiili (2026-07-18)
 * ja larisaarinen.fi/asiakaspalautteet. Ei muokkauksia, ei yhdistelyjä.
 * Teemoitus sivuston omaa jäsentelyä.
 */

export type Review = {
  quote: string;
  author: string;
  role: "myyjä" | "ostaja";
  location?: string;
  lang: "fi" | "en";
  theme:
    | "yhteydenpito"
    | "sujuvuus"
    | "englanti"
    | "ammattitaito"
    | "ostaja"
    | "kokonaisuus";
  source: "Oikotie" | "larisaarinen.fi";
};

export const reviews: Review[] = [
  {
    quote:
      "Lari on tähti! Hän myi asuntoni nopeasti ja hallitsi välittäjän tehtävät kokonaisvaltaisesti. Pystyin luottamaan, että Lari hoitaa kaiken ensiluokkaisesti ja pitää minut aina ajan tasalla. Kiitos!",
    author: "Vesa Huuhka",
    role: "myyjä",
    lang: "fi",
    theme: "yhteydenpito",
    source: "Oikotie",
  },
  {
    quote:
      "Kaikki sujui mielestäni erittäin sujuvasti. Lari piti minut kaiken aikaa ajan tasalla asioiden etenemisestä. Ostaja löytyi nopeasti ja kaupat järjestettiin pikavauhdilla. Kaikin puolin miellyttävä asiakaskokemus.",
    author: "Sari Maarit Dimitrow",
    role: "myyjä",
    lang: "fi",
    theme: "sujuvuus",
    source: "Oikotie",
  },
  {
    quote:
      "Calm, caring, active and professional broker. Buying our first home here in Finland went really well, quick and smooth. thank you so much Lari for all your help.",
    author: "Emmanuel Moreno",
    role: "ostaja",
    lang: "en",
    theme: "englanti",
    source: "Oikotie",
  },
  {
    quote:
      "Lari on rautaisen ammattitaitoinen, rauhallinen ja asiansa osaava loistava välittäjä! Olimme koko ajan selvillä missä mennään, koska Lari piti meidät ajantasalla joka ikisestä tilanteesta tai käänteestä. Koronakaan ei ollut este nopeisiin kauppoihin, jotka kohdallamme oli mahtava juttu. Erittäin lämpimästi suosittelemme Laria mahdollisiin asuntokauppoihin!",
    author: "Myyjä",
    role: "myyjä",
    location: "Vantaa",
    lang: "fi",
    theme: "ammattitaito",
    source: "Oikotie",
  },
  {
    quote:
      "Kaikki sujui todella hyvin. Välittäjän kanssa oli helppo jutella ja hän antoi asiantuntevaa apua tarvittaviin kysymyksiin ja muihin asioihin. Olemme erittäin tyytyväisiä, kiitos!",
    author: "Ostaja",
    role: "ostaja",
    location: "Vantaa",
    lang: "fi",
    theme: "ostaja",
    source: "Oikotie",
  },
  {
    quote:
      "…Lari kept us well up to date during the whole period of the house sale… he was professional, honest and humble and very easy to work with, to our mind he did a great job in finding new owners for our house.",
    author: "Edward Kluen",
    role: "myyjä",
    lang: "en",
    theme: "kokonaisuus",
    source: "Oikotie",
  },
  {
    quote:
      "Miellyttävä persoona. Valittiin välittäjäksi, koska hän ei mitenkään painostanut omilla mielipiteillään esim kohteen hinnoittelussa. Toi esille erilaista myynti ajatusta kohteesta, joka oli haasteellinen. Aktiivinen ote… Kaupan teko DIAS ohjelmalla oli todella vaivaton ja järkevä. Kaiken kaikkiaan positiivinen kokemus yhteistyöstä.",
    author: "Aila Suojansalo",
    role: "myyjä",
    lang: "fi",
    theme: "ammattitaito",
    source: "Oikotie",
  },
  {
    quote:
      "Saimme hyvän vaikutelman ja siksi valitsimme hänet. Välittäjä toimi mahtavasti, kommunikointi selkeä ja riittävä. Asiat hoitui aikataulussa. Ei ongelmia missään vaiheessa. Selkeä ja johdonmukainen toiminta. Ensivaikutelma muuttui vielä matkalla paremmaksi.",
    author: "Martti Laiti",
    role: "myyjä",
    lang: "fi",
    theme: "sujuvuus",
    source: "Oikotie",
  },
  {
    quote:
      "Kaupanteko sujui mutkattomasti ja ripeästi. Kaikkiin pyytämiini asioihin tuli selvitys asianmukaisesti. Vastausaika oli juuri sopiva, lupausten mukainen. Kaiken kaikkiaan ammattitaitoista välitystä. Voin lämpimästi suositella!",
    author: "Ostaja",
    role: "ostaja",
    location: "Helsinki",
    lang: "fi",
    theme: "sujuvuus",
    source: "Oikotie",
  },
  {
    quote:
      "Lari hoiti hommat positiivisella ja asiakaslähtöisellä, erinomaisella asenteella.",
    author: "Myyjä",
    role: "myyjä",
    location: "Helsinki",
    lang: "fi",
    theme: "kokonaisuus",
    source: "larisaarinen.fi",
  },
  {
    quote:
      "Lari on tosi avulias ja auttoi paljon. Kaikki toimi todella sujuvasti. Jos tarvitsisit uuden kodin, hän pystyy auttamaan.",
    author: "Mei Wang",
    role: "ostaja",
    lang: "fi",
    theme: "ostaja",
    source: "Oikotie",
  },
  {
    quote:
      "Ensi tapaaminen sujui jo näin asiakkaana näkökulmasta todella hyvin. Ajoissa paikalla, kertoi firmasta, tavoistaan toimia kuunteli asiakkaan toiveita myynnin suhteen ja lupasi selvittää onko toiveet mahdollisuus toteuttaa. Ei luvannut liikoja, mutta osasi antaa positiivista näkemystä myynin suhteen Koronan jyllätessä. Näki myös vaivaa myydäkseen asunnon ja teki sen. Todella ammattimainen asenne ja työhönsä sitoutunut välittäjä",
    author: "Myyjä",
    role: "myyjä",
    location: "Vantaa",
    lang: "fi",
    theme: "ammattitaito",
    source: "Oikotie",
  },
];

/** Etusivun kolme kuratoitua — eri teemat, eri tilanteet, eri pituudet:
 *  Huuhka (myynti nopeasti + ajan tasalla), Moreno (ostaja, EN, rauhallisuus),
 *  Myyjä Vantaa (ammattitaito + ajan tasalla). */
export const homepageCuratedIndexes = [0, 2, 3];
