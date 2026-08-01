import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, History } from "lucide-react";
import { articles } from "@/data/articles";
import { useSeo, websiteSchema } from "@/lib/seo";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export default function OppaatPage() {
  useSeo({
    title: `Oppaat: asunnon myynti ja ostaminen | ${site.name}`,
    description:
      "Kirjoituksia asunnon myymisestä, ostamisesta ja pääkaupunkiseudun asuntomarkkinoista. Näkemyksiä ja käytännön vinkkejä alan ammattilaiselta.",
    path: "/oppaat",
    jsonLd: [websiteSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Oppaat"
        title="Näkemyksiä ja käytännön ohjeita asuntokauppaan"
        lead="Kirjoitan asunnon myymisestä, ostamisesta ja pääkaupunkiseudun markkinasta. Huomaa: osa artikkeleista on historiallisia katsauksia. Julkaisuajankohta näkyy jokaisessa."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Oppaat" }]}
      />

      <section className="section-pad" aria-label="Artikkelit">
        <div className="container-site grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
                key={a.slug}
                to={`/oppaat/${a.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-28px_rgba(7,21,34,0.35)]"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">{a.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden /> {a.dateDisplay}
                  </span>
                </div>
                <h2 className="mt-4 font-sans text-xl font-medium leading-snug tracking-[-0.01em] transition-colors group-hover:text-primary">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                {a.historical && (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <History className="h-3.5 w-3.5" aria-hidden /> Historiallinen katsaus
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                  Lue artikkeli <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Haluatko keskustella omasta tilanteestasi?"
        text="Oppaat antavat yleiskuvan. Omaan tilanteeseesi saat tarkan näkemyksen maksuttomalla arviokäynnillä."
      />
    </>
  );
}
