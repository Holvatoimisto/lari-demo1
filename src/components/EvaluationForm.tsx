import { useRef, useState, type FormEvent } from "react";
import { Check, ChevronLeft, ChevronRight, Send, Loader2, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Arviokäyntilomake — 4 vaihetta, kevyt validointi, GDPR-suostumus.
 * HUOM: sivustolla ei ole backendiä. Lähetys avaa käyttäjän sähköpostiohjelman
 * viesti valmiiksi täytettynä (mailto). Tämä kerrotaan rehellisesti — ei
 * valheellista onnistumisviestiä. Tuotantoon viedessä kytkeä API/palvelu
 * (esim. Zansenin lomakepääte) ja päivittää submit-käsittelijä.
 */

type FormData = {
  propertyType: string;
  location: string;
  rooms: string;
  size: string;
  situation: string;
  timeline: string;
  message: string;
  name: string;
  phone: string;
  email: string;
  contactPref: string;
  gdpr: boolean;
  website: string; // honeypot
};

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {msg}
    </p>
  );
}

const initial: FormData = {
  propertyType: "",
  location: "",
  rooms: "",
  size: "",
  situation: "",
  timeline: "",
  message: "",
  name: "",
  phone: "",
  email: "",
  contactPref: "",
  gdpr: false,
  website: "",
};

const steps = ["Kohde", "Tilanne", "Lisätiedot", "Yhteystiedot"];

