import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Temoigner from "@/components/sections/Temoigner";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Partagez votre histoire, proposez un sujet, signalez un cas, recommandez un invité, envoyez-nous une initiative ou confiez-vous simplement. Chaque message est lu par l'équipe éditoriale.",
};

export default function TemoignerPage() {
  return (
    <>
      <PageHeader />
      <Temoigner />
    </>
  );
}
