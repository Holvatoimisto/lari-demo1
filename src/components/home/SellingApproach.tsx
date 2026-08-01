import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sellingApproach } from "@/data/services";

/**
 * Myyntitapa — numeroitu lista kahdessa sarakkeessa, ei korttigridiä (B-08).
 * Vasen otsikkosarake + 01–06-lista jakoviivoilla. Jokainen elementti:
 * numero + tiivis otsikko + yksi konkreettinen lause.
 */
export default function SellingApproach({
  title = "Näin kotisi myynti rakennetaan",
  lead = "Ei kahta samanlaista kohdetta, eikä kahta samanlaista suunnitelmaa. Nämä kuusi elementtiä kuuluvat jokaiseen toimeksiantooni.",
  showLink = true,
}: {
  title?: string;
  lead?: string;
  showLink?: boolean;
}) {
  return (
    <section className="section-standard" aria-labelledby="myyntitapa-otsikko">
      <div className="container-site grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
        <div>
          <h2
            id="myyntitapa-otsikko"
            className="text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {lead}
          </p>
          {showLink && (
            <p className="mt-6">
              <Link to="/asunnon-myynti" className="link-quiet inline-flex items-center gap-1.5 font-medium">
                Lue lisää asunnon myynnistä <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          )}
        </div>

        <ol className="grid gap-x-12 sm:grid-cols-2">
          {sellingApproach.map((item, i) => (
            <li key={item.title} className="border-t border-border py-6">
              <span className="font-display text-lg font-bold text-primary/60" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-sans text-xl font-medium leading-snug tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
