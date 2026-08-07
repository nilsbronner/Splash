import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Ressources from "@/components/sections/Ressources";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "La colonne vertébrale du projet SPLASH : une fiche ressource par épisode, avec références scientifiques, associations et dispositifs d'aide.",
};

export default function RessourcesPage() {
  return (
    <>
      <PageHeader />
      <Ressources />
      <CtaBanner
        title="Une association ou une ressource à recommander ?"
        description="Aidez-nous à construire la plus grande base de ressources francophone sur le jeu vidéo."
        primary={{ label: "Recommander une ressource", href: "/temoigner" }}
        secondary={{ label: "Voir les épisodes", href: "/episodes" }}
      />
    </>
  );
}
