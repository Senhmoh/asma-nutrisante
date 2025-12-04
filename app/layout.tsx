import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Asma Nutrisanté - Biochimiste & Nutritionniste',
    default: 'Asma Nutrisanté | Expert Nutrition Oncologie & Fonctionnelle',
  },
  description: 'Accompagnement nutritionnel scientifique (Cancer, Thyroïde, Perte de poids). Ancienne biochimiste R&D, je combine médecine fonctionnelle et profilage alimentaire. Consultations en Belgique, France et Visio.',
  keywords: ['Nutritionniste Oncologie', 'Taty Lauwers', 'Microbiote', 'Cupping Therapy Bruxelles', 'Nutrition Cancer', 'Médecine Fonctionnelle'],
  openGraph: {
    title: 'Asma Nutrisanté - La Science au service de votre Vitalité',
    description: 'De la biochimie à la guérison holistique. Prenez soin de votre santé avec une approche scientifique et naturelle.',
    type: 'website',
    locale: 'fr_BE',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}
