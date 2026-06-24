import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import AIIllustration from "@/components/services/illustrations/AIIllustration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Consulting — DxV Labs",
  description: "Custom AI workflows using GPT and Claude. We audit your operations, build automations, and hand over everything documented. No vague AI strategy — just working systems.",
};

const INCLUDES = [
  "AI workflow audit & mapping",
  "Custom GPT / Claude integration",
  "Document processing automation",
  "Customer support AI setup",
  "Internal ops automation",
  "Training & handover docs",
];

export default function AIAutomationPage() {
  return (
    <ServiceDetailLayout
      num="02"
      label="AI Automation & Consulting"
      tagline="Custom AI workflows that take the busywork off your plate. We audit, build, and document — so your team can use it without needing to understand it."
      includes={INCLUDES}
      timeline="5–10 days"
      accentColor="#FF5722"
      illustration={<AIIllustration />}
      slug="ai-automation"
    />
  );
}
