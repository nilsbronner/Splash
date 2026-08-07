import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Temoigner from "@/components/sections/Temoigner";

export const metadata: Metadata = {
  title: "Témoigner",
  description:
    "Partagez votre histoire, proposez un sujet, signalez un cas, recommandez un invité ou envoyez-nous une initiative. Chaque message est lu par l'équipe éditoriale.",
};

export default function TemoignerPage() {
  return (
    <>
      <PageHeader />
      <Temoigner />
    </>
  );
}
