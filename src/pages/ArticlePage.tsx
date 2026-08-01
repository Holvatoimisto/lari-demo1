import { useParams, Link, Navigate } from "react-router-dom";
import { CalendarDays, History, ArrowLeft, ArrowRight } from "lucide-react";
import { getArticle, articles } from "@/data/articles";
import { useSeo, personSchema } from "@/lib/seo";
import { site } from "@/data/site";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <Navigate to="/oppaat" replace />;
  return <ArticleContent article={article} />;
}

function ArticleContent({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  useSeo({
    title: `${article.title} | ${site.name}`,
    description: article.excerpt,
    path: `/oppaat/${article.slug}`,
    jsonLd: [
      personSchema,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Person", name: site.name, url: site.domain },
        publisher: { "@type": "Person", name: site.name },
        inLanguage: "fi",
        description: article.excerpt,
      },
    ],
  });

  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        crumbs={[
          { label: "Etusivu", to: "/" },
          { label: "Oppaat", to: "/oppaat" },
          { label: article.title },
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden /> Julkaistu {article.dateDisplay}
          </span>
          <span>Kirjoittaja: {site.name}</span>
        </div>
      </PageHero>

      <article className="section-pad !pt-14">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            {article.historical && (
              <div className="mb-10 flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-5 text-sm leading-relaxed text-foreground/80">
                  <History className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                  <p>
                    Tämä on historiallinen katsaus ajankohdasta {article.dateDisplay}. Artikkelin luvut ja
                    markkinatilanne kuvaavat tuota ajankohtaa, eivät nykypäivää. Ajantasaisen arvion saat{" "}
                    <Link to="/ota-yhteytta" className="link-quiet font-medium">
                      ottamalla yhteyttä
                    </Link>
                    .
                  </p>
                </div>
            )}
            <p className="lead !text-xl">{article.excerpt}</p>
            <div className="mt-10 space-y-10">
              {article.body.map((section, i) => (
                <section key={i}>
                    {section.heading && (
                      <h2 className="font-display text-2xl font-bold leading-snug">{section.heading}</h2>
                    )}
                    <div className={`space-y-4 ${section.heading ? "mt-4" : ""}`}>
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-pretty leading-relaxed text-foreground/85">
                          {p}
                        </p>
                      ))}
                    </div>
                </section>
              ))}
            </div>

            {/* Kirjoittajan kortti */}
            <div className="mt-14 flex items-center gap-5 rounded-xl border border-border bg-secondary/50 p-6">
                <img
                  src="/assets/lari-portrait-700.webp"
                  alt="Lari Saarinen"
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-lg font-bold">{site.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {site.title}, {site.qualification} · {site.company}
                  </p>
                  <Link to="/minusta" className="link-quiet mt-1 inline-block text-sm font-medium">
                    Tutustu minuun
                  </Link>
                </div>
              </div>

            {/* Sivutus */}
            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              <Link to="/oppaat" className="btn-secondary !px-5 !py-2.5 text-sm">
                <ArrowLeft className="h-4 w-4" aria-hidden /> Kaikki oppaat
              </Link>
              <Link to={`/oppaat/${next.slug}`} className="group inline-flex items-center gap-2 text-sm font-medium text-primary">
                Lue seuraava: {next.title.length > 34 ? next.title.slice(0, 34) + "…" : next.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
