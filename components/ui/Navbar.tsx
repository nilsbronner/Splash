"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import Container from "./Container";
import Button from "./Button";
import { navLinks } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-glass" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-white focus-ring">
          SPLASH
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#temoigner" variant="secondary" size="md">
            Témoigner
          </Button>
          <Button
            href="https://discord.gg/splash"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            Rejoindre Discord
          </Button>
        </div>

        <button
          className="focus-ring rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="glass border-t border-white/10 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/8"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Button href="#temoigner" variant="secondary" onClick={() => setOpen(false)}>
                Témoigner
              </Button>
              <Button
                href="https://discord.gg/splash"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                onClick={() => setOpen(false)}
              >
                Rejoindre Discord
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
