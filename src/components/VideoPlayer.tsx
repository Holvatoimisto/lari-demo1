import { useState } from "react";
import { Play } from "lucide-react";
import { introVideo } from "@/data/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Esittelyvideon facade-soitin — youtube-nocookie latautuu vasta klikkauksella.
 * Ei autoplayta. Selkeästi merkitty, saavutettava toistopainike.
 */
export default function VideoPlayer({ className }: { className?: string }) {
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    trackEvent("video_play", { video: introVideo.youtubeId });
  };

  return (
    <div className={cn("relative overflow-hidden rounded-xl shadow-[0_30px_70px_-28px_rgba(7,21,34,0.5)] ring-1 ring-foreground/10", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${introVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={introVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video w-full"
        />
      ) : (
        <button
          type="button"
          onClick={start}
          aria-label={`Toista esittelyvideo: ${introVideo.title}`}
          className="group relative block w-full"
        >
          <img
            src="/assets/lari-landscape-1280.webp"
            srcSet="/assets/lari-landscape-800.webp 800w, /assets/lari-landscape-1280.webp 1280w, /assets/lari-landscape-1920.webp 1920w"
            sizes="(min-width: 1024px) 56vw, 92vw"
            alt="Lari Saarinen esittelyvideon kansikuvassa"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Kevyt tummennus vain toistopainikkeen alueelle */}
          <span className="absolute inset-0 bg-[hsl(210_48%_9%/0.28)] transition-colors group-hover:bg-[hsl(210_48%_9%/0.35)]" aria-hidden />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3" aria-hidden>
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-1 h-8 w-8 fill-current" />
            </span>
            <span className="rounded-full bg-[hsl(210_48%_9%/0.75)] px-4 py-1.5 text-[0.8rem] font-medium text-white backdrop-blur-sm">
              Toista esittelyvideo · {introVideo.durationDisplay}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
