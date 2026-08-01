import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsent, setConsent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Suomenkielinen evästesuostumus — selkeä, tyrkyttämätön.
 * Välttämättömät aina päällä; analytiikka valinnainen.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const choose = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Evästesuostumus"
      aria-describedby="cookie-desc"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6",
        "animate-in slide-in-from-bottom-4 duration-500"
      )}
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-[0_24px_60px_-20px_rgba(7,21,34,0.35)] sm:p-6">
        <p className="font-sans text-lg font-medium">Evästeet sivustolla</p>
        <p id="cookie-desc" className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Käytämme välttämättömiä evästeitä sivuston toimintaan. Analytiikkaevästeet auttavat
          ymmärtämään, miten sivustoa käytetään. Ne ladataan vain suostumuksellasi. Lue lisää{" "}
          <Link to="/tietosuoja" className="link-quiet">
            tietosuojaselosteesta
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => choose(false)}
            className="btn-secondary !px-6 !py-2.5 text-sm"
          >
            Vain välttämättömät
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="btn-primary !px-6 !py-2.5 text-sm"
          >
            Hyväksy analytiikka
          </button>
        </div>
      </div>
    </div>
  );
}
