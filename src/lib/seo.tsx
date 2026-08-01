/**
 * SEO-hook SPA:lle — päivittää title/description/canonical/OG + JSON-LD reitinvaihdon yhteydessä.
 */
import { useEffect } from "react";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, unknown>[];
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const m = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (m) el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

export function useSeo({ title, description, path, image, jsonLd }: SeoInput) {
  useEffect(() => {
    const url = `${site.domain}${path}`;
    document.title = title;
    upsertMeta('[name="description"]', { content: description });
    upsertMeta('[property="og:title"]', { content: title });
    upsertMeta('[property="og:description"]', { content: description });
    upsertMeta('[property="og:url"]', { content: url });
    upsertMeta('[name="twitter:title"]', { content: title });
    upsertMeta('[name="twitter:description"]', { content: description });
    if (image) {
      upsertMeta('[property="og:image"]', { content: `${site.domain}${image}` });
      upsertMeta('[name="twitter:image"]', { content: `${site.domain}${image}` });
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // JSON-LD
    document.querySelectorAll('script[data-jsonld="route"]').forEach((n) => n.remove());
    (jsonLd ?? []).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-jsonld", "route");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [title, description, path, image, jsonLd]);
}

/** Yhteiset skeemapalat */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: `${site.title}, ${site.qualification}`,
  worksFor: {
    "@type": "RealEstateAgent",
    name: site.company,
    url: site.companyUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.office.street,
      postalCode: site.office.zip,
      addressLocality: site.office.city,
      addressCountry: "FI",
    },
  },
  telephone: site.phone,
  email: site.email,
  url: site.domain,
  image: `${site.domain}/assets/lari-portrait-1100.webp`,
  areaServed: "Pääkaupunkiseutu, Helsinki, Espoo, Vantaa, Kauniainen, Sipoo",
  sameAs: [
    site.social.instagram,
    site.social.linkedin,
    site.social.youtube,
    site.oikotieProfile,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.domain,
  inLanguage: "fi",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: `${site.name} | ${site.company}`,
  url: site.domain,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.office.street,
    postalCode: site.office.zip,
    addressLocality: site.office.city,
    addressCountry: "FI",
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.companyLegal,
    identifier: site.companyId,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
};
