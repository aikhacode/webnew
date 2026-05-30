import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BUSINESS_PROFILE } from "@/data/seoData";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Add Home as the first item
  const allItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    ...items
  ];

  // Generate BreadcrumbList JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href.startsWith("http") ? item.href : `${BUSINESS_PROFILE.websiteUrl}${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-900 border-b border-slate-800 py-3 mt-[68px] lg:mt-[76px]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-400 font-medium overflow-x-auto whitespace-nowrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-600 flex-shrink-0" />}
                
                {isLast ? (
                  <span className="text-sky-400 font-semibold truncate max-w-[200px] md:max-w-xs" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="hover:text-slate-200 flex items-center gap-1 transition-colors"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 text-slate-500" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
