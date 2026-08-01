import { sellingProcess } from "@/data/services";

/**
 * Myyntiprosessi — täysleveä 2×3-grid desktopilla (B-11), pystylista mobiilissa.
 * Hairline-jakoviivat, numerot Lato-navyna. Jokaisessa askeleessa
 * konkreettinen toimenpide ja lopputulos.
 */
export default function Process() {
  return (
    <section className="section-standard bg-secondary/40" aria-labelledby="prosessi-otsikko">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2
            id="prosessi-otsikko"
            className="text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl"
          >
            Mitä tapahtuu arviokäynnin jälkeen?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Kuusi selkeää vaihetta. Tiedät aina, missä mennään ja mitä seuraavaksi tapahtuu.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sellingProcess.map((s) => (
            <li key={s.step} className="bg-card p-7 sm:p-8">
              <span className="font-display text-2xl font-bold text-primary" aria-hidden>
                {String(s.step).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-sans text-xl font-medium leading-snug tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
