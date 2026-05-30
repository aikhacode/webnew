import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/seoData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-400 font-bold text-xs tracking-widest uppercase">
            Testimoni Pelanggan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
            Apa Kata Mereka Tentang Kami?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-400 text-base md:text-lg">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut ulasan jujur dari pelanggan setia Asoka Trans.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testi, i) => (
            <div 
              key={i} 
              className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 md:p-8 relative shadow-lg hover:border-slate-700 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-800/60 pointer-events-none" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testi.rating)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed italic mb-6">
                &ldquo;{testi.comment}&rdquo;
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 text-slate-950 font-extrabold rounded-full flex items-center justify-center text-sm">
                  {testi.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">
                    {testi.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {testi.location} &bull; {testi.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-900 pt-16">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-white">4.9/5</p>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Rating Google Maps</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-white">10K+</p>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Pelanggan Puas</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-white">50+</p>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Armada Prima</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-white">100%</p>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Garansi Berangkat</p>
          </div>
        </div>

      </div>
    </section>
  );
}
