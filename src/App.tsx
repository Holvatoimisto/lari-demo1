import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import { articles } from "@/data/articles";

// Muiden sivujen lazy-lataus — etusivu latautuu kevyesti ensin
const AsunnonMyyntiPage = lazy(() => import("@/pages/AsunnonMyyntiPage"));
const PalvelutPage = lazy(() => import("@/pages/PalvelutPage"));
const OstotoimeksiantoPage = lazy(() => import("@/pages/OstotoimeksiantoPage"));
const VuokrauspalveluPage = lazy(() => import("@/pages/VuokrauspalveluPage"));
const MinustaPage = lazy(() => import("@/pages/MinustaPage"));
const KohteetPage = lazy(() => import("@/pages/KohteetPage"));
const AsiakaspalautteetPage = lazy(() => import("@/pages/AsiakaspalautteetPage"));
const ToimintaAlueetPage = lazy(() => import("@/pages/ToimintaAlueetPage"));
const OppaatPage = lazy(() => import("@/pages/OppaatPage"));
const ArticlePage = lazy(() => import("@/pages/ArticlePage"));
const OtaYhteyttaPage = lazy(() => import("@/pages/OtaYhteyttaPage"));
const TietosuojaPage = lazy(() => import("@/pages/TietosuojaPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-label="Ladataan sivua">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

/** Vanha WP-blogin juuritason slug → /oppaat/:slug; tuntematon → 404 */
function LegacyBlogRedirect() {
  const { slug } = useParams();
  const hit = articles.find((a) => a.slug === slug);
  if (hit) return <Navigate to={`/oppaat/${hit.slug}`} replace />;
  return (
    <Suspense fallback={<PageLoader />}>
      <NotFoundPage />
    </Suspense>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="asunnon-myynti"
          element={<Suspense fallback={<PageLoader />}><AsunnonMyyntiPage /></Suspense>}
        />
        <Route path="palvelut" element={<Suspense fallback={<PageLoader />}><PalvelutPage /></Suspense>} />
        <Route
          path="ostotoimeksianto"
          element={<Suspense fallback={<PageLoader />}><OstotoimeksiantoPage /></Suspense>}
        />
        <Route
          path="vuokrauspalvelu"
          element={<Suspense fallback={<PageLoader />}><VuokrauspalveluPage /></Suspense>}
        />
        <Route path="minusta" element={<Suspense fallback={<PageLoader />}><MinustaPage /></Suspense>} />
        <Route path="kohteet" element={<Suspense fallback={<PageLoader />}><KohteetPage /></Suspense>} />
        <Route
          path="asiakaspalautteet"
          element={<Suspense fallback={<PageLoader />}><AsiakaspalautteetPage /></Suspense>}
        />
        <Route
          path="toiminta-alueet"
          element={<Suspense fallback={<PageLoader />}><ToimintaAlueetPage /></Suspense>}
        />
        <Route path="oppaat" element={<Suspense fallback={<PageLoader />}><OppaatPage /></Suspense>} />
        <Route path="oppaat/:slug" element={<Suspense fallback={<PageLoader />}><ArticlePage /></Suspense>} />
        <Route path="ota-yhteytta" element={<Suspense fallback={<PageLoader />}><OtaYhteyttaPage /></Suspense>} />
        <Route path="tietosuoja" element={<Suspense fallback={<PageLoader />}><TietosuojaPage /></Suspense>} />

        {/* Vanhat WordPress-URL:t (ks. docs/redirect-map.md) */}
        <Route path="esittely" element={<Navigate to="/minusta" replace />} />
        <Route path="palveluni" element={<Navigate to="/palvelut" replace />} />
        <Route path="evasteet" element={<Navigate to="/tietosuoja" replace />} />
        <Route path="category/blogi" element={<Navigate to="/oppaat" replace />} />
        <Route path="category/blogi/" element={<Navigate to="/oppaat" replace />} />
        <Route path="paras-parsarisotto-on-tekijansa-nakoinen" element={<Navigate to="/oppaat" replace />} />
        <Route path="korona-aika-kysyntaa-enemman-kuin-tarjontaa" element={<Navigate to="/oppaat" replace />} />
        <Route path=":slug" element={<LegacyBlogRedirect />} />

        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense>} />
      </Route>
    </Routes>
  );
}
