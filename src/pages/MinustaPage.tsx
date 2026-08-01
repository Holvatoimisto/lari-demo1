import { Link } from "react-router-dom";
import { Check, GraduationCap, Languages, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { useSeo, personSchema } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import VideoSection from "@/components/VideoSection";
import CtaSection from "@/components/CtaSection";
import { trackEvent } from "@/lib/analytics";

const backgroundStrengths = [
  {
    title: "Asiakaspalvelu ja huippuravintolat",
    text: "Huippuravintoloiden maailmassa oppii, mitä aito palveleminen tarkoittaa: kuuntelemista, täsmällisyyttä ja sitä, että asiakas tuntee olevansa turvallisissa käsissä. Se asenne näkyy kaikessa tekemisessäni.",
  },
  {
    title: "Sisustaminen",
    text: "Sisustamisen taustani auttaa näkemään kohteen vahvuudet ja esillepanon mahdollisuudet, mikä tekee kodista ostajan silmissä houkuttelevan.",
  },
  {
    title: "Rakentaminen ja talotekniikka",
    text: "Rakentamisen ja talotekniikan koulutukset sekä käytännön kokemus auttavat arvioimaan kohteiden teknistä kunoa, remonttitarpeita ja riskejä. Tietoa, joka hyödyttää sekä myyjää että ostajaa.",
  },
  {
    title: "Logistiikka",
    text: "Logistiikan maailma opetti prosessien hallintaa: monta liikkuvaa osaa pitää osua kohdalleen oikeaan aikaan. Sama pätee asuntokauppaan.",
  },
];

export default function MinustaPage() {
  useSeo({
    title: `Minusta: ${site.name}, ${site.qualification} | ${site.company}`,
    description:
      "Olen Lari Saarinen, KiLAT. Myyn asuntoja pääkaupunkiseudulla Zansen Real Estatessa. Taustani asiakaspalvelussa, sisustamisessa ja rakentamisessa näkyy tavassani tehdä työtä.",
    path: "/minusta",
    image: "/assets/og-image.jpg",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow={site.tagline}
        title="Olen Lari Saarinen, asuntojen myynnin ammattilainen"
        lead="Myyn asuntoja pääkaupunkiseudulla Zansen Real Estatessa. Minulle asunnon myynti on ennen kaikkea ihmisten välistä tekemistä: kuuntelemista, luottamusta ja sitä, että tiedät aina missä mennään."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Minusta" }]}
      />

      {/* Pääesittely */}
      <section className="section-pad" aria-labelledby="tarina-otsikko">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-30px_rgba(7,21,34,0.4)]">
                <img
                  src="/assets/lari-portrait-1100.webp"
                  srcSet="/assets/lari-portrait-700.webp 700w, /assets/lari-portrait-1100.webp 1100w, /assets/lari-portrait-1600.webp 1600w"
                  sizes="(min-width: 1024px) 38vw, 92vw"
                  alt="Lari Saarinen Zansen Real Estaten kyltin edessä"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-5 rounded-xl border border-border bg-card p-5">
                <p className="eyebrow">Yhteystiedot</p>
                <p className="mt-2.5 text-sm font-medium">
                  <a href={site.phoneHref} onClick={() => trackEvent("phone_click", { location: "minusta" })} className="hover:text-primary">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-1 text-sm font-medium">
                  <a href={`mailto:${site.email}`} onClick={() => trackEvent("email_click", { location: "minusta" })} className="hover:text-primary">
                    {site.email}
                  </a>
                </p>
                <p className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Languages className="h-3.5 w-3.5" aria-hidden /> Suomi · English
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              title="Välittämisestä välittämistä"
              className="!max-w-none"
            />
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Ennen kiinteistönvälitystä työurani on kulkenut logistiikan, sisustamisen, rakentamisen
                  ja huippuravintoloiden parissa. Alat ovat erilaisia, mutta yhteinen nimittäjä on yksi:
                  ihmisten palveleminen ja monen liikkuvan osan saattaminen kuntoon samaan aikaan.
                </p>
                <p>
                  Asuntokaupassa nämä taustat kohtaavat. Sisustamisen silmä auttaa esittelemään kotisi
                  parhaassa valossa. Rakentamisen ja talotekniikan osaaminen auttaa arvioimaan kohteen
                  kunnon ja riskeinäkökohdat rehellisesti. Ja huippuravintoloiden palveluasenne näkyy
                  siinä, miten sinusta pidetään huolta koko prosessin ajan.
                </p>
                <p>
                  Teen työni Zansen Real Estatessa, pääkaupunkiseudulla toimivassa
                  kiinteistönvälitystoimistossa. Käytettävissäni ovat alan parhaat kuvaajat, stailaajat
                  ja markkinoinnin työkalut, mutta sinun kontaktisi olen aina minä.
                </p>
              </div>

            {/* Koulutus */}
            <div className="mt-10 rounded-xl border border-border bg-secondary/50 p-7">
                <p className="eyebrow flex items-center gap-2"><GraduationCap className="h-4 w-4" aria-hidden /> Koulutus ja pätevyys</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                    <span>
                      <strong>{site.qualificationFull}</strong>, alan ammattitutkinto
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                    Asiakaspalvelun ja markkinoinnin ammattitutkinto
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                    Useita alan myynti- ja lakikoulutuksia
                  </li>
                  <li className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" aria-hidden />
                    Talotekniikan ja rakentamisen koulutuksia
                  </li>
                </ul>
              </div>

            {/* Taustat vahvuuksina — yksi kortiton lista (B-16) */}
            <div className="mt-10">
              <h3 className="font-display text-xl font-bold">Taustani vahvuuksina</h3>
              <dl className="mt-4">
                {backgroundStrengths.map((b) => (
                  <div key={b.title} className="border-t border-border py-5">
                    <dt className="font-sans text-lg font-medium leading-snug tracking-[-0.01em]">{b.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <VideoSection />

      {/* Työskentelytapa */}
      <section className="section-pad" aria-labelledby="tapa-otsikko">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-30px_rgba(7,21,34,0.35)]">
              <img
                src="/assets/lari-terrace-1400.webp"
                srcSet="/assets/lari-terrace-900.webp 900w, /assets/lari-terrace-1400.webp 1400w"
                sizes="(min-width: 1024px) 46vw, 92vw"
                alt="Lari Saarinen rentona tapaamisessa Helsingissä"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              title="Sama mies alusta loppuun"
              lead="Et joudu puhumaan vaihtuville ihmisille tai uudestaan ja uudestaan samoista asioista. Hoidan toimeksiantosi henkilökohtaisesti alusta loppuun."
            />
            <ul className="mt-7 space-y-3.5">
                {[
                  "Vastaan yhteydenottoihin tyypillisesti puolen työpäivän kuluessa",
                  "Pidän sinut ajan tasalla ilman että sinun tarvitsee kysellä",
                  "Kerrot asiat suoraan, myös ne vaikeammat",
                  "Palvelen suomeksi ja englanniksi",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7">
                <Link to="/asiakaspalautteet" className="link-quiet inline-flex items-center gap-1.5 font-medium">
                  Lue, mitä asiakkaat sanovat <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </p>
          </div>
        </div>
      </section>

      <CtaSection
        title="Tavataanko kohteellasi?"
        text="Varaa maksuton arviokäynti. Tutustutaan ja katsotaan yhdessä, miten kotisi myynti kannattaa rakentaa."
      />
    </>
  );
}
