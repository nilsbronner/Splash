import { Play } from "lucide-react";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

const triptyque = [
  {
    step: "Vécu",
    title: "Le témoignage",
    description: "Une personne concernée raconte son expérience, sans filtre.",
  },
  {
    step: "Expert",
    title: "Le regard scientifique",
    description: "Un chercheur ou professionnel apporte des clés de compréhension.",
  },
  {
    step: "Facilitation",
    title: "L'animation & l'ouverture",
    description: "L'équipe met en perspective et ouvre vers des pistes concrètes.",
  },
];

const team = [
  { name: "Alx", role: "Animateur principal" },
  { name: "Lucia", role: "Co-animatrice" },
  { name: "Gabin", role: "Recherche & production" },
  { name: "Gabriel", role: "Recherche & production" },
];

export default function Podcast() {
  return (
    <Section
      id="podcast"
      theme="light"
      eyebrow="Le podcast"
      title="Un format en triptyque, pensé pour ouvrir le dialogue"
      description="Chaque épisode croise trois voix : un vécu, un expert, une facilitation. Concrètement : 1 caster, 2 invités, 1 témoignage, 1 débat, 1 ouverture."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl3 bg-splash-gradient">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
              backgroundSize: "28px 28px",
            }}
          />
          <button
            type="button"
            aria-label="Regarder un aperçu du plateau SPLASH"
            className="focus-ring relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-ink shadow-glass transition-transform hover:scale-105"
          >
            <Play size={28} className="ml-1" />
          </button>
          <span className="absolute bottom-6 left-6 rounded-full bg-ink/40 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
            Visuel plateau — Saison 1
          </span>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {triptyque.map((item, i) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-xl2 border border-ink/8 bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                  {item.step}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-8 rounded-xl3 border border-ink/8 bg-white p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <Badge tone="orange">Saison 1 · 6 épisodes</Badge>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
            Une équipe éditoriale portée par Alx à l&apos;animation, entourée de Lucia, Gabin et
            Gabriel, avec l&apos;équipe de production BEMOTION au plateau et au montage.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {team.map((member) => (
            <div key={member.name} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-splash-gradient text-sm font-semibold text-white">
                {member.name.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{member.name}</p>
                <p className="text-xs text-ink/50">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
