import { FileText } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const chartes = ["Charte inclusion & pratiques", "Charte éditoriale"];

export default function EngagementTeaser() {
  return (
    <Teaser
      theme="light"
      eyebrow="Notre engagement"
      title="Une charte, pas seulement des intentions"
      description="SPLASH s'engage publiquement sur ses pratiques éditoriales et sur les enjeux d'inclusion dans le jeu vidéo. Deux textes encadrent notre travail au quotidien."
      href="/engagement"
      ctaLabel="Lire notre engagement"
      visual={
        <div className="space-y-3">
          {chartes.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-xl2 border border-ink/8 bg-white p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                <FileText size={16} />
              </span>
              <p className="text-sm font-semibold text-ink">{c}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
