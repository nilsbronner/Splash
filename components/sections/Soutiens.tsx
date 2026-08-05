import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { supporters, type SupportTier } from "@/lib/data";

const columns: { tier: SupportTier; title: string; description: string }[] = [
  {
    tier: "sponsors",
    title: "Sponsors",
    description: "Ils financent le projet.",
  },
  {
    tier: "mecenes",
    title: "Mécènes",
    description: "Ils soutiennent sans objectif commercial.",
  },
  {
    tier: "partenaires",
    title: "Partenaires",
    description: "Ils contribuent techniquement ou humainement.",
  },
];

export default function Soutiens() {
  return (
    <Section
      id="soutiens"
      theme="light"
      eyebrow="Nos soutiens"
      title="Ceux qui rendent SPLASH possible"
      description="Trois formes de soutien, trois niveaux d'engagement — que nous choisissons de rendre visibles distinctement, en toute transparence."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {columns.map((col) => {
          const items = supporters.filter((s) => s.tier === col.tier);
          return (
            <div key={col.tier} className="rounded-xl3 border border-ink/8 bg-white p-7 shadow-sm">
              <h3 className="font-display text-xl font-semibold">{col.title}</h3>
              <p className="mt-1 text-sm text-ink/50">{col.description}</p>

              <div className="mt-6 space-y-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="focus-ring block rounded-xl2 border border-ink/8 p-4 transition-colors hover:border-orange-400/50 hover:bg-orange-50/40"
                    >
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.description}</p>
                    </a>
                  ))
                ) : (
                  <div className="rounded-xl2 border border-dashed border-ink/15 p-6 text-center">
                    <p className="text-sm text-ink/50">
                      Cette place est libre. Soyez les premiers à la rejoindre.
                    </p>
                  </div>
                )}
              </div>

              <Button href="#participer" variant="dark" size="md" className="mt-6 w-full">
                Devenir {col.title.toLowerCase().replace(/s$/, "")}
              </Button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
