import Image from "next/image";
import { Play } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

export default function PodcastTeaser() {
  return (
    <Teaser
      theme="dark"
      eyebrow="Le podcast"
      title="Un format en triptyque, pensé pour ouvrir le dialogue"
      description="Un vécu, un expert, une facilitation : chaque épisode croise trois voix pour transformer un sujet difficile en conversation utile."
      href="/podcast"
      ctaLabel="Découvrir le format"
      visual={
        <div className="relative aspect-video overflow-hidden rounded-xl3">
          <Image
            src="/photos/plateau-equipe.jpg"
            alt="L'équipe SPLASH en tournage"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-ink shadow-glass">
              <Play size={22} className="ml-0.5" />
            </span>
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-ink/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Saison 1 · 6 épisodes
          </span>
        </div>
      }
    />
  );
}
