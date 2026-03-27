import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'E2 Roofing Jacksonville | Most Trusted Roofing Experts',
  description: 'Jacksonville\'s premier roofing experts. Premium roofing, insurance claim advocacy, and white-glove service. Schedule your free inspection today.',
  keywords: ["roofing jacksonville, roof replacement, roof repair, e2 roofing, insurance claims roofing"],
  openGraph: {
    "title": "E2 Roofing Jacksonville | Most Trusted Roofing Experts",
    "description": "Luxury roofing, expert insurance claims assistance, and white-glove service.",
    "siteName": "E2 Roofing",
    "type": "website"
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
