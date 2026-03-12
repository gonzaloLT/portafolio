import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gonzalo Barroso — Full Stack Developer",
  description:
    "Desarrollador Full Stack con experiencia construyendo productos reales para clientes reales. Especializado en React, Next.js, Node.js y Supabase.",
  metadataBase: new URL("https://www.gonzalobarroso.site"),
  openGraph: {
    title: "Gonzalo Barroso — Full Stack Developer",
    description:
      "Desarrollador Full Stack con experiencia construyendo productos reales para clientes reales. Especializado en React, Next.js, Node.js y Supabase.",
    url: "https://www.gonzalobarroso.site",
    siteName: "Gonzalo Barroso",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Barroso — Full Stack Developer",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Barroso — Full Stack Developer",
    description:
      "Desarrollador Full Stack con experiencia construyendo productos reales para clientes reales.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-white text-[#111827] antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}