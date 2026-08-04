import { clsx } from "clsx";

export default function Badge({
  children,
  tone = "heal",
  className,
}: {
  children: React.ReactNode;
  tone?: "heal" | "splash" | "neutral";
  className?: string;
}) {
  const tones = {
    heal: "bg-heal-50 text-heal-700",
    splash: "bg-splash-50 text-splash-700",
    neutral: "bg-white/8 text-white/70",
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
