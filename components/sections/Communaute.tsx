import { MessageCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const salons = [
  "Salons métiers",
  "Salons santé",
  "Salons inclusion",
  "Découverte",
  "Entraide",
  "Veille",
  "Viewing parties",
  "Événements",
];

export default function Communaute() {
  return (
    <Section id="communaute" theme="dark" className="relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-sm font-medium text-orange-300">
            La communauté
          </p>
          <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl">
            Un Discord pour continuer la conversation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Discussions, salons métiers, salons santé, salons inclusion, découverte, entraide,
            veille, viewing parties et événements : la communauté SPLASH prolonge le podcast entre
            deux épisodes.
          </p>
          <Button
            href="https://discord.gg/splash"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-8"
          >
            <MessageCircle size={18} /> Rejoindre Discord
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          {salons.map((salon) => (
            <div
              key={salon}
              className="glass rounded-xl2 px-5 py-4 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              # {salon}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
