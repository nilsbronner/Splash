import Hero from "@/components/sections/Hero";
import CtaBanner from "@/components/ui/CtaBanner";
import LeProjetTeaser from "@/components/teasers/LeProjetTeaser";
import PodcastTeaser from "@/components/teasers/PodcastTeaser";
import ZoneSplashTeaser from "@/components/teasers/ZoneSplashTeaser";
import EngagementTeaser from "@/components/teasers/EngagementTeaser";
import EpisodesTeaser from "@/components/teasers/EpisodesTeaser";
import ActualitesTeaser from "@/components/teasers/ActualitesTeaser";
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
      <PodcastTeaser />
      <ZoneSplashTeaser />
      <EngagementTeaser />
      <EpisodesTeaser />
      <ActualitesTeaser />
      <RessourcesTeaser />
      <CommunauteTeaser />
      <ResetTeaser />
      <SoutenirTeaser />
      <PresseTeaser />
      <FaqTeaser />
      <CtaBanner
        title="Votre histoire peut aider quelqu'un d'autre"
        description="Partager un vécu, proposer un sujet, signaler un cas ou simplement prendre contact : c'est le bouton le plus important du site."
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/splash", external: true }}
      />
    </>
  );
}
