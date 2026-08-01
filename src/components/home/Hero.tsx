import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

/**
 * Hero — Eira-asuntoesittelyvideo dominoivana visuaalina, tekstialue
 * max ~600 px vasemmalla. Overlay suunnattu tekstipuolelle (B-18).
 * Tekstit staattisia (B-21). Mobiilissa lyhyt lead, H1 ≤ 3 riviä,
 * CTA-pino (B-20). Desktopilla hero + header = yksi hallittu first
 * screen, trust bridge alkaa heti viewportin jälkeen. Trust-tekstit
 * (Google-arvosana, vastausnopeus) elävät vain TrustBarissa ja
 * arvosteluosiossa — ei herossa. Video äänetön, loopattu ja kunnioittaa
 * prefers-reduced-motion -asetusta (poster jää silloin näkyviin).
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[hsl(210_48%_9%)]" aria-labelledby="hero-h1">
      {/* Taustavideo — Eiran jugend-asunto, 12 s looppi, äänetön */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/eira-hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/assets/eira-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Luettavuusgradientti vain tekstipuolelle */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[hsl(210_48%_9%/0.88)] via-[hsl(210_48%_9%/0.52)] to-[hsl(210_48%_9%/0.02)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[hsl(210_48%_9%/0.85)] to-transparent sm:h-32 sm:from-[hsl(210_48%_9%/0.35)]" aria-hidden />
      </div>

      {/* Desktop: header (4rem) + hero ≈ 100svh → hero ≈ 88svh, sisältö
          keskitetty. Mobiili: sisältö määrää korkeuden, ei pakotusta. */}
      <div className="container-site relative flex flex-col justify-end pb-12 pt-24 sm:min-h-[calc(88svh)] sm:justify-center sm:pb-16">
        <div className="max-w-[37.5rem]">
          <p className="eyebrow-dark">
            {site.name} · {site.title}, pääkaupunkiseutu
          </p>
          <h1
            id="hero-h1"
            className="mt-4 text-balance font-display text-[2.05rem] font-bold leading-[1.1] text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.6rem]"
          >
            Kotisi myynti ansaitsee suunnitelman, joka on tehty juuri sille.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
            Henkilökohtaista ja aktiivista asuntojen myyntiä pääkaupunkiseudulla.
            Pidän sinut ajan tasalla näytöistä kauppoihin asti.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Link
              to="/ota-yhteytta"
              onClick={() => trackEvent("hero_cta_click", { location: "hero" })}
              className="inline-flex items-center justify-center rounded-full bg-[hsl(38_44%_61%)] px-8 py-4 text-base font-medium text-[hsl(208_70%_8%)] shadow-[0_16px_40px_-14px_hsl(38_44%_61%/0.7)] transition-all hover:bg-[hsl(38_46%_56%)] hover:shadow-[0_20px_44px_-14px_hsl(38_44%_61%/0.8)]"
            >
              Varaa maksuton arviokäynti
            </Link>
            <a
              href={site.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "hero" })}
              className="btn-ghost-light"
            >
              <Phone className="h-5 w-5" aria-hidden /> Soita Larille: {site.phone}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/75">Arviokäynti ei sido toimeksiantoon.</p>
        </div>
      </div>
    </section>
  );
}
