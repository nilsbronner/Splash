import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Section from "./Section";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Section theme="light" className="pt-32 md:pt-40">
      <Link
        href="/"
        className="focus-ring mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink"
      >
        <ArrowLeft size={16} /> Retour au site
      </Link>
      <h1 className="font-display text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-ink/45">Dernière mise à jour : {updated}</p>
      <div className="prose-legal mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-ink/70 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed">
        {children}
      </div>
    </Section>
  );
}
