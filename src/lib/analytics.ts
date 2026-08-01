/**
 * Analytiikka-apuri.
 * - Ei kovakoodattua GA-tunnusta: mittaus latautuu vain, jos (1) käyttäjä on hyväksynyt
 *   analytiikkaevästeet JA (2) ympäristömuuttuja VITE_GA_ID on asetettu.
 * - Tapahtumat pushataan dataLayeriin, joten GTM/GA4 kytkentä on suora.
 * Dokumentoitu tapahtumasuunnitelma: docs/conversion-strategy.md
 */

export type AnalyticsEvent =
  | "hero_cta_click"
  | "video_cta_click"
  | "video_play"
  | "review_link_click"
  | "phone_click"
  | "email_click"
  | "form_start"
  | "form_step_complete"
  | "form_error"
  | "form_submit_success"
  | "listing_outbound_click"
  | "social_profile_click"
  | "english_service_click"
  | "sticky_cta_click"
  | "booking_request_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean> = {}
) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    /* älä koskaan kaada sivua mittauksen takia */
  }
}

const CONSENT_KEY = "ls_cookie_consent_v1";

export type ConsentState = { necessary: true; analytics: boolean } | null;

export function getConsent(): ConsentState {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean") {
      return { necessary: true, analytics: parsed.analytics };
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean) {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ necessary: true, analytics, ts: Date.now() })
    );
  } catch {
    /* private mode */
  }
  if (analytics) loadAnalytics();
}

export function loadAnalytics() {
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!id) return; // mittausta ei konfiguroitu — dataLayer-tapahtumat jäävät odottamaan kytkentää
  if (document.getElementById("ga-loader")) return;
  const s = document.createElement("script");
  s.id = "ga-loader";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args as unknown as Record<string, unknown>);
  };
  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
}

export function initAnalyticsFromConsent() {
  const c = getConsent();
  if (c?.analytics) loadAnalytics();
}
