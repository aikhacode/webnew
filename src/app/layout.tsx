import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_PROFILE } from "@/data/seoData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_PROFILE.websiteUrl),
  title: {
    default: "Asoka Trans Madiun - Jasa Rental Mobil & Travel Madiun Surabaya",
    template: "%s | Asoka Trans"
  },
  description: "Pusat rental mobil Madiun murah terpercaya & travel Madiun Surabaya Malang Jogja Solo. Sewa Hiace, Elf, Avanza, Innova Reborn + driver profesional 24 jam.",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Asoka Trans Madiun - Jasa Rental Mobil & Travel Madiun Surabaya",
    description: "Rental mobil Madiun murah & travel door-to-door Madiun Surabaya Malang Jogja Solo. Unit Avanza, Innova, Hiace Commuter/Premio, Elf Long terbaru & bersih.",
    url: BUSINESS_PROFILE.websiteUrl,
    siteName: BUSINESS_PROFILE.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asoka Trans Madiun - Jasa Rental Mobil & Travel Madiun Surabaya",
    description: "Rental mobil Madiun murah & travel door-to-door Madiun Surabaya Malang Jogja Solo. Unit Avanza, Innova, Hiace Commuter/Premio, Elf Long terbaru & bersih.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "PcfVZ8MC0Qa-jL5H0Iun6fhUpOI8rT6TRALYFCAa1w0", // Replace with your actual Google Search Console verification key
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
