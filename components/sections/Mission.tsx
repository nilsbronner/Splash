import { Target, MessagesSquare, BadgeCheck, Lightbulb, DoorOpen } from "lucide-react";
import Section from "@/components/ui/Section";

const piliers = [
  {
    icon: Target,
    title: "L'ancrage réel",
    description: "Chaque épisode part d'une situation concrète liée au jeu vidéo.",
  },
  {
    icon: MessagesSquare,
    title: "La circulation de la parole",
    description: "Aucune voix ne domine. Le dialogue est organisé, équilibré, médiatisé.",
  },
  {
    icon: BadgeCheck,
    title: "Une information de qualité",
    description: "Les experts sont des cautions d'une information vérifiée.",
  },
  {
    icon: Lightbulb,
    title: "La mise en compréhension",
    description: "On ne cherche pas l'opinion, mais la compréhension.",
  },
  {
    icon: DoorOpen,
    title: "L'ouverture",
    description: "Chaque épisode se termine par une perspective, pas une conclusion fermée.",
  },
];

export default function Mission() {
  return (
    <Section
      theme="dark"
      eyebrow="L'ADN de Splash"
      title="Un format de dialogue structuré"
      description="SPLASH est un format de dialogue structuré ancré dans l'univers du jeu vidéo et de l'esport. Son identité repose sur cinq piliers :"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
