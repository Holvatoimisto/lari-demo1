import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Lopun CTA — kaksi varianttia (B-13):
 *  - "full": etusivun täysleveä tumma band hienovaraisella kuvalla, iso typografia
 *  - "compact": sisäsivujen kevyempi tumma band ilman kuvaa
 * Ei eyebrowta, ei kelluvaa korttia, ei rounded-3xl:ää.
 */
export default function CtaSection({
  variant = "compact",
  title = "Varaa maksuton arviokäynti",
  text = "Kerro tilanteestasi. Kartoitetaan yhdessä, miten kotisi myynti kannattaa rakentaa. Arviokäynti ei sido toimeksiantoon.",
}: {
  variant?: "full" | "compact";
  title?: string;
  text?: string;
}) {
  const full = variant === "full";

  return (
    <section
      className={cn("relative overflow-hidden bg-[hsl(210_48%_9%)] text-white", full ? "section-emotional" : "section-standard")}
      aria-labelledby="cta-otsikko"
    >
      {full && (
        <>
          <img
            src="/assets/helsinki-aerial-1915.webp"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[hsl(210_48%_9%)] via-[hsl(210_48%_9%/0.9)] to-[hsl(210_48%_9%/0.7)]"
            aria-hidden
          />
        </>
      )}
      <div className="container-site relative">
        <div className={cn("grid items-center gap-10", full ? "lg:grid-cols-[1fr_auto] lg:gap-20" : "lg:grid-cols-[1fr_auto] lg:gap-14")}>
          <div className={cn(full ? "max-w-2xl" : "max-w-xl")}>
            <h2
              id="cta-otsikko"
              className={cn(
                "text-balance font-display font-bold leading-[1.12]",
                full ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
              )}
            >
              {title}
            </h2>
            <p className={cn("mt-4 text-pretty leading-relaxed", full ? "text-lg text-white/80" : "text-white/75")}>
              {text}
            </p>
            <p className="mt-4 text-sm text-white/60">{site.responsePromise}.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[16rem]">
            <Link
              to="/ota-yhteytta"
              onClick={() => trackEvent("hero_cta_click", { location: "cta_section" })}
              className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-7 py-3.5 text-[0.95rem] font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_56%)]"
            >
              Varaa maksuton arviokäynti
            </Link>
            <a
              href={site.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "cta_section" })}
              className="btn-ghost-light"
            >
              <Phone className="h-4 w-4" aria-hidden /> Soita Larille: {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() => trackEvent("email_click", { location: "cta_section" })}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden /> {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
