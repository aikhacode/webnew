import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, BookOpen, Tag, ArrowLeft, MessageCircle } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { BUSINESS_PROFILE, getWhatsAppLink } from "@/data/seoData";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppCTA from "@/components/WhatsAppCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render blog posts at build-time
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: {
      canonical: `${BUSINESS_PROFILE.websiteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `${BUSINESS_PROFILE.websiteUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: "2026-05-15T00:00:00.000Z",
      authors: [post.author],
    }
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  // BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-05-15T00:00:00.000Z",
    "dateModified": "2026-05-15T00:00:00.000Z",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_PROFILE.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${BUSINESS_PROFILE.websiteUrl}/logo.png`
      }
    },
    "description": post.excerpt
  };

  const bookingMsg = `Halo Admin Asoka Trans, saya tertarik memesan sewa mobil / travel setelah membaca artikel: ${post.title}.`;

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Breadcrumbs items={breadcrumbs} />

      <article className="bg-slate-950 py-12 text-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Blog</span>
          </Link>

          {/* Heading */}
          <header className="space-y-4 mb-8">
            <span className="bg-slate-900 border border-slate-800 text-sky-400 text-[10px] font-extrabold py-1 px-3 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mt-2">
              {post.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-500 text-xs font-medium pt-2 border-b border-slate-900 pb-4">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-sky-500" />
                Oleh {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-sky-500" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-sky-500" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl mb-10 border border-slate-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Post Content */}
          <div 
            className="blog-content text-slate-300 text-sm sm:text-base leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-900 mt-10">
            {post.tags.map((tag, i) => (
              <span 
                key={i} 
                className="bg-slate-900 text-slate-400 text-xs px-3 py-1 rounded-lg border border-slate-850 flex items-center gap-1"
              >
                <Tag className="w-3.5 h-3.5 text-sky-500" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Call To Action Inside Post */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-bold text-white text-lg sm:text-xl">Butuh Layanan Rental Mobil & Travel Terpercaya?</h4>
              <p className="text-slate-400 text-xs">Pesan sekarang di Asoka Trans dengan pelayanan premium & harga terjangkau.</p>
            </div>
            <a
              href={getWhatsAppLink(bookingMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold py-3 px-6 rounded-xl text-sm transition-all whitespace-nowrap shadow-lg shadow-green-950/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Hubungi WA Admin</span>
            </a>
          </div>

        </div>
      </article>

      {/* Widgets */}
      <WhatsAppCTA customMessage={bookingMsg} />
    </>
  );
}
