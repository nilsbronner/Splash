import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Reset from "@/components/sections/Reset";

export const metadata: Metadata = {
  title: "Le projet RESET",
  description:
    "RESET est l'association partenaire de SPLASH sur les enjeux de santé et d'inclusion dans le jeu vidéo : notre caution scientifique et associative.",
};

export default function ResetPage() {
  return (
    <>
      <PageHeader />
      <Reset />
      <CtaBanner
        title="Découvrez comment nous soutenir"
        description="Sponsor, mécène, partenaire ou bénévole : il y a une place pour vous dans le projet SPLASH."
        primary={{ label: "Nos soutiens", href: "/soutenir" }}
        secondary={{ label: "Témoigner", href: "/temoigner" }}
      />
    </>
  );
}
