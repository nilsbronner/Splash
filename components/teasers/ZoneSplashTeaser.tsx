import { Zap, ShieldAlert, Search, MessageSquareQuote } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const items = [
  { icon: ShieldAlert, label: "Scandales" },
  { icon: Zap, label: "Bad buzz" },
  { icon: Search, label: "Débunk" },
  { icon: MessageSquareQuote, label: "Témoignages" },
];

export default function ZoneSplashTeaser() {
  return (
    <Teaser
      theme="dark"
      eyebrow="Segment signature"
      title="La Zone Splash"
      description="Le segment qui n'a pas peur de nommer les choses — toujours avec un seul objectif : comprendre pour mieux agir, jamais pour faire du sensationnalisme."
      href="/zone-splash"
      ctaLabel="Explorer la Zone Splash"
      reverse
      visual={
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div key={item.label} className="glass flex flex-col items-start gap-3 rounded-xl2 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
                <item.icon size={16} />
              </span>
              <p className="font-display text-sm uppercase tracking-tight">{item.label}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
