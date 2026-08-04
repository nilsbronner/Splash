import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-ring whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-heal-splash text-white shadow-glow-heal hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "glass text-white hover:bg-white/12 hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white underline-offset-4 hover:underline",
  light:
    "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
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
