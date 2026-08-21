import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MobileEdgeAccent from "@/components/ui/MobileEdgeAccent";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://splash-lemedia.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPLASH — Ça change la vie et le game !",
    template: "%s — SPLASH",
  },
  description:
    "SPLASH est le média qui rassemble joueurs, professionnels, chercheurs, associations et entreprises autour d'un objectif commun : prendre soin du jeu vidéo. Podcast, ressources et communauté.",
  keywords: [
    "SPLASH",
    "podcast jeu vidéo",
    "santé mentale gaming",
    "inclusion jeu vidéo",
    "esport",
    "Skillcamp",
    "Bemotion",
    "Reset",
  ],
  openGraph: {
    title: "SPLASH — Ça change la vie et le game !",
    description:
      "Le média qui prend soin du jeu vidéo. Podcast, communauté et ressources pour joueurs, créateurs, associations et institutions.",
    url: siteUrl,
    siteName: "SPLASH",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPLASH — Ça change la vie et le game !",
    description:
      "Le média qui prend soin du jeu vidéo. Podcast, communauté et ressources pour joueurs, créateurs, associations et institutions.",
  },
  icons: {
    icon: "/brand/icon-orange.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <MobileEdgeAccent />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
