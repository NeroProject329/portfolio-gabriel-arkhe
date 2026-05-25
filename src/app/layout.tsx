import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Arkhé | Sites, lojas e sistemas premium",
  description:
    "Portfólio de Gabriel Arkhé. Sites, lojas, landing pages, SaaS, dashboards e sistemas completos criados com design, tecnologia e performance.",
  keywords: [
    "Gabriel Arkhé",
    "portfólio",
    "sites premium",
    "lojas virtuais",
    "landing pages",
    "sistemas web",
    "SaaS",
    "dashboards",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}