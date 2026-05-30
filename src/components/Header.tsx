"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { BUSINESS_PROFILE, getWhatsAppLink } from "@/data/seoData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rental Mobil", href: "/rental-mobil-madiun" },
    { name: "Travel Surabaya", href: "/travel-madiun-surabaya" },
    { name: "Sewa Hiace", href: "/sewa-hiace-madiun" },
    { name: "Sewa Elf", href: "/sewa-elf-madiun" },
    { name: "Carter Drop Juanda", href: "/drop-bandara-juanda-madiun" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3"
          : "bg-slate-900 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 text-transparent bg-clip-text font-extrabold text-2xl">
                ASOKA
              </span>
              <span className="text-sky-400 font-semibold">TRANS</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
              Madiun & Travel Agent
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-sky-400 font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_PROFILE.phone}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm font-semibold"
            >
              <div className="bg-slate-800 p-2 rounded-full border border-slate-700">
                <Phone className="w-4 h-4 text-sky-400" />
              </div>
              <span className="hidden xl:inline">{BUSINESS_PROFILE.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppLink("Halo Admin Asoka Trans, saya ingin memesan layanan rental mobil / travel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-2.5 px-5 rounded-full text-sm shadow-md shadow-green-900/20 hover:shadow-green-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pesan Sekarang</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-slate-900 border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-screen visible py-6" : "opacity-0 max-h-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-semibold text-base transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 px-4">
            <a
              href={`tel:${BUSINESS_PROFILE.phone}`}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-4 rounded-xl text-sm border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Telepon</span>
            </a>
            <a
              href={getWhatsAppLink("Halo Admin Asoka Trans, saya ingin memesan layanan rental mobil / travel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
