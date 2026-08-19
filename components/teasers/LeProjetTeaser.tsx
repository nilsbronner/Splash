import { Radar, MessageSquareText, Compass } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const piliers = [
  { icon: Radar, label: "Ancrage réel" },
  { icon: MessageSquareText, label: "Parole équilibrée" },
  { icon: Compass, label: "Ouverture" },
];

export default function LeProjetTeaser() {
  return (
    <Teaser
      id="decouvrir"
      theme="light"
      eyebrow="Le projet"
      title="Splash, l'onde de soin dans le jeu vidéo"
      description="Splash est un podcast qui s'intéresse à ce qui se joue dans la vraie vie du jeu vidéo et de l'esport. À Splash, on ne cherche pas l'opinion, mais la compréhension."
      href="/le-projet"
      ctaLabel="En savoir plus sur le projet"
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
