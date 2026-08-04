import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Conditions générales d'utilisation" };

export default function Cgu() {
  return (
    <LegalPage title="Conditions générales d'utilisation" updated="4 août 2026">
      <p>
        Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et
        l&apos;usage du site SPLASH, de son contenu éditorial et de sa communauté associée
        (Discord).
      </p>

      <h2>Accès au site</h2>
      <p>
        Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à
        Internet. Tous les frais nécessaires à l&apos;accès au site (matériel, connexion, etc.)
        sont à la charge de l&apos;utilisateur.
      </p>

      <h2>Contenus et témoignages</h2>
      <p>
        Aucun témoignage transmis via le site n&apos;est publié sans l&apos;accord explicite de son
        auteur. SPLASH se réserve le droit de ne pas donner suite à une demande de contact ou de
        contribution.
      </p>

      <h2>Communauté Discord</h2>
      <p>
        L&apos;accès à la communauté Discord SPLASH est soumis au respect d&apos;une charte de
        modération, disponible directement sur le serveur. Tout comportement contraire à cette
        charte peut entraîner une exclusion.
      </p>

      <h2>Responsabilité</h2>
      <p>
        SPLASH s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées, sans
        garantir l&apos;absence d&apos;erreurs ou d&apos;interruptions du service.
      </p>
    </LegalPage>
  );
}
