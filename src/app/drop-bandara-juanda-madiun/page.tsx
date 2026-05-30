import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Carter Drop Bandara Juanda Madiun All In via Tol | Asoka Trans",
  description: "Layanan private carter drop off Bandara Juanda Surabaya ke Madiun PP. Tarif All-In murah (mobil, driver, bbm, tol full), dijamin tepat waktu bebas antre.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/drop-bandara-juanda-madiun`,
  },
};

export default function DropBandaraJuandaMadiunPage() {
  const keyword = "drop bandara juanda madiun";
  
  const breadcrumbs = [
    { name: "Drop Juanda Madiun", href: "/drop-bandara-juanda-madiun" }
  ];

  const prices = [
    { name: "Private Avanza (Drop Juanda)", capacity: "Maks 5 Pax", price: "Rp 800.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Private Innova Reborn (Drop)", capacity: "Maks 6 Pax", price: "Rp 1.000.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Private Innova Zenix (Drop)", capacity: "Maks 6 Pax", price: "Rp 1.300.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Private Hiace Commuter (Drop)", capacity: "Maks 14 Pax", price: "Rp 1.500.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Private Hiace Premio (Drop)", capacity: "Maks 11 Pax", price: "Rp 1.800.000", note: "Mobil + Supir + BBM + Tol All-In" },
  ];

  const faqs = [
    {
      question: "Apakah tarif drop Juanda ke Madiun sudah mencakup tol?",
      answer: "Ya, seluruh tarif carter drop off yang tercantum di atas bersifat All-In, artinya sudah mencakup sewa mobil, jasa driver profesional, BBM (bensin/solar), tol Trans Jawa penuh, dan parkir bandara."
    },
    {
      question: "Bagaimana sistem penjemputannya di Bandara Juanda?",
      answer: "Driver kami akan standby di area penjemputan Bandara Juanda (T1 atau T2) minimal 30 menit sebelum jadwal kedatangan pesawat Anda. Driver akan memegang kertas bertuliskan nama Anda agar mudah dikenali."
    },
    {
      question: "Bagaimana jika penerbangan saya tertunda (delay)?",
      answer: "Anda tidak perlu khawatir. Driver kami memantau jadwal kedatangan pesawat via nomor penerbangan (flight number) Anda dan akan setia menunggu hingga Anda mendarat."
    },
    {
      question: "Apakah melayani rute sebaliknya (Madiun ke Juanda)?",
      answer: "Ya, kami melayani perjalanan dua arah (Madiun ke Bandara Juanda Surabaya maupun Juanda ke Madiun) dengan sistem penjemputan langsung di rumah Anda."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_PROFILE.name
    },
    "areaServed": [
      { "@type": "Place", "name": "Madiun" },
      { "@type": "Place", "name": "Surabaya" },
      { "@type": "Place", "name": "Sidoarjo" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "800000"
    }
  };

  const introContent = `
    Membutuhkan jasa transportasi khusus untuk mengantar Anda secara cepat, privat, dan aman dari Bandara Juanda Surabaya menuju Madiun atau sebaliknya? Layanan <strong>carter drop Bandara Juanda Madiun</strong> dari Asoka Trans adalah solusi ideal perjalanan Anda.<br/><br/>
    Layanan drop off ini bersifat <strong>Private Car</strong> (tidak dicampur dengan penumpang lain). Mobil langsung berangkat begitu Anda tiba di bandara dan langsung menuju alamat rumah tujuan Anda di Madiun tanpa singgah-singgah di jalan. Sangat efisien, aman, dan cocok bagi Anda yang membawa koper berukuran besar atau bepergian bersama keluarga.<br/><br/>
    Seluruh tarif kami tawarkan secara transparan dengan paket <strong>All-In (bersih)</strong> sudah termasuk armada Avanza/Innova, bbm, tol Trans Jawa, parkir bandara, dan jasa sopir handal yang siap menyambut kedatangan Anda 24 jam penuh.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Drop Juanda Madiun"
      description="Carter drop Bandara Juanda ke Madiun murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Drop Bandara Juanda Surabaya ke Madiun All In via Tol"
      heroSubtitle="Jasa carter mobil drop off private bandara Juanda ke Madiun PP. Armada bersih, driver ramah, tepat waktu, bebas macet via Tol."
      introTitle="Spesialis Carter Drop Bandara Juanda - Madiun PP"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Carter Drop Juanda Madiun"
      priceSectionDesc="Tarif paket bersih (All-In) sewa mobil privat drop off dari Bandara Juanda Surabaya ke Madiun sekitarnya."
      prices={prices}
      fleetLimit={4}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan drop bandara"
    />
  );
}
