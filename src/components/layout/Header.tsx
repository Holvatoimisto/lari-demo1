import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { site, mainNav } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const onDarkHero = isHome && !scrolled && !open;
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sulje mobiilivalikko reitin vaihtuessa (Reactin suositeltu
  // "setState renderin aikana" -malli, ei efektiä)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "bg-background/95 shadow-[0_1px_0_hsl(var(--border)),0_12px_32px_-18px_rgba(7,21,34,0.25)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        {/* Brändilockup: aito LS-logo — navy vaalealla taustalla,
            valkoinen tumman heron päällä */}
        <Link to="/" className="group flex shrink-0 items-center" aria-label="Lari Saarinen, etusivu">
          <img
            src={onDarkHero ? "/assets/ls-logo-white-96h.png" : "/assets/ls-logo-navy-96h.png"}
            srcSet={
              onDarkHero
                ? "/assets/ls-logo-white-96h.png 1x, /assets/ls-logo-white-192h.png 2x"
                : "/assets/ls-logo-navy-96h.png 1x, /assets/ls-logo-navy-192h.png 2x"
            }
            alt="Lari Saarinen"
            className="h-9 w-auto transition-opacity xl:h-10"
          />
        </Link>

        {/* Desktop-navigaatio */}
        <nav className="hidden shrink-0 items-center gap-6 lg:flex" aria-label="Päävalikko">
          {mainNav.slice(1, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-[0.83rem] font-medium tracking-wide transition-colors",
                  onDarkHero
                    ? isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : isActive
                      ? "text-primary"
                      : "text-foreground/75 hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/ota-yhteytta"
            onClick={() => trackEvent("hero_cta_click", { location: "header" })}
            className="hidden whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[0.83rem] font-medium text-primary-foreground shadow-[0_8px_20px_-10px_hsl(208_66%_12%/0.6)] transition-all hover:bg-[hsl(208_70%_8%)] sm:inline-flex"
          >
            Varaa maksuton arviokäynti
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Sulje valikko" : "Avaa valikko"}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              onDarkHero ? "text-white hover:bg-white/10" : "text-foreground hover:bg-foreground/5"
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      </header>

      {/* Mobiilivalikko — headerin ULKOPUOLELLA: headerin backdrop-blur
          muodostaisi fixed-kohdistuksen containing blockin */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-background transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="container-site flex flex-col gap-1 py-8" aria-label="Mobiilivalikko">
          {mainNav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-3.5 font-display text-2xl transition-colors",
                  isActive ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary/60"
                )
              }
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
            <Link to="/ota-yhteytta" className="btn-primary w-full">
              Varaa maksuton arviokäynti
            </Link>
            <a
              href={site.phoneHref}
              onClick={() => trackEvent("phone_click", { location: "mobile_menu" })}
              className="btn-secondary w-full"
            >
              <Phone className="h-4 w-4" aria-hidden /> {site.phone}
            </a>
            <p className="pt-2 text-center text-sm text-muted-foreground">{site.tagline}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
