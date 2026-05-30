import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, BookOpen, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { BUSINESS_PROFILE } from "@/data/seoData";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Blog & Info Travel Madiun Terbaru | Asoka Trans",
  description: "Dapatkan tips sewa mobil, panduan rute travel, info destinasi wisata populer di Madiun, Magetan, Ponorogo, Ngawi, Solo, Surabaya, dan Jogja.",
  alternates: {
    canonical: `${BUSINESS_PROFILE.websiteUrl}/blog`,
  },
};

export default function BlogListingPage() {
  const breadcrumbs = [
    { name: "Blog", href: "/blog" }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Blog & Informasi Perjalanan
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Panduan lengkap wisata lokal, tips sewa mobil, jadwal transportasi, serta info rute perjalanan karesidenan Madiun terupdate.
            </p>
          </div>

          {/* Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.slug} 
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:border-sky-500/40 transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative h-52 bg-slate-800 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-350"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/95 backdrop-blur-md text-sky-400 text-[10px] font-extrabold py-1 px-2.5 rounded-full uppercase tracking-wider border border-slate-800 z-10">
                    {post.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-500 text-[11px] font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-sky-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-850 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                      <Tag className="w-3 h-3 text-sky-500" />
                      <span>{post.tags[0]}</span>
                    </span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-xs text-sky-400 hover:text-sky-300 font-extrabold flex items-center gap-1 transition-colors"
                    >
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Floating CTA */}
      <WhatsAppCTA customMessage="Halo Admin Asoka Trans, saya ingin memesan rental mobil / travel setelah membaca artikel blog Anda." />
    </>
  );
}
