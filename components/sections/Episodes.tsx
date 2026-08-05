"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Play, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import { categories, episodes, type Category } from "@/lib/data";

export default function Episodes() {
  const [active, setActive] = useState<Category | "Tous">("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return episodes;
    return episodes.filter((ep) => ep.categories.includes(active));
  }, [active]);

  return (
    <Section
      id="episodes"
      theme="dark"
      eyebrow="Les épisodes"
      title="Saison 1 — six voix, six histoires"
      description="Filtrez les épisodes par thématique pour retrouver celui qui vous parle."
    >
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les épisodes par thématique">
        {(["Tous", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={clsx(
              "focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-splash-gradient text-white"
                : "bg-white/8 text-white/65 hover:bg-white/14 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ep) => (
          <article
            key={ep.id}
            className="group flex flex-col overflow-hidden rounded-xl3 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40"
          >
            <div className="relative flex aspect-video items-center justify-center bg-splash-gradient">
              <span className="absolute left-4 top-4 rounded-full bg-ink/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {ep.releaseDate}
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink transition-transform group-hover:scale-105">
                <Play size={22} className="ml-0.5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {ep.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/60"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{ep.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{ep.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
                <span>{ep.guests}</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {ep.duration}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-white/50">Aucun épisode ne correspond à ce filtre pour le moment.</p>
      )}
    </Section>
  );
}
