import { Zap, ShieldAlert, Search, MessageSquareQuote } from "lucide-react";
import Section from "@/components/ui/Section";

const items = [
  { icon: ShieldAlert, label: "Scandales" },
  { icon: Zap, label: "Bad buzz" },
  { icon: Search, label: "Débunk" },
  { icon: MessageSquareQuote, label: "Témoignages" },
];

export default function ZoneSplash() {
  return (
    <Section theme="dark" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-splash-900/40 via-transparent to-heal-900/20"
      />
      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-splash-500/15 px-4 py-1.5 text-sm font-medium text-splash-300">
            Segment signature
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            La Zone Splash
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Le segment qui n&apos;a pas peur de nommer les choses. Scandales, bad buzz, débunk de
            fausses idées, témoignages bruts — toujours avec un seul objectif : comprendre pour
            mieux agir, jamais pour faire du sensationnalisme.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="glass flex flex-col items-start gap-4 rounded-xl2 p-6 transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-splash-500/20 text-splash-300">
                <item.icon size={20} />
              </span>
              <p className="font-display text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
