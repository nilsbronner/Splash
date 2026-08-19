import { Gamepad2, Stethoscope, HeartHandshake } from "lucide-react";
import Section from "@/components/ui/Section";

const triptyque = [
  {
    icon: Gamepad2,
    title: "Une joueuse ou un joueur",
    description: "Une situation réelle racontée.",
  },
  {
    icon: Stethoscope,
    title: "Un regard expert",
    description: "Éclairage professionnel spécifique à la thématique.",
  },
  {
    icon: HeartHandshake,
    title: "Une médiation psychologique",
    description: "Alexandre, un repère, garant du cadre, aidant à clarifier, reformuler, relier.",
  },
];

const methode = [
  {
    title: "Partir du vécu",
    description: "L'expérience. Pas de théorie, ni de polémique.",
  },
  {
    title: "Structurer le dialogue",
    description:
      "Les prises de parole sont guidées. Les relances visent la compréhension. Les désaccords sont explorés, pas exploités.",
  },
  {
    title: "Transformer l'échange en ressource",
    description:
      "Chaque épisode doit permettre : d'identifier des mécanismes, de nuancer des idées reçues, d'ouvrir des pistes d'équilibre.",
  },
];

export default function Mission() {
  return (
    <Section
      theme="dark"
      eyebrow="Le triptyque SPLASH"
      title="Chaque épisode repose sur un triptyque"
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {triptyque.map((item, i) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-xl3 border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-orange-400/40 hover:bg-white/[0.06]"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-splash-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
            />
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-splash-gradient text-white">
              <item.icon size={22} />
            </span>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
              0{i + 1}
            </p>
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-white/50">
        Ce triptyque est constant. Il constitue la signature du format.
      </p>

      <div className="mt-24">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-white/40">
          La méthode SPLASH
        </p>
        <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-white/60">
          La méthode repose sur trois principes opérationnels :
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {methode.map((item, i) => (
            <div key={item.title} className="rounded-xl2 border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
                {i + 1}.
              </p>
              <h3 className="font-display text-base uppercase tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
