import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Sewa Elf Madiun Murah Isuzu Elf Long 19 Seat | Asoka Trans",
  description: "Jasa sewa Isuzu Elf Long di Madiun harga murah. Unit microbus kapasitas maksimal 19 orang, kabin luas, AC dingin merata, driver handal siap wisata & dinas.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/sewa-elf-madiun`,
  },
};

export default function SewaElfMadiunPage() {
  const keyword = "sewa elf madiun";
  
  const breadcrumbs = [
    { name: "Sewa Elf Madiun", href: "/sewa-elf-madiun" }
  ];

  const prices = [
    { name: "Isuzu Elf Long", capacity: "19 Kursi", price: "Rp 1.100.000", note: "Mobil + Supir / Full Day (Dalam Kota Madiun)" },
    { name: "Isuzu Elf Long All-In", capacity: "19 Kursi", price: "Rp 1.500.000", note: "Mobil + Supir + BBM + Tol (Rute Surabaya PP)" },
    { name: "Isuzu Elf Long (Luar Kota)", capacity: "19 Kursi", price: "Rp 1.300.000", note: "Mobil + Supir / Full Day (Luar Kota, Min 2 Hari)" },
  ];

  const faqs = [
    {
      question: "Berapa kapasitas maksimal Isuzu Elf Long?",
      answer: "Isuzu Elf Long yang kami sediakan memiliki kapasitas maksimal hingga 19 orang penumpang (termasuk kursi baris belakang)."
    },
    {
      question: "Apakah bagasi Elf Long cukup luas untuk membawa barang banyak?",
      answer: "Ya, Isuzu Elf Long dirancang khusus dengan sisa ruang belakang yang lapang dan muat untuk puluhan tas ransel atau kardus oleh-oleh rombongan."
    },
    {
      question: "Apakah sewa Elf ini sudah termasuk solar (BBM)?",
      answer: "Harga Rp 1.100.000 adalah sewa unit dan jasa sopir saja. Pembelian bahan bakar solar ditanggung oleh penyewa sesuai jarak pemakaian. Kami juga menyediakan opsi tarif All-In."
    },
    {
      question: "Untuk pariwisata ke luar kota, apakah driver sudah tahu jalannya?",
      answer: "Tentu saja! Sopir kami sangat berpengalaman dalam menempuh perjalanan pariwisata ke Bali, Jakarta, Jogja, Bandung, maupun ziarah wali di sepanjang Jawa Timur & Jawa Tengah."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Elf Rental Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_PROFILE.name
    },
    "areaServed": {
      "@type": "Place",
      "name": "Madiun"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "1100000"
    }
  };

  const introContent = `
    Mencari kendaraan rombongan berkapasitas besar di atas 15 orang di Madiun? Layanan <strong>sewa Elf Madiun</strong> dari Asoka Trans adalah jawabannya. Kami menyediakan armada Isuzu Elf Long berkapasitas 19 seat yang tangguh, irit, dan sangat andal untuk perjalanan jarak jauh.<br/><br/>
    Isuzu Elf Long merupakan andalan transportasi pariwisata kelompok di Indonesia karena memiliki ketahanan mesin diesel yang handal di segala medan, kabin yang lega, serta ruang bagasi belakang yang sangat besar untuk membawa koper dan barang bawaan rombongan.<br/><br/>
    Armada sewa Elf Madiun kami dilengkapi dengan pendingin AC ducting yang dingin merata ke setiap baris kursi penumpang, audio system untuk hiburan bernyanyi (karaoke keluarga) selama di perjalanan, serta disetir oleh driver profesional kami yang ramah dan sabar melayani rombongan keluarga maupun instansi.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Sewa Elf Madiun"
      description="Sewa Isuzu Elf Long di Madiun murah terpercaya."
      breadcrumbs={breadcrumbs}
      heroTitle="Sewa Elf Madiun Murah Isuzu Elf Long 19 Seat"
      heroSubtitle="Layanan rental Elf Long terpercaya di Madiun untuk perjalanan rombongan keluarga besar, wisata, gathering, dan dinas. Unit handal & driver berpengalaman."
      introTitle="Sewa Isuzu Elf Long Madiun Spesialis Rombongan Besar"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Sewa Elf Madiun Terbaru"
      priceSectionDesc="Rincian tarif sewa armada Isuzu Elf Long dalam kota Madiun maupun luar kota."
      prices={prices}
      fleetLimit={5}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan unit sewa Elf"
    />
  );
}
