import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Episodes from "@/components/sections/Episodes";

export const metadata: Metadata = {
  title: "Les épisodes",
  description:
    "Saison 1 — six voix, six histoires. Filtrez les épisodes SPLASH par thématique : santé, inclusion, esport, handicap, diversité, RSE, recherche, management.",
};

export default function EpisodesPage() {
  return (
    <>
      <PageHeader />
      <Episodes />
      <CtaBanner
        title="Vous avez une histoire à raconter ?"
        description="Chaque épisode part d'un témoignage. Le vôtre pourrait être le prochain."
        primary={{ label: "Témoigner", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
