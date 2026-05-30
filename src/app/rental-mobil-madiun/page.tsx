import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Rental Mobil Madiun Murah Terpercaya + Driver | Asoka Trans",
  description: "Sewa mobil di Madiun harga murah terlengkap. Unit Avanza, Innova Reborn, Zenix, Hiace Commuter/Premio, Elf Long bersih & harum + driver profesional ramah.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/rental-mobil-madiun`,
  },
};

export default function RentalMobilMadiunPage() {
  const keyword = "rental mobil madiun";
  
  const breadcrumbs = [
    { name: "Rental Mobil Madiun", href: "/rental-mobil-madiun" }
  ];

  const prices = [
    { name: "Toyota Avanza", capacity: "6 Pax", price: "Rp 350.000", note: "Mobil + Driver / 12 Jam" },
    { name: "Toyota Innova Reborn", capacity: "7 Pax", price: "Rp 650.000", note: "Mobil + Driver / 12 Jam" },
    { name: "Toyota Innova Zenix", capacity: "7 Pax", price: "Rp 900.000", note: "Mobil + Driver / 12 Jam" },
    { name: "Toyota Hiace Commuter", capacity: "14 Pax", price: "Rp 1.100.000", note: "Mobil + Driver / Full Day" },
    { name: "Toyota Hiace Premio", capacity: "11 Pax", price: "Rp 1.300.000", note: "Mobil + Driver / Full Day" },
    { name: "Isuzu Elf Long", capacity: "19 Pax", price: "Rp 1.100.000", note: "Mobil + Driver / Full Day" },
    { name: "Toyota Alphard", capacity: "6 Pax", price: "Rp 2.500.000", note: "Mobil + Driver + All In / Full Day" },
  ];

  const faqs = [
    {
      question: "Apakah bisa sewa mobil di Madiun lepas kunci?",
      answer: "Mohon maaf, saat ini Asoka Trans hanya menyediakan jasa sewa mobil di Madiun dengan sopir (+driver). Ini demi keamanan unit serta kenyamanan penuh pelanggan agar tidak lelah menyetir."
    },
    {
      question: "Berapa tarif rental mobil Avanza di Madiun?",
      answer: "Tarif sewa mobil Avanza di Asoka Trans Madiun adalah mulai dari Rp 350.000 per 12 jam (belum termasuk BBM, Tol, dan makan driver)."
    },
    {
      question: "Apakah melayani sewa ke luar kota Madiun?",
      answer: "Ya, kami melayani rental mobil dari Madiun ke seluruh destinasi luar kota seperti Surabaya, Malang, Jogja, Solo, Semarang, Bandung, hingga Jakarta."
    },
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer: "Pemesanan sangat praktis, cukup klik tombol hubungi WhatsApp, tentukan tanggal sewa, dan konfirmasi unit serta alamat penjemputan Anda."
    }
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Car Rental Service",
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
      "price": "350000",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "350000",
        "priceCurrency": "IDR",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "12",
          "unitCode": "HUR"
        }
      }
    }
  };

  const introContent = `
    Asoka Trans hadir sebagai solusi utama bagi Anda yang mencari jasa <strong>rental mobil Madiun</strong> terpercaya, aman, dan harga kompetitif. Kami berkomitmen memberikan pengalaman perjalanan yang menyenangkan dengan unit kendaraan prima yang selalu terawat secara berkala.<br/><br/>
    Kami menyediakan berbagai jenis mobil mulai dari segmen keluarga seperti Toyota Avanza, mobil MPV premium Innova Reborn & Innova Zenix, hingga bus microbus seperti Toyota Hiace Commuter/Premio dan Isuzu Elf Long untuk kebutuhan rombongan besar. Untuk menunjang perjalanan eksklusif Anda, kami juga memiliki unit mewah Toyota Alphard.<br/><br/>
    Seluruh paket rental mobil Madiun di Asoka Trans didukung oleh driver-driver profesional yang ramah, sopan, bersih, serta sangat paham dengan seluk-beluk rute perjalanan lokal karesidenan Madiun (Magetan, Ponorogo, Ngawi) maupun rute perjalanan jarak jauh antarkota.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Rental Mobil Madiun"
      description="Sewa mobil Madiun murah terpercaya."
      breadcrumbs={breadcrumbs}
      heroTitle="Rental Mobil Madiun Murah Terpercaya + Driver Profesional"
      heroSubtitle="Sewa Avanza, Innova Reborn, Zenix, Hiace, Elf, & Alphard di Madiun dengan unit prima, wangi, bersih, dan driver ramah berpengalaman."
      introTitle="Pusat Jasa Sewa Mobil Terbaik di Karesidenan Madiun"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Rental Mobil Madiun Terbaru"
      priceSectionDesc="Berikut rincian tarif sewa armada kami untuk durasi pemakaian dalam kota Madiun."
      prices={prices}
      fleetLimit={6}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan unit"
    />
  );
}
