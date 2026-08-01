import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { listings, oikotieListingsSearchUrl, type Listing } from "@/data/listings";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const AUTOPLAY_PX_PER_SEC = 16;
const RESUME_DELAY_MS = 3000;

function ListingCard({ listing, duplicate }: { listing: Listing; duplicate: boolean }) {
  const stats = [
    listing.rooms,
    listing.floor,
    `${listing.propertyType}, ${listing.constructionYear}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <li
      className="w-[88vw] max-w-[24rem] shrink-0 snap-start sm:w-auto sm:max-w-none sm:flex-[0_0_clamp(460px,36vw,560px)]"
      aria-hidden={duplicate || undefined}
    >
      <a
        href={listing.listingUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`Avaa kohde ${listing.address} Oikotiessä`}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        onClick={() =>
          trackEvent("listing_card_click", { listing: listing.id })
        }
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_14px_-6px_rgba(7,21,34,0.12)] transition-shadow hover:shadow-[0_10px_28px_-10px_rgba(7,21,34,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:h-[19rem] sm:flex-row"
      >
        {/* Kuvasara: brändinauha + kohdekuva */}
        <div className="flex flex-col sm:h-full sm:w-[50%] sm:shrink-0">
          <div className="flex h-8 shrink-0 items-center bg-primary px-3.5">
            <img
              src="/assets/ls-logo-white-96h.png"
              alt=""
              className="h-4 w-auto"
              loading="lazy"
              draggable={false}
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden sm:aspect-auto sm:min-h-0 sm:flex-1">
            <img
              src={listing.image}
              srcSet={`${listing.image} 800w, ${listing.imageLarge} 1200w`}
              sizes="(min-width: 640px) 265px, 88vw"
              width={800}
              height={534}
              alt={duplicate ? "" : listing.imageAlt}
              loading="lazy"
              draggable={false}
              style={listing.imagePosition ? { objectPosition: listing.imagePosition } : undefined}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Tietosarake */}
        <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="font-display text-[1.05rem] leading-[1.3] text-foreground">
              {listing.address}
            </p>
            <p className="mt-2 font-display text-[1.5rem] font-bold leading-[1.1] tracking-[-0.01em] text-foreground">
              {listing.price}
              <span className="mx-1.5 font-normal text-muted-foreground/60">·</span>
              <span className="text-[1.05rem] font-bold">{listing.area}</span>
            </p>
            <p className="mt-2 text-[0.85rem] leading-[1.4] text-muted-foreground">{stats}</p>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src="/assets/lari-portrait-700.webp"
                alt=""
                width={56}
                draggable={false}
                height={56}
                loading="lazy"
                className="h-8 w-8 shrink-0 rounded-full object-cover object-top"
              />
              <div className="min-w-0 leading-tight">
                <p className="whitespace-nowrap text-[0.72rem] text-muted-foreground">Kohdetta myy</p>
                <p className="whitespace-nowrap text-[0.82rem] font-medium text-foreground">
                  {listing.agentName}
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-[0.8rem] font-medium text-primary">
              Katso kohde
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

/**
 * Kohteet-karuselli — Larin vahvistetut aktiiviset Oikotie-kohteet
 * premium-horisontaalkarusellina. Natiiviratkaisu: rAF-autoplay (16 px/s),
 * tauko hover/fokus/drag/kosketus/napit/piilotettu välilehti, jatkaminen
 * 3 s viiveellä, saumaton looppi duplikaattisetillä (aria-hidden).
 * prefers-reduced-motion: autoplay pois, manuaalinen selaus ja snap jäävät.
 */
export default function ListingsTeaser() {
  const trackRef = useRef<HTMLUListElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef<(() => void) | null>(null);
  const [snapActive, setSnapActive] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let paused = false;
    let resumeTimer: number | undefined;
    let raf = 0;
    let last = performance.now();
    // Selaimet pyöristävät scrollLeftin kokonaispikseleiksi — pidä
    // tarkka sijainti akkumulaattorissa, kirjoita pyöristettynä.
    let pos = el.scrollLeft;
    let drag: { startX: number; startScroll: number; moved: boolean } | null = null;
    // Raahauksen päättävä klikki ei saa avata linkkiä — lippu säilyy
    // pointerup:n jälkeen, koska click-tapahtuma tulee vasta sen perässä.
    let suppressClick = false;

    const halfWidth = () => el.scrollWidth / 2;

    const normalize = () => {
      const half = halfWidth();
      if (half <= 0) return;
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      else if (el.scrollLeft <= 0) el.scrollLeft += half;
      pos = el.scrollLeft;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!paused && !reduced.matches && !document.hidden) {
        pos += (AUTOPLAY_PX_PER_SEC * dt) / 1000;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };

    const pause = (auto: boolean) => {
      paused = true;
      if (auto) {
        window.clearTimeout(resumeTimer);
        resumeTimer = window.setTimeout(() => {
          paused = false;
          setSnapActive(false);
        }, RESUME_DELAY_MS);
      }
    };
    const pauseByUser = () => {
      setSnapActive(true);
      pause(true);
    };
    pauseRef.current = pauseByUser;

    const onEnter = () => pause(false);
    const onLeave = () => {
      if (!drag) pause(true);
    };
    const onFocusIn = () => pause(false);
    const onFocusOut = () => pause(true);

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      drag = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
      pauseByUser();
      if (e.pointerType === "mouse") setDragging(true);
      // Huom: pointer capture vasta kun raahaus varmistuu — muuten
      // capture kaappaisi myös click-tapahtuman eikä linkki avautuisi.
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag || e.pointerType !== "mouse") return;
      const dx = e.clientX - drag.startX;
      if (Math.abs(dx) > 6 && !drag.moved) {
        drag.moved = true;
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          /* capture ei välttämätön */
        }
      }
      if (drag.moved) {
        el.scrollLeft = drag.startScroll - dx;
        pos = el.scrollLeft;
      }
    };
    const onPointerUp = () => {
      if (drag?.moved) suppressClick = true;
      if (drag) setDragging(false);
      drag = null;
    };
    const onClickCapture = (e: MouseEvent) => {
      // Estä linkin avautuminen, jos käyttäjä raahasi
      if (suppressClick) {
        e.preventDefault();
        e.stopPropagation();
        suppressClick = false;
      }
    };
    const onTouchStart = () => pauseByUser();
    const onWheel = () => pauseByUser();
    const onScroll = () => normalize();

    raf = requestAnimationFrame(tick);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resumeTimer);
      pauseRef.current = null;
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    pauseRef.current?.();
    const card = el.querySelector<HTMLElement>("li");
    const amount = card ? card.offsetWidth + 20 : 480;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section-compact" aria-labelledby="kohteet-otsikko">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <div className="max-w-xl">
            <p className="eyebrow">Kohdevalikoima</p>
            <h2
              id="kohteet-otsikko"
              className="mt-2 text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl"
            >
              Myynnissä juuri nyt
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Valikoituja koteja pääkaupunkiseudulta. Avaa kohde ja tutustu kaikkiin
              tietoihin Oikotiessä.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Edellinen kohde"
                onClick={() => scrollByCard(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-2"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Seuraava kohde"
                onClick={() => scrollByCard(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-2"
              >
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <a
              href={oikotieListingsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("listing_outbound_click", { target: "oikotie" })}
              className="btn-primary"
            >
              Katso kaikki kohteeni Oikotiessä <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* Karuselli: täysleveä raiteen jatkuvuuden ilmaisemiseksi */}
      <div ref={viewportRef} className="relative mt-8">
        <ul
          ref={trackRef}
          role="list"
          aria-label="Myynnissä olevat kohteet"
          className={cn(
            "flex select-none gap-5 overflow-x-auto pb-2 pl-5 pr-5 sm:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pl-[max(3rem,calc((100vw-72rem)/2+3rem))]",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            snapActive && "snap-x snap-proximity",
            dragging ? "cursor-grabbing" : "cursor-grab"
          )}
        >
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} duplicate={false} />
          ))}
          {listings.map((l) => (
            <ListingCard key={`dup-${l.id}`} listing={l} duplicate />
          ))}
        </ul>
        {/* Reunahäivytykset vihjaavat jatkuvuudesta */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
