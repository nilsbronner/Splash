import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Mission from "@/components/sections/Mission";
import Podcast from "@/components/sections/Podcast";
import ZoneSplash from "@/components/sections/ZoneSplash";
import Engagement from "@/components/sections/Engagement";
import Episodes from "@/components/sections/Episodes";
import Ressources from "@/components/sections/Ressources";
import Communaute from "@/components/sections/Communaute";
import Temoigner from "@/components/sections/Temoigner";
import Reset from "@/components/sections/Reset";
import Soutiens from "@/components/sections/Soutiens";
import PourquoiSoutenir from "@/components/sections/PourquoiSoutenir";
import Participer from "@/components/sections/Participer";
import Presse from "@/components/sections/Presse";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <Mission />
      <Podcast />
      <ZoneSplash />
      <Engagement />
      <Episodes />
      <Ressources />
      <Communaute />
      <Temoigner />
      <Reset />
      <Soutiens />
      <PourquoiSoutenir />
      <Participer />
      <Presse />
      <Faq />
    </>
  );
}
