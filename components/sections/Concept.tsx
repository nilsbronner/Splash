import Section from "@/components/ui/Section";

const stats = [
  { value: "3,3 md+", label: "joueurs et joueuses dans le monde" },
  { value: "1 sur 3", label: "aurait déjà vécu du harcèlement en ligne" },
  { value: "6", label: "épisodes pour lancer la conversation" },
];

export default function Concept() {
  return (
    <Section
      id="concept"
      theme="light"
      eyebrow="Le concept"
      title="Le jeu vidéo n'est plus seulement un loisir."
      description="C'est un espace de vie : on s'y retrouve, on y travaille, on y crée du lien, on y vit aussi des difficultés. SPLASH est né d'un constat simple — il manquait un espace pour en parler sérieusement, sans jugement, avec celles et ceux qui le vivent et celles et ceux qui l'étudient."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl2 border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-display text-4xl font-bold text-gradient-splash">{stat.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl3 bg-ink p-10 text-white md:p-14">
        <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">
          SPLASH est un média qui rassemble joueurs, professionnels, chercheurs, associations et
          entreprises autour d&apos;un objectif commun :{" "}
          <span className="text-gradient-splash">prendre soin du jeu vidéo.</span>
        </p>
      </div>
    </Section>
  );
}
