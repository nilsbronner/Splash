import { BookOpen, Users, Sparkles } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const piliers = [
  { icon: BookOpen, label: "Comprendre" },
  { icon: Users, label: "Relier" },
  { icon: Sparkles, label: "Agir" },
];

export default function LeProjetTeaser() {
  return (
    <Teaser
      id="decouvrir"
      theme="light"
      eyebrow="Le projet"
      title="Le jeu vidéo n'est plus seulement un loisir."
      description="C'est un espace de vie où l'on vit aussi des difficultés. SPLASH rassemble joueurs, professionnels, chercheurs et entreprises autour d'un objectif commun : prendre soin du jeu vidéo."
      href="/le-projet"
      ctaLabel="Découvrir le projet"
      visual={
        <div className="grid grid-cols-3 gap-3">
          {piliers.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-3 rounded-xl2 border border-ink/8 bg-white p-6 text-center shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-splash-gradient text-white">
                <p.icon size={18} />
              </span>
              <p className="font-display text-sm uppercase tracking-tight">{p.label}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
