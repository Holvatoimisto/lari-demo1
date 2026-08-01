/**
 * Palvelut — ryhmitelty vahvistetusta palvelulistasta (larisaarinen.fi/palveluni + zansen.fi).
 * Materiaali- ja kumppanipalvelut esitetään "valitaan kohteen mukaan" -periaatteella.
 */

export const sellingApproach = [
  {
    title: "Yksilöllinen myyntisuunnitelma",
    text: "Teen kohteellesi yksilöllisen myyntisuunnitelman, joka rakentuu sen vahvuuksien, sijainnin ja markkinatilanteen pohjalta.",
  },
  {
    title: "Perusteellinen hinta-arvio",
    text: "Hinta-arvio perustuu alueen toteutuneisiin kauppoihin, kohteen kuntoon ja ominaisuuksiin sekä markkinanäkymään, ei toivelukuihin.",
  },
  {
    title: "Laadukas materiaali",
    text: "Ammattivalokuvaus, pohjakuva ja selkeä esite kuuluvat aina. Muut materiaalit valitaan kohteesi mukaan.",
  },
  {
    title: "Näkyvyys siellä, missä ostajat ovat",
    text: "Kohde ilmoitetaan Suomen suurimmissa asuntoportaaleissa ja tarvittaessa kohdennettuun some-mainontaan, suorajakoon ja lehtimainontaan.",
  },
  {
    title: "Aktiivinen ostajien kartoitus",
    text: "Hyödynnän Zansenin asiakasrekisteriä ja ostotoimeksiantoja ostajien löytämiseksi jo ennen julkista myyntiä.",
  },
  {
    title: "Sinut pidetään ajan tasalla",
    text: "Saat tiedon näytöistä, kyselyistä ja tarjouksista heti, ilman että sinun tarvitsee kysellä perässä.",
  },
];

export const sellingProcess = [
  {
    step: 1,
    title: "Maksuton arviokäynti",
    text: "Tapaa minut kohteessasi. Käymme läpi tilanteesi, kohteesi vahvuudet ja tavoitteesi. Saat perustellun hinta-arvion ja myyntisuosituksen ilman sitoumuksia.",
  },
  {
    step: 2,
    title: "Myyntisuunnitelma ja materiaalit",
    text: "Rakennamme yhdessä kohteellesi myyntisuunnitelman. Järjestän valokuvauksen, pohjakuvan ja muut valitut materiaalit sekä hankin myyntiin tarvittavat asiakirjat.",
  },
  {
    step: 3,
    title: "Markkinointi ja näkyvyys",
    text: "Kohde julkaistaan suurimmissa asuntoportaaleissa ja valituissa kanavissa. Kartoitan samalla ostajia rekisterien ja verkostojen kautta.",
  },
  {
    step: 4,
    title: "Näytöt ja yhteydenpito",
    text: "Hoidan näytöt ja ostajien kartoituksen. Saat minulta jatkuvasti ajantasaista tietoa siitä, miten myynti edistyy.",
  },
  {
    step: 5,
    title: "Tarjoukset ja neuvottelut",
    text: "Käsittelen tarjoukset ja neuvottelen puolestasi. Päätökset teet aina sinä. Minä pidän huolen siitä, että päätät parhaan mahdollisen tiedon pohjalta.",
  },
  {
    step: 6,
    title: "Kaupanteko ja jälkiseuranta",
    text: "Hoidan kaupanteon turvallisesti digitaalisesti DIAS-alustalla tai perinteisesti. Autan myös kauppojen jälkeisissä käytännön asioissa.",
  },
];

export const servicePaths = [
  {
    title: "Asunnon myynti",
    to: "/asunnon-myynti",
    eyebrow: "Ensisijainen palvelu",
    text: "Osakehuoneiston tai kiinteistön myynti alusta kauppoihin asti, suunnitelmallisesti ja sinua kuunnellen.",
    primary: true,
  },
  {
    title: "Ostotoimeksianto",
    to: "/ostotoimeksianto",
    eyebrow: "Ostajalle",
    text: "Etsin, seulon ja arvioin kohteet puolestasi ja neuvottelen sinun edullasi.",
    primary: false,
  },
  {
    title: "Vuokrauspalvelu",
    to: "/vuokrauspalvelu",
    eyebrow: "Vuokranantajalle",
    text: "Vuokralaisen etsinnästä sopimukseen. Kohteesi vuokraus huolellisesti ja turvallisesti.",
    primary: false,
  },
  {
    title: "Kaikki palvelut",
    to: "/palvelut",
    eyebrow: "Kokonaiskuva",
    text: "Materiaalit, stailaus, lakipalvelut, remontti- ja muuttopalvelut sekä muut kaupan tukipalvelut.",
    primary: false,
  },
];

export const partnerServices = [
  {
    group: "Kaupan valmistelu",
    items: [
      "Asiakirjojen hankinta myyntiä varten",
      "DIAS-sähköinen kaupanteko",
      "Lakipalvelut yhteistyökumppanin kautta",
      "Pankkiyhteistyön hyödyntäminen",
    ],
  },
  {
    group: "Kohteen esitys",
    items: [
      "Myyntistailaus ja digitaalinen stailaus",
      "Digitaalinen remontointi (visualisointi)",
      "Siivouspalvelut",
      "Kunto- ja kosteuskartoitus",
    ],
  },
  {
    group: "Muutto ja remontti",
    items: [
      "Muuttopalvelut",
      "Remontointi ja korjaustyöt",
      "Muuttosiivous",
    ],
  },
];

export const marketingChannels = [
  "Etuovi ja Oikotie, Suomen suurimmat asuntoportaalit",
  "Lisänäkyvyydet portaaleissa tarvittaessa",
  "Kohdennettu Facebook- ja Instagram-mainonta",
  "Alueellinen suorajako ja lehtimainonta",
  "Zansenin asiakasrekisteri ja ostotoimeksiannot",
  "Toimitilat Kauppalehti -ilmoitusmahdollisuus",
];

export const materialOptions = [
  "Ammattivalokuvaus",
  "Pohjakuva",
  "Dronekuvaus",
  "Esittelyvideo",
  "3D-virtuaaliesittely",
  "Myyntistailaus",
  "Digitaalinen stailaus",
  "Painettu ja sähköinen myyntiesite",
];
