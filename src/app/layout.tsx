import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
