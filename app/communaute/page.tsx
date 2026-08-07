import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Communaute from "@/components/sections/Communaute";

export const metadata: Metadata = {
  title: "La communauté",
  description:
    "Un Discord pour continuer la conversation entre deux épisodes : salons métiers, santé, inclusion, entraide, veille et événements SPLASH.",
};

export default function CommunautePage() {
  return (
    <>
      <PageHeader />
      <Communaute />
    </>
  );
}
