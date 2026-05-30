import React from "react";
import Image from "next/image";
import { User, CheckCircle, ArrowRight } from "lucide-react";
import { FLEET_DATA, getWhatsAppLink, getBookingMessage } from "@/data/seoData";

interface FleetSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function FleetSection({ 
  title = "Pilihan Armada Unggulan Asoka Trans", 
  subtitle = "Unit prima, wangi, bersih, dan siap melayani segala kebutuhan perjalanan Anda di Madiun sekitarnya.",
  limit
}: FleetSectionProps) {
  const fleets = limit ? FLEET_DATA.slice(0, limit) : FLEET_DATA;

  return (
    <section id="fleet" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-slate-400 text-base md:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleets.map((vehicle) => {
            const bookingMsg = getBookingMessage("Rental Mobil", `${vehicle.name} (+ Driver)`);
            const waUrl = getWhatsAppLink(bookingMsg);

            return (
              <div 
                key={vehicle.id} 
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex flex-col group hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Placeholder / Visual */}
                <div className="relative h-56 w-full bg-slate-800 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={`Sewa ${vehicle.name} Madiun`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-sky-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs tracking-wider uppercase z-10">
                    {vehicle.type}
                  </div>
                </div>


                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-400 text-sm font-semibold">
                      <User className="w-4 h-4 text-sky-400" />
                      <span>{vehicle.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and Action */}
                  <div className="border-t border-slate-900 pt-4 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Tarif Mulai</p>
                      <p className="text-lg font-extrabold text-sky-400">{vehicle.price}<span className="text-xs text-slate-400 font-normal"> / 12j</span></p>
                    </div>
                    
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md shadow-sky-950/20 hover:shadow-sky-900/30 transition-all"
                    >
                      <span>Sewa Mobil</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
