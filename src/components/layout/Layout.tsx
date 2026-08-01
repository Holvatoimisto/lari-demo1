import { useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { site } from "@/data/site";
import { trackEvent, initAnalyticsFromConsent } from "@/lib/analytics";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

/** Sticky mobiili-CTA: soita + varaa arviokäynti */
function MobileCTA() {
  const { pathname } = useLocation();
  if (pathname === "/ota-yhteytta") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href={site.phoneHref}
          onClick={() => trackEvent("sticky_cta_click", { action: "call" })}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 py-3 text-sm font-medium text-primary"
        >
          <Phone className="h-4 w-4" aria-hidden /> Soita
        </a>
        <Link
          to="/ota-yhteytta"
          onClick={() => trackEvent("sticky_cta_click", { action: "book" })}
          className="inline-flex items-center justify-center rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground"
        >
          Varaa arviokäynti
        </Link>
      </div>
    </div>
  );
}

export default function Layout() {
  useEffect(() => {
    initAnalyticsFromConsent();
  }, []);
  return (
    <>
      <a
        href="#sisalto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Siirry sisältöön
      </a>
      <Header />
      <main id="sisalto">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
      <CookieConsent />
      <ScrollToTop />
    </>
  );
}