export default function EvaluationForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [started, setStarted] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const headingRef = useRef<HTMLParagraphElement>(null);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    if (!started) {
      setStarted(true);
      trackEvent("form_start", { form: "arviokäynti" });
    }
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 0 && !data.propertyType) e.propertyType = "Valitse kohteen tyyppi";
    if (s === 0 && !data.location.trim()) e.location = "Kerro kohteen sijainti (esim. kaupunginosa)";
    if (s === 3) {
      if (!data.name.trim()) e.name = "Nimi puuttuu";
      if (!data.phone.trim() && !data.email.trim()) {
        e.phone = "Jätä puhelinnumero tai sähköpostiosoite";
        e.email = "Jätä puhelinnumero tai sähköpostiosoite";
      }
      if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
        e.email = "Tarkista sähköpostiosoitteen muoto";
      if (!data.gdpr) e.gdpr = "Hyväksy tietojen käsittely, jotta voin vastata sinulle";
    }
    setErrors(e);
    if (Object.keys(e).length > 0) {
      trackEvent("form_error", { step: s + 1 });
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validateStep(step)) return;
    trackEvent("form_step_complete", { step: step + 1 });
    setStep((v) => Math.min(steps.length - 1, v + 1));
    setTimeout(() => headingRef.current?.focus(), 50);
  };
  const prev = () => setStep((v) => Math.max(0, v - 1));

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validateStep(3)) return;
    if (data.website) return; // honeypot — hiljainen hylkäys
    if (Date.now() - startedAt < 2500) return; // aikaansaalisuustarkistus
    setSending(true);

    const lines = [
      "Uusi arviokäyntipyyntö verkkosivustolta",
      "",
      `Kohteen tyyppi: ${data.propertyType}`,
      `Sijainti: ${data.location}`,
      data.rooms && `Huoneistotyyppi: ${data.rooms}`,
      data.size && `Koko: ${data.size} m²`,
      data.situation && `Tilanne: ${data.situation}`,
      data.timeline && `Aikataulu: ${data.timeline}`,
      "",
      data.message && `Lisätiedot:\n${data.message}`,
      "",
      `Nimi: ${data.name}`,
      `Puhelin: ${data.phone || "ei ilmoitettu"}`,
      `Sähköposti: ${data.email || "ei ilmoitettu"}`,
      data.contactPref && `Yhteydenottotapa: ${data.contactPref}`,
    ].filter(Boolean);

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Arviokäyntipyyntö: ${data.location} (${data.name})`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    // Avaa käyttäjän sähköpostiohjelman valmiilla viestillä
    window.location.href = mailto;
    trackEvent("form_submit_success", { method: "mailto" });
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 600);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-6 sm:p-8" role="status">
        <p className="flex items-center gap-2.5 font-display text-xl font-bold text-primary">
          <Check className="h-6 w-6" aria-hidden /> Viesti avattu sähköpostiohjelmassasi
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Tietosi on täytetty valmiiksi sähköpostiviestiin. Paina vielä <strong>Lähetä</strong> omassa
          sähköpostiohjelmassasi, niin viesti tulee perille. Jos ohjelma ei avautunut, voit lähettää
          samat tiedot suoraan osoitteeseen{" "}
          <a href={`mailto:${site.email}`} className="link-quiet font-medium">{site.email}</a> tai soittaa{" "}
          <a href={site.phoneHref} className="link-quiet font-medium">{site.phone}</a>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{site.responsePromise}.</p>
      </div>
    );
  }

  const fieldCls = (invalid?: string) =>
    cn(
      "w-full rounded-xl border bg-card px-4 py-3 text-[0.95rem] transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
      invalid ? "border-destructive" : "border-input"
    );

  return (
    <form onSubmit={submit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(7,21,34,0.3)] sm:p-8">
      {/* Edistymisilmaisin — numeroidut vaiheet nimineen (B-26) */}
      <div className="mb-7" aria-label={`Vaihe ${step + 1} / ${steps.length}: ${steps[step]}`}>
        <ol className="flex items-center" aria-hidden>
          {steps.map((s, i) => (
            <li key={s} className="flex min-w-0 items-center">
              <span className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-medium transition-colors",
                    i <= step ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                  )}
                >
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "truncate text-xs font-medium sm:text-[0.8rem]",
                    i === step ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {s}
                </span>
              </span>
              {i < steps.length - 1 && (
                <span className={cn("mx-2 h-px w-4 shrink-0 sm:w-8", i < step ? "bg-primary/50" : "bg-border")} />
              )}
            </li>
          ))}
        </ol>
        <p
          ref={headingRef}
          tabIndex={-1}
          className="sr-only outline-none"
          aria-live="polite"
        >
          {`Vaihe ${step + 1} / ${steps.length}: ${steps[step]}`}
        </p>
      </div>

      {/* Honeypot — piilotettu ihmisiltä */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Jätä tämä kenttä tyhjäksi
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={data.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </label>
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="sr-only">Kohteen perustiedot</legend>
          <div className="space-y-5">
            <div>
              <label htmlFor="f-type" className="mb-1.5 block text-sm font-medium">
                Kohteen tyyppi *
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup" aria-describedby={errors.propertyType ? "err-type" : undefined}>
                {["Kerrostalo", "Rivitalo", "Omakotitalo", "Paritalo", "Loft/erillinen", "Muu"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={data.propertyType === t}
                    onClick={() => set("propertyType", t)}
                    className={cn(
                      "rounded-xl border px-3 py-2.5 text-sm font-medium transition-all",
                      data.propertyType === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-card hover:border-primary/50"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <FieldError id="err-type" msg={errors.propertyType} />
            </div>
            <div>
              <label htmlFor="f-location" className="mb-1.5 block text-sm font-medium">
                Missä kohde sijaitsee? *
              </label>
              <input
                id="f-location"
                type="text"
                value={data.location}
                onChange={(e) => set("location", e.target.value)}
                placeholder="Esim. Kallio, Helsinki"
                aria-invalid={!!errors.location}
                aria-describedby={errors.location ? "err-location" : undefined}
                className={fieldCls(errors.location)}
              />
              <FieldError id="err-location" msg={errors.location} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="f-rooms" className="mb-1.5 block text-sm font-medium">
                  Huoneistotyyppi
                </label>
                <input
                  id="f-rooms"
                  type="text"
                  value={data.rooms}
                  onChange={(e) => set("rooms", e.target.value)}
                  placeholder="Esim. 2h+k"
                  className={fieldCls()}
                />
              </div>
              <div>
                <label htmlFor="f-size" className="mb-1.5 block text-sm font-medium">
                  Koko (m²)
                </label>
                <input
                  id="f-size"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={data.size}
                  onChange={(e) => set("size", e.target.value)}
                  placeholder="Esim. 54"
                  className={fieldCls()}
                />
              </div>
            </div>
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="sr-only">Tilanteesi</legend>
          <div className="space-y-5">
            <div>
              <label htmlFor="f-situation" className="mb-1.5 block text-sm font-medium">
                Mikä tilanteesi on?
              </label>
              <div className="grid gap-2" role="radiogroup">
                {[
                  "Harkitsen myyntiä lähikuukausina",
                  "Myynti on ajankohtainen nyt",
                  "Olen jo yrittänyt myydä aiemmin",
                  "Haluan vain tietää kohteeni arvon",
                ].map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={data.situation === t}
                    onClick={() => set("situation", t)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                      data.situation === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-card hover:border-primary/50"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="f-timeline" className="mb-1.5 block text-sm font-medium">
                Aikataulutoive
              </label>
              <select
                id="f-timeline"
                value={data.timeline}
                onChange={(e) => set("timeline", e.target.value)}
                className={fieldCls()}
              >
                <option value="">Valitse…</option>
                <option>Heti / mahdollisimman pian</option>
                <option>1–3 kk sisällä</option>
                <option>3–6 kk sisällä</option>
                <option>Yli 6 kk päästä</option>
                <option>Ei kiirettä / selvittelyvaiheessa</option>
              </select>
            </div>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="sr-only">Lisätiedot</legend>
          <div>
            <label htmlFor="f-message" className="mb-1.5 block text-sm font-medium">
              Kerro vapaasti tilanteestasi tai kohteestasi
            </label>
            <textarea
              id="f-message"
              rows={compact ? 4 : 6}
              value={data.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Esim. kohde on vuokrattuna tällä hetkellä, taloyhtiössä tulossa putkiremontti, asun itse ulkomailla…"
              className={cn(fieldCls(), "resize-y")}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Mitä tarkemmin kerrot, sitä paremmin voin valmistautua arviokäyntiin.
            </p>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend className="sr-only">Yhteystietosi</legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="f-name" className="mb-1.5 block text-sm font-medium">
                Nimi *
              </label>
              <input
                id="f-name"
                type="text"
                autoComplete="name"
                value={data.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
                className={fieldCls(errors.name)}
              />
              <FieldError id="err-name" msg={errors.name} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="f-phone" className="mb-1.5 block text-sm font-medium">
                  Puhelinnumero
                </label>
                <input
                  id="f-phone"
                  type="tel"
                  autoComplete="tel"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  className={fieldCls(errors.phone)}
                />
                <FieldError id="err-phone" msg={errors.phone} />
              </div>
              <div>
                <label htmlFor="f-email" className="mb-1.5 block text-sm font-medium">
                  Sähköpostiosoite
                </label>
                <input
                  id="f-email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  className={fieldCls(errors.email)}
                />
                <FieldError id="err-email" msg={errors.email} />
              </div>
            </div>
            <div>
              <label htmlFor="f-pref" className="mb-1.5 block text-sm font-medium">
                Miten otan sinuun mieluiten yhteyttä?
              </label>
              <select
                id="f-pref"
                value={data.contactPref}
                onChange={(e) => set("contactPref", e.target.value)}
                className={fieldCls()}
              >
                <option value="">Valitse…</option>
                <option>Puhelimella</option>
                <option>Sähköpostilla</option>
                <option>Kummalla tahansa</option>
              </select>
            </div>
            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={data.gdpr}
                  onChange={(e) => set("gdpr", e.target.checked)}
                  aria-invalid={!!errors.gdpr}
                  aria-describedby={errors.gdpr ? "err-gdpr" : undefined}
                  className="mt-1 h-4.5 w-4.5 shrink-0 rounded border-input accent-[hsl(208_66%_12%)]"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Hyväksyn, että tietojani käsitellään yhteydenottopyyntöön vastaamiseksi.{" "}
                  <a href="/tietosuoja" className="link-quiet">
                    Lue tietosuojaseloste
                  </a>
                  . *
                </span>
              </label>
              <FieldError id="err-gdpr" msg={errors.gdpr} />
            </div>
          </div>
        </fieldset>
      )}

      {/* Navigointi */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" onClick={prev} className="btn-secondary !px-5 !py-2.5 text-sm">
            <ChevronLeft className="h-4 w-4" aria-hidden /> Takaisin
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary !px-6 !py-2.5 text-sm">
            Jatka <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <button type="submit" disabled={sending} className="btn-primary !px-6 !py-2.5 text-sm disabled:opacity-60">
            {sending ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Send className="h-4 w-4" aria-hidden />
            )}
            Lähetä arviokäyntipyyntö
          </button>
        )}
      </div>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Lomake avaa sähköpostiohjelmasi valmiilla viestillä. Tietoja ei tallenneta sivustolle.
        Voit myös soittaa suoraan:{" "}
        <a href={site.phoneHref} className="link-quiet font-medium">
          <Phone className="inline h-3 w-3" aria-hidden /> {site.phone}
        </a>{" "}
        tai sähköpostittaa{" "}
        <a href={`mailto:${site.email}`} className="link-quiet font-medium">
          <Mail className="inline h-3 w-3" aria-hidden /> {site.email}
        </a>
        .
      </p>
    </form>
  );
}
