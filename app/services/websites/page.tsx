import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import WebsiteIllustration from "@/components/services/illustrations/WebsiteIllustration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Building — DxV Labs",
  description: "Custom websites engineered to convert. Mobile-first, SEO-ready, and delivered in 8–14 days. No templates — every site is built from scratch.",
};

const INCLUDES = [
  "Custom design (no templates)",
  "Mobile-first responsive build",
  "SEO foundations & meta setup",
  "Speed optimization (LCP <2s target)",
  "CMS integration (if needed)",
  "1 round of revisions included",
];

export default function WebsitesBuildingPage() {
  return (
    <ServiceDetailLayout
      num="01"
      label="Website Building"
      tagline="Sites engineered to convert, not just to look good. We design custom, ship fast, and build for performance from the ground up."
      includes={INCLUDES}
      timeline="8–14 days"
      accentColor="#FF5722"
      illustration={<WebsiteIllustration />}
      slug="websites"
    />
  );
}
