import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import ZoneSplash from "@/components/sections/ZoneSplash";

export const metadata: Metadata = {
  title: "La Zone Splash",
  description:
    "Le segment signature de SPLASH : scandales, bad buzz, débunk et témoignages bruts, toujours avec un objectif pédagogique.",
};

export default function ZoneSplashPage() {
  return (
    <>
      <PageHeader />
      <ZoneSplash />
      <CtaBanner
        title="Vous avez vécu quelque chose de similaire ?"
        description="Signalez un cas ou proposez un sujet pour la Zone Splash — en toute confidentialité si vous le souhaitez."
        primary={{ label: "Signaler un cas", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
