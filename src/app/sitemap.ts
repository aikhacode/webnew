import { MetadataRoute } from "next";
import { BUSINESS_PROFILE, getProgrammaticRoutes } from "@/data/seoData";
import { BLOG_POSTS } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BUSINESS_PROFILE.websiteUrl;

  // 1. Static Pages
  const staticPages = [
    "",
    "/rental-mobil-madiun",
    "/travel-madiun-surabaya",
    "/travel-madiun-malang",
    "/travel-madiun-jogja",
    "/travel-madiun-solo",
    "/sewa-hiace-madiun",
    "/sewa-elf-madiun",
    "/drop-bandara-juanda-madiun",
    "/carter-mobil-madiun",
    "/rental-alphard-madiun",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Programmatic Pages
  const programmaticRoutes = getProgrammaticRoutes().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Blog Detail Pages
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...programmaticRoutes, ...blogPages];
}
