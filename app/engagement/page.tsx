import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Engagement from "@/components/sections/Engagement";

export const metadata: Metadata = {
  title: "Notre engagement",
  description:
    "SPLASH s'engage publiquement sur ses pratiques éditoriales et sur les enjeux d'inclusion dans le jeu vidéo. Découvrez notre charte.",
};

export default function EngagementPage() {
  return (
    <>
      <PageHeader />
      <Engagement />
    </>
  );
}
