import { BookOpen, Users, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";

const piliers = [
  {
    icon: BookOpen,
    title: "Comprendre",
    description:
      "Donner des clés de lecture claires sur les enjeux de santé, d'inclusion et de société qui traversent le jeu vidéo aujourd'hui.",
  },
  {
    icon: Users,
    title: "Relier",
    description:
      "Créer des échanges entre joueurs, professionnels, chercheurs, associations et entreprises qui, trop souvent, ne se parlent pas.",
  },
  {
    icon: Sparkles,
    title: "Agir",
    description:
      "Valoriser les solutions qui existent déjà : dispositifs d'aide, initiatives associatives, bonnes pratiques en entreprise.",
  },
];

export default function Mission() {
  return (
    <Section
      theme="dark"
      eyebrow="Notre mission"
      title="Trois piliers, un même cap"
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {piliers.map((pilier, i) => (
          <div
            key={pilier.title}
            className="group relative overflow-hidden rounded-xl3 border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.06]"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-splash-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
            />
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-splash-gradient text-white">
              <pilier.icon size={22} />
            </span>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
              0{i + 1}
            </p>
            <h3 className="font-display text-xl font-semibold">{pilier.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{pilier.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
