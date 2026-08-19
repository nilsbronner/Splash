import Section from "@/components/ui/Section";

const piliers = [
  {
    title: "L'ancrage réel",
    description: "Chaque épisode part d'une situation concrète liée au jeu vidéo.",
  },
  {
    title: "La circulation de la parole",
    description: "Aucune voix ne domine. Le dialogue est organisé, équilibré, médiatisé.",
  },
  {
    title: "Une information de qualité",
    description: "Les experts sont des cautions d'une information vérifiée.",
  },
  {
    title: "La mise en compréhension",
    description: "On ne cherche pas l'opinion, mais la compréhension.",
  },
  {
    title: "L'ouverture",
    description: "Chaque épisode se termine par une perspective, pas une conclusion fermée.",
  },
];

export default function Concept() {
  return (
    <Section id="concept" theme="light" eyebrow="Splash-podcasts" title="L'onde de soin dans le jeu vidéo">
      <div className="mx-auto max-w-2xl space-y-4 text-center text-lg leading-relaxed text-ink/70">
        <p>
          SPLASH s&apos;adresse aux communautés du jeu vidéo, mais aussi, aux jeunes générations en
          général et à la société dans son ensemble.
        </p>
        <p>
          Les podcasts sont fondés sur une exigence pédagogique et sécurisée, un sérieux éditorial,
          un cadre de dialogue structuré.
        </p>
      </div>

      <div className="mt-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-ink/40">
          L&apos;ADN de Splash
        </p>
        <div className="mb-10 h-px w-full bg-ink/10" />
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink/70">
          SPLASH est un format de dialogue structuré ancré dans l&apos;univers du jeu vidéo / esport.
          Son identité repose sur des piliers :
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {piliers.map((pilier) => (
            <div
              key={pilier.title}
              className="rounded-xl2 border border-ink/8 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-base uppercase tracking-tight text-ink">
                {pilier.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{pilier.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
