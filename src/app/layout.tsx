import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Hayl Medical Center | Trusted Healthcare in Fujairah, UAE",
  description:
    "Comprehensive medical care for you and your family — General Practice, Dental Surgery, Home Health Care and more. Serving Al Hayl, Fujairah.",
  icons: {
    icon: "/alhayl_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-[#111827]">
        {children}
      </body>
    </html>
  );
}
