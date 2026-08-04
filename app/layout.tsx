import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://splash-lemedia.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPLASH — Ou comment heal le game.",
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
    "BEMOTION",
    "RESET",
  ],
  openGraph: {
    title: "SPLASH — Ou comment heal le game.",
    description:
      "Le média qui prend soin du jeu vidéo. Podcast, communauté et ressources pour joueurs, créateurs, associations et institutions.",
    url: siteUrl,
    siteName: "SPLASH",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPLASH — Ou comment heal le game.",
    description:
      "Le média qui prend soin du jeu vidéo. Podcast, communauté et ressources pour joueurs, créateurs, associations et institutions.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-ink text-white">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
