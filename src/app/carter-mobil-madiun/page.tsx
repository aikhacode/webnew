import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Carter Mobil Madiun Murah ke Luar Kota All In | Asoka Trans",
  description: "Jasa carter mobil Madiun murah untuk perjalanan luar kota / dinas. Layanan private car Avanza, Innova, Hiace, Elf + driver ramah berpengalaman, harga All-In.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/carter-mobil-madiun`,
  },
};

export default function CarterMobilMadiunPage() {
  const keyword = "carter mobil madiun";
  
  const breadcrumbs = [
    { name: "Carter Mobil Madiun", href: "/carter-mobil-madiun" }
  ];

  const prices = [
    { name: "Toyota Avanza", capacity: "Maks 5 Pax", price: "Rp 350.000", note: "Mobil + Driver / 12 Jam (Luar Kota Tarif Menyesuaikan)" },
    { name: "Toyota Innova Reborn", capacity: "Maks 6 Pax", price: "Rp 650.000", note: "Mobil + Driver / 12 Jam (Luar Kota Tarif Menyesuaikan)" },
    { name: "Toyota Innova Zenix", capacity: "Maks 6 Pax", price: "Rp 900.000", note: "Mobil + Driver / 12 Jam (Luar Kota Tarif Menyesuaikan)" },
    { name: "Toyota Hiace Commuter", capacity: "Maks 14 Pax", price: "Rp 1.100.000", note: "Mobil + Driver / Full Day (Luar Kota Tarif Menyesuaikan)" },
  ];

  const faqs = [
    {
      question: "Apa bedanya rental mobil biasa dengan carter mobil?",
      answer: "Rental mobil biasa umumnya dihitung berdasarkan jam sewa (misal 12 jam) untuk pemakaian lokal. Sedangkan carter mobil lebih difokuskan untuk perjalanan point-to-point (sekali jalan) atau perjalanan ke luar kota tertentu dengan sistem harga paket All-In."
    },
    {
      question: "Bisa carter mobil ke kota mana saja?",
      answer: "Kami melayani carter mobil dari Madiun ke seluruh wilayah di pulau Jawa dan Bali, seperti Surabaya, Malang, Jogja, Solo, Semarang, Bandung, Jakarta, hingga Denpasar."
    },
    {
      question: "Apakah bisa memilih rute persinggahan selama perjalanan?",
      answer: "Tentu saja! Karena layanan ini bersifat privat (bukan umum), Anda bebas menentukan rute jalan, jam keberangkatan, serta berhenti untuk beristirahat atau makan di tempat favorit Anda."
    },
    {
      question: "Apakah tarif carter mobil sudah termasuk biaya penginapan driver?",
      answer: "Untuk perjalanan luar kota multi-hari (menginap), akomodasi & makan driver ditanggung oleh penyewa atau disepakati di awal berupa uang harian driver bersih."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Private Car Rental",
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
      "price": "350000"
    }
  };

  const introContent = `
    Menginginkan perjalanan luar kota yang fleksibel, tidak terikat jadwal kaku kereta atau bus, serta lebih privat untuk keluarga atau rekan kerja? Jasa <strong>carter mobil Madiun</strong> dari Asoka Trans adalah solusi paling tepat.<br/><br/>
    Dengan sistem carter mobil, Anda mendapatkan kenyamanan berkendara dengan mobil pribadi yang bersih dan harum tanpa perlu dicampur dengan penumpang lain. Anda bebas menentukan waktu jemput, rute perjalanan yang ingin dilalui, serta bebas mampir di lokasi wisata kuliner favorit di sepanjang jalan.<br/><br/>
    Kami menyediakan armada prima terbaru seperti Toyota Avanza, Toyota Innova Reborn, Innova Zenix, hingga microbus Hiace dan Elf. Seluruh perjalanan akan dikemudikan oleh driver profesional kami yang berpengalaman, ramah, sopan, serta hafal jalanan lintas provinsi.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Carter Mobil Madiun"
      description="Carter mobil Madiun luar kota murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Carter Mobil Madiun Murah ke Luar Kota All In"
      heroSubtitle="Layanan sewa mobil private carter dari Madiun ke kota mana saja. Driver handal, armada prima wangi, harga bersahabat All-In."
      introTitle="Jasa Carter Mobil Madiun Lintas Kota & Provinsi"
      introContent={introContent}
      priceSectionTitle="Estimasi Tarif Sewa & Carter Mobil Madiun"
      priceSectionDesc="Daftar tarif dasar sewa mobil plus driver di Madiun. Untuk tarif carter luar kota spesifik, silakan hubungi CS kami."
      prices={prices}
      fleetLimit={4}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan carter mobil"
    />
  );
}
