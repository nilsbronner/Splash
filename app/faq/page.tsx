import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur le podcast SPLASH, les témoignages, Discord, les partenariats, la confidentialité et la modération.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader />
      <Faq />
      <CtaBanner
        title="Vous ne trouvez pas votre réponse ?"
        description="Écrivez-nous directement, on vous répond."
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
