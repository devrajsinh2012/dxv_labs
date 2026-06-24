import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import MarketingIllustration from "@/components/services/illustrations/MarketingIllustration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Automation — DxV Labs",
  description: "Email sequences, social posting, ad campaigns, and lead scoring — all automated. We build marketing systems that run on their own and get smarter over time.",
};

const INCLUDES = [
  "Email marketing setup & sequences",
  "Social posting automation",
  "Ad campaign automation",
  "Lead scoring & nurturing",
  "Weekly performance reports",
  "Monthly strategy review",
];

export default function MarketingAutomationPage() {
  return (
    <ServiceDetailLayout
      num="04"
      label="Digital Marketing Automation"
      tagline="Campaigns that run, learn, and adjust on their own. We build the system once — it works every day after that."
      includes={INCLUDES}
      timeline="4–7 days"
      accentColor="#FF5722"
      illustration={<MarketingIllustration />}
      slug="marketing"
    />
  );
}
