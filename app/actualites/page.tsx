import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Actualites from "@/components/sections/Actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Toutes les actualités de SPLASH : enregistrements publics, sorties d'épisodes, temps forts et calendrier des sorties de la saison 1.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHeader />
      <Actualites />
      <CtaBanner
        title="Ne manquez aucun rendez-vous"
        description="Rejoignez la communauté SPLASH pour être averti·e des prochains enregistrements et sorties d'épisodes."
        primary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
        secondary={{ label: "Voir les épisodes", href: "/episodes" }}
      />
    </>
  );
}
