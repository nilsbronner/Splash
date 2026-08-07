import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Concept from "@/components/sections/Concept";
import Mission from "@/components/sections/Mission";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "Le jeu vidéo n'est plus seulement un loisir. Découvrez pourquoi SPLASH existe et sa mission en trois piliers : comprendre, relier, agir.",
};

export default function LeProjetPage() {
  return (
    <>
      <PageHeader />
      <Concept />
      <Mission />
      <CtaBanner
        title="Envie d'aller plus loin ?"
        description="Découvrez le podcast qui donne vie à cette mission, épisode après épisode."
        primary={{ label: "Écouter le podcast", href: "/podcast" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
