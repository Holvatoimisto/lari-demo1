import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/data/site";
import { partnerServices, servicePaths, materialOptions } from "@/data/services";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";

export default function PalvelutPage() {
  useSeo({
    title: `Palvelut: myynti, ostotoimeksianto, vuokraus | ${site.name}`,
    description:
      "Asunnon myynti, ostotoimeksiannot ja vuokrauspalvelu pääkaupunkiseudulla. Lisäksi materiaalituotanto, stailaus, lakipalvelut sekä muutto- ja remonttipalvelut kumppanien kautta.",
    path: "/palvelut",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Palvelut"
        title="Kaikki kotisi kaupan palvelut yhdessä kontaktissa"
        lead="Ensisijainen palveluni on asunnon myynti. Lisäksi autan ostamassa ja vuokraamisessa, ja kaupan kaikki tukipalvelut järjestyvät kauttani."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Palvelut" }]}
      />

      {/* Kolme päätietä */}
      <section className="section-pad" aria-labelledby="paapalvelut">
        <div className="container-site">
          <SectionHeading
            title="Valitse tilanteesi mukaan"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {servicePaths.filter((p) => p.title !== "Kaikki palvelut").map((p) => (
              <Link
                  key={p.to}
                  to={p.to}
                  className={`group flex h-full flex-col rounded-xl border p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(7,21,34,0.35)] ${
                    p.primary ? "border-primary/40 bg-primary/[0.05]" : "border-border bg-card"
                  }`}
                >
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-primary/70">{p.eyebrow}</p>
                  <h3 className="mt-2.5 font-sans text-2xl font-medium tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                    Lue lisää <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Materiaalit */}
      <section className="section-pad bg-secondary/40" aria-labelledby="materiaalit">
        <div className="container-site">
          <SectionHeading
            title="Kohteen esitys kuntoon"
            lead="Järjestän koko materiaalituoton. Käytettävät keinot valitaan aina kohteesi ja toimeksiantosi mukaan."
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {materialOptions.map((m) => (
                <li key={m} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-medium">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {m}
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* Kumppanipalvelut */}
      <section className="section-pad" aria-labelledby="kumppanit">
        <div className="container-site">
          <SectionHeading
            title="Kaupan kaikki palapelit kuntoon"
            lead="Laajan yhteistyöverkostoni kautta järjestyvät myös nämä. Kartoitamme tarpeesi arviokäynnillä."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {partnerServices.map((g) => (
              <article key={g.group} className="h-full rounded-xl border border-border bg-card p-7">
                  <h3 className="font-sans text-xl font-medium tracking-[-0.01em]">{g.group}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Välityspalkkio sovitaan aina kohteekohtaisesti etukäteen. Zansen Real Estaten ajantasainen
              hinnasto löytyy{" "}
              <a href={site.zansenPricing} target="_blank" rel="noopener noreferrer" className="link-quiet font-medium">
                zansen.fi-sivustolta
              </a>
              .
            </p>
        </div>
      </section>

      <CtaSection
        title="Kerro tilanteesi. Rakennetaan sopiva kokonaisuus"
        text="Varaa maksuton arviokäynti tai soita suoraan. Käydään yhdessä läpi, mitä palveluita tilanteeseesi kannattaa yhdistää."
      />
    </>
  );
}
