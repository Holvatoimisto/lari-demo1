import { site } from "@/data/site";
import { homeFaqs } from "@/data/faqs";
import { useSeo, personSchema, websiteSchema, localBusinessSchema } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/TrustBar";
import MiksiLariSection from "@/components/home/MiksiLariSection";
import ReviewsSection from "@/components/Reviews";
// import SellingApproach from "@/components/home/SellingApproach"; // piilotettu väliaikaisesti
import ServicePaths from "@/components/home/ServicePaths";
import Process from "@/components/home/Process";
import ListingsTeaser from "@/components/home/ListingsTeaser";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

/**
 * Etusivu — 10 osiota auditoidun flow'n mukaan:
 * 1 Hero · 2 Slim trust bar · 3 Miksi Lari? (video-led) · 4 Arvostelut ·
 * 5 Myyntitapa · 6 Palvelupolut · 7 Prosessi · 8 Kohteet-teaser · 9 FAQ · 10 Loppu-CTA.
 * Osiorytmit vaihtelevat (compact/standard/emotional) ja rakenteet rikkovat
 * aiemman eyebrow+H2+kortit-kaavan (B-08).
 */
export default function HomePage() {
  useSeo({
    title: `${site.name} | Asuntojen myynti pääkaupunkiseudulla · ${site.company}`,
    description:
      "Henkilökohtaista ja aktiivista asuntojen myyntiä pääkaupunkiseudulla. Google-arvosana 5,0/5. Välittämisestä välittämistä. Varaa maksuton arviokäynti.",
    path: "/",
    image: "/assets/og-image.jpg",
    jsonLd: [personSchema, websiteSchema, localBusinessSchema],
  });

  return (
    <>
      <Hero />
      <TrustBar />
      <div id="esittelyvideo">
        <MiksiLariSection />
      </div>
      <ReviewsSection />
      {/* "Näin kotisi myynti rakennetaan" -osio piilotettu väliaikaisesti.
          Komponentti säilyy käytössä myyntisivulla (AsunnonMyyntiPage). */}
      {/* <SellingApproach /> */}
      <ServicePaths />
      <Process />
      <ListingsTeaser />
      <FaqSection faqs={homeFaqs} />
      <CtaSection
        variant="full"
        title="Puhutaan kotisi myynnistä"
        text="Kerro tilanteesi. Saat perustellun hinta-arvion ja selkeän ehdotuksen myyntisuunnitelmaksi, ilman sitoumuksia."
      />
    </>
  );
}
