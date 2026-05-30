import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Travel Madiun Malang Murah Door to Door | Asoka Trans",
  description: "Layanan travel Madiun Malang PP harga murah. Jadwal keberangkatan rutin pagi siang malam, armada nyaman (Hiace/Avanza) + driver handal ramah, antar jemput rumah.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/travel-madiun-malang`,
  },
};

export default function TravelMadiunMalangPage() {
  const keyword = "travel madiun malang";
  
  const breadcrumbs = [
    { name: "Travel Madiun Malang", href: "/travel-madiun-malang" }
  ];

  const prices = [
    { name: "Tiket Reguler (Malang Kota)", capacity: "Per Pax", price: "Rp 160.000", note: "Antar Jemput Door to Door via Tol" },
    { name: "Tiket Reguler (Batu / Kabupaten)", capacity: "Per Pax", price: "Rp 190.000", note: "Jangkauan Luas & Antar Jemput Rumah" },
    { name: "Carter Drop (Avanza)", capacity: "Maks 5 Pax", price: "Rp 900.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Innova Reborn)", capacity: "Maks 6 Pax", price: "Rp 1.100.000", note: "Mobil + Supir + BBM + Tol All-In" },
    { name: "Carter Drop (Hiace Commuter)", capacity: "Maks 14 Pax", price: "Rp 1.600.000", note: "Mobil + Supir + BBM + Tol All-In" },
  ];

  const faqs = [
    {
      question: "Kapan jadwal travel Madiun Malang berangkat?",
      answer: "Jadwal keberangkatan travel Madiun Malang di Asoka Trans adalah: Pagi jam 07.00 WIB, Siang jam 13.00 WIB, dan Malam jam 23.00 WIB."
    },
    {
      question: "Apakah rute Madiun Malang lewat jalan tol?",
      answer: "Ya, untuk efisiensi waktu, armada kami melewati jalan tol Trans Jawa segmen Madiun - Kertosono - Singosari Malang agar perjalanan cepat dan nyaman."
    },
    {
      question: "Berapa jam estimasi perjalanan Madiun ke Malang?",
      answer: "Waktu tempuh normal via Tol adalah sekitar 3 hingga 3.5 jam perjalanan dari Madiun menuju Kota Malang."
    },
    {
      question: "Bagaimana sistem penjemputannya?",
      answer: "Sistem kami adalah Door to Door. Sopir kami akan menjemput Anda langsung di rumah (area Madiun, Caruban, Jiwan, dll) dan mengantar sampai alamat tujuan Anda di Malang."
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
      { "@type": "Place", "name": "Malang" },
      { "@type": "Place", "name": "Batu" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "160000"
    }
  };

  const introContent = `
    Merencanakan perjalanan dari Madiun ke Malang untuk berwisata, kuliah, dinas, atau menengok kerabat? Asoka Trans menyediakan layanan <strong>travel Madiun Malang</strong> terbaik dengan armada handal dan sopir berpengalaman. Kami melayani antar jemput door to door, membebaskan Anda dari kerepotan berpindah kendaraan di jalan.<br/><br/>
    Rute travel Madiun Malang kami melewati <strong>jalan tol Kertosono - Singosari</strong> untuk memberikan kecepatan perjalanan maksimal dan meminimalisir waktu lelah di jalan. Armada kami meliputi Toyota Avanza, Toyota Hiace, dan Isuzu Elf Long yang bersih, nyaman, dan ber-AC dingin.<br/><br/>
    Jaminan kenyamanan tinggi dengan jok empuk, pengemudi ramah yang hafal jalanan Malang Raya, serta sistem pemesanan online cepat via WhatsApp 24 jam.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Travel Madiun Malang"
      description="Jasa travel Madiun Malang door to door murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Travel Madiun Malang Murah Door to Door & Lewat Tol"
      heroSubtitle="Jadwal lengkap pagi siang malam. Penjemputan dari depan rumah di Madiun menuju kota Malang & Batu. Pesan kursi Anda hari ini!"
      introTitle="Perjalanan Nyaman & Aman Madiun ke Malang Raya"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Tiket & Carter Madiun Malang"
      priceSectionDesc="Tarif tiket per pax maupun tarif sewa mobil private carter drop off Madiun Malang."
      prices={prices}
      fleetLimit={3}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan tiket travel"
    />
  );
}
