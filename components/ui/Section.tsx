import { clsx } from "clsx";
import Container from "./Container";

export default function Section({
  id,
  theme = "dark",
  eyebrow,
  title,
  description,
  align = "left",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  theme?: "dark" | "light";
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "relative scroll-mt-24 py-24 md:py-32",
        theme === "dark" ? "bg-ink text-cream" : "bg-cream text-ink",
        className
      )}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div
            className={clsx(
              "mb-14 md:mb-20",
              align === "center" && "mx-auto max-w-2xl text-center"
            )}
          >
            {eyebrow && (
              <p
                className={clsx(
                  "mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide",
                  theme === "dark"
                    ? "bg-white/8 text-orange-300"
                    : "bg-orange-50 text-orange-700"
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={clsx(
                  "mt-5 max-w-2xl text-lg leading-relaxed",
                  theme === "dark" ? "text-white/65" : "text-ink/60"
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
