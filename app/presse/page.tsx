import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Presse from "@/components/sections/Presse";

export const metadata: Metadata = {
  title: "Presse",
  description:
    "Espace presse SPLASH : dossier de présentation, logos, charte graphique, photos, biographies et communiqué de presse.",
};

export default function PressePage() {
  return (
    <>
      <PageHeader />
      <Presse />
    </>
  );
}
