import { Play } from "lucide-react";
import Teaser from "@/components/ui/Teaser";
import { episodes } from "@/lib/data";

export default function EpisodesTeaser() {
  const preview = episodes.slice(0, 3);

  return (
    <Teaser
      theme="dark"
      eyebrow="Les épisodes"
      title="Saison 1 — six voix, six histoires"
      description="Burnout, inclusion, addiction, crunch... des sujets qui touchent le jeu vidéo, traités sans filtre. Filtrez par thématique et trouvez l'épisode qui vous parle."
      href="/episodes"
      ctaLabel="Voir tous les épisodes"
      visual={
        <div className="space-y-3">
          {preview.map((ep) => (
            <div
              key={ep.id}
              className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-splash-gradient text-white">
                <Play size={16} className="ml-0.5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{ep.title}</p>
                <p className="text-xs text-white/45">{ep.categories.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
