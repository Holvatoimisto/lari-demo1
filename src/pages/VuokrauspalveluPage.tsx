import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { site } from "@/data/site";
import { rentalFaqs } from "@/data/faqs";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

const rentalSteps = [
  {
    title: "Kartoitus ja vuokra-arvio",
    text: "Käymme läpi kohteesi ja tavoitteesi. Saat perustellun arvion vuokratasosta alueesi vuokramarkkinan pohjalta.",
  },
  {
    title: "Materiaalit ja markkinointi",
    text: "Tuotan kohteellesi laadukkaat markkinointimateriaalit ja hoidan ilmoittelun oikeissa kanavissa.",
  },
  {
    title: "Vuokralaishakemusten käsittely",
    text: "Hankin ja käsittelen vuokralaishakemukset sekä esitän sinulle perustellun ehdotuksen valinnasta.",
  },
  {
    title: "Sopimus ja käytännön järjestelyt",
    text: "Hoidan vuokrasopimuksen ja käytännön järjestelyt huolellisesti ja dokumentoidusti.",
  },
];

export default function VuokrauspalveluPage() {
  useSeo({
    title: `Vuokrauspalvelu vuokranantajille | ${site.name}`,
    description:
      "Vuokrauspalvelu pääkaupunkiseudulla: vuokra-arvio, materiaalit, vuokralaishakemusten käsittely ja sopimus huolellisesti. Ota yhteyttä ja kerro kohteestasi.",
    path: "/vuokrauspalvelu",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Vuokranantajalle"
        title="Vuokrauspalvelu: kohteesi vuokraus huolellisesti ja turvallisesti"
        lead="Hoidan sijoitusasuntosi vuokrauksen alusta loppuun: vuokra-arviosta materiaaleihin, vuokralaishakemuksiin ja sopimukseen."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Vuokrauspalvelu" }]}
      >
        <div className="mt-8">
          <Link
            to="/ota-yhteytta"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-8 py-4 text-base font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_66%)]"
          >
            Kerro kohteestasi
          </Link>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="vuokra-prosessi">
        <div className="container-site">
          <SectionHeading
            title="Neljä vaihetta huolelliseen vuokraukseen"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rentalSteps.map((s, i) => (
              <article key={s.title} className="h-full rounded-xl border border-border bg-card p-7">
                  <span className="font-display text-sm font-bold text-primary" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-sans text-xl font-medium leading-snug tracking-[-0.01em]">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hinnoittelu */}
      <section className="section-pad bg-secondary/40" aria-labelledby="vuokra-hinta">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              title="Selkeä palkkio, kerrottuna etukäteen"
              lead="Zansen Real Estaten hinnaston mukaan vuokrauspalvelun palkkio on 1,255 × kuukausivuokra + asiakirja- ja markkinointikulut. Hinta sisältää arvonlisäveron (25,5 %)."
            />
            <ul className="mt-6 space-y-3">
                {[
                  "Tarkka kokonaishinta vahvistetaan aina kohteekohtaisesti etukäteen",
                  "Ajantasainen hinnasto luettavissa zansen.fi-sivustolla",
                  "Ei piilokuluja: kaikki kustannukset avoimesti ennen toimeksiantoa",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.zansenPricing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Zansenin hinnasto
                </a>
                <Link to="/ota-yhteytta" className="btn-primary">
                  Kerro kohteestasi
                </Link>
              </div>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-30px_rgba(7,21,34,0.35)]">
              <img
                src="/assets/lari-terrace-1400.webp"
                srcSet="/assets/lari-terrace-900.webp 900w, /assets/lari-terrace-1400.webp 1400w"
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt="Lari Saarinen tapaamisessa Helsingissä"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={rentalFaqs} title="Kysymyksiä vuokrauspalvelusta" />
      <CtaSection
        title="Laitetaan sijoitusasuntosi tuottamaan"
        text="Kerro kohteestasi. Saat perustellun vuokra-arvion ja selkeän suunnitelman vuokraukseen."
      />
    </>
  );
}
