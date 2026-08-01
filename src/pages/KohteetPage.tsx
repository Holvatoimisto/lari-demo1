import { ExternalLink, ArrowRight, Building2, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { useSeo, personSchema } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";

/**
 * Kohteet-sivu — ei käsin ylläpidettyä listaa (vanhenisi ja vaarantaisi faktat),
 * vaan suorat linkit aitoihin, aina ajantasaisiin lähteisiin:
 * Larin Oikotie-profiili + Zansenin kohdesivu.
 */
export default function KohteetPage() {
  useSeo({
    title: `Kohteet | ${site.name} · ${site.company}`,
    description:
      "Katso myynnissä olevat kohteeni Oikotie-profiilistani ja kaikki Zansen Real Estaten kohteet Zansenin sivustolta. Myyn asuntoja koko pääkaupunkiseudulla.",
    path: "/kohteet",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Kohteet"
        title="Myynnissä olevat kohteet"
        lead="Ajantasaiset kohteeni löydät suoraan asuntoportaaleista. Sieltä näet aina tuoreimmat kohteet, materiaalit ja näyttöajat."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Kohteet" }]}
      />

      <section className="section-pad" aria-labelledby="lahteet">
        <div className="container-site grid gap-5 md:grid-cols-2">
          <a
              href={site.oikotieProfile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("listing_outbound_click", { target: "oikotie", location: "kohteet_page" })}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(7,21,34,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Kohteeni Oikotiessa</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Kaikki myynnissä olevat kohteeni, niiden materiaalit ja näyttöajat Oikotie-profiilissani.
                Näet samalla asiakkaiden jättämät palautteet.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                Avaa Oikotie-profiili <ExternalLink className="h-4 w-4" aria-hidden />
              </span>
            </a>
          <a
              href={site.zansenListings}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("listing_outbound_click", { target: "zansen", location: "kohteet_page" })}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(7,21,34,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">Kaikki Zansenin kohteet</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Zansen Real Estaten koko kohdevalikoima: asunnot, kiinteistöt, uudiskohteet ja tontit
                pääkaupunkiseudulla.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                Avaa zansen.fi <ExternalLink className="h-4 w-4" aria-hidden />
              </span>
            </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary/50 p-7 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
            <MapPin className="h-6 w-6 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Myyn asuntoja koko pääkaupunkiseudulla: <strong className="text-foreground">{site.areaLong}</strong>.{" "}
              <a href="/toiminta-alueet" className="link-quiet font-medium">
                Lue lisää toiminta-alueistani
              </a>
            </p>
          </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
            <SectionHeading
              title="Voisiko sinunkin kotisi olla täällä?"
              lead="Varaa maksuton arviokäynti. Saat perustellun hinta-arvion ja suunnitelman, miten kotisi myynti rakennetaan."
            />
            <div className="mt-8">
              <a href="/ota-yhteytta" className="btn-primary">
                Varaa maksuton arviokäynti <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
      </section>

      <CtaSection />
    </>
  );
}
