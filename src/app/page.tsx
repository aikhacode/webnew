import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Users, 
  Check, 
  Star, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Calendar, 
  Navigation,
  Car,
  Compass
} from "lucide-react";
import { 
  BUSINESS_PROFILE, 
  FLEET_DATA, 
  TRAVEL_ROUTES, 
  GENERAL_FAQS, 
  getWhatsAppLink, 
  getBookingMessage,
  CITIES_SERVED
} from "@/data/seoData";
import { BLOG_POSTS } from "@/data/blogData";
import FleetSection from "@/components/FleetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function HomePage() {
  const latestPosts = BLOG_POSTS.slice(0, 3);
  
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_PROFILE.name,
    "image": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600&auto=format&fit=crop",
    "@id": BUSINESS_PROFILE.websiteUrl,
    "url": BUSINESS_PROFILE.websiteUrl,
    "telephone": BUSINESS_PROFILE.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Ring Road Barat No. 88",
      "addressLocality": "Madiun",
      "addressRegion": "Jawa Timur",
      "postalCode": "63125",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.6298,
      "longitude": 111.5208
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      BUSINESS_PROFILE.socials.facebook,
      BUSINESS_PROFILE.socials.instagram
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full py-1.5 px-3.5 text-xs text-sky-400 font-semibold tracking-wide">
                <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
                <span>No.1 Rental Mobil & Travel Agent di Madiun</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Rental Mobil Madiun & <br />
                <span className="bg-gradient-to-r from-blue-400 to-sky-300 text-transparent bg-clip-text">
                  Travel Madiun Surabaya
                </span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Butuh rental mobil madiun atau travel madiun surabaya yang murah, bersih, dan bergaransi berangkat? Asoka Trans menyediakan sewa Avanza, Innova Reborn, Zenix, Hiace, dan Elf plus sopir profesional. Kami siap antar jemput door to door 24 jam!
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                  <div className="bg-emerald-500/10 p-1.5 rounded-full text-emerald-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Sopir Profesional</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                  <div className="bg-emerald-500/10 p-1.5 rounded-full text-emerald-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Unit Bersih & Prima</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                  <div className="bg-emerald-500/10 p-1.5 rounded-full text-emerald-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Pasti Berangkat</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={getWhatsAppLink("Halo Admin Asoka Trans, saya ingin memesan rental mobil / travel di Madiun.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-4 px-8 rounded-2xl text-base shadow-xl shadow-green-950/20 hover:shadow-green-900/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pesan via WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_PROFILE.phone}`}
                  className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold py-4 px-8 rounded-2xl text-base border border-slate-800 transition-colors"
                >
                  <Phone className="w-5 h-5 text-sky-400" />
                  <span>Hubungi Telepon</span>
                </a>
              </div>
            </div>

            {/* Quick Booking Form */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl" />
                <h3 className="text-xl font-bold text-white mb-2">Form Pemesanan Cepat</h3>
                <p className="text-xs text-slate-400 mb-6">Isi formulir untuk mendapatkan konfirmasi ketersediaan armada instan.</p>
                
                <form 
                  action={getWhatsAppLink("Pemesanan Cepat")}
                  method="GET"
                  target="_blank"
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pilih Layanan</label>
                    <select name="service" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-sky-500">
                      <option value="Rental Mobil + Driver">Rental Mobil + Driver</option>
                      <option value="Travel Door to Door">Travel Door to Door</option>
                      <option value="Carter Drop Bandara Juanda">Carter Drop Bandara Juanda</option>
                      <option value="Sewa Hiace / Elf Rombongan">Sewa Hiace / Elf Rombongan</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tanggal</label>
                      <input 
                        type="date" 
                        required 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-sky-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tipe Mobil</label>
                      <select name="unit" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-sky-500">
                        <option value="Avanza">Toyota Avanza</option>
                        <option value="Innova Reborn">Innova Reborn</option>
                        <option value="Hiace Commuter">Hiace Commuter</option>
                        <option value="Hiace Premio">Hiace Premio</option>
                        <option value="Elf Long">Elf Long</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Rincian Rute (Jemput & Antar)</label>
                    <textarea 
                      placeholder="Contoh: Jemput Kartoharjo Madiun, Antar Bandara Juanda Surabaya"
                      rows={2}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-sky-500 placeholder-slate-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm shadow-lg transition-all"
                  >
                    Kirim Permintaan Sewa &raquo;
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-400 font-bold text-xs tracking-widest uppercase">
              Layanan Utama Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Solusi Perjalanan Terbaik di Karesidenan Madiun
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/40 transition-all group">
              <div className="bg-sky-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rental Mobil + Driver</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Sewa mobil harian/mingguan dengan sopir profesional ramah. Armada Avanza, Innova Reborn & Zenix terbaru.
              </p>
              <Link href="/rental-mobil-madiun" className="text-sky-400 hover:text-sky-300 font-semibold text-xs flex items-center gap-1.5 mt-auto">
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/40 transition-all group">
              <div className="bg-sky-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Travel Madiun Surabaya</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Layanan travel reguler door-to-door (antar jemput rumah) Madiun - Surabaya PP berangkat setiap hari via full tol.
              </p>
              <Link href="/travel-madiun-surabaya" className="text-sky-400 hover:text-sky-300 font-semibold text-xs flex items-center gap-1.5 mt-auto">
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/40 transition-all group">
              <div className="bg-sky-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sewa Hiace & Elf</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Sewa Toyota Hiace Commuter/Premio dan Isuzu Elf Long untuk wisata keluarga, nikahan, ziarah wali, dinas rombongan.
              </p>
              <Link href="/sewa-hiace-madiun" className="text-sky-400 hover:text-sky-300 font-semibold text-xs flex items-center gap-1.5 mt-auto">
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/40 transition-all group">
              <div className="bg-sky-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Carter Drop Bandara</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Antar jemput khusus (drop off private) dari Karesidenan Madiun ke Bandara Juanda, Solo Adi Soemarmo, Malang, Jogja.
              </p>
              <Link href="/drop-bandara-juanda-madiun" className="text-sky-400 hover:text-sky-300 font-semibold text-xs flex items-center gap-1.5 mt-auto">
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Fleet Section Component */}
      <FleetSection limit={3} />

      {/* Route Pricing Table Section */}
      <section className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-400 font-bold text-xs tracking-widest uppercase">
              Rute & Tarif Travel
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Jadwal & Harga Travel Madiun Terlaris
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-slate-400 text-base">
              Tarif transparan perjalanan reguler door-to-door dengan jaminan keberangkatan tepat waktu via Tol Trans Jawa.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAVEL_ROUTES.map((route) => {
              const bookingMsg = getBookingMessage("Tiket Travel", `Travel Madiun ke ${route.destination}`);
              const waUrl = getWhatsAppLink(bookingMsg);

              return (
                <div key={route.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-sky-400 bg-sky-950 border border-sky-900 px-3 py-1 rounded-lg">
                        {route.origin} &raquo; {route.destination}
                      </span>
                      <span className="text-xl font-extrabold text-white">
                        {route.price} <span className="text-xs text-slate-500 font-normal">/ pax</span>
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                      <div className="flex justify-between border-b border-slate-800/60 pb-2">
                        <span className="text-slate-500">Estimasi Perjalanan:</span>
                        <span className="font-semibold text-slate-200">{route.travelTime}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/60 pb-2">
                        <span className="text-slate-500">Keberangkatan:</span>
                        <span className="font-semibold text-slate-200">{route.schedule.join(", ")}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-slate-500 block mb-1">Fasilitas & Keunggulan:</span>
                        <ul className="grid grid-cols-2 gap-1 text-[11px] text-slate-400">
                          {route.highlights.map((hl, index) => (
                            <li key={index} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Pesan Kursi Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-slate-100 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-sky-400 font-bold text-xs tracking-widest uppercase">
                Mengapa Memilih Kami?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Jaminan Perjalanan Terbaik Untuk Anda & Keluarga
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Sebagai spesialis rental mobil dan travel lokal Madiun, Asoka Trans memahami bahwa ketepatan waktu, kenyamanan unit, dan sopir yang profesional adalah kunci kepuasan perjalanan Anda.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Driver Profesional & Berpengalaman</h4>
                    <p className="text-slate-400 text-xs mt-1">Sopir ramah, tidak ugal-ugalan, hafal rute perkotaan Jawa Timur/Jawa Tengah.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Jadwal Keberangkatan Terjamin</h4>
                    <p className="text-slate-400 text-xs mt-1">Travel kami bergaransi pasti berangkat sesuai jam pemesanan yang disepakati.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Armada Terbaru, Harum, & Bersih</h4>
                    <p className="text-slate-400 text-xs mt-1">Seluruh unit dirawat berkala, mesin halus, AC dingin, menjamin kenyamanan maksimal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Graphic / Map Info */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white">Area Layanan Karesidenan Madiun</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Asoka Trans berbasis di Kota Madiun dan melayani penjemputan menyeluruh di wilayah-wilayah penyangga karesidenan berikut:
                </p>

                {/* Cities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CITIES_SERVED.map((city, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-850 px-4 py-2.5 rounded-xl text-center text-xs font-semibold text-slate-300">
                      {city}
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-900 pt-6">
                  <p className="text-xs text-slate-500 mb-2">Kantor Pusat Asoka Trans Madiun:</p>
                  <p className="text-sm font-semibold text-white mb-4">{BUSINESS_PROFILE.address}</p>
                  <a
                    href={BUSINESS_PROFILE.gmapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:underline font-bold"
                  >
                    <span>Lihat di Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials Component */}
      <TestimonialsSection />

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-sky-400 font-bold text-xs tracking-widest uppercase">
                Artikel & Berita Terbaru
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
                Tips Perjalanan & Info Wisata Madiun
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="text-sky-400 hover:text-sky-300 font-bold text-sm flex items-center gap-1.5 mt-4 md:mt-0"
            >
              <span>Lihat Semua Artikel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.slug} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:border-sky-500/40 transition-colors">
                <div className="relative h-48 bg-slate-800 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-sky-400 text-[10px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider z-10">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-slate-500 text-[11px] font-medium mb-2 inline-block">
                    {post.date} &bull; {post.readTime}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 mt-auto"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Component */}
      <FAQSection faqs={GENERAL_FAQS} />

      {/* Persistent WhatsApp widgets */}
      <WhatsAppCTA />
    </>
  );
}
