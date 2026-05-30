import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Travel Madiun Jogja Murah Door to Door | Asoka Trans",
  description: "Layanan travel Madiun Jogja PP harga terjangkau. Jadwal keberangkatan rutin pagi siang sore, unit Avanza/Hiace prima ber-AC, jemput di rumah antar sampai alamat.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/travel-madiun-jogja`,
  },
};

export default function TravelMadiunJogjaPage() {
  const keyword = "travel madiun jogja";
  
  const breadcrumbs = [
    { name: "Travel Madiun Jogja", href: "/travel-madiun-jogja" }
  ];

  const prices = [
    { name: "Tiket Reguler (Jogja Kota)", capacity: "Per Pax", price: "Rp 150.000", note: "Door to Door Antar Jemput Rumah" },
    { name: "Tiket Reguler (Sleman / Bantul)", capacity: "Per Pax", price: "Rp 180.005", note: "Antar Jemput Door to Door Meluas" },
    { name: "Carter Drop (Avanza)", capacity: "Maks 5 Pax", price: "Rp 850.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Innova Reborn)", capacity: "Maks 6 Pax", price: "Rp 1.050.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Hiace Commuter)", capacity: "Maks 14 Pax", price: "Rp 1.550.000", note: "Mobil + Supir + BBM + Tol All-In" },
  ];

  const faqs = [
    {
      question: "Kapan jadwal keberangkatan travel Madiun Jogja?",
      answer: "Jadwal travel kami dari Madiun ke Jogja berangkat setiap hari: Pagi jam 07.00 WIB, Siang jam 11.00 WIB, dan Sore jam 16.00 WIB."
    },
    {
      question: "Melalui rute mana perjalanan travel Madiun Jogja?",
      answer: "Armada kami melewati jalur selatan Madiun - Magetan - Ngawi (via Tol Solo) - Klaten - Yogyakarta, disesuaikan dengan efisiensi rute penjemputan penumpang."
    },
    {
      question: "Apakah barang bawaan / bagasi dibatasi?",
      answer: "Setiap penumpang diperbolehkan membawa 1 tas ransel dan 1 koper ukuran standar secara gratis. Jika membawa barang berlebih, mohon infokan ke admin kami saat pemesanan."
    },
    {
      question: "Berapa lama waktu tempuh Madiun Jogja?",
      answer: "Waktu tempuh normal dari Madiun ke Jogja berkisar antara 3 hingga 4 jam perjalanan (tergantung kondisi jalan)."
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
      { "@type": "Place", "name": "Yogyakarta" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "150000"
    }
  };

  const introContent = `
    Ingin bepergian dari Madiun ke Yogyakarta (Jogja) untuk tujuan wisata, pendidikan, urusan dinas, atau berobat? Asoka Trans menghadirkan jasa <strong>travel Madiun Jogja</strong> PP yang mengutamakan ketepatan waktu, keselamatan, dan kenyamanan.<br/><br/>
    Dengan sistem jemput bola (door to door), Anda tidak perlu lagi repot-repot pergi ke terminal bus atau stasiun kereta api. Cukup bersantai di rumah, driver kami akan menjemput Anda tepat di depan pintu rumah di Madiun dan mengantarkan Anda sampai di alamat tujuan di Jogja (Sleman, Bantul, Kota Jogja).<br/><br/>
    Kami mengoperasikan unit-unit kendaraan modern yang bersih, wangi, ber-AC dingin, serta dilengkapi reclining seats seperti Toyota Avanza dan Toyota Hiace. Nikmati perjalanan santai bersama pengemudi kami yang ramah dan berlisensi profesional.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Travel Madiun Jogja"
      description="Jasa travel Madiun Jogja door to door murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Travel Madiun Jogja Murah Door to Door PP"
      heroSubtitle="Jadwal rutin pagi siang sore. Penjemputan langsung dari depan rumah Anda di Madiun menuju seluruh wilayah Yogyakarta. Pasti berangkat!"
      introTitle="Perjalanan Nyaman & Praktis Madiun - Jogja"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Tiket & Carter Madiun Jogja"
      priceSectionDesc="Tarif tiket per pax maupun tarif sewa mobil private carter drop off Madiun Jogja."
      prices={prices}
      fleetLimit={3}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan tiket travel"
    />
  );
}
