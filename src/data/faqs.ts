/**
 * FAQ:t — jokainen vastaus perustuu vahvistettuun tietoon (docs/lari-saarinen-research.md).
 * Ei keksittyjä palkkioita, vasteaikoja tai ehtoja.
 */

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "Mitä maksuton arviokäynti sisältää?",
    a: "Tulen käymään kohteessasi, käymme läpi sen vahvuudet ja erityispiirteet sekä tilanteesi ja tavoitteesi. Saat arvioni kohteen hintatasosta ja ehdotuksen myyntistrategiaksi. Arviokäynti on maksuton eikä sido toimeksiantoon.",
  },
  {
    q: "Sitooko arviokäynti minut mihinkään?",
    a: "Ei sido. Arviokäynti on maksuton ja sitoumukseton tapaaminen. Päätät rauhassa, haluatko jatkaa myyntiprosessia kanssani.",
  },
  {
    q: "Miten asunnon hinta-arvio muodostuu?",
    a: "Arvio perustuu alueen toteutuneisiin kauppohintoihin, kohteen kuntoon, sijaintiin, kerrokseen ja näkymiin sekä taloyhtiön tilanteeseen ja markkinanäkymään. Saat aina perustellun hintasuosituksen. En lähde liikkeelle toiveluvuista.",
  },
  {
    q: "Miten välityspalkkio määräytyy?",
    a: "Palkkio määritellään aina kohteekohtaisesti, ja siitä sovitaan yhdessä etukäteen. Hinnoittelussa huomioidaan kohteen erityispiirteet ja markkinatilanne. Zansen Real Estaten ajantasainen hinnasto on luettavissa zansen.fi-sivustolla.",
  },
  {
    q: "Miten minut pidetään ajan tasalla myynnin aikana?",
    a: "Kerron sinulle aktiivisesti, miten myynti edistyy: miten näytöt ovat menneet, millaisia kyselyitä kohteesta on tullut ja missä mennään. Vastaan yhteydenottoihin tyypillisesti puolen työpäivän kuluessa.",
  },
];

export const sellingFaqs: Faq[] = [
  {
    q: "Mitä myyntiin tarvittavia asiakirjoja minun täytyy hankkia?",
    a: "Hoidan myyntiin tarvittavien asiakirjojen hankinnan puolestasi, esimerkiksi isännöitsijäntodistuksen, tilinpäätöksen ja muut taloyhtiön dokumentit sekä kiinteistöjen kohdalla tarvittavat selvitykset. Saat minulta tarkan listan tilanteesi mukaan.",
  },
  {
    q: "Kuka järjestää valokuvauksen ja muun materiaalin?",
    a: "Järjestän koko materiaalituoton: ammattivalokuvauksen, pohjakuvan ja tarvittaessa esimerkiksi dronekuvauksen, esittelyvideon, 3D-virtuaaliesittelyn tai stailauksen. Käytettävät keinot valitaan aina kohteesi ja toimeksiantosi mukaan.",
  },
  {
    q: "Mitä jos kotini kaipaa pientä kohentamista ennen myyntiä?",
    a: "Kauttani järjestyvät myös myyntistailaus, digitaalinen stailaus, siivous sekä pienet korjaus- ja remonttitarpeet yhteistyökumppanien kautta. Kartoitamme arviokäynnillä, mikä kannattaa ja mikä ei.",
  },
  {
    q: "Miten kohteeni näkyvyys varmistetaan?",
    a: "Kohde ilmoitetaan Suomen suurimmissa asuntoportaaleissa (Etuovessa ja Oikotiessa) ja tarvittaessa hyödynnetään lisänäkyvyyksiä, kohdennettua sosiaalisen median mainontaa, alueellista suorajakoa ja lehtimainontaa sekä Zansenin asiakasrekisteriä ja ostotoimeksiantoja ostajien kartoittamiseen.",
  },
  {
    q: "Kuinka kauan asunnon myynti kestää?",
    a: "Myyntiaika riippuu markkinatilanteesta, kohteesta ja hinnoittelusta. En lupaa tiettyä myyntiaikaa. Sen sijaan saat realistisen arvion ja suunnitelman, jolla myynti rakennetaan huolellisesti alusta asti.",
  },
  {
    q: "Miten kaupanteko tapahtuu?",
    a: "Hoidan neuvottelut ja kaupanteon puolestasi digitaalisesti DIAS-alustalla tai perinteisesti tilanteen mukaan. Kaupanteko sujuu turvallisesti ja dokumentoidusti, ja pysyt ajan tasalla joka vaiheessa.",
  },
];

export const buyingFaqs: Faq[] = [
  {
    q: "Kenelle ostotoimeksianto sopii?",
    a: "Ostotoimeksianto sopii sinulle, jos haluat ammattilaisen etsivän, seulovan ja arvioivan kohteita puolestasi, esimerkiksi kun aika tai asiantuntemus ei riitä, tai kun haluat neuvottelijan omalle puolellesi kauppoihin.",
  },
  {
    q: "Miten kohteita etsitään?",
    a: "Käyn läpi toiveesi ja rajauksesi yhdessä kanssasi, seuraan markkinaa aktiivisesti ja hyödynnän verkostojani. Esitän sinulle vain ne kohteet, jotka aidosti vastaavat kriteerejäsi.",
  },
  {
    q: "Autatko neuvotteluissa ja tarjouksen tekemisessä?",
    a: "Kyllä. Arvioin kohteen hintatason ja kuntoon liittyvät riskit, ja neuvottelen puolestasi tavoitteenasi paras mahdollinen kokonaisratkaisu. En kuitenkaan lupaa tiettyä neuvottelutulosta etukäteen.",
  },
  {
    q: "Mitä asiakirjoihin ja riskeihin kiinnitetään huomiota?",
    a: "Käymme läpi kohteen dokumentit, taloyhtiön tilanteen ja mahdolliset remonttitarpeet. Taustani rakentamisen ja talotekniikan parissa auttaa arvioimaan kohteiden teknisiä seikkoja.",
  },
];

export const rentalFaqs: Faq[] = [
  {
    q: "Mitä vuokrauspalvelu sisältää?",
    a: "Kartoitan vuokranantajana olevien tarpeesi, arvioin kohteesi vuokrataso, tuotan markkinointimateriaalit, hankin vuokralaishakemukset ja hoidan valintaprosessin sekä sopimuksen ja käytännön järjestelyt.",
  },
  {
    q: "Miten vuokrataso määritetään?",
    a: "Arvio perustuu alueen vuokramarkkinaan, kohteen kuntoon ja kysyntään. Saat perustellun suosituksen ilman yli- tai alihinnoittelua.",
  },
  {
    q: "Paljonko vuokrauspalvelu maksaa?",
    a: "Zansenin hinnaston mukaan vuokrauspalvelun palkkio on 1,255 × kuukausivuokra + asiakirja- ja markkinointikulut (sis. ALV 25,5 %). Tarkista ajantasainen hinnasto zansen.fi-sivustolta tai kysy minulta.",
  },
];
