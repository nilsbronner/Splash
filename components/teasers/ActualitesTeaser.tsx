import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { newsItems } from "@/lib/data";

export default function ActualitesTeaser() {
  const latest = newsItems[0];
  if (!latest) return null;

  return (
    <Section theme="dark" eyebrow="Actualités" title="Les prochains RDV" className="!py-16 md:!py-20">
      <div className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/60">
          <CalendarDays size={14} /> {latest.date}
        </span>
        <h3 className="font-display text-xl uppercase tracking-tight md:text-2xl">{latest.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">{latest.body[0]}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">{latest.body[1]}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={latest.primary.href}
            target={latest.primary.external ? "_blank" : undefined}
            rel={latest.primary.external ? "noopener noreferrer" : undefined}
            size="md"
          >
            {latest.primary.label}
          </Button>
          <Button href={latest.secondary.href} variant="outlineLight" size="md">
            {latest.secondary.label}
          </Button>
        </div>
      </div>

      <Link
        href="/actualites"
        className="focus-ring group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
      >
        Voir toutes les actualités
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </Section>
  );
}
