import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/shared/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "DxV Labs — Digital Systems & Automation Agency",
  description:
    "We design the storefront. Then we automate everything behind it. Websites, AI automation, WhatsApp, marketing & e-commerce — built to run themselves.",
  keywords: [
    "web agency",
    "AI automation",
    "WhatsApp automation",
    "digital marketing",
    "e-commerce",
    "website design",
    "DxV Labs",
  ],
  openGraph: {
    title: "DxV Labs — Digital Systems & Automation Agency",
    description: "Built once. Wired to run itself.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalError = console.error;
                console.error = function (...args) {
                  const msg = args[0] ? String(args[0]) : '';
                  if (
                    msg.includes('bis_skin_checked') ||
                    msg.includes('hydration-mismatch') ||
                    msg.includes('Hydration') ||
                    msg.includes('suppressHydrationWarning')
                  ) {
                    return;
                  }
                  originalError.apply(console, args);
                };
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
