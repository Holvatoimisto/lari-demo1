import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { buyingFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { ReviewCard } from "@/components/Reviews";

const buyingSteps = [
  {
    title: "Toiveiden kartoitus",
    text: "Käymme yhdessä läpi toiveesi, budjettisi ja aikataulusi. Rajauksista tulee tarkka kriteeristö, jonka pohjalta etsin.",
  },
  {
    title: "Aktiivinen etsintä ja seulonta",
    text: "Seuraan markkinaa puolestasi ja hyödynnän verkostojani. Saat eteesi vain kohteet, jotka aidosti vastaavat kriteerejäsi.",
  },
  {
    title: "Arviointi ja taustatyö",
    text: "Arvioin kohteen hintatason, taloyhtiön tilanteen ja mahdolliset riskit rakentamisen ja talotekniikan taustani hyödyntäen.",
  },
  {
    title: "Neuvottelu ja kauppa",
    text: "Neuvottelen puolestasi ja autan kaupanteon käytännöissä. Päätökset teet aina sinä, parhaan mahdollisen tiedon pohjalta.",
  },
];

export default function OstotoimeksiantoPage() {
  useSeo({
    title: `Ostotoimeksianto: ammattilainen etsimään kotiasi | ${site.name}`,
    description:
      "Ostotoimeksiannolla etsin, seulon ja arvioin kohteet puolestasi sekä neuvottelen sinun edullasi. Palvelen myös englanniksi. Ota yhteyttä, niin käydään toiveesi läpi.",
    path: "/ostotoimeksianto",
    jsonLd: [personSchema],
  });

  const buyerReviews = reviews.filter((r) => r.role === "ostaja").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Ostajalle"
        title="Ostotoimeksianto: ammattilainen etsimään uutta kotiasi"
        lead="Kun aika tai asiantuntemus ei riitä, teen kodinetsinnän puolestasi: seulon kohteet, arvioin riskit ja neuvottelen sinun edullasi. Palvelen myös englanniksi. Service also in English."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Ostotoimeksianto" }]}
      >
        <div className="mt-8">
          <Link
            to="/ota-yhteytta"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-8 py-4 text-base font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_66%)]"
          >
            Käydään toiveesi läpi
          </Link>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="miten-toimii">
        <div className="container-site">
          <SectionHeading
            title="Neljä vaihetta uuteen kotiisi"
            lead="Ostotoimeksianto on sinun puolellasi oleva ammattilainen, ei myyjän edun vahtija."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buyingSteps.map((s, i) => (
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

      {/* Vahvuudet ostajan näkökulmasta */}
      <section className="section-pad bg-secondary/40" aria-labelledby="vahvuudet">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              title="Ostajan silmin, ammattilaisen taustoilla"
              lead="Autan sinua näkemään kohteen pinnan taakse ja tekemään päätöksen, johon voit olla tyytyväinen vuosienkin päästä."
            />
            <ul className="mt-7 space-y-3.5">
                {[
                  "Taustani rakentamisen ja talotekniikan parissa auttaa arvioimaan kohteiden teknistä kunoa ja remonttiriskejä",
                  "Tunnen pääkaupunkiseudun asuntokannan ja alueiden erityispiirteet",
                  "Näet kohteen hintatason perusteltuna, ei arvailuna",
                  "Ensiasunnon ostajille rauhallinen ja selkeä opastus koko prosessiin",
                  "Palvelen suomeksi ja englanniksi",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-30px_rgba(7,21,34,0.35)]">
              <img
                src="/assets/lari-terrace-1400.webp"
                srcSet="/assets/lari-terrace-900.webp 900w, /assets/lari-terrace-1400.webp 1400w"
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt="Lari Saarinen asiakastapaamisessa Helsingissä"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ostajien palautteet */}
      <section className="section-pad" aria-labelledby="ostaja-palautteet">
        <div className="container-site">
          <SectionHeading
            title="Näin ostajat ovat kokeneet yhteistyön"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {buyerReviews.map((r, i) => (
              <ReviewCard key={r.author + i} review={r} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm">
              <Link to="/asiakaspalautteet" className="link-quiet inline-flex items-center gap-1.5 font-medium">
                Lue kaikki palautteet <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
        </div>
      </section>

      <FaqSection faqs={buyingFaqs} title="Kysymyksiä ostotoimeksiannosta" />
      <CtaSection
        title="Löydetään sinulle koti, joka vastaa toiveitasi"
        text="Kerro toiveesi. Käydään ne yhdessä läpi ja sovitaan, miten etsintä rakennetaan. Yhteydenotto ei sido sinua mihinkään."
      />
    </>
  );
}
