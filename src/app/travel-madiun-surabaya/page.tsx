import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Travel Madiun Surabaya Door to Door via Tol | Asoka Trans",
  description: "Agen travel Madiun Surabaya PP murah. Jadwal keberangkatan rutin pagi siang malam, unit Avanza/Hiace nyaman & bersih, jemput di rumah antar sampai alamat.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/travel-madiun-surabaya`,
  },
};

export default function TravelMadiunSurabayaPage() {
  const keyword = "travel madiun surabaya";
  
  const breadcrumbs = [
    { name: "Travel Madiun Surabaya", href: "/travel-madiun-surabaya" }
  ];

  const prices = [
    { name: "Tiket Reguler (Surabaya Kota)", capacity: "Per Pax", price: "Rp 150.000", note: "Door to Door via Tol Trans Jawa" },
    { name: "Tiket Reguler (Bandara Juanda)", capacity: "Per Pax", price: "Rp 180.000", note: "Door to Door via Tol Trans Jawa" },
    { name: "Tiket Reguler (Tanjung Perak)", capacity: "Per Pax", price: "Rp 180.000", note: "Door to Door via Tol Trans Jawa" },
    { name: "Carter Drop (Avanza)", capacity: "Maks 5 Pax", price: "Rp 800.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Innova Reborn)", capacity: "Maks 6 Pax", price: "Rp 1.000.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Hiace Commuter)", capacity: "Maks 14 Pax", price: "Rp 1.500.000", note: "Mobil + Supir + BBM + Tol All-In" },
  ];

  const faqs = [
    {
      question: "Kapan saja jadwal travel Madiun Surabaya berangkat?",
      answer: "Jadwal keberangkatan rutin Asoka Trans adalah: Pagi jam 06.00 & 09.00 WIB, Siang/Sore jam 13.00 & 17.00 WIB, serta Malam jam 23.00 WIB."
    },
    {
      question: "Apakah travel ini melewati jalan tol penuh?",
      answer: "Ya, demi memangkas durasi tempuh agar cepat sampai di tujuan, armada kami selalu masuk jalan Tol Trans Jawa mulai dari Gerbang Tol Madiun langsung menuju Surabaya."
    },
    {
      question: "Berapa jam perjalanan dari Madiun ke Surabaya?",
      answer: "Dengan melintasi jalan tol penuh, waktu tempuh rata-rata adalah sekitar 2.5 hingga 3 jam saja (tergantung kondisi kelancaran jalan kota)."
    },
    {
      question: "Apakah bisa menjemput di area luar kota Madiun?",
      answer: "Bisa, kami melayani penjemputan di wilayah karesidenan Madiun sekitarnya seperti Ponorogo, Magetan, Ngawi, Caruban, Maospati dengan tarif penyesuaian penjemputan luar batas."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Passenger Transport Service",
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
      "price": "150000"
    }
  };

  const introContent = `
    Butuh transportasi cepat, murah, dan nyaman dari Madiun ke Surabaya? Asoka Trans menyediakan layanan <strong>travel Madiun Surabaya</strong> PP dengan sistem jemput bola (door to door). Sopir kami akan datang menjemput Anda tepat di depan rumah atau kantor di Madiun, dan mengantarkan Anda sampai di alamat tujuan di Surabaya maupun Sidoarjo.<br/><br/>
    Layanan travel Madiun Surabaya kami sangat diminati karena armada kami <strong>full via Tol Trans Jawa</strong>, mempercepat waktu tempuh menjadi hanya sekitar 2.5 hingga 3 jam. Ini menjadikannya pilihan andalan bagi pebisnis, pekerja, mahasiswa, maupun yang ingin bepergian ke Bandara Juanda Surabaya.<br/><br/>
    Kami menjamin keberangkatan setiap hari dengan armada prima seperti Toyota Avanza, Toyota Hiace, dan Isuzu Elf Long yang ber-AC dingin, memiliki kursi rebah (reclining seats) yang nyaman, serta ruang bagasi yang cukup untuk barang bawaan Anda.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Travel Madiun Surabaya"
      description="Jasa travel Madiun Surabaya door to door murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Travel Madiun Surabaya Murah Door to Door via Tol"
      heroSubtitle="Jadwal lengkap pagi siang sore malam. Antar jemput rumah ke rumah (door to door) via Tol Trans Jawa. Pasti berangkat tiap hari!"
      introTitle="Pilihan Utama Perjalanan Nyaman Madiun - Surabaya"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Tiket & Carter Madiun Surabaya"
      priceSectionDesc="Tarif tiket per pax maupun tarif sewa mobil private carter drop off Madiun Surabaya."
      prices={prices}
      fleetLimit={3}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan tiket travel"
    />
  );
}
