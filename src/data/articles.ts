/**
 * Oppaat — säilytetyt blogisisällöt tiivistettyinä ja uudelleen jäsennettyinä.
 * Alkuperäiset julkaisupäivät säilyvät. Markkinasisällöt merkitty historiallisiksi,
 * eikä vanhoja lukuja esitetä nykytilanteena.
 */

export type Article = {
  slug: string;
  title: string;
  date: string;
  dateDisplay: string;
  category: string;
  excerpt: string;
  historical?: boolean;
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "mista-erottaa-hyvan-valittajan",
    title: "Mistä erottaa hyvän asunnon myyjän?",
    date: "2021-01-19",
    dateDisplay: "19.1.2021",
    category: "Asunnon myynti",
    excerpt:
      "Kun kohde on ollut aiemmin myynnissä tuloksetta, kokonaisuus ratkaisee. Mitkä asiat tuottavat tulosta asunnon myynnissä?",
    body: [
      {
        paragraphs: [
          "Kun asiakas kysyy, mitä aion tehdä toisin kuin edellinen myyjä, vastaukseni on aina sama: kokonaisuus ratkaisee. Harvoin kyse on yhdestä asiasta, usein kyse on siitä, miten hinta, materiaalit, näkyvyys ja yhteydenpito pelaavat yhteen.",
        ],
      },
      {
        heading: "Laadukkaat materiaalit",
        paragraphs: [
          "Todenmukaiset valokuvat ja selkeä esite, josta löytyvät kaikki ostopäätökseen vaikuttavat asiat, ovat lähtökohta kaikelle. Ensivaikutelma syntyy verkossa, ja materiaalin laatu näkyy välittömästi kiinnostuneiden määrässä.",
        ],
      },
      {
        heading: "Aktiivisuus ja nopeus",
        paragraphs: [
          "Ajan henki on, että vastaukset halutaan heti. Vastaan tiedusteluihin viipymättä, joten kiinnostunut ostaja ei jää odottamaan.",
        ],
      },
      {
        heading: "Tehokkaat esittelyt",
        paragraphs: [
          "Yksityisnäytöt ja ostajien tarpeiden kartoitus etukäteen tuottavat parempaa tulosta kuin yleisesittelyissä päivystäminen. Henkilökohtainen palvelu palvelee sekä myyjää että ostajaa.",
        ],
      },
      {
        heading: "Rehellisyys ja uusi näkökulma",
        paragraphs: [
          "Ostaja haluaa kaikki ostopäätökseen vaikuttavat tiedot avoimesti. Ja joskus asuntoa kannattaa markkinoida muustakin kuin neliöiden mukaan: muunneltavuus, potentiaali ja esimerkiksi digitaalinen stailaus voivat avata kohteen aivan uudelle kohderyhmälle.",
        ],
      },
    ],
  },
  {
    slug: "omistus-vuokra-vai-valinnainen-vuokratontti",
    title: "Omistus-, vuokra- vai valinnainen vuokratontti?",
    date: "2021-04-23",
    dateDisplay: "23.4.2021",
    category: "Asunnon ostaminen",
    excerpt:
      "Tontin hallintamuoto vaikuttaa asunnon hintaan ja vastikkeisiin. Mitä omistustontti, vuokratontti ja valinnainen vuokratontti tarkoittavat käytännössä?",
    body: [
      {
        paragraphs: [
          "Asuntoa ostaessa kannattaa kiinnittää huomiota tontin hallintamuotoon, sillä se vaikuttaa sekä hintaan että tuleviin kustannuksiin.",
        ],
      },
      {
        heading: "Omistustontti",
        paragraphs: [
          "Omistustontin omistaa yleisimmin taloyhtiö tai kiinteistön omistaja. Kaikki tonttiin liittyvät kustannukset sisältyvät asunnon hintaan, eikä tontista makseta erillistä vastiketta.",
        ],
      },
      {
        heading: "Vuokratontti",
        paragraphs: [
          "Vuokratontin omistaa yleensä kaupunki, kunta tai sijoitusrahasto. Taloyhtiö maksaa tontista vuokraa, jonka osakkaat maksavat osana yhtiövastiketta. Vuokrasopimukset ovat tyypillisesti pitkiä, ja vuokra tarkistetaan sopimusvälein.",
        ],
      },
      {
        heading: "Valinnainen vuokratontti",
        paragraphs: [
          "Uudistuotannossa suosittu malli: ostaja päättää itse, lunastaako tontinosan vai maksako siitä kuukausittaista tonttivuokravastiketta. Uuteen asuntoon pääsee kiinni edullisemmalla hinnalla, ja tontin voi usein lunastaa myöhemmin. Huomioitavaa on, että tonttivuokra ei lyhennä lunastushintaa, ja vuokra voi nousta vuosien varrella.",
        ],
      },
      {
        heading: "Mitä ostajan kannattaa tehdä?",
        paragraphs: [
          "Vertaile aina kokonaiskustannuksia: kauppahinta, vastikkeet ja tonttivuokra yhdessä. Autan arvioimaan, miten tontin hallintamuoto vaikuttaa juuri sinun tilanteeseesi.",
        ],
      },
    ],
  },
  {
    slug: "putkiremontti-tulossa-uskallanko-ostaa",
    title: "Putkiremontti tulossa: uskallanko ostaa?",
    date: "2020-11-10",
    dateDisplay: "10.11.2020",
    category: "Asunnon ostaminen",
    excerpt:
      "Mielenkiintoinen kohde kiikarissa, mutta taloyhtiöön on tulossa putkiremontti. Mitä putkiremonttikohteessa kannattaa huomioida?",
    body: [
      {
        paragraphs: [
          "Putkiremontti ei ole automaattisesti syy ohittaa kohde, mutta se on asia, joka pitää ymmärtää ennen tarjouksen tekemistä. Tähän oppaaseen on haastateltu LVI-suunnittelija Ville Saksiä (Insinööritoimisto Aavat Oy).",
        ],
      },
      {
        heading: "Mistä tiedän, että putkiremontti on tulossa?",
        paragraphs: [
          "Tarkista ensin myynti-ilmoitus. Jos remontista ei ole mainintaa, rakennusvuosi antaa osviittaa: vesi- ja viemäriputkien käyttöikä on tyypillisesti noin 45–50 vuotta. Välittäjän selonottovelvollisuus ja hyvä välitystapa edellyttävät tulevien remonttien selvittämistä isännöitsijältä, ja kuulet niistä myös minulta.",
        ],
      },
      {
        heading: "Pitääkö remontin takia muuttaa?",
        paragraphs: [
          "Remontin tekotapa ratkaisee. Perinteisessä putkiremontissa viemäri- ja vesiputket uusitaan kokonaan ja wc- sekä kylpyhuonetilat remontoidaan. Huoneistokohtainen remonttiaika on tyypillisesti noin 8–12 viikkoa, jonka aikana suositellaan asuttavan muualla. Koko taloyhtiön remontti voi kestää vuoden. Sukellusmenetelmä eli pinnoitus on toinen vaihtoehto, joka on nopeampi mutta ei sovellu kaikkiin tilanteisiin.",
        ],
      },
      {
        heading: "Miten remontti vaikuttaa hintaan?",
        paragraphs: [
          "Tuleva remontti näkyy yleensä jo kohteen hinnassa, ja remontin jälkeen asunnon arvo tyypillisesti nousee. Ostajan kannattaa selvittää remontin kustannusarvio, aikataulu ja rahoitus ennen päätöstä. Autan tulkitsemaan taloyhtiön dokumentteja ja arvioimaan kokonaisuuden.",
        ],
      },
    ],
  },
  {
    slug: "hintojen-kehitys-pk-seutu-vs-muu-suomi",
    title: "Hintojen kehitys pk-seutu vs. muu Suomi (historiallinen katsaus 2021)",
    date: "2021-03-31",
    dateDisplay: "31.3.2021",
    category: "Markkinakatsaus",
    historical: true,
    excerpt:
      "Katsaus vuoden 2021 alun markkinaan: asuntomarkkinoiden eriytyminen näkyi erityisesti vanhojen osakeasuntojen hinnoissa. Historiallinen artikkeli: luvut kuvaavat vuoden 2021 tilannetta.",
    body: [
      {
        paragraphs: [
          "Tämä artikkeli on julkaistu alun perin 31.3.2021. Luvut kuvaavat tuolloista markkinatilannetta, eivät nykyistä. Ajantasaisen hinta-arvion saat ottamalla yhteyttä.",
          "Asuntomarkkinoiden eriytymisestä puhuttiin vuonna 2021 paljon. Tilastokeskuksen tuolloisten ennakkotietojen mukaan vanhojen osakeasuntojen hinnat nousivat helmikuussa 2021 pääkaupunkiseudulla 3,4 prosenttia vuoden takaiseen verrattuna, kun ne muualla Suomessa laskivat 0,9 prosenttia. Helsingissä kasvu oli 4,0 %, Vantaalla 3,1 % ja Espoossa 1,9 %.",
        ],
      },
      {
        heading: "Kaupunkien sisäiset erot",
        paragraphs: [
          "Jo vuonna 2021 oli selvää, että tilastojen keskiarvot peittävät alleen suuria kaupunginosakohtaisia eroja. Uudisrakentaminen, palvelujen kehittyminen ja kaupunkisuunnittelu vaikuttavat yksittäisen alueen hintakehitykseen, ja siksi kohdekohtainen ja aluetuntemukseen perustuva arvio on aina tilastokeskiarvoa tarkempi.",
        ],
      },
      {
        heading: "Mitä tästä voi oppia edelleen?",
        paragraphs: [
          "Eriytymiskehitys on jatkunut vuodesta 2021: sijainnin, alueen kehityksen ja kohteen laadun merkitys korostuu. Alueen tulevat suunnitelmat kannattaa aina selvittää, sillä niillä voi olla merkittävä vaikutus arvoon vuosien saatossa.",
        ],
      },
    ],
  },
  {
    slug: "laajasalo-asuntokanta-ja-hintakatsaus",
    title: "Laajasalo: asuntokanta- ja hintakatsaus (historiallinen katsaus 2020)",
    date: "2020-12-19",
    dateDisplay: "19.12.2020",
    category: "Alueet",
    historical: true,
    excerpt:
      "Katsaus Laajasalon asuntokantaan ja vuoden 2020 asuntokauppaan. Historiallinen artikkeli: luvut kuvaavat vuoden 2020 tilannetta.",
    body: [
      {
        paragraphs: [
          "Tämä artikkeli on julkaistu alun perin 19.12.2020. Luvut kuvaavat vuoden 2020 tilannetta, eivät nykyistä markkinaa.",
          "Laajasalo, Helsingin suurin saari, koostuu viidestä asuinalueesta: Yliskylästä, Jollaksesta, Hevossalmesta, Tullisaaresta ja Kruunuvuorenrannasta. Rantaviivaa saaresta löytyy noin 25 kilometriä, ja luonto on kaikkialla lähellä. Vuonna 2020 asukkaita oli jo yli 20 000.",
        ],
      },
      {
        heading: "Asuntokanta",
        paragraphs: [
          "Yliskylän asunnoista suurin osa on kerrostaloasuntoja, Jollas koostuu pitkälti pientaloista, ja Kruunuvuorenrannasta löytyy monipuolisesti kerros- ja pientaloja aina loft-asuntoihin. Alueelta löytyy myös 1800-luvun kartanopuistoja ja hyviä luontopolkuja.",
        ],
      },
      {
        heading: "Vuoden 2020 kauppa (historiallinen)",
        paragraphs: [
          "Vuonna 2020 Laajasalon asuntokauppa pysyi lähes edellisvuoden tasolla koronavuodesta huolimatta. Vilkkainta kauppa oli Kruunuvuorenrannassa ja Etelä-Laajasalossa. Postinumeroalueella 00590 myytiin vuonna 2019 65 kohdetta, joista 48 oli uudiskohteita.",
        ],
      },
    ],
  },
  {
    slug: "milta-nayttaa-tulevaisuuden-laajasalo",
    title: "Miltä näyttää tulevaisuuden Laajasalo? (katsaus 2021)",
    date: "2021-02-22",
    dateDisplay: "22.2.2021",
    category: "Alueet",
    historical: true,
    excerpt:
      "Vuonna 2021 Laajasalossa oli useita asemakaavoja ja liikennesuunnitelmia vireillä: Kruunusillat, ratikkakortteli ja Yliskylän kehittyminen. Historiallinen katsaus suunnitelmiin.",
    body: [
      {
        paragraphs: [
          "Tämä artikkeli on julkaistu alun perin 22.2.2021. Suunnitelmien aikataulut ovat voineet muuttua. Tarkista ajantasainen tilanne Helsingin kaupungin sivuilta.",
          "Vuoden 2019 lopussa Laajasalon asukasluku ylitti 20 000, ja asukasluvun ennustettiin tuplaantuvan vuoteen 2040 mennessä. Seurasin alueen kehitystä aktiivisesti. Tässä kooste tuolloin vireillä olleista suurimmista muutoksista.",
        ],
      },
      {
        heading: "Yliskylä ja ratikkakortteli",
        paragraphs: [
          "Yliskylän suunniteltiin kehittyvän Laajasalon keskustaksi: tavoitteena oli asuntoja noin 6 000 uudelle asukkaalle pääkatujen ja tulevan pikaraitiotien varrelle. Reposalmentien varteen suunniteltiin Suomen ensimmäistä hybridirakennusta, joka yhdistäisi raitiovaunuvarikon, asuntoja ja liiketilaa.",
        ],
      },
      {
        heading: "Kruunusillat",
        paragraphs: [
          "Kruunusillat-hanke tuo saarelle raitiovaunuyhteyden keskustaan. Hankkeen alustava arvio vuonna 2021 oli valmistuminen vuonna 2026. Hanke on edennyt vuosien varrella, ja sen ajantasainen tila kannattaa tarkistaa kaupungin tiedotteista.",
        ],
      },
      {
        heading: "Miksi alueen suunnitelmat kannattaa seurata?",
        paragraphs: [
          "Asemakaavat, liikenneyhteydet ja palvelujen kehittyminen vaikuttavat suoraan alueen vetovoimaan ja asuntojen arvoon. Paikallisen suunnitelmatuntemuksen hyödyntäminen on osa sitä, miten rakennan kohteiden myynti- ja hinta-arvioita.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
