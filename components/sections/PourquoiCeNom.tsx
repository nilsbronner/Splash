import Image from "next/image";
import Section from "@/components/ui/Section";

export default function PourquoiCeNom() {
  return (
    <Section theme="dark" eyebrow="Le nom SPLASH" title="Pourquoi ce nom ?">
      <div className="mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-white/70">
        <p>Splash trouve son origine dans Fortnite.</p>
        <p>
          Le Chug Splash est un objet avec lequel la joueuse ou le joueur peut « splasher »
          (éclabousser) son équipe pour lui redonner de la vie ou des boucliers. Il propage une onde
          dès son impact avec le sol.
        </p>
        <p>
          Splash entre en contact avec une pensée lisse, trop lisse, figée dans des idées
          préconçues, des jugements rapides, des réactions automatiques…
        </p>
        <p>
          Splash veut créer une onde pour bousculer les esprits, provoquer l&apos;esprit critique et
          inviter au discernement.
        </p>
        <p>
          Afin que la compréhension devienne une forme de soin, et que la parole ouvre des voies de
          transformation.
        </p>
        <p className="font-display text-xl uppercase tracking-tight text-white">
          SPLASH, ça change la vie et le game !
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-md flex-col items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-center sm:flex-row sm:justify-center">
        <Image
          src="/brand/icon-orange.png"
          alt=""
          aria-hidden
          width={28}
          height={28}
          className="h-6 w-6 shrink-0"
        />
        <p className="text-sm text-white/60">
          Un projet porté par{" "}
          <span className="font-medium text-white/85">Skillcamp × Bemotion × Reset</span>
        </p>
      </div>
    </Section>
  );
}
