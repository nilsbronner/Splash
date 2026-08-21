import Teaser from "@/components/ui/Teaser";
import Button from "@/components/ui/Button";
import { newsItems } from "@/lib/data";

export default function ActualitesTeaser() {
  const news = newsItems[0];

  return (
    <Teaser
      theme="light"
      eyebrow="Le prochain RDV"
      title={news.date}
      description={news.body}
      href="/actualites"
      ctaLabel="Voir toutes les actualités"
      visual={
        <div className="rounded-xl3 border border-ink/8 bg-white p-8 shadow-sm">
          <h3 className="font-display text-xl font-semibold leading-snug">{news.title}</h3>
          {news.highlight && (
            <p className="mt-3 font-display text-lg font-semibold text-ink/80">{news.highlight}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={news.ctaHref} size="md">
              {news.ctaLabel}
            </Button>
            {news.secondaryCtaLabel && news.secondaryCtaHref && (
              <Button
                href={news.secondaryCtaHref}
                target={news.externalSecondary ? "_blank" : undefined}
                rel={news.externalSecondary ? "noopener noreferrer" : undefined}
                variant="secondary"
                size="md"
              >
                {news.secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      }
    />
  );
}
