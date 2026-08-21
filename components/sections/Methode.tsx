import Section from "@/components/ui/Section";

const principes = [
  {
    title: "1. Partir du vécu",
    description: "L'expérience. Pas de théorie, ni de polémique.",
  },
  {
    title: "2. Structurer le dialogue",
    description:
      "Les prises de parole sont guidées. Les relances visent la compréhension. Les désaccords sont explorés, pas exploités.",
  },
  {
    title: "3. Transformer l'échange en ressource",
    description: "Chaque épisode doit permettre :",
    bullets: [
      "d'identifier des mécanismes",
      "de nuancer des idées reçues",
      "d'ouvrir des pistes d'équilibre",
    ],
  },
];

export default function Methode() {
  return (
    <Section
      theme="dark"
      eyebrow="La méthode SPLASH"
      title="Trois principes opérationnels"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {principes.map((p) => (
          <div key={p.title} className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8">
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{p.description}</p>
            {p.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
