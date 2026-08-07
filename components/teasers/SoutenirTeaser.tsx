import { Handshake, Gift, Users, Wallet } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const ways = [
  { icon: Wallet, label: "Sponsor" },
  { icon: Gift, label: "Mécène" },
  { icon: Handshake, label: "Partenaire" },
  { icon: Users, label: "Bénévole" },
];

export default function SoutenirTeaser() {
  return (
    <Teaser
      theme="dark"
      eyebrow="Nous soutenir"
      title="Ce n'est pas financer un podcast. C'est financer un mouvement."
      description="Sponsor, mécène, partenaire technique ou bénévole : chaque forme de soutien a sa place, et est rendue visible distinctement, en toute transparence."
      href="/soutenir"
      ctaLabel="Découvrir comment nous soutenir"
      visual={
        <div className="grid grid-cols-2 gap-3">
          {ways.map((w) => (
            <div key={w.label} className="glass flex flex-col items-center gap-3 rounded-xl2 p-6 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                <w.icon size={18} />
              </span>
              <p className="font-display text-sm uppercase tracking-tight">{w.label}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
