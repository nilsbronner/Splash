import Teaser from "@/components/ui/Teaser";

const roles = [
  { name: "Skillcamp", role: "Structure porteuse" },
  { name: "Bemotion", role: "Partenaire production" },
  { name: "Reset", role: "Caution scientifique" },
];

export default function ResetTeaser() {
  return (
    <Teaser
      theme="light"
      eyebrow="Le projet Reset"
      title="Notre caution scientifique et associative"
      description="Reset est l'association partenaire de SPLASH sur les enjeux de santé et d'inclusion. Sa mission : garantir que chaque contenu repose sur des bases solides, humaines et vérifiées."
      href="/reset"
      ctaLabel="Découvrir Reset"
      reverse
      visual={
        <div className="divide-y divide-ink/8 rounded-xl2 border border-ink/8 bg-white shadow-sm">
          {roles.map((r) => (
            <div key={r.name} className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-semibold text-ink">{r.name}</p>
              <p className="text-xs uppercase tracking-wide text-orange-600">{r.role}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
