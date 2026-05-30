import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Rental Alphard Madiun Mewah VIP & Wedding Car | Asoka Trans",
  description: "Sewa Toyota Alphard di Madiun harga terjangkau. Menyediakan unit Alphard Transformers & Vellfire mewah bersih + driver standar VIP protokoler untuk pejabat & pengantin.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/rental-alphard-madiun`,
  },
};

export default function RentalAlphardMadiunPage() {
  const keyword = "rental alphard madiun";
  
  const breadcrumbs = [
    { name: "Rental Alphard Madiun", href: "/rental-alphard-madiun" }
  ];

  const prices = [
    { name: "Toyota Alphard Transformers", capacity: "6 Kursi", price: "Rp 2.500.000", note: "Mobil + Driver / 12 Jam (Dalam Kota Madiun)" },
    { name: "Toyota Alphard Transformers All-In", capacity: "6 Kursi", price: "Rp 3.000.000", note: "Mobil + Driver + BBM + Tol All-In (Dalam Jawa Timur)" },
    { name: "Toyota Alphard (Wedding Car Pack)", capacity: "6 Kursi", price: "Rp 2.800.000", note: "Mobil + Driver + BBM + Hiasan Bunga Pengantin / 12 Jam" },
  ];

  const faqs = [
    {
      question: "Apakah rental Alphard di Madiun bisa lepas kunci?",
      answer: "Mohon maaf, sewa Alphard di Asoka Trans hanya kami layani dengan driver profesional kami yang berpengalaman dalam standar pelayanan VIP protokoler."
    },
    {
      question: "Apakah harga rental Alphard sudah termasuk BBM dan Tol?",
      answer: "Kami menawarkan tarif dasar sewa unit + driver (belum bbm/tol), serta paket All-In (sudah termasuk bbm premium, tol Trans Jawa, dan parkir). Untuk sewa wedding car, kami juga menyediakan paket include dekorasi bunga."
    },
    {
      question: "Berapa kapasitas duduk Toyota Alphard?",
      answer: "Toyota Alphard dirancang untuk kenyamanan maksimal VIP, memiliki 2 captain seats di baris tengah dan muat maksimal 6 orang penumpang di dalam kabin."
    },
    {
      question: "Bagaimana cara memesan Alphard untuk mobil pengantin?",
      answer: "Disarankan untuk melakukan pemesanan minimal 1-2 minggu sebelum hari H acara pernikahan guna menjamin ketersediaan unit dan koordinasi dekorasi bunga pengantin."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Car Rental",
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
      "price": "2500000"
    }
  };

  const introContent = `
    Membutuhkan kendaraan kelas premium untuk menyambut tamu penting perusahaan, kunjungan pejabat dinas instansi, tamu VVIP kenegaraan, maupun untuk kebutuhan mobil pengantin (wedding car) mewah di hari istimewa Anda? Layanan <strong>rental Alphard Madiun</strong> dari Asoka Trans adalah pilihan kemewahan mutlak yang tidak tertandingi.<br/><br/>
    Toyota Alphard diakui secara global sebagai representasi kenyamanan, prestise, dan kemewahan dalam berkendara. Dengan kabin super kedap, suspensi independen yang sangat halus, dual sunroof, serta captain seat berlapis kulit asli berfitur lengkap, perjalanan Anda akan terasa seperti berada di kabin pesawat kelas bisnis.<br/><br/>
    Seluruh paket sewa Alphard Madiun kami dikemudikan oleh driver-driver pilihan dengan standar pelayanan VIP protokoler yang sopan, berpakaian rapi, mengutamakan keselamatan, privasi tinggi, serta ketepatan waktu penjemputan.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Rental Alphard Madiun"
      description="Sewa Toyota Alphard mewah di Madiun murah."
      breadcrumbs={breadcrumbs}
      heroTitle="Rental Alphard Madiun Mewah VIP & Wedding Car"
      heroSubtitle="Sewa Toyota Alphard & Vellfire di Madiun untuk dinas pejabat, tamu VVIP, maupun mobil pengantin. Layanan driver VIP profesional."
      introTitle="Layanan Sewa Mobil Mewah Kelas Eksekutif Terbaik di Madiun"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Rental Alphard Madiun Terbaru"
      priceSectionDesc="Daftar tarif sewa premium unit Toyota Alphard plus driver dalam kota Madiun maupun paket wedding car."
      prices={prices}
      fleetLimit={7}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan unit Alphard"
    />
  );
}
