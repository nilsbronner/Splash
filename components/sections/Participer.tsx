import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { participerCards } from "@/lib/data";

export default function Participer() {
  return (
    <Section
      id="participer"
      theme="light"
      eyebrow="Participer au projet"
      title="Il y a une place pour vous"
      description="Bénévolat, partenariat, sponsoring, mécénat, expertise, intervention, événement : choisissez votre manière de rejoindre le mouvement."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {participerCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="focus-ring group flex flex-col rounded-xl2 border border-ink/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ink/30 transition-colors group-hover:text-orange-600"
              />
            </div>
            <p className="flex-1 text-sm leading-relaxed text-ink/60">{card.description}</p>
            <span className="mt-5 text-sm font-semibold text-orange-700">{card.cta}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
