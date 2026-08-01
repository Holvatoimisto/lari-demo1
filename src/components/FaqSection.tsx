import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/faqs";
import SectionHeading from "./SectionHeading";

export default function FaqSection({
  faqs,
  eyebrow,
  title = "Vastaukset yleisimpiin kysymyksiin",
  lead,
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="section-standard" aria-labelledby="faq-otsikko">
      <div className="container-site">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <Accordion type="single" collapsible className="mx-auto mt-12 max-w-[42.5rem]">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-sans text-lg font-medium hover:no-underline [&[data-state=open]]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
