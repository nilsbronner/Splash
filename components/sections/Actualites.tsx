import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { episodes, newsItems } from "@/lib/data";

export default function Actualites() {
  return (
    <Section id="actualites" theme="dark" eyebrow="Actualités">
      <h2 className="mb-5 font-display text-2xl uppercase leading-tight tracking-tight md:text-3xl">
        Les dernières nouvelles de SPLASH
      </h2>
      <p className="mb-14 max-w-2xl text-lg leading-relaxed text-white/65">
        Retrouvez ici les enregistrements publics, les sorties d&apos;épisodes, les temps forts et
        les prochains rendez-vous de SPLASH.
      </p>

      {newsItems.map((news) => (
        <div key={news.id} className="mb-16 rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-orange-300">{news.date}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">
            {news.title}
          </h3>
          <p className="mt-4 max-w-2xl text-white/65">{news.body}</p>
          {news.highlight && (
            <p className="mt-4 max-w-2xl font-display text-lg font-semibold text-white">
              {news.highlight}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={news.ctaHref} size="md">
              {news.ctaLabel}
            </Button>
            {news.secondaryCtaLabel && news.secondaryCtaHref && (
              <Button
                href={news.secondaryCtaHref}
                target={news.externalSecondary ? "_blank" : undefined}
                rel={news.externalSecondary ? "noopener noreferrer" : undefined}
                variant="outlineLight"
                size="md"
              >
                {news.secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      ))}

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
          Calendrier des sorties
        </p>
        <h3 className="font-display text-xl font-semibold">
          Un nouvel épisode le premier mercredi de chaque mois
        </h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <div key={ep.id} className="rounded-xl2 border border-white/10 bg-white/[0.03] p-5">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
                Épisode {ep.number}
              </p>
              <p className="mt-1 text-sm text-white/55">{ep.releaseDate}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
