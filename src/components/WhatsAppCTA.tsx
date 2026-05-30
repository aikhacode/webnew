"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_PROFILE, getWhatsAppLink } from "@/data/seoData";

interface WhatsAppCTAProps {
  customMessage?: string;
  customPhoneMessage?: string;
}

export default function WhatsAppCTA({ 
  customMessage = "Halo Admin Asoka Trans, saya ingin bertanya tentang ketersediaan rental mobil / travel Madiun.",
  customPhoneMessage
}: WhatsAppCTAProps) {
  const waUrl = getWhatsAppLink(customMessage);

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40 group">
        <div className="absolute right-0 bottom-full mb-3 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl border border-slate-800 animate-fade-in">
          Tanya CS via WhatsApp (24 Jam)
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/10"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 px-4 py-3 grid grid-cols-2 gap-3 shadow-2xl">
        <a
          href={`tel:${BUSINESS_PROFILE.phone}`}
          className="flex items-center justify-center gap-2 bg-slate-800 active:bg-slate-700 text-slate-200 font-bold py-3.5 px-4 rounded-xl text-sm border border-slate-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Telepon CS</span>
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 active:from-emerald-600 active:to-green-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm shadow-lg shadow-green-900/30 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat WhatsApp</span>
        </a>
      </div>
    </>
  );
}
