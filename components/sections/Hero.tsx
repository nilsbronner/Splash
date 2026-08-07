"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Play, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const maskStyle = {
  WebkitMaskImage: "url(/brand/pattern-blobs.png)",
  maskImage: "url(/brand/pattern-blobs.png)",
  WebkitMaskSize: "cover",
  maskSize: "cover",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream pt-24">
      <div className="pointer-events-none absolute inset-0 bg-splash-gradient-soft" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-orange-300/30 blur-[110px] animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-40 h-[24rem] w-[24rem] rounded-full bg-violet-300/40 blur-[110px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <Container className="relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-center py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink/70"
            >
              Un projet Skillcamp · Production BEMOTION · Caution scientifique RESET
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Image
                src="/brand/logo-wordmark-black.png"
                alt="SPLASH"
                width={420}
                height={165}
                priority
                className="h-16 w-auto md:h-24"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-ink md:text-6xl"
            >
              Ou comment <span className="text-gradient-splash">heal</span> le game
              <span className="text-orange-500">.</span>
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 block h-1 w-16 origin-left rounded-full bg-violet-400"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65"
            >
              Le média qui rassemble joueurs, professionnels, chercheurs, associations et entreprises
              autour d&apos;un objectif commun : prendre soin du jeu vidéo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/le-projet" size="lg">
                Découvrir le projet
              </Button>
              <Button href="/podcast" variant="secondary" size="lg">
                <Play size={18} /> Écouter le podcast
              </Button>
              <Button
                href="https://discord.gg/splash"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
              >
                <MessageCircle size={18} /> Rejoindre Discord
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden shrink-0 self-start justify-self-end lg:block"
          >
            <div className="animate-float">
              <Image
                src="/brand/icon-orange.png"
                alt=""
                aria-hidden
                width={160}
                height={160}
                className="h-32 w-32 drop-shadow-xl xl:h-40 xl:w-40"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <a
        href="#decouvrir"
        aria-label="Défiler vers la section suivante"
        className="focus-ring absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-ink/15 bg-white/70 p-2.5 text-ink/60 transition-colors hover:text-ink md:block"
      >
        <ArrowDown size={18} />
      </a>

      <div
        className="relative z-10 h-16 md:h-24"
        style={{
          ...maskStyle,
          backgroundImage:
            "linear-gradient(to right, #a794d6 0%, #a794d6 33%, #161616 33%, #161616 66%, #ff5011 66%, #ff5011 100%)",
        }}
        aria-hidden
      />
    </section>
  );
}
