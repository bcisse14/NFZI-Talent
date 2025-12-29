import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFZI Talent | Consultant en recrutement freelance en Île-de-France",
  description:
    "NFZI Talent accompagne les entreprises dans leurs recrutements stratégiques : approche directe, sourcing confidentiel, évaluation et short-list qualifiée.",
  applicationName: "NFZI Talent",
  keywords: [
    "recrutement sur mesure",
    "approche directe",
    "recrutement stratégique",
    "évaluation des candidats",
    "short-list qualifiée",
    "recrutement durable",
    "Île-de-France",
  ],
  openGraph: {
    title: "NFZI Talent | Recrutement stratégique en Île-de-France",
    description:
      "Accompagnement premium pour vos recrutements stratégiques : sourcing discret, approche directe, évaluation et short-list qualifiée.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
