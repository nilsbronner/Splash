import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Actualites from "@/components/sections/Actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Les dernières nouvelles de SPLASH : enregistrements publics, sorties d'épisodes, temps forts et prochains rendez-vous.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHeader />
      <Actualites />
      <CtaBanner
        title="Une idée, une histoire, une personne, un sujet à proposer ? Besoin de nous parler ?"
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre notre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
