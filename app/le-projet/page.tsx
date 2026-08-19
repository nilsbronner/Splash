import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Concept from "@/components/sections/Concept";
import Mission from "@/components/sections/Mission";
import Thematiques from "@/components/sections/Thematiques";
import PourquoiCeNom from "@/components/sections/PourquoiCeNom";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "Splash est un podcast qui s'intéresse à ce qui se joue dans la vraie vie du jeu vidéo et de l'esport. Découvrez l'ADN, le triptyque et la méthode SPLASH.",
};

export default function LeProjetPage() {
  return (
    <>
      <PageHeader />
      <Concept />
      <Mission />
      <Thematiques />
      <PourquoiCeNom />
      <CtaBanner
        title="Envie d'aller plus loin ?"
        description="Découvrez le podcast qui donne vie à cette mission, épisode après épisode."
        primary={{ label: "Écouter le podcast", href: "/podcast" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
