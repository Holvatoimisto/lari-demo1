import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";

const areas: { name: string; text: string; image?: string; alt?: string }[] = [
  {
    name: "Helsinki",
    text: "Helsinki on kotikenttäni. Tunnen kaupunginosien erilaiset asuntokannat vanhoista kerrostaloista uudiskohteisiin ja kaupungin kehittyvät suunnitelmat.",
    image: "/assets/helsinki-aerial-1200.webp",
    alt: "Helsingin keskustan siluetti mereltä",
  },
  {
    name: "Espoo",
    text: "Espoon monipuolinen asuntokanta ja alueiden kehitys ovat vahvasti hallussani. Olen palvellut myyjiä ja ostajia ympäri Espoota.",
    // Huom: Espoo-kortilla ei kuvaa, koska repossa ei ole aitoa Espoo-kuvaa
    // (aiempi hameentie-kuva kuvasi Helsinkiä ja oli faktuaalisesti harhaanjohtava).
  },
  {
    name: "Vantaa",
    text: "Vantaalla olen auttanut sekä myyjiä että ostajia. Palautteita on kertynyt erityisesti sujuvasta yhteydenpidosta ja ripeästä kaupanteosta.",
    image: "/assets/lari-terrace-900.webp",
    alt: "Lari Saarinen asiakastapaamisessa",
  },
  {
    name: "Kauniainen ja Sipoo",
    text: "Myös kehyskuntien kohteet ovat tuttuja. Paikallinen markkinatuntemus kattaa koko pääkaupunkiseudun.",
    image: "/assets/alue-aerial-1600.webp",
    alt: "Pääkaupunkiseudun asuinaluetta ilmasta",
  },
];

export default function ToimintaAlueetPage() {
  useSeo({
    title: `Toiminta-alueet: pääkaupunkiseutu | ${site.name}`,
    description: `Myyn asuntoja koko pääkaupunkiseudulla: ${site.areaLong}. Paikallinen markkinatuntemus ja aluekohtainen myyntisuunnitelma.`,
    path: "/toiminta-alueet",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Toiminta-alueet"
        title="Pääkaupunkiseutu on kotikenttäni"
        lead="Myyn asuntoja Helsingissä, Espoossa, Vantaalla, Kauniaisissa ja Sipoissa. Jokaisen alueen markkina ja asuntokanta ovat erilaisia, ja siksi myyntisuunnitelma tehdään aina paikallisesti."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Toiminta-alueet" }]}
      />

      <section className="section-pad" aria-label="Alueet">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2">
            {areas.map((a) => (
              <article key={a.name} className="group overflow-hidden rounded-xl border border-border bg-card">
                  {a.image ? (
                    <div className="overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.alt ?? ""}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <div className="p-7">
                    <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden /> {a.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                  </div>
                </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
              <SectionHeading
                title="Aluekohtainen tuntemus näkyy tuloksessa"
                lead="Hinta-arvio, myyntistrategia ja markkinointi rakennetaan aina sen alueen todellisen tilanteen pohjalta, ei yleispätevien kaavojen mukaan."
              />
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/ota-yhteytta" className="btn-primary">
                  Varaa maksuton arviokäynti <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link to="/oppaat" className="btn-secondary">
                  Lue aluekirjoituksiani
                </Link>
              </div>
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
