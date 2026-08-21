import Hero from "@/components/sections/Hero";
import CtaBanner from "@/components/ui/CtaBanner";
import LeProjetTeaser from "@/components/teasers/LeProjetTeaser";
import ActualitesTeaser from "@/components/teasers/ActualitesTeaser";
import PodcastTeaser from "@/components/teasers/PodcastTeaser";
import ZoneSplashTeaser from "@/components/teasers/ZoneSplashTeaser";
import EngagementTeaser from "@/components/teasers/EngagementTeaser";
import EpisodesTeaser from "@/components/teasers/EpisodesTeaser";
import RessourcesTeaser from "@/components/teasers/RessourcesTeaser";
import CommunauteTeaser from "@/components/teasers/CommunauteTeaser";
import ResetTeaser from "@/components/teasers/ResetTeaser";
import SoutenirTeaser from "@/components/teasers/SoutenirTeaser";
import PresseTeaser from "@/components/teasers/PresseTeaser";
import FaqTeaser from "@/components/teasers/FaqTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <LeProjetTeaser />
      <ActualitesTeaser />
      <PodcastTeaser />
      <ZoneSplashTeaser />
      <EngagementTeaser />
      <EpisodesTeaser />
      <RessourcesTeaser />
      <CommunauteTeaser />
      <ResetTeaser />
      <SoutenirTeaser />
      <PresseTeaser />
      <FaqTeaser />
      <CtaBanner
        title="Une idée, une histoire, une personne, un sujet à proposer ? Besoin de nous parler ?"
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre notre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
