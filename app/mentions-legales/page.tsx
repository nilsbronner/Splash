import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="4 août 2026">
      <p>
        Le site SPLASH est édité par Skillcamp, structure porteuse du projet, en partenariat avec
        BEMOTION (production audiovisuelle) et RESET (caution scientifique et associative).
      </p>

      <h2>Éditeur du site</h2>
      <p>
        Skillcamp — [Forme juridique, capital social]
        <br />
        Siège social : [Adresse à compléter]
        <br />
        SIREN : [Numéro à compléter]
        <br />
        Directeur de la publication : [Nom à compléter]
        <br />
        Contact : via le formulaire « Témoigner » du site.
      </p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par [Nom de l&apos;hébergeur, adresse à compléter].</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo, identité sonore)
        est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est soumise à
        autorisation préalable de SPLASH.
      </p>

      <h2>Partenaires du projet</h2>
      <ul>
        <li>Skillcamp — structure porteuse</li>
        <li>BEMOTION — partenaire production audiovisuelle</li>
        <li>RESET — association partenaire, caution scientifique et associative</li>
      </ul>
    </LegalPage>
  );
}
