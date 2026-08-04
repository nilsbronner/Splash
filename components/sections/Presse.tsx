import { Download, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { pressAssets } from "@/lib/data";

export default function Presse() {
  return (
    <Section
      id="presse"
      theme="dark"
      eyebrow="Presse"
      title="Espace presse"
      description="Retrouvez ici l'ensemble des ressources presse liées au lancement de SPLASH. Le kit complet est en cours de finalisation — contactez-nous en attendant pour tout besoin urgent."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pressAssets.map((asset) => (
          <div
            key={asset.label}
            className="flex items-start justify-between gap-4 rounded-xl2 border border-white/10 bg-white/[0.03] p-5"
          >
            <div>
              <p className="text-sm font-semibold text-white/90">{asset.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{asset.description}</p>
              <span className="mt-3 inline-block rounded-full bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/50">
                Bientôt disponible
              </span>
            </div>
            <Download size={18} className="mt-1 shrink-0 text-white/25" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-xl2 border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/60">
          Une question presse, une demande d&apos;interview ou un partenariat média ?
        </p>
        <Button href="#temoigner" variant="secondary">
          <Mail size={16} /> Contacter l&apos;équipe presse
        </Button>
      </div>
    </Section>
  );
}
