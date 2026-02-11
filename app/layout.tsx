import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Asjad Creative - Jasa Desain Rumah Profesional",
  description: "Desain rumah impian Anda dari nol - modern, fungsional, dan siap bangun. Konsultasi gratis, revisi tanpa batas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
