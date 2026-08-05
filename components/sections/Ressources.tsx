import { BookMarked, FlaskConical, HeartHandshake, Wrench, Library } from "lucide-react";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

const resourceTypes = [
  { icon: FlaskConical, label: "Références scientifiques" },
  { icon: HeartHandshake, label: "Associations citées" },
  { icon: Library, label: "Dispositifs d'aide" },
  { icon: Wrench, label: "Outils mentionnés" },
  { icon: BookMarked, label: "Lectures & vidéos pour aller plus loin" },
];

export default function Ressources() {
  return (
    <Section
      id="ressources"
      theme="light"
      eyebrow="Ressources"
      title="La colonne vertébrale du projet"
      description="Chaque épisode donne naissance à une fiche ressource complète : résumé, sources, associations, dispositifs d'aide et outils cités. L'ambition : construire la plus grande base de ressources francophone sur la santé, l'inclusion et les enjeux sociaux du jeu vidéo."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {resourceTypes.map((r) => (
            <div
              key={r.label}
              className="flex items-start gap-3 rounded-xl2 border border-ink/8 bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                <r.icon size={18} />
              </span>
              <p className="text-sm font-medium leading-snug text-ink/80">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl3 bg-ink p-8 text-white md:p-10">
          <Badge tone="orange" className="mb-5">
            Disponible dès la V1
          </Badge>
          <p className="font-display text-2xl font-semibold leading-snug">
            Une fiche ressource par épisode, pensée pour joueurs, professionnels, chercheurs et
            institutions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            À terme, cette bibliothèque documentaire deviendra un point de référence francophone :
            études, guides et rapports classés par thématique, associations recommandées et carte
            interactive des acteurs de l&apos;inclusion dans le jeu vidéo.
          </p>
          <p className="mt-5 text-xs uppercase tracking-wide text-white/40">
            Recherche avancée, annuaire des associations et carte interactive — prochaines évolutions
          </p>
        </div>
      </div>
    </Section>
  );
}
