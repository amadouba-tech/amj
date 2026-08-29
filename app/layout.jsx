import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import PromoBanner from "@/components/PromoBanner.jsx";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.artdesmotsjustes.fr"),
  title: {
    default: "Art des Mots Justes — Écrivain public",
    template: "%s — Art des Mots Justes",
  },
  description:
    "Écrivain public dans l'Yonne, intervention à distance partout en France. Rédaction, correction, démarches administratives, récits de vie — pour particuliers, associations, collectivités et professionnels.",
  openGraph: {
    title: "Art des Mots Justes — Écrivain public",
    description:
      "Rédaction, correction, démarches administratives, récits de vie — pour particuliers, associations, collectivités et professionnels.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
