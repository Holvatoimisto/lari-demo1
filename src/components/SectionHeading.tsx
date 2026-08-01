import { cn } from "@/lib/utils";

/** Otsikkolohko — staattinen (ei reveal-animaatiota teksteissä, B-21).
 *  Eyebrow vain kun se kantaa informaatiota (B-17); tummalla pohjalla
 *  micro-label on vaalea neutraali, ei kultaa (B-09/B-25). */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[2.6rem]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-pretty text-base leading-relaxed sm:text-lg", dark ? "text-white/75" : "text-muted-foreground")}>
          {lead}
        </p>
      )}
    </div>
  );
}
