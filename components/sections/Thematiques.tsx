import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const thematiques = [
  "Santé physique et mentale",
  "Vie sociale et amoureuse",
  "Violence & jeu vidéo",
  "« Relation » avec l'IA",
  "Mixité homme / femme",
  "Handicap, inclusion",
  "Responsabilité citoyenne et écologique",
  "Vie professionnelle",
  "Les métiers du numérique",
  "Les arts et la culture",
  "L'écologie numérique",
];

export default function Thematiques() {
  return (
    <Section theme="light" eyebrow="Les thématiques Splash" title="Un dossier documenté par épisode">
      <div className="flex flex-wrap gap-2.5">
        {thematiques.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-16 rounded-xl3 bg-ink p-10 text-white md:p-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-300">
          Au terme de chaque épisode, un dossier documenté est téléchargeable
        </p>
        <p className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug md:text-3xl">
          SPLASH est un espace de dialogue visant à rendre l&apos;univers du jeu vidéo{" "}
          <span className="text-gradient-splash">mieux compris et mieux vivable</span> pour la
          communauté et au-delà, pour la société.
        </p>
        <Button href="/ressources" variant="outlineLight" size="lg" className="mt-8">
          Voir les Docs
        </Button>
      </div>
    </Section>
  );
}
