import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { footerLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-wordmark-white.png"
              alt="SPLASH"
              width={140}
              height={53}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Ça change la vie et le game ! L&apos;onde de soin dans le jeu vidéo.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/40">Un projet porté par</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70">
              <span>Skillcamp</span>
              <span className="text-white/30">·</span>
              <span>Strasbourg Esport</span>
              <span className="text-white/30">·</span>
              <span>Production Bemotion</span>
              <span className="text-white/30">·</span>
              <span>Apport scientifique Reset</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white/90">Informations légales</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {footerLinks.legal.map((link) =>
                "external" in link && link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href} className="focus-ring rounded transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white/90">Suivre SPLASH</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SPLASH — Tous droits réservés.</p>
          <p>Skillcamp × Strasbourg Esport × Bemotion × Reset</p>
        </div>
      </Container>
    </footer>
  );
}
