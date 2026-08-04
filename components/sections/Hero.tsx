"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-heal-splash-soft" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-heal-500/25 blur-[120px] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-splash-500/25 blur-[120px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-heal-400/30 animate-ripple" />
        <span
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-splash-400/30 animate-ripple"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70"
          >
            Un projet Skillcamp · Production BEMOTION · Caution scientifique RESET
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl"
          >
            SPLASH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-2xl font-medium text-white/85 md:text-3xl"
          >
            Ou comment <span className="text-gradient-heal">heal</span> le game.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Le média qui rassemble joueurs, professionnels, chercheurs, associations et entreprises
            autour d&apos;un objectif commun : prendre soin du jeu vidéo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#concept" size="lg">
              Découvrir le projet
            </Button>
            <Button href="#podcast" variant="secondary" size="lg">
              <Play size={18} /> Écouter le podcast
            </Button>
            <Button
              href="https://discord.gg/splash"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              className="!text-white"
            >
              <MessageCircle size={18} /> Rejoindre Discord
            </Button>
          </motion.div>
        </div>
      </Container>

      <a
        href="#concept"
        aria-label="Défiler vers la section suivante"
        className="focus-ring absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition-colors hover:text-white"
      >
        <ArrowDown size={18} />
      </a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-ink-fade" />
    </section>
  );
}
