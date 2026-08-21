import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "La Charte" };

export default function Charte() {
  return (
    <LegalPage title="La Charte" updated="21 août 2026">
      <p>
        La Charte SPLASH fixe les principes qui encadrent chaque épisode, chaque témoignage et
        chaque échange au sein de la communauté. Elle s&apos;applique à l&apos;équipe éditoriale,
        aux intervenants et à la communauté Discord.
      </p>

      <h2>L&apos;ADN de Splash</h2>
      <ul>
        <li>
          <strong>L&apos;ancrage réel</strong> — chaque épisode part d&apos;une situation concrète
          liée au jeu vidéo.
        </li>
        <li>
          <strong>La circulation de la parole</strong> — aucune voix ne domine ; le dialogue est
          organisé, équilibré, médiatisé.
        </li>
        <li>
          <strong>Une information de qualité</strong> — les experts sont des cautions d&apos;une
          information vérifiée.
        </li>
        <li>
          <strong>La mise en compréhension</strong> — on ne cherche pas l&apos;opinion, mais la
          compréhension.
        </li>
        <li>
          <strong>L&apos;ouverture</strong> — chaque épisode se termine par une perspective, pas une
          conclusion fermée.
        </li>
      </ul>

      <h2>Le triptyque, signature du format</h2>
      <p>
        Chaque épisode réunit une joueuse ou un joueur qui raconte une situation vécue, un regard
        expert qui apporte un éclairage professionnel, et une médiation psychologique qui garantit
        le cadre, clarifie, reformule et relie les points de vue.
      </p>

      <h2>Témoignages et prise de parole</h2>
      <p>
        Aucun témoignage transmis via le formulaire de contact n&apos;est publié sans l&apos;accord
        explicite de son auteur·e, quel que soit le mode de participation choisi (anonyme, privé ou
        public). Les désaccords sont explorés, jamais exploités.
      </p>

      <h2>Modération de la communauté</h2>
      <p>
        La communauté Discord SPLASH applique les mêmes principes : respect, écoute et
        bienveillance. Tout comportement contraire à cette charte peut entraîner un rappel à l&apos;
        ordre ou une exclusion, selon les modalités précisées sur le serveur.
      </p>
    </LegalPage>
  );
}
