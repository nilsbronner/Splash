"use client";

import { useState } from "react";
import { CheckCircle2, FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Engagement() {
  const [signed, setSigned] = useState(false);

  return (
    <Section
      theme="light"
      eyebrow="Notre engagement"
      title="Une charte, pas seulement des intentions"
      description="SPLASH s'engage publiquement sur ses pratiques éditoriales et sur les enjeux d'inclusion dans le jeu vidéo. Deux textes encadrent notre travail au quotidien."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl3 border border-ink/8 bg-white p-8 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-700">
            <FileText size={20} />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">
            Charte inclusion &amp; pratiques dans le jeu vidéo
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            Nos engagements concrets pour un jeu vidéo plus inclusif : représentation, accessibilité,
            prévention des violences en ligne et soutien aux publics vulnérables.
          </p>
          <Button href="#" variant="dark" size="md" className="mt-6">
            Lire la charte
          </Button>
        </div>

        <div className="rounded-xl3 border border-ink/8 bg-white p-8 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-violet-700">
            <FileText size={20} />
          </span>
          <h3 className="mt-5 font-display text-xl font-semibold">Charte éditoriale</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            Nos règles de fabrication : rigueur des sources, respect des témoins, contradictoire et
            indépendance vis-à-vis de nos partenaires.
          </p>
          <Button href="#" variant="dark" size="md" className="mt-6">
            Lire la charte
          </Button>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5 rounded-xl3 bg-splash-gradient p-10 text-center text-white">
        <p className="font-display text-2xl font-semibold">Vous partagez ces valeurs ?</p>
        <p className="max-w-md text-white/85">
          Signez la charte pour montrer votre soutien à une culture du jeu vidéo plus saine et plus
          inclusive.
        </p>
        <Button
          variant="dark"
          size="lg"
          onClick={() => setSigned(true)}
          disabled={signed}
          className="!bg-white !text-ink hover:!bg-white/90"
        >
          {signed ? (
            <>
              <CheckCircle2 size={18} /> Merci pour votre soutien
            </>
          ) : (
            "Je soutiens cette charte"
          )}
        </Button>
      </div>
    </Section>
  );
}
