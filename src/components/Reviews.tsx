import { Star, Quote, ExternalLink } from "lucide-react";
import { reviews, homepageCuratedIndexes, type Review } from "@/data/reviews";
import { site, googleReviews } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-0.5", className)} aria-label="5/5 tähteä" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-[hsl(38_44%_61%)] text-[hsl(38_44%_61%)]" aria-hidden />
      ))}
    </span>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
      <Quote className="h-5 w-5 text-primary/30" aria-hidden />
      <blockquote className="mt-3 flex-1" lang={review.lang === "en" ? "en" : undefined}>
        <p className="text-[0.95rem] leading-relaxed text-foreground/90">{review.quote}</p>
      </blockquote>
      <figcaption className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
        <div>
          <p className="text-sm font-medium text-foreground">{review.author}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {review.role === "myyjä" ? "Myyjä" : "Ostaja"}
            {review.location ? ` · ${review.location}` : ""}
            {review.lang === "en" ? " · in English" : ""}
          </p>
          <p className="mt-1 text-[0.7rem] text-muted-foreground/80">
            {review.source === "Oikotie" ? "Oikotie-palaute" : "larisaarinen.fi"}
          </p>
        </div>
        <Stars />
      </figcaption>
    </figure>
  );
}

/**
 * Etusivun palaute-osio — staattinen editorial-rivi (B-12):
 * 3 kuratoitua arvostelua eri teemoilla, ei autoplayta, ei karusellia.
 * Otsikkoryhmä keskitetty, lähdeviite jokaisessa kortissa, alla
 * ulkoiset lähdelinkit (Google + Oikotie) saman tyylisinä.
 */
export default function ReviewsSection() {
  const selected = homepageCuratedIndexes.map((i) => reviews[i]);

  return (
    <section className="section-standard" aria-labelledby="palautteet-otsikko">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="palautteet-otsikko"
            className="text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl"
          >
            Mitä asiakkaani kertovat yhteistyöstä
          </h2>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <Stars />
            <span>
              Google-arvosana {googleReviews.ratingDisplay} · {googleReviews.count} arvostelua
            </span>
          </p>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Palautteet ovat muokkaamattomia ja niiden lähteet ovat nähtävissä Oikotie-profiilissani.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {selected.map((r) => (
            <ReviewCard key={r.author + r.quote.slice(0, 12)} review={r} />
          ))}
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <a
            href={googleReviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("review_link_click", { location: "reviews_section_google" })}
            className="link-quiet inline-flex items-center gap-1.5 font-medium text-muted-foreground"
          >
            Palautteet Googlessa <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href={site.oikotieProfile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("review_link_click", { location: "reviews_section" })}
            className="link-quiet inline-flex items-center gap-1.5 font-medium text-muted-foreground"
          >
            Palautteet Oikotie-profiilissa <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </p>
      </div>
    </section>
  );
}
