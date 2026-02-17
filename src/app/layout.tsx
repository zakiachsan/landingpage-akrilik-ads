import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poster Frame Akrilik Premium | Tepat Waktu & Bergaransi",
  description: "Frame akrilik berkualitas untuk rumah sakit, hotel, rumah makan, dan kantor. Free sample, bebas revisi design, garansi tepat waktu 95% on-time.",
  keywords: "frame akrilik, poster frame, frame acrylic, frame hotel, frame rumah sakit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
