import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Episodes from "@/components/sections/Episodes";

export const metadata: Metadata = {
  title: "Les épisodes",
  description:
    "Saison 1 de SPLASH — un nouvel épisode le premier mercredi de chaque mois. Stéréotypes, addiction, mixité : des sujets qui touchent le jeu vidéo et l'esport.",
};

export default function EpisodesPage() {
  return (
    <>
      <PageHeader />
      <Episodes />
      <CtaBanner
        title="Une idée, une histoire, une personne, un sujet à proposer ? Besoin de nous parler ?"
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre notre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
