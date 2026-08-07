import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { clsx } from "clsx";

export default function Teaser({
  id,
  theme = "light",
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "En savoir plus",
  reverse = false,
  visual,
}: {
  id?: string;
  theme?: "light" | "dark";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  reverse?: boolean;
  visual?: React.ReactNode;
}) {
  return (
    <Section id={id} theme={theme} className="!py-16 md:!py-20">
      <div
        className={clsx(
          "grid items-center gap-10",
          visual ? "lg:grid-cols-2" : "mx-auto max-w-2xl text-center",
          visual && reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div className={clsx(!visual && "flex flex-col items-center")}>
          <p
            className={clsx(
              "mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
              theme === "dark" ? "bg-white/8 text-orange-300" : "bg-orange-50 text-orange-700"
            )}
          >
            {eyebrow}
          </p>
          <h2 className="font-display text-2xl uppercase leading-[0.95] tracking-tight md:text-4xl">
            {title}
          </h2>
          <p
            className={clsx(
              "mt-4 max-w-md text-base leading-relaxed",
              theme === "dark" ? "text-white/65" : "text-ink/60"
            )}
          >
            {description}
          </p>
          <Link
            href={href}
            className={clsx(
              "focus-ring group mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              theme === "dark" ? "text-orange-300 hover:text-orange-200" : "text-orange-700 hover:text-orange-800"
            )}
          >
            {ctaLabel}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {visual && <div>{visual}</div>}
      </div>
    </Section>
  );
}
