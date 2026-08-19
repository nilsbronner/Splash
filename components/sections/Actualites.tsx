import { CalendarDays } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { newsItems, episodes } from "@/lib/data";

export default function Actualites() {
  return (
    <Section
      theme="dark"
      eyebrow="Actualités"
      title="Les dernières nouvelles de SPLASH"
      description="Retrouvez ici les enregistrements publics, les sorties d'épisodes, les temps forts et les prochains rendez-vous de SPLASH."
    >
      <div className="space-y-8">
        {newsItems.map((item) => (
          <article key={item.id} className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/60">
              <CalendarDays size={14} /> {item.date}
            </span>
            <h3 className="font-display text-2xl uppercase tracking-tight md:text-3xl">{item.title}</h3>
            <div className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-white/65">
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={item.secondary.href}
                target={item.secondary.external ? "_blank" : undefined}
                rel={item.secondary.external ? "noopener noreferrer" : undefined}
                variant="outlineLight"
                size="md"
              >
                {item.secondary.label}
              </Button>
              <Button
                href={item.primary.href}
                target={item.primary.external ? "_blank" : undefined}
                rel={item.primary.external ? "noopener noreferrer" : undefined}
                size="md"
              >
                {item.primary.label}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
          Calendrier des sorties
        </h3>
        <p className="mt-2 text-white/60">Un nouvel épisode le premier mercredi de chaque mois.</p>
        <div className="mt-8 divide-y divide-white/10 rounded-xl3 border border-white/10 bg-white/[0.03]">
          {episodes.map((ep) => (
            <div key={ep.id} className="flex items-center justify-between gap-4 px-6 py-4">
              <p className="font-display text-sm uppercase tracking-tight text-white/85">
                Épisode {ep.number}
              </p>
              <p className="text-sm text-white/55">{ep.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
