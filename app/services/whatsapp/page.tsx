import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import WhatsAppIllustration from "@/components/services/illustrations/WhatsAppIllustration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Automation — DxV Labs",
  description: "WhatsApp Business API setup, lead capture flows, order confirmations, and support bots. Delivered in 3–6 days. Your business responds before you wake up.",
};

const INCLUDES = [
  "WhatsApp Business API setup",
  "Lead capture flows",
  "Order confirmation automation",
  "Support bot with human handoff",
  "Follow-up sequences",
  "Analytics dashboard",
];

export default function WhatsAppAutomationPage() {
  return (
    <ServiceDetailLayout
      num="03"
      label="WhatsApp Automation"
      tagline="Orders, support, and follow-ups — answered before you're awake. WhatsApp Business API connected end-to-end, from lead capture to post-sale."
      includes={INCLUDES}
      timeline="3–6 days"
      accentColor="#FF5722"
      illustration={<WhatsAppIllustration />}
      slug="whatsapp"
    />
  );
}
