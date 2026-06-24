import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import EcommerceIllustration from "@/components/services/illustrations/EcommerceIllustration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Specialization — DxV Labs",
  description: "Shopify and WooCommerce stores with inventory automation, payment gateways, and post-purchase flows built in. Stores that sell more with less manual work.",
};

const INCLUDES = [
  "Shopify / WooCommerce setup",
  "Product import & configuration",
  "Payment gateway integration",
  "Inventory automation",
  "Post-purchase email flows",
  "Upsell & cross-sell systems",
];

export default function EcommerceSpecializationPage() {
  return (
    <ServiceDetailLayout
      num="05"
      label="E-commerce Specialization"
      tagline="Stores built to sell more, with less hands-on work. From Shopify setup to post-purchase flows — every part of the buying journey, automated."
      includes={INCLUDES}
      timeline="7–12 days"
      accentColor="#FF5722"
      illustration={<EcommerceIllustration />}
      slug="ecommerce"
    />
  );
}
