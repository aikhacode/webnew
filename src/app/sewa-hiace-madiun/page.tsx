import React from "react";
import type { Metadata } from "next";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const metadata: Metadata = {
  title: "Sewa Hiace Madiun Murah Toyota Commuter & Premio | Asoka Trans",
  description: "Sewa Toyota Hiace di Madiun harga murah terlengkap. Menyediakan armada Hiace Commuter (14 seat) & Hiace Premio (11 seat) bersih & prima + driver berpengalaman.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/sewa-hiace-madiun`,
  },
};

export default function SewaHiaceMadiunPage() {
  const keyword = "sewa hiace madiun";
  
  const breadcrumbs = [
    { name: "Sewa Hiace Madiun", href: "/sewa-hiace-madiun" }
  ];

  const prices = [
    { name: "Toyota Hiace Commuter", capacity: "14 Kursi", price: "Rp 1.100.000", note: "Mobil + Supir / Full Day (Dalam Kota Madiun)" },
    { name: "Toyota Hiace Premio", capacity: "11 Kursi", price: "Rp 1.300.000", note: "Mobil + Supir / Full Day (Dalam Kota Madiun)" },
    { name: "Toyota Hiace Commuter All-In", capacity: "14 Kursi", price: "Rp 1.500.000", note: "Mobil + Supir + BBM + Tol (Rute Surabaya PP)" },
    { name: "Toyota Hiace Premio All-In", capacity: "11 Kursi", price: "Rp 1.800.000", note: "Mobil + Supir + BBM + Tol (Rute Surabaya PP)" },
  ];

  const faqs = [
    {
      question: "Apa perbedaan sewa Hiace Commuter dan Premio?",
      answer: "Hiace Commuter memiliki kapasitas hingga 14-15 kursi dengan model standar yang sangat nyaman. Sementara Hiace Premio menawarkan desain eksterior semi-bonnet yang lebih modern, kabin yang lebih kedap, suspensi ekstra nyaman, dan kapasitas 11-12 kursi."
    },
    {
      question: "Apakah tarif sewa Hiace Madiun sudah termasuk BBM dan Tol?",
      answer: "Tarif sewa dasar (Rp 1.100.000 untuk Commuter) baru mencakup armada mobil dan driver saja. BBM, tol, parkir, dan akomodasi driver ditanggung penyewa. Namun kami menyediakan paket All-In agar Anda tidak pusing mengurusi hal tersebut."
    },
    {
      question: "Apakah bisa menyewa Hiace lepas kunci?",
      answer: "Sama seperti armada kami lainnya, sewa Hiace di Madiun dari Asoka Trans hanya dilayani beserta driver profesional kami demi menjaga keselamatan perjalanan rombongan Anda."
    },
    {
      question: "Apakah Hiace ini cocok untuk perjalanan pegunungan seperti ke Sarangan?",
      answer: "Sangat cocok! Toyota Hiace dibekali mesin diesel bertenaga besar yang sangat tangguh di tanjakan terjal seperti di lereng Gunung Lawu Ceto/Sarangan."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hiace Rental Service",
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
    Merencanakan acara kelompok seperti liburan keluarga besar, ziarah wali, kunjungan kerja dinas instansi, wedding car rombongan besan, maupun gathering perusahaan swasta di Madiun? Jasa <strong>sewa Hiace Madiun</strong> dari Asoka Trans adalah solusi transportasi terbaik untuk Anda.<br/><br/>
    Toyota Hiace diakui sebagai standar emas kendaraan travel kelompok mini di Indonesia. Dibandingkan menyewa 2 atau 3 mobil kecil seperti Avanza, sewa 1 unit Toyota Hiace jauh lebih efisien dari segi konsumsi BBM, bayar tol, serta memudahkan koordinasi rombongan selama di jalan.<br/><br/>
    Kami menyediakan dua jenis unit Hiace terbaik: <strong>Hiace Commuter</strong> berkapasitas 14-15 seat untuk efisiensi maksimal, serta <strong>Hiace Premio</strong> berkapasitas 11-12 seat untuk kenyamanan eksekutif kelas VIP. Seluruh unit kami terjamin kebersihan kabinnya, wangi, ber-AC dingin per kepala, serta disetir oleh driver profesional yang sabar dan berpengalaman.
  `;

  return (
    <LandingPageTemplate
      keyword={keyword}
      title="Sewa Hiace Madiun"
      description="Sewa Toyota Hiace di Madiun murah terpercaya."
      breadcrumbs={breadcrumbs}
      heroTitle="Sewa Hiace Madiun Murah Toyota Commuter & Premio"
      heroSubtitle="Layanan sewa Hiace terpercaya di Madiun untuk perjalanan rombongan dinas, wisata, keluarga. Unit prima, harum, bersih, driver ramah."
      introTitle="Sewa Hiace Madiun Professional & Berpengalaman"
      introContent={introContent}
      priceSectionTitle="Daftar Harga Sewa Hiace Madiun Terbaru"
      priceSectionDesc="Tarif sewa mobil plus driver dalam kota Madiun maupun paket All-In perjalanan luar kota."
      prices={prices}
      fleetLimit={5}
      faqs={faqs}
      serviceSchema={serviceSchema}
      customCTA="Halo Admin Asoka Trans, saya ingin memesan unit sewa Hiace"
    />
  );
}
