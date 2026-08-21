import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Soutiens from "@/components/sections/Soutiens";
import PourquoiSoutenir from "@/components/sections/PourquoiSoutenir";
import Participer from "@/components/sections/Participer";

export const metadata: Metadata = {
  title: "Nous soutenir",
  description:
    "Sponsor, mécène, partenaire ou bénévole : découvrez pourquoi et comment soutenir SPLASH, et toutes les façons de rejoindre le mouvement.",
};

export default function SoutenirPage() {
  return (
    <>
      <PageHeader />
      <Soutiens />
      <PourquoiSoutenir />
      <Participer />
      <CtaBanner
        title="Prêt à nous rejoindre ?"
        description="Un message suffit pour démarrer la conversation, quelle que soit la forme de votre soutien."
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
