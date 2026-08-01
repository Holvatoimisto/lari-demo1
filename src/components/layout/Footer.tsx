import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { site, mainNav, serviceNav } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="bg-[hsl(210_48%_9%)] text-[hsl(42_30%_90%)]">
      <div className="container-site section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brändi + yhteystiedot */}
          <div>
            <p className="font-display text-2xl font-bold text-white">Lari Saarinen</p>
            <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.26em] text-[hsl(42_16%_68%)]">
              {site.company}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[hsl(42_20%_78%)]">
              {site.tagline}. Henkilökohtaista ja aktiivista asuntojen myyntiä pääkaupunkiseudulla suomeksi ja englanniksi.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a
                href={site.phoneHref}
                onClick={() => trackEvent("phone_click", { location: "footer" })}
                className="flex items-center gap-2.5 text-[hsl(42_30%_92%)] transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[hsl(42_16%_68%)]" aria-hidden /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                onClick={() => trackEvent("email_click", { location: "footer" })}
                className="flex items-center gap-2.5 text-[hsl(42_30%_92%)] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[hsl(42_16%_68%)]" aria-hidden /> {site.email}
              </a>
            </div>
            <div className="mt-6 flex gap-3">
              {[
                { href: site.social.instagram, label: "Instagram", Icon: Instagram },
                { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: site.social.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (avautuu uuteen ikkunaan)`}
                  onClick={() => trackEvent("social_profile_click", { network: label })}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[hsl(42_30%_85%)] transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sivusto */}
          <nav aria-label="Alatunnisteen sivustovalikko">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[hsl(42_16%_68%)]">Sivusto</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-[hsl(42_20%_80%)] transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/toiminta-alueet" className="text-[hsl(42_20%_80%)] transition-colors hover:text-white">
                  Toiminta-alueet
                </Link>
              </li>
            </ul>
          </nav>

          {/* Palvelut */}
          <nav aria-label="Alatunnisteen palveluvalikko">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[hsl(42_16%_68%)]">Palvelut</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceNav.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-[hsl(42_20%_80%)] transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.zansenPricing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[hsl(42_20%_80%)] transition-colors hover:text-white"
                >
                  Hinnasto <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </li>
            </ul>
          </nav>

          {/* Toimisto + merkit */}
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[hsl(42_16%_68%)]">Toimisto</p>
            <address className="mt-4 text-sm not-italic leading-relaxed text-[hsl(42_20%_80%)]">
              {site.companyLegal}
              <br />
              {site.office.street}
              <br />
              {site.office.zip} {site.office.city}
            </address>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-block rounded-xl bg-white p-2.5">
                <img
                  src="/assets/kvkl-merkki.png"
                  alt="Noudatamme hyvää välitystapaa, Kiinteistönvälitysalan Keskusliitto"
                  className="h-[4.25rem] w-auto"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[hsl(42_16%_62%)] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Lari Saarinen · {site.companyLegal} · Y-tunnus {site.companyId}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/tietosuoja" className="transition-colors hover:text-white">
              Tietosuoja ja evästeet
            </Link>
            <button
              type="button"
              onClick={() => {
                // Avaa evästevalinnat uudelleen
                window.dispatchEvent(new Event("open-cookie-settings"));
              }}
              className="transition-colors hover:text-white"
            >
              Evästeasetukset
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
