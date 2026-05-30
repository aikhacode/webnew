import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";
import { BUSINESS_PROFILE, CITIES_SERVED } from "@/data/seoData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Core internal services links
  const coreServices = [
    { name: "Rental Mobil Madiun", href: "/rental-mobil-madiun" },
    { name: "Sewa Hiace Madiun", href: "/sewa-hiace-madiun" },
    { name: "Sewa Elf Madiun", href: "/sewa-elf-madiun" },
    { name: "Carter Mobil Madiun", href: "/carter-mobil-madiun" },
    { name: "Rental Alphard Madiun", href: "/rental-alphard-madiun" },
  ];

  // Core travel destinations
  const travelRoutes = [
    { name: "Travel Madiun Surabaya", href: "/travel-madiun-surabaya" },
    { name: "Travel Madiun Malang", href: "/travel-madiun-malang" },
    { name: "Travel Madiun Jogja", href: "/travel-madiun-jogja" },
    { name: "Travel Madiun Solo", href: "/travel-madiun-solo" },
    { name: "Drop Bandara Juanda", href: "/drop-bandara-juanda-madiun" },
  ];

  // Programmatic regional pages to construct links
  const regionalLinks = CITIES_SERVED.filter(city => city !== "Madiun").map(city => ({
    name: `Rental Mobil ${city}`,
    href: `/rental-mobil-${city.toLowerCase()}`
  }));

  const dropRegionalLinks = ["Ponorogo", "Magetan", "Ngawi", "Caruban"].map(city => ({
    name: `Drop Juanda ${city}`,
    href: `/drop-juanda-${city.toLowerCase()}`
  }));

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-28 lg:pb-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Bio */}
          <div className="space-y-4">
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
            <p className="text-sm text-slate-400 leading-relaxed">
              Penyedia jasa rental mobil, sewa Hiace/Elf, carter drop bandara, dan travel door to door terpercaya di kota Madiun. Kami menjamin armada bersih, prima, serta driver berpengalaman demi kenyamanan perjalanan Anda.
            </p>
            <div className="flex items-center gap-3 pt-2 text-white">
              <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-bold">100% Bergaransi Aman</p>
                <p className="text-slate-400">Armada Berasuransi & Sopir Professional</p>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-4 border-sky-400 pl-3">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm">
              {coreServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-base tracking-wide border-l-4 border-sky-400 pl-3 pt-4">
              Rute Travel Favorit
            </h3>
            <ul className="space-y-2 text-sm">
              {travelRoutes.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors duration-150">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmatic Local Business Internal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-4 border-sky-400 pl-3">
              Regional Coverage
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {regionalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors duration-150 block truncate">
                    {link.name}
                  </Link>
                </li>
              ))}
              {dropRegionalLinks.map((link) => (
                <li key={link.name} className="col-span-2">
                  <Link href={link.href} className="hover:text-sky-400 transition-colors duration-150 block truncate">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP (Name, Address, Phone) & Map Link */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-4 border-sky-400 pl-3">
              Kontak Resmi (NAP)
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {BUSINESS_PROFILE.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_PROFILE.phone}`} className="hover:text-sky-400 font-semibold text-slate-200">
                  {BUSINESS_PROFILE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_PROFILE.email}`} className="hover:text-sky-400 text-slate-300">
                  {BUSINESS_PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-300">Layanan CS: 24 Jam (Setiap Hari)</span>
              </li>
            </ul>
            <div className="pt-2">
              <a 
                href={BUSINESS_PROFILE.gmapsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5 underline"
              >
                Petunjuk Arah Google Maps &raquo;
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {currentYear} {BUSINESS_PROFILE.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-1 text-slate-600">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>in Madiun for Local Business Asokatrans.com.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
