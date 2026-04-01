import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] })
export const metadata: Metadata = {
  title: "My E-commerce App",
  description: "A Whitelabeled ecommerce generated with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.className}antialiased text-gray-700`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
