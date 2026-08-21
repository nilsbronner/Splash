import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Podcast from "@/components/sections/Podcast";

export const metadata: Metadata = {
  title: "Le podcast",
  description:
    "Un format en triptyque, pensé pour ouvrir le dialogue : un vécu, un expert, une facilitation. Découvrez l'équipe et la saison 1 de SPLASH.",
};

export default function PodcastPage() {
  return (
    <>
      <PageHeader />
      <Podcast />
      <CtaBanner
        title="Découvrez les épisodes"
        description="Six voix, six histoires : trouvez l'épisode qui vous parle et filtrez par thématique."
        primary={{ label: "Voir tous les épisodes", href: "/episodes" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
