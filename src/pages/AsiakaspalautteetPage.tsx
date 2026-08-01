import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { site, googleReviews } from "@/data/site";
import { useSeo, personSchema } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { ReviewCard } from "@/components/Reviews";
import { cn } from "@/lib/utils";

type Filter = "kaikki" | "myyjä" | "ostaja" | "en";

export default function AsiakaspalautteetPage() {
  const [filter, setFilter] = useState<Filter>("kaikki");

  useSeo({
    title: `Asiakaspalautteet: Google ${googleReviews.ratingDisplay} | ${site.name}`,
    description: `Aitoja kokemuksia myyjiltä ja ostajilta. Google-arvosana ${googleReviews.ratingDisplay} (${googleReviews.count} arvostelua). Palautteet muokkaamattomina, lähteet nähtävissä.`,
    path: "/asiakaspalautteet",
    jsonLd: [personSchema],
  });

  const filtered = reviews.filter((r) => {
    if (filter === "kaikki") return true;
    if (filter === "en") return r.lang === "en";
    return r.role === filter;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: "kaikki", label: `Kaikki (${reviews.length})` },
    { key: "myyjä", label: "Myyjät" },
    { key: "ostaja", label: "Ostajat" },
    { key: "en", label: "In English" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Asiakaspalautteet"
        title="Mitä asiakkaat sanovat?"
        lead={`Google-arvosana ${googleReviews.ratingDisplay} (${googleReviews.count} arvostelua). Nämä palautteet ovat asiakkaiden omia sanoja, muokkaamattomina.`}
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Asiakaspalautteet" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 ring-1 ring-white/20">
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[hsl(38_55%_60%)] text-[hsl(38_55%_60%)]" />
              ))}
            </span>
            <span className="text-sm font-medium">{googleReviews.ratingDisplay}</span>
            <span className="text-sm text-white/60">· {googleReviews.count} Google-arvostelua</span>
          </span>
          <a
            href={googleReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("review_link_click", { location: "reviews_page_hero" })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Google-profiili <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href={site.oikotieProfile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("review_link_click", { location: "reviews_page_hero_oikotie" })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Oikotie-profiili <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </PageHero>

      <section className="section-pad" aria-label="Palautteet">
        <div className="container-site">
          {/* Suodattimet */}
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Suodata palautteita">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all",
                  filter === f.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
            {filtered.map((r, i) => (
              <ReviewCard key={`${r.author}-${i}`} review={r} />
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
              Palautteiden lähteet: Oikotie-profiili ja Google. Kaikki ajantasaiset arvostelut löydät
              suoraan lähteistä.
            </p>
        </div>
      </section>

      <CtaSection
        title="Haluatko saman kokemuksen?"
        text="Varaa maksuton arviokäynti. Käydään läpi tilanteesi ja rakennetaan kotisi myynti huolellisesti."
      />
    </>
  );
}
