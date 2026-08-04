import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Politique de cookies" };

export default function Cookies() {
  return (
    <LegalPage title="Politique de cookies" updated="4 août 2026">
      <p>
        Cette page décrit l&apos;usage des cookies et traceurs sur le site SPLASH.
      </p>

      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier déposé sur votre appareil lors de la visite d&apos;un site,
        permettant de mémoriser certaines informations (préférences, mesure d&apos;audience).
      </p>

      <h2>Cookies utilisés</h2>
      <ul>
        <li>Cookies strictement nécessaires au fonctionnement du site.</li>
        <li>Cookies de mesure d&apos;audience, déposés uniquement avec votre consentement.</li>
      </ul>

      <h2>Gérer vos préférences</h2>
      <p>
        Vous pouvez à tout moment modifier vos préférences ou vous opposer au dépôt de cookies
        depuis les paramètres de votre navigateur.
      </p>
    </LegalPage>
  );
}
