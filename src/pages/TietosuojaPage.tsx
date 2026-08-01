import { site } from "@/data/site";
import { useSeo } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

/**
 * Tietosuojasivu — suomenkielinen, riittävä mutta ei ylipitkä.
 * Zansen Oy:n rekisterinpitäjäseloste linkitetään (yhteystietolomakkeiden
 * rekisterinpitäjä on Zansen Oy). Tekstin rakenne kertoo, mitä tietoja
 * TÄMÄ sivusto itse käsittelee.
 */
export default function TietosuojaPage() {
  useSeo({
    title: `Tietosuoja ja evästeet | ${site.name}`,
    description: "Tietosuoja- ja evästekäytäntö: mitä tietoja sivusto käsittelee, mihin niitä käytetään ja miten evästeitä hallinnoidaan.",
    path: "/tietosuoja",
  });

  return (
    <>
      <PageHero
        eyebrow="Juridiikka"
        title="Tietosuoja ja evästeet"
        lead="Mitä tietoja tämä sivusto käsittelee ja miten voit hallita evästeitä."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Tietosuoja" }]}
      />
      <section className="section-pad !pt-14">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-12">
            <Reveal>
              <section aria-labelledby="rekisterinpitaja">
                <h2 id="rekisterinpitaja" className="font-display text-2xl font-bold">1. Rekisterinpitäjä</h2>
                <div className="mt-4 space-y-3 leading-relaxed text-foreground/85">
                  <p>
                    Yhteydenottolomakkeen kautta välitettävien henkilötietojen rekisterinpitäjänä toimii{" "}
                    {site.companyLegal} (Y-tunnus {site.companyId}), {site.office.street},{" "}
                    {site.office.zip} {site.office.city}.
                  </p>
                  <p>
                    Tämän verkkosivuston ylläpitäjä: {site.name}, {site.company},{" "}
                    <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>, {site.phone}.
                  </p>
                  <p>
                    {site.companyLegal}:n tietosuojaseloste rekisterinpitäjänä:{" "}
                    <a href={site.zansenPrivacy} target="_blank" rel="noopener noreferrer" className="link-quiet">
                      zansen.fi/tietosuojaseloste
                    </a>
                    .
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="mita-tietoja">
                <h2 id="mita-tietoja" className="font-display text-2xl font-bold">2. Mitä tietoja käsitellään ja miksi</h2>
                <div className="mt-4 space-y-3 leading-relaxed text-foreground/85">
                  <p>
                    <strong>Yhteydenottolomake.</strong> Kun täytät arviokäyntilomakkeen, antamasi tiedot
                    (kohteen tiedot, nimesi ja yhteystietosi) täytetään valmiiksi omaan
                    sähköpostiviestiisi. Tietoja ei tallenneta tälle sivustolle eikä välitetä
                    kolmansille osapuolille sivuston toimesta. Viestin lähetettyäsi tietojasi käsitellään
                    yhteydenottopyyntöön vastaamiseksi {site.companyLegal}:n tietosuojaselosteen mukaisesti.
                  </p>
                  <p>
                    <strong>Oikeusperuste.</strong> Yhteydenottojen käsittely perustuu suostumukseesi
                    (lomakkeen hyväksyntäruutu) ja sopimuksen tekemistä edeltäviin toimenpiteisiin.
                  </p>
                  <p>
                    <strong>Säilytysaika.</strong> Tietoja säilytetään vain niin kauan kuin on tarpeen
                    yhteydenoton ja mahdollisen asiakassuhteen hoitamiseksi.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="evasteet">
                <h2 id="evasteet" className="font-display text-2xl font-bold">3. Evästeet</h2>
                <div className="mt-4 space-y-3 leading-relaxed text-foreground/85">
                  <p>
                    Sivusto käyttää kahta evästeluokkaa:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Välttämättömät:</strong> sivuston tekniseen toimintaan (esim. valintasi
                      evästeasetuksista). Nämä ovat aina käytössä.
                    </li>
                    <li>
                      <strong>Analytiikka:</strong> auttaa ymmärtämään, miten sivustoa käytetään.
                      Analytiikka ladataan vain, jos hyväksyt sen evästeilmoituksessa. IP-osoitteet
                      anonymisoidaan.
                    </li>
                  </ul>
                  <p>
                    Voit muuttaa valintaasi milloin tahansa footerin{" "}
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                      className="link-quiet font-medium"
                    >
                      Evästeasetukset
                    </button>
                    -linkistä.
                  </p>
                  <p>
                    <strong>Upotetut sisällöt.</strong> Esittelyvideo ladataan YouTubelta vasta, kun itse
                    käynnistät toiston. Sitä ennen YouTubelle ei välity tietoja. Käytämme
                    youtube-nocookie-upotusta.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="oikeudet">
                <h2 id="oikeudet" className="font-display text-2xl font-bold">4. Oikeutesi</h2>
                <div className="mt-4 space-y-3 leading-relaxed text-foreground/85">
                  <p>
                    Sinulla on oikeus saada pääsy tietoihisi, oikaista ne, pyytää niiden poistamista,
                    rajoittaa käsittelyä, vastustaa käsittelyä sekä siirtää tiedot järjestelmästä
                    toiseen. Voit peruuttaa suostumuksesi milloin tahansa.
                  </p>
                  <p>
                    Oikeuksien käyttäminen: ota yhteyttä osoitteeseen{" "}
                    <a href={`mailto:${site.email}`} className="link-quiet">{site.email}</a>. Sinulla on myös
                    oikeus tehdä valitus tietosuojavaltuutetun toimistoon (tietosuoja.fi).
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <p className="rounded-xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-muted-foreground">
                Tämä sivu päivitetään tarvittaessa. Viimeisin päivitys: heinäkuu 2026. Sivuston
                juridiset tekstit on laadittu verkkosivustoa varten, eivätkä ne korvaa
                lakineuvontaa.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
