import { Check } from "lucide-react";
import Section from "@/components/ui/Section";

const items = [
  "Une meilleure culture du jeu vidéo",
  "Des ressources gratuites et accessibles à tous",
  "Des espaces de discussion sûrs",
  "Des événements communautaires",
  "De la prévention concrète",
  "De la recherche sur les enjeux du secteur",
  "Une meilleure représentation pour tous les publics",
];

export default function PourquoiSoutenir() {
  return (
    <Section theme="dark" eyebrow="Pourquoi nous soutenir ?" align="center">
      <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-lg leading-relaxed text-white/65">
        Soutenir SPLASH, ce n&apos;est pas financer un podcast. C&apos;est contribuer à :
      </p>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-xl2 bg-white/[0.04] p-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-heal-splash">
              <Check size={14} className="text-white" />
            </span>
            <p className="text-sm font-medium text-white/85">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
