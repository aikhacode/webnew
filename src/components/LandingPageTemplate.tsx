import React from "react";
import Link from "next/link";
import { ShieldCheck, MessageCircle, Phone, ArrowRight, CheckCircle2, DollarSign } from "lucide-react";
import { BUSINESS_PROFILE, getWhatsAppLink, getBookingMessage } from "@/data/seoData";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import FleetSection from "./FleetSection";
import FAQSection from "./FAQSection";
import WhatsAppCTA from "./WhatsAppCTA";

export interface LandingPageTemplateProps {
  keyword: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introContent: string;
  priceSectionTitle: string;
  priceSectionDesc: string;
  prices: Array<{ name: string; capacity: string; price: string; note: string }>;
  fleetLimit?: number;
  faqs: Array<{ question: string; answer: string }>;
  serviceSchema: object;
  customCTA?: string;
}

export default function LandingPageTemplate({
  keyword,
  title,
  description,
  breadcrumbs,
  heroTitle,
  heroSubtitle,
  introTitle,
  introContent,
  priceSectionTitle,
  priceSectionDesc,
  prices,
  fleetLimit = 4,
  faqs,
  serviceSchema,
  customCTA = "Halo Admin Asoka Trans, saya ingin memesan layanan"
}: LandingPageTemplateProps) {
  const defaultBookingMsg = getBookingMessage(keyword, "Booking Langsung");
  const defaultWaUrl = getWhatsAppLink(defaultBookingMsg);

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full py-1.5 px-3.5 text-xs text-sky-400 font-semibold tracking-wide">
            Layanan Professional &bull; Asoka Trans
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            {heroTitle}
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href={getWhatsAppLink(`${customCTA} ${keyword}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Hubungi CS via WhatsApp (24 Jam)</span>
            </a>
            <a
              href={`tel:${BUSINESS_PROFILE.phone}`}
              className="flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 font-bold py-3.5 px-6 rounded-xl text-sm border border-slate-850 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Hubungi Telepon</span>
            </a>
          </div>
        </div>
      </section>

      {/* Copywriting & Intro Section */}
      <section className="py-16 bg-slate-900 text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {introTitle}
            </h2>
            <div className="w-12 h-1 bg-sky-400 rounded-full" />
            <div 
              className="text-slate-300 text-sm md:text-base leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: introContent }}
            />
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <DollarSign className="w-7 h-7 text-sky-400" />
              <span>{priceSectionTitle}</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">{priceSectionDesc}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="min-w-full divide-y divide-slate-850">
              <thead className="bg-slate-950">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Unit / Rute</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Kapasitas</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Tarif Harga</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {prices.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-300">{item.capacity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-sky-400">{item.price}</td>
                    <td className="px-6 py-4 text-xs text-slate-400">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-slate-900/40 border border-slate-850 rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 leading-normal">
              <strong>Catatan Penting:</strong> Tarif sewa di atas bersifat transparan dan negotiable. Hubungi admin kami via WhatsApp untuk mendapatkan harga bersih (all-in) termasuk bbm, tol, dan parkir sesuai rute perjalanan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Component (Showcase specific limit) */}
      <FleetSection limit={fleetLimit} title={`Pilihan Armada Rental untuk ${keyword}`} />

      {/* Trust factors section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Keunggulan Asoka Trans Madiun</h3>
              <p className="text-xs text-slate-400">Kami berkomitmen memberikan kenyamanan penuh dalam setiap jengkal perjalanan Anda di Karesidenan Madiun.</p>
              
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Jaminan unit prima, wangi, bersih & AC dingin.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Sopir profesional yang sopan dan terlatih.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Tepat waktu jemput sesuai jadwal.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Door to Door service & Carter Drop Bandara.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850 flex flex-col justify-center text-center space-y-4">
              <h4 className="font-bold text-white text-base">Butuh Penawaran Cepat?</h4>
              <p className="text-xs text-slate-400">Tim customer service kami online 24 jam siap melayani reservasi dan tanya jawab mengenai perjalanan Anda.</p>
              <a
                href={getWhatsAppLink(`Halo Admin Asoka Trans, saya ingin memesan unit rental/travel untuk ${keyword}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi Gratis via WA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection 
        faqs={faqs} 
        title={`FAQ - ${keyword}`}
        subtitle={`Pertanyaan umum yang sering ditanyakan mengenai layanan ${keyword}.`}
      />

      {/* Sticky mobile footer and WhatsApp widgets */}
      <WhatsAppCTA customMessage={`Halo Admin Asoka Trans, saya ingin memesan layanan ${keyword}.`} />
    </>
  );
}
