import Section from "@/components/ui/Section";

const thematiques = [
  "Santé physique et mentale",
  "Vie sociale et amoureuse",
  "Violence & jeu vidéo",
  "« Relation » avec l'IA",
  "Mixité homme/femme",
  "Handicap, inclusion",
  "Responsabilité citoyenne et écologique",
  "Vie professionnelle",
  "Les métiers du numérique",
  "Les arts et la culture",
  "L'écologie numérique",
];

export default function Thematiques() {
  return (
    <Section
      theme="light"
      eyebrow="Les thématiques Splash"
      title="Au terme de chaque épisode, un dossier documenté est téléchargeable"
    >
      <div className="flex flex-wrap gap-3">
        {thematiques.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>
  );
}
