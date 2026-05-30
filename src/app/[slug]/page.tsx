import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { 
  getProgrammaticPageData, 
  getProgrammaticRoutes, 
  BUSINESS_PROFILE,
  getBookingMessage,
  getWhatsAppLink
} from "@/data/seoData";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes at build time for programmatic SEO
export async function generateStaticParams() {
  const routes = getProgrammaticRoutes();
  return routes.map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for each city/route combination
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getProgrammaticPageData(slug);
  
  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.metaDesc,
    alternates: {
      canonical: data.canonical,
    },
  };
}

export default async function ProgrammaticSeoPage({ params }: Props) {
  const { slug } = await params;
  const data = getProgrammaticPageData(slug);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { name: data.heading, href: `/${slug}` }
  ];

  // Dynamically build prices based on service type
  interface PriceItem {
    name: string;
    capacity: string;
    price: string;
    note: string;
  }
  let pricesList: PriceItem[] = [];
  if (data.serviceType === "rental" || data.serviceType === "carter") {
    pricesList = [
      { name: "Toyota Avanza", capacity: "6 Pax", price: data.priceStart, note: "Mobil + Driver / 12 Jam" },
      { name: "Toyota Innova Reborn", capacity: "7 Pax", price: "Rp 650.000", note: "Mobil + Driver / 12 Jam" },
      { name: "Toyota Hiace Commuter", capacity: "14 Pax", price: "Rp 1.100.000", note: "Mobil + Driver / Full Day" },
      { name: "Toyota Hiace Premio", capacity: "11 Pax", price: "Rp 1.300.000", note: "Mobil + Driver / Full Day" },
      { name: "Isuzu Elf Long", capacity: "19 Pax", price: "Rp 1.100.000", note: "Mobil + Driver / Full Day" },
    ];
  } else if (data.serviceType === "travel") {
    pricesList = [
      { name: `Tiket Reguler Travel Madiun ${data.city}`, capacity: "Per Pax", price: data.priceStart, note: "Door to Door via Tol" },
      { name: `Carter Avanza Madiun ${data.city}`, capacity: "Maks 5 Pax", price: "Rp 800.000", note: "Mobil + Driver + BBM + Tol All-In" },
      { name: `Carter Innova Madiun ${data.city}`, capacity: "Maks 6 Pax", price: "Rp 1.000.000", note: "Mobil + Driver + BBM + Tol All-In" },
    ];
  } else if (data.serviceType === "drop") {
    pricesList = [
      { name: `Private Avanza (Drop Juanda ke ${data.city})`, capacity: "Maks 5 Pax", price: data.priceStart, note: "Mobil + Driver + BBM + Tol All-In" },
      { name: `Private Innova (Drop Juanda ke ${data.city})`, capacity: "Maks 6 Pax", price: "Rp 1.000.000", note: "Mobil + Driver + BBM + Tol All-In" },
      { name: `Private Hiace (Drop Juanda ke ${data.city})`, capacity: "Maks 14 Pax", price: "Rp 1.500.000", note: "Mobil + Driver + BBM + Tol All-In" },
    ];
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": data.serviceType === "rental" ? "Car Rental" : "Passenger Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_PROFILE.name
    },
    "areaServed": {
      "@type": "Place",
      "name": data.city
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": data.priceStart.replace(/[^0-9]/g, "")
    }
  };

  const bookingMsg = getBookingMessage(data.keyword, "Booking Programmatic");

  return (
    <LandingPageTemplate
      keyword={data.keyword}
      title={data.heading}
      description={data.metaDesc}
      breadcrumbs={breadcrumbs}
      heroTitle={data.heading}
      heroSubtitle={data.subheading}
      introTitle={`Jasa Layanan Profesional di Area ${data.city}`}
      introContent={data.introText}
      priceSectionTitle={`Daftar Harga & Tarif ${data.heading}`}
      priceSectionDesc={`Daftar estimasi tarif yang kompetitif untuk rute dan unit di wilayah ${data.city}.`}
      prices={pricesList}
      fleetLimit={3}
      faqs={data.faqs}
      serviceSchema={serviceSchema}
      customCTA={bookingMsg}
    />
  );
}
