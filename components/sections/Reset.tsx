import { GraduationCap, HeartHandshake, Users2 } from "lucide-react";
import Section from "@/components/ui/Section";

const roles = [
  {
    name: "Skillcamp",
    role: "Structure porteuse",
    description: "Porte le projet SPLASH, sa stratégie et sa pérennité.",
  },
  {
    name: "Bemotion",
    role: "Partenaire production",
    description: "Produit le podcast et le plateau : réalisation, tournage, direction artistique vidéo.",
  },
  {
    name: "Reset",
    role: "Caution scientifique & associative",
    description: "Apporte la rigueur scientifique et l'ancrage associatif sur les enjeux santé et inclusion.",
  },
];

const contributions = [
  {
    icon: GraduationCap,
    title: "Contribution scientifique",
    description: "Relecture des sujets, mise en réseau avec des chercheurs et validation des contenus sensibles.",
  },
  {
    icon: HeartHandshake,
    title: "Contribution associative",
    description: "Un réseau d'associations partenaires pour orienter les personnes qui témoignent vers de l'aide concrète.",
  },
  {
    icon: Users2,
    title: "Contribution communautaire",
    description: "Une présence active dans la communauté SPLASH pour accompagner les échanges les plus sensibles.",
  },
];

export default function Reset() {
  return (
    <Section
      id="reset"
      theme="dark"
      eyebrow="Le projet Reset"
      title="Notre caution scientifique et associative"
      description="Reset est l'association partenaire de SPLASH sur les enjeux de santé et d'inclusion dans le jeu vidéo. Sa mission : garantir que chaque contenu produit repose sur des bases solides, humaines et vérifiées."
    >
      <div className="mb-14 flex flex-col gap-3 rounded-xl3 border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-stretch md:gap-0 md:divide-x md:divide-white/10 md:p-0">
        {roles.map((r) => (
          <div key={r.name} className="flex-1 p-6">
            <p className="font-display text-lg font-semibold">{r.name}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-orange-300">{r.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{r.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {contributions.map((c) => (
          <div key={c.title} className="rounded-xl2 border border-white/10 bg-white/[0.03] p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-splash-gradient text-white">
              <c.icon size={18} />
            </span>
            <p className="mt-5 font-display text-base font-semibold">{c.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{c.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
