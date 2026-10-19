import { profile } from "@/data/portfolio";

// On Vercel the production domain is provided automatically; otherwise fall back to the value in portfolio.ts.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : profile.siteUrl)
).replace(/\/$/, "");
