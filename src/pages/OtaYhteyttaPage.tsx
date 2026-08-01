import { Phone, Mail, MapPin, Clock3, Languages, Instagram, Linkedin, Youtube } from "lucide-react";
import { site } from "@/data/site";
import { useSeo, personSchema } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EvaluationForm from "@/components/EvaluationForm";

export default function OtaYhteyttaPage() {
  useSeo({
    title: `Ota yhteyttä: varaa maksuton arviokäynti | ${site.name}`,
    description: `Varaa maksuton arviokäynti tai ota suoraan yhteyttä: ${site.phone}, ${site.email}. Vastaan yhteydenottoihin tyypillisesti puolen työpäivän kuluessa. Service also in English.`,
    path: "/ota-yhteytta",
    jsonLd: [personSchema],
  });

  return (
    <>
      <PageHero
        eyebrow="Yhteystiedot"
        title="Otetaan ensimmäinen askel yhdessä"
        lead="Kerro tilanteestasi lomakkeella tai soita suoraan. Arviokäynti on maksuton eikä sido toimeksiantoon."
        crumbs={[{ label: "Etusivu", to: "/" }, { label: "Ota yhteyttä" }]}
      />

      <section className="section-pad !pt-14" aria-label="Yhteydenotto">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Yhteystiedot */}
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(7,21,34,0.5)]">
                <img
                  src="/assets/lari-studio-1100.webp"
                  srcSet="/assets/lari-studio-700.webp 700w, /assets/lari-studio-1100.webp 1100w"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  alt="Lari Saarinen"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>
            <div className="mt-6 space-y-4">
                <a
                  href={site.phoneHref}
                  onClick={() => trackEvent("phone_click", { location: "contact_page" })}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Puhelin</span>
                    <span className="block font-sans text-lg font-medium">{site.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  onClick={() => trackEvent("email_click", { location: "contact_page" })}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Sähköposti</span>
                    <span className="block font-sans text-lg font-medium">{site.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">Toimisto</span>
                    <span className="block text-sm font-medium">
                      {site.office.street}, {site.office.zip} {site.office.city}
                    </span>
                    <span className="block text-xs text-muted-foreground">{site.company}</span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <Clock3 className="h-5 w-5 text-primary" aria-hidden />
                    <p className="mt-2.5 text-sm font-medium">Nopea vastaus</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{site.responsePromise}.</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <Languages className="h-5 w-5 text-primary" aria-hidden />
                    <p className="mt-2.5 text-sm font-medium">FI / EN</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{site.englishNote}.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Seuraa:</p>
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
                      onClick={() => trackEvent("social_profile_click", { network: label, location: "contact_page" })}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  ))}
                </div>
              </div>
          </div>

          {/* Lomake */}
          <div>
              <h2 className="font-display text-2xl font-bold">Varaa maksuton arviokäynti</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Neljä nopeaa vaihetta. Kerron sinulle henkilökohtaisesti jatkosta. Tietoja ei tallenneta
                sivustolle: lomake avaa sähköpostiohjelmasi valmiilla viestillä.
              </p>
              <div className="mt-6">
                <EvaluationForm />
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
