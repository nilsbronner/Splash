import { MessageCircle } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const salons = ["Salons santé", "Salons inclusion", "Entraide", "Viewing parties"];

export default function CommunauteTeaser() {
  return (
    <Teaser
      theme="dark"
      eyebrow="La communauté"
      title="Un Discord pour continuer la conversation"
      description="Salons métiers, santé, inclusion, entraide, veille, viewing parties : la communauté SPLASH prolonge le podcast entre deux épisodes."
      href="/communaute"
      ctaLabel="Découvrir la communauté"
      visual={
        <div className="grid grid-cols-2 gap-3">
          {salons.map((s) => (
            <div key={s} className="glass flex items-center gap-2 rounded-xl2 px-4 py-3 text-sm font-medium text-white/80">
              <MessageCircle size={15} className="shrink-0 text-orange-300" /> # {s}
            </div>
          ))}
        </div>
      }
    />
  );
}
