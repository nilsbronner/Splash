import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Conditions générales de vente" };

export default function Cgv() {
  return (
    <LegalPage title="Conditions générales de vente" updated="4 août 2026">
      <p>
        Ces conditions générales de vente (CGV) s&apos;appliquent aux prestations proposées par
        SPLASH dans le cadre de partenariats, sponsorings ou interventions payantes (participation
        à un épisode, intervention événementielle, etc.).
      </p>

      <h2>Prestations concernées</h2>
      <p>
        Les prestations, leurs tarifs et modalités sont définis au cas par cas dans un devis ou un
        contrat signé entre SPLASH et le partenaire concerné.
      </p>

      <h2>Modalités de paiement</h2>
      <p>
        Les conditions de paiement (acompte, échéancier, mode de règlement) sont précisées dans
        chaque contrat de partenariat.
      </p>

      <h2>Annulation</h2>
      <p>
        Les conditions d&apos;annulation ou de report sont définies contractuellement selon la
        nature de la prestation.
      </p>

      <p className="text-ink/50">
        Pour toute question relative à une prestation en cours de discussion, contactez
        directement l&apos;équipe SPLASH via le formulaire « Témoigner ».
      </p>
    </LegalPage>
  );
}
