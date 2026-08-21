import Section from "@/components/ui/Section";

export default function Concept() {
  return (
    <Section
      id="concept"
      theme="light"
      eyebrow="Splash-podcasts"
      title="L'onde de soin dans le jeu vidéo"
      description="SPLASH s'adresse aux communautés du jeu vidéo, mais aussi aux jeunes générations en général et à la société dans son ensemble."
    >
      <div className="rounded-xl3 bg-ink p-10 text-white md:p-14">
        <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">
          Les podcasts sont fondés sur une exigence pédagogique et sécurisée, un sérieux éditorial et
          un cadre de dialogue structuré.
        </p>
      </div>
    </Section>
  );
}
