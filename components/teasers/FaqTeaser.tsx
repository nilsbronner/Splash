import { HelpCircle } from "lucide-react";
import Teaser from "@/components/ui/Teaser";

const topQuestions = [
  "Sur quelles plateformes écouter SPLASH ?",
  "Puis-je témoigner de manière anonyme ?",
  "Le Discord est-il ouvert à tous ?",
];

export default function FaqTeaser() {
  return (
    <Teaser
      theme="light"
      eyebrow="FAQ"
      title="Des questions ? On a les réponses."
      description="Podcast, témoignages, Discord, partenariats, confidentialité, modération : retrouvez toutes les réponses aux questions les plus fréquentes."
      href="/faq"
      ctaLabel="Voir toutes les questions"
      visual={
        <div className="space-y-3">
          {topQuestions.map((q) => (
            <div key={q} className="flex items-center gap-3 rounded-xl2 border border-ink/8 bg-white p-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                <HelpCircle size={15} />
              </span>
              <p className="text-sm font-medium text-ink">{q}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
