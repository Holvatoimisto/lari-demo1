import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export type Crumb = { label: string; to?: string };

/** Sisäsivujen yhtenäinen hero — tumma navy, murupolku, eyebrow, otsikko, ingressi. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[hsl(210_48%_9%)] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
      <div className="container-site relative">
        <nav aria-label="Murupolku" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/55">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white/80">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Reveal>
          {eyebrow && <p className="eyebrow-dark">{eyebrow}</p>}
          <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{lead}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
