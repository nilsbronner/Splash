import { clsx } from "clsx";

export default function Badge({
  children,
  tone = "orange",
  className,
}: {
  children: React.ReactNode;
  tone?: "orange" | "violet" | "neutral";
  className?: string;
}) {
  const tones = {
    orange: "bg-orange-50 text-orange-700",
    violet: "bg-violet-50 text-violet-700",
    neutral: "bg-ink/5 text-ink/60",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
