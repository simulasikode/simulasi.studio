import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/firebase/GoogleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Simulasi: Screen printing studio",
  description:
    "Screen printing studio crafted art print and development digital tools for screen printing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-PCWP9Z52" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
