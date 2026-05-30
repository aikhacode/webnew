import { MetadataRoute } from "next";
import { BUSINESS_PROFILE } from "@/data/seoData";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS_PROFILE.websiteUrl}/sitemap.xml`,
  };
}
