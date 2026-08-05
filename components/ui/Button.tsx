import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outlineLight" | "ghost" | "dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-ring whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-cream shadow-glow-orange hover:bg-orange-600 hover:-translate-y-0.5",
  secondary:
    "border-2 border-ink/15 bg-ink/[0.03] text-ink hover:border-ink/30 hover:bg-ink/[0.06] hover:-translate-y-0.5",
  outlineLight:
    "border-2 border-cream/25 text-cream hover:border-cream/50 hover:bg-cream/10 hover:-translate-y-0.5",
  ghost: "text-ink/70 hover:text-ink underline-offset-4 hover:underline",
  dark: "bg-ink text-cream hover:bg-ink-soft hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  target,
  rel,
  disabled,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className, disabled && "opacity-50 pointer-events-none");

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
