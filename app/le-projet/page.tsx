import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Concept from "@/components/sections/Concept";
import Mission from "@/components/sections/Mission";
import Triptyque from "@/components/sections/Triptyque";
import Methode from "@/components/sections/Methode";
import Thematiques from "@/components/sections/Thematiques";
import PourquoiCeNom from "@/components/sections/PourquoiCeNom";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "L'onde de soin dans le jeu vidéo : l'ADN, le triptyque et la méthode SPLASH, un espace de dialogue pour rendre l'univers du jeu vidéo mieux compris et mieux vivable.",
};

export default function LeProjetPage() {
  return (
    <>
      <PageHeader />
      <Concept />
      <Mission />
      <Triptyque />
      <Methode />
      <Thematiques />
      <CtaBanner
        title="SPLASH est un espace de dialogue visant à rendre l'univers du jeu vidéo mieux compris et mieux vivable pour la communauté et au-delà, pour la société."
        primary={{ label: "Voir les Docs", href: "/ressources" }}
      />
      <PourquoiCeNom />
      <CtaBanner
        title="Envie d'aller plus loin ?"
        description="Découvrez le podcast qui donne vie à cette mission, épisode après épisode."
        primary={{ label: "Écouter le podcast", href: "/podcast" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
