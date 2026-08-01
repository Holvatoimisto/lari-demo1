import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { sellingProcess, marketingChannels, materialOptions } from "@/data/services";
import { sellingFaqs } from "@/data/faqs";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SellingApproach from "@/components/home/SellingApproach";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

export default function AsunnonMyyntiPage() {
  useSeo({
    title: `Asunnon myynti pääkaupunkiseudulla | ${site.name}`,
    description:
      "Myyn asuntosi suunnitelmallisesti: yksilöllinen myyntisuunnitelma, perusteellinen hinta-arvio, laadukas materiaali ja aktiivinen yhteydenpito. Varaa maksuton arviokäynti.",
    path: "/asunnon-myynti",
    jsonLd: [
      personSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Asunnon myynti",
        provider: { "@type": "Person", name: site.name },
        areaServed: "Pääkaupunkiseutu",
        offers: {
          "@type": "Offer",
          description: "Maksuton arviokäynti myyntiä varten",
          price: "0",
          priceCurrency: "EUR",
        },
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Ensisijainen palvelu"
        title="Asunnon myynti suunnitelmallisesti ja sinua kuunnellen"
        lead="Myytävä kohde ansaitsee enemmän kuin ilmoituksen portaaliin. Rakennan jokaiseen toimeksiantoon yksilöllisen myyntisuunnitelman ja pidän sinut ajan tasalla koko matkan."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Asunnon myynti" }]}
      >
        <div className="mt-8">
          <Link
            to="/ota-yhteytta"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-8 py-4 text-base font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_66%)]"
          >
            Varaa maksuton arviokäynti
          </Link>
          <p className="mt-3 text-sm text-white/55">Arviokäynti ei sido toimeksiantoon.</p>
        </div>
      </PageHero>

      {/* Mitä myyntiin kuuluu — sama numerolista kuin etusivulla */}
      <SellingApproach
        title="Mitä toimeksiantooni sisältyy?"
        lead="Kuusi elementtiä, joilla myynti rakennetaan huolellisesti alusta kaupanteon jälkeiseen aikaan asti."
        showLink={false}
      />

      {/* Materiaalit + kanavat */}
      <section className="section-pad bg-secondary/40" aria-labelledby="materiaali-otsikko">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              title="Materiaalit, jotka tekevät kohteesta oikeuden näköisen"
              lead="Käytettävät keinot valitaan aina kohteesi mukaan, ei automaattisesti kaikkea, mutta aina ammattimaisesti."
            />
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {materialOptions.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {m}
                  </li>
                ))}
              </ul>
          </div>
          <div>
            <SectionHeading
              align="left"
              title="Näkyvyys siellä, missä ostajat liikkuvat"
              lead="Kohteesi markkinointi kohdistetaan kanaviin, joilla pääkaupunkiseudun ostajat aidosti ovat."
            />
            <ul className="mt-7 space-y-2.5">
                {marketingChannels.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden /> {m}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </section>

      {/* Prosessi */}
      <section className="section-pad" aria-labelledby="prosessi-otsikko">
        <div className="container-site">
          <SectionHeading
            title="Näin myynti etenee vaihe vaiheelta"
            lead="Kuusi selkeää vaihetta. Tiedät aina, mitä seuraavaksi tapahtuu."
          />
          <ol className="mx-auto mt-14 max-w-3xl">
            {sellingProcess.map((s, i) => (
                <li key={s.step} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < sellingProcess.length - 1 && (
                    <span className="absolute left-[1.35rem] top-12 h-[calc(100%-2.5rem)] w-px bg-border" aria-hidden />
                  )}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-sans text-base font-medium text-primary-foreground">
                    {s.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-sans text-xl font-medium tracking-[-0.01em]">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">{s.text}</p>
                  </div>
                </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Hinnoittelu */}
      <section className="section-pad bg-[hsl(210_48%_9%)] text-white" aria-labelledby="hinta-otsikko">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow-dark">Hinnoittelu</p>
            <h2 id="hinta-otsikko" className="mt-3 text-balance font-display text-3xl font-bold sm:text-4xl">
              Selkeä hinnoittelu: sovitaan aina etukäteen
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Välityspalkkio määritellään aina kohteekohtaisesti, ja siitä sovitaan yhdessä ennen
              toimeksiannon alkua. Saat siis tarkan tiedon kustannuksista jo arviokäynnillä, ei
              yllätyksiä myöhemmin.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Zansen Real Estaten ajantasainen hinnasto on aina luettavissa kokonaisuudessaan Zansenin
              sivustolla.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.zansenPricing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                Katso Zansenin hinnasto <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link to="/ota-yhteytta" className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-7 py-3.5 text-[0.95rem] font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_66%)]">
                Varaa maksuton arviokäynti
              </Link>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl ring-1 ring-white/15">
              <img
                src="/assets/lari-landscape-1280.webp"
                alt="Lari Saarinen Zansen Real Estaten toimistolla"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        faqs={sellingFaqs}
        title="Kysymyksiä asunnon myynnistä"
        lead="Jos et löytänyt vastausta kysymykseesi, soita tai laita viestiä. Vastaan nopeasti."
      />
      <CtaSection
        title="Miltä kotisi myynti näyttäisi suunnitelmallisena?"
        text="Varaa maksuton arviokäynti. Saat perustellun hinta-arvion ja selkeän ehdotuksen myyntisuunnitelmaksi. Ei sitoumuksia."
      />
    </>
  );
}
