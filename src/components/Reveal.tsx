import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Hillitty scroll-reveal. Kunnioittaa prefers-reduced-motion.
 *  Kaksoisvarmistus (IO + scroll-kuuntelija + mount-tarkistus):
 *  mikään sisältö ei koskaan jää ikuisesti piiloon. */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => {
      el.classList.add("is-visible");
      window.removeEventListener("scroll", onScroll);
    };
    const inView = () => {
      // Näytä kun elementin yläreuna on näkymäalueen alaosan yläpuolella —
      // kattaa myös jo ohi scrollatut elementit (esim. ankkurilinkit, scroll-palautus).
      return el.getBoundingClientRect().top < window.innerHeight * 0.96;
    };
    const onScroll = () => {
      if (inView()) show();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    if (inView()) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 6% 0px" }
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
