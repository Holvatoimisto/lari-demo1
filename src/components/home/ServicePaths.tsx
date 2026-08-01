import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { servicePaths } from "@/data/services";

/**
 * Palvelupolut — selkeä hierarkia (B-08/§7): ensisijainen myyntipalvelu
 * täytettynä petrol-pintana ja suurempana, muut palvelut hiljaisina
 * outline-kortteina ryhmänä. Ei "Ensisijainen palvelu" -pilliä.
 */
export default function ServicePaths() {
  const primary = servicePaths.find((p) => p.primary)!;
  const secondary = servicePaths.filter((p) => !p.primary);

  return (
    <section className="section-standard bg-[hsl(210_48%_9%)]" aria-labelledby="palvelut-otsikko">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2
            id="palvelut-otsikko"
            className="text-balance font-display text-3xl font-bold leading-[1.15] text-white sm:text-4xl"
          >
            Miten voin auttaa?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-white/75">
            Ensisijainen palveluni on asunnon myynti. Lisäksi autan ostamassa ja vuokraamisessa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Primääri: myynti — täytetty petrol, suurempi */}
          <Link
            to={primary.to}
            className="group flex flex-col justify-between rounded-xl bg-primary p-8 ring-1 ring-white/10 transition-colors hover:bg-[hsl(208_68%_10%)] sm:p-10 lg:row-span-3"
          >
            <div>
              <p className="text-[0.8rem] font-medium tracking-[0.04em] text-white/60">{primary.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-white sm:text-[2.1rem]">
                {primary.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/80">{primary.text}</p>
              <ul className="mt-8 space-y-3 border-t border-white/15 pt-8">
                {[
                  "Maksuton arviokäynti ja perusteltu hinta-arvio",
                  "Yksilöllinen myyntisuunnitelma jokaiseen kohteeseen",
                  "Kaikki materiaalit ja markkinointi kauttani",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.93rem] leading-relaxed text-white/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-white/60" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <span className="mt-10 inline-flex items-center gap-1.5 font-medium text-white transition-transform group-hover:translate-x-1">
              Lue lisää <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>

          {/* Sekundaariset: hiljaiset outline-kortit ryhmänä */}
          {secondary.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group flex items-center justify-between gap-6 rounded-xl border border-white/15 p-6 transition-colors hover:border-white/35 sm:p-7"
            >
              <div>
                <p className="text-[0.78rem] font-medium tracking-[0.04em] text-white/50">{p.eyebrow}</p>
                <h3 className="mt-1.5 font-sans text-xl font-medium text-white tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{p.text}</p>
              </div>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-white/45 transition-all group-hover:translate-x-1 group-hover:text-white/85"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
