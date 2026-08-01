import { site } from "@/data/site";

/**
 * Slim trust bar — yksi kompakti vaakarivi heti heron jälkeen.
 * Ei kortteja, ei varjoja, ei animaatiota (B-21). Google-arvosana näytetään
 * vain herossa (trust-dedup); tässä kolme muuta vahvinta todistetta.
 */
export default function TrustBar() {
  const items = [
    { strong: `${site.experienceYears} vuotta`, rest: "kokemusta asuntojen myynnistä" },
    { strong: site.qualification, rest: "alan ammattitutkinto" },
    { strong: "FI / EN", rest: site.englishNote },
  ];
  return (
    <section aria-label="Luottamustodisteet" className="border-b border-border bg-card">
      <div className="container-site">
        <ul className="flex flex-col divide-y divide-border sm:flex-row sm:items-stretch sm:divide-x sm:divide-y-0">
          {items.map((it) => (
            <li
              key={it.strong}
              className="flex flex-1 items-baseline justify-center gap-2 py-4 text-center sm:py-5"
            >
              <span className="font-display text-lg font-bold text-foreground">{it.strong}</span>
              <span className="text-xs text-muted-foreground sm:text-[0.8rem]">{it.rest}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
