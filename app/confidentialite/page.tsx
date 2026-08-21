import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="4 août 2026">
      <p>
        SPLASH accorde une attention particulière à la protection des données personnelles,
        notamment celles transmises via le formulaire « Témoigner ». Cette page décrit les
        traitements réalisés, conformément au Règlement Général sur la Protection des Données
        (RGPD).
      </p>

      <h2>Données collectées</h2>
      <p>
        Selon le mode de participation choisi (anonyme, privée ou publique), nous collectons : nom
        (facultatif), adresse email, contenu du message. Aucune donnée identifiante n&apos;est
        conservée pour les témoignages soumis en mode anonyme.
      </p>

      <h2>Finalités du traitement</h2>
      <ul>
        <li>Traiter les témoignages, propositions de sujets et demandes de contact.</li>
        <li>Préparer et produire les épisodes du podcast, avec accord explicite des témoins.</li>
        <li>Répondre aux demandes presse et de partenariat.</li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Les données sont conservées le temps nécessaire au traitement de votre demande, puis
        supprimées ou anonymisées, sauf obligation légale contraire.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
        d&apos;effacement et d&apos;opposition sur vos données. Pour l&apos;exercer, contactez-nous
        via le formulaire « Témoigner » du site.
      </p>

      <h2>Cookies</h2>
      <p>
        Consultez notre <a href="/cookies" className="underline hover:text-ink">politique de cookies</a>{" "}
        pour en savoir plus sur les traceurs utilisés sur ce site.
      </p>
    </LegalPage>
  );
}
