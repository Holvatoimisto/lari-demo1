import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { site } from "@/data/site";
import { useSeo } from "@/lib/seo";

export default function NotFoundPage() {
  useSeo({
    title: `Sivua ei löytynyt (404) | ${site.name}`,
    description: "Etsimääsi sivua ei löytynyt. Palaa etusivulle tai ota yhteyttä.",
    path: "/404",
  });

  return (
    <section className="flex min-h-[100svh] items-center bg-[hsl(210_48%_9%)] pt-20 text-white">
      <div className="container-site py-24 text-center">
        <p className="font-display text-7xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Sivua ei löytynyt</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70">
          Etsimäsi sivu on ehkä siirretty tai poistettu. Palaa etusivulle tai ota suoraan yhteyttä.
          autan mielelläni.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(38_44%_61%)] px-7 py-3.5 text-[0.95rem] font-medium text-[hsl(208_70%_8%)] transition-colors hover:bg-[hsl(38_46%_66%)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Etusivulle
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Phone className="h-4 w-4" aria-hidden /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
