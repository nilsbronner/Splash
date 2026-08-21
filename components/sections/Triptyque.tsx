import { Gamepad2, GraduationCap, HeartHandshake } from "lucide-react";
import Section from "@/components/ui/Section";

const triptyque = [
  {
    icon: Gamepad2,
    title: "Une joueuse ou un joueur",
    description: "Une situation réelle racontée.",
  },
  {
    icon: GraduationCap,
    title: "Un regard expert",
    description: "Éclairage professionnel spécifique à la thématique.",
  },
  {
    icon: HeartHandshake,
    title: "Une médiation psychologique",
    description: "Alexandre, un repère, garant du cadre, aidant à clarifier, reformuler, relier.",
  },
];

export default function Triptyque() {
  return (
    <Section
      theme="light"
      eyebrow="Le triptyque SPLASH"
      title="Chaque épisode repose sur un triptyque"
      description="Ce triptyque est constant. Il constitue la signature du format."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {triptyque.map((t) => (
          <div
            key={t.title}
            className="rounded-xl2 border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-700">
              <t.icon size={20} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{t.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
