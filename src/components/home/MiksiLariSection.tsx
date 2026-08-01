import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * "Miksi Lari?" — editoriaaliosio, jossa media on Larin kuva (sama aito
 * 2025-kuva kuin herossa). Vasemmalla kolme todistepistettä ja linkki
 * taustoihin. Mobiilissa kuva ensin.
 */
export default function MiksiLariSection() {
  return (
    <section className="section-emotional bg-secondary/40" aria-labelledby="miksi-lari-otsikko">
      {/* Tämä osio saa hieman muuta sivua leveämmän kontekstin, jotta
          42/58-editorialin palstat tasaantuvat kuvan korkeuden kanssa. */}
      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8 grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
        {/* Kuva ensin mobiilissa */}
        <Reveal className="lg:order-2">
          <div className="overflow-hidden rounded-xl shadow-[0_30px_70px_-28px_rgba(7,21,34,0.4)] ring-1 ring-foreground/10">
            <img
              src="/assets/lari-hero-1400.webp"
              srcSet="/assets/lari-hero-800.webp 800w, /assets/lari-hero-1400.webp 1400w, /assets/lari-hero-2000.webp 2000w"
              sizes="(min-width: 1024px) 58vw, 92vw"
              alt="Lari Saarinen hymyilee Zansen Real Estaten kyltin edessä"
              className="aspect-video w-full object-cover object-[62%_center]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="lg:order-1">
          <p className="eyebrow mb-1">Miksi Lari</p>
          <h2
            id="miksi-lari-otsikko"
            className="mt-2 text-balance font-display text-[1.6rem] font-bold leading-[1.16] sm:text-[1.85rem] lg:text-[1.95rem]"
          >
            Aktiivinen palvelu, rauhallinen ote
          </h2>
          <p className="mt-3 max-w-xl text-pretty leading-[1.5] text-muted-foreground">
            Minulle tärkeintä on, että saat kotisi myyntiin huolellisen tekijän ja tiedät
            koko ajan missä mennään. Monipuolinen taustani sekä KiLAT-koulutus tukevat
            käytännönläheistä, rauhallista ja tavoitteellista työotettani.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "KiLAT ja alan lisäkoulutukset",
              "Näkemystä rakentamisesta ja sisustamisesta",
              "Aktiivinen yhteydenpito",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[0.95rem] leading-relaxed">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link to="/minusta" className="btn-secondary">
              Tutustu taustaani <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
