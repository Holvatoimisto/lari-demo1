import { Youtube } from "lucide-react";
import { introVideo } from "@/data/site";
import Reveal from "./Reveal";
import VideoPlayer from "./VideoPlayer";

/**
 * Esittelyvideo sisäsivuilla (Minusta) — facade + käyttäjän käynnistämä toisto.
 * Etusivun vastaava osio on components/home/MiksiLariSection.tsx.
 */
export default function VideoSection() {
  return (
    <section className="section-standard bg-secondary/40" aria-labelledby="video-otsikko">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <p className="eyebrow">Esittelyvideo</p>
          <h2
            id="video-otsikko"
            className="mt-3 text-balance font-display text-3xl font-bold leading-[1.15] sm:text-4xl"
          >
            Miten myyntisi etenee kanssani, 53 sekunnissa
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Katso lyhyt esittelyvideoni. Kerron siinä, miten hoidan myyntisi ja miten
            sinut pidetään ajan tasalla.
          </p>
          <details className="group mt-6 max-w-xl">
            <summary className="link-quiet cursor-pointer list-none text-sm font-medium marker:content-none">
              Lue videon sisältö tekstinä
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {introVideo.transcript}
            </p>
          </details>
          <p className="mt-5">
            <a
              href={introVideo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Youtube className="h-4 w-4" aria-hidden /> Katso YouTubessa
            </a>
          </p>
        </div>

        <Reveal>
          <VideoPlayer />
        </Reveal>
      </div>
    </section>
  );
}
