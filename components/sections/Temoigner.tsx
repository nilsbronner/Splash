"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart, Lightbulb, Flag, UserPlus, Rocket } from "lucide-react";
import { clsx } from "clsx";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const reasons = [
  { value: "histoire", label: "Partager mon histoire", icon: Heart },
  { value: "sujet", label: "Proposer un sujet", icon: Lightbulb },
  { value: "signalement", label: "Signaler un cas", icon: Flag },
  { value: "invite", label: "Recommander un invité", icon: UserPlus },
  { value: "initiative", label: "Envoyer une initiative", icon: Rocket },
];

const visibilities = [
  {
    value: "public",
    label: "Témoignage public",
    description: "Je suis d'accord pour être cité·e, avec mon accord sur la forme finale.",
  },
  {
    value: "anonyme",
    label: "Témoignage anonyme",
    description: "Mon histoire peut être partagée mais sans aucune donnée identifiante.",
  },
  {
    value: "contact",
    label: "Simple prise de contact",
    description: "Je veux juste échanger avec l'équipe, sans obligation de diffusion.",
  },
];

export default function Temoigner() {
  const [reason, setReason] = useState("histoire");
  const [visibility, setVisibility] = useState("public");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="temoigner"
      theme="light"
      eyebrow="Le bouton le plus important"
      title="Témoigner"
      description="Partagez votre histoire, proposez un sujet, signalez un cas, recommandez un invité ou envoyez-nous une initiative. Chaque message est lu par l'équipe éditoriale."
    >
      <div className="mx-auto max-w-2xl rounded-xl3 border border-ink/8 bg-white p-8 shadow-sm md:p-10">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center" role="status" aria-live="polite">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-heal-50 text-heal-600">
              <CheckCircle2 size={32} />
            </span>
            <p className="font-display text-2xl font-semibold">Merci pour votre confiance.</p>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60">
              Votre message a bien été transmis à l&apos;équipe SPLASH. Nous revenons vers vous dès
              que possible.
            </p>
            <Button variant="light" size="md" onClick={() => setSubmitted(false)}>
              Envoyer un autre message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <fieldset>
              <legend className="mb-4 text-sm font-semibold text-ink">
                Qu&apos;est-ce qui vous amène ?
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {reasons.map((r) => (
                  <label
                    key={r.value}
                    className={clsx(
                      "focus-within:ring-2 focus-within:ring-heal-400 flex cursor-pointer items-center gap-3 rounded-xl2 border p-4 text-sm font-medium transition-colors",
                      reason === r.value
                        ? "border-heal-500 bg-heal-50 text-heal-800"
                        : "border-ink/10 text-ink/70 hover:border-ink/25"
                    )}
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={r.value}
                      checked={reason === r.value}
                      onChange={() => setReason(r.value)}
                      className="sr-only"
                    />
                    <r.icon size={18} />
                    {r.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-sm font-semibold text-ink">Comment souhaitez-vous participer ?</legend>
              <div className="grid gap-3">
                {visibilities.map((v) => (
                  <label
                    key={v.value}
                    className={clsx(
                      "focus-within:ring-2 focus-within:ring-heal-400 flex cursor-pointer gap-3 rounded-xl2 border p-4 transition-colors",
                      visibility === v.value
                        ? "border-heal-500 bg-heal-50"
                        : "border-ink/10 hover:border-ink/25"
                    )}
                  >
                    <input
                      type="radio"
                      name="visibility"
                      value={v.value}
                      checked={visibility === v.value}
                      onChange={() => setVisibility(v.value)}
                      className="mt-1"
                    />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{v.label}</span>
                      <span className="block text-xs leading-relaxed text-ink/55">{v.description}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Nom {visibility === "anonyme" && <span className="text-ink/40">(facultatif)</span>}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="focus-ring w-full rounded-xl2 border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-heal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email {visibility !== "anonyme" && <span className="text-red-500">*</span>}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required={visibility !== "anonyme"}
                  className="focus-ring w-full rounded-xl2 border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-heal-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Votre message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="focus-ring w-full rounded-xl2 border border-ink/15 px-4 py-2.5 text-sm outline-none focus:border-heal-500"
                placeholder="Racontez-nous, en toute confiance..."
              />
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-ink/60">
              <input type="checkbox" required className="mt-0.5" />
              J&apos;accepte que mes données soient traitées par SPLASH conformément à la{" "}
              <a href="/confidentialite" className="underline hover:text-ink">
                politique de confidentialité
              </a>
              . Aucune information ne sera publiée sans mon accord.
            </label>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Envoyer mon message
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
