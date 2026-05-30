import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Travel Madiun Solo Murah Door to Door via Tol | Asoka Trans",
  description: "Layanan travel Madiun Solo PP harga murah. Jadwal harian pagi siang sore, armada bersih & ber-AC (Hiace/Avanza), penjemputan door-to-door langsung via Tol.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/travel-madiun-solo`,
  },
};

export default function TravelMadiunSoloPage() {
  const keyword = "travel madiun solo";
  
  const breadcrumbs = [
    { name: "Travel Madiun Solo", href: "/travel-madiun-solo" }
  ];

  const prices = [
    { name: "Tiket Reguler (Solo Kota)", capacity: "Per Pax", price: "Rp 120.000", note: "Antar Jemput Door to Door via Tol" },
    { name: "Tiket Reguler (Bandara Adi Soemarmo)", capacity: "Per Pax", price: "Rp 150.000", note: "Antar Jemput Door to Door" },
    { name: "Carter Drop (Avanza)", capacity: "Maks 5 Pax", price: "Rp 700.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Innova Reborn)", capacity: "Maks 6 Pax", price: "Rp 900.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Hiace Commuter)", capacity: "Maks 14 Pax", price: "Rp 1.400.000", note: "Mobil + Supir + BBM + Tol All-In" },
  ];

  const faqs = [
    {
      question: "Kapan jadwal travel Madiun Solo berangkat?",
      answer: "Jadwal travel kami dari Madiun ke Solo berangkat setiap hari: Pagi jam 07.00 WIB, Siang jam 11.00 WIB, dan Sore jam 16.00 WIB."
    },
    {
      question: "Apakah rute Madiun Solo lewat jalan tol?",
      answer: "Ya, kami melewati Tol Trans Jawa dari Gerbang Tol Madiun menuju Gerbang Tol Colomadu / Sragen Solo, mempercepat waktu tempuh menjadi hanya 1.5 jam."
    },
    {
      question: "Apakah melayani penjemputan dari Solo ke Madiun?",
      answer: "Ya, kami melayani rute PP (Madiun ke Solo dan Solo ke Madiun) dengan sistem door to door."
    },
    {
      question: "Berapa kapasitas penumpang per armada?",
      answer: "Kapasitas penumpang bervariasi. Toyota Avanza diisi maksimal 5 orang, sedangkan Toyota Hiace diisi maksimal 14 orang untuk menjaga kenyamanan penumpang."
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
      { "@type": "Place", "name": "Solo" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "120000"
    }
  };

  const introContent = `
    Bepergian dari Madiun ke Solo (Surakarta) kini semakin praktis, hemat, dan cepat dengan layanan <strong>travel Madiun Solo</strong> door to door dari Asoka Trans. Kami melayani penjemputan di wilayah Madiun Raya dan mengantarkan Anda sampai di alamat tujuan di Solo, Kartasura, Sukoharjo, Karanganyar, maupun stasiun/bandara Adi Soemarmo.<br/><br/>
    Rute travel Madiun Solo kami tempuh <strong>via Jalan Tol Trans Jawa</strong> penuh, sehingga memangkas waktu perjalanan secara signifikan menjadi hanya 1.5 jam saja. Sangat cocok bagi pebisnis yang mengejar jam penerbangan atau mahasiswa yang ingin pulang ke kampung halaman.<br/><br/>
    Setiap armada kami seperti Toyota Avanza, Toyota Hiace, dan Isuzu Elf dirawat secara intensif untuk menjamin kenyamanan maksimal, lengkap dengan sistem pendingin AC dingin, jok empuk, pengemudi ramah, dan jaminan pasti berangkat setiap hari.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Travel Madiun Solo"
      description="Jasa travel Madiun Solo door to door murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Travel Madiun Solo Murah Door to Door via Tol"
      heroSubtitle="Jadwal rutin pagi siang sore. Layanan antar jemput rumah ke rumah tercepat via Tol Trans Jawa. Dijamin nyaman & aman!"
      introTitle="Jasa Travel Tercepat & Terbaik Madiun - Solo"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Tiket & Carter Madiun Solo"
      priceSectionDesc="Tarif tiket per pax maupun tarif sewa mobil private carter drop off Madiun Solo."
      prices={prices}
      fleetLimit={3}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan tiket travel"
    />
  );
}
