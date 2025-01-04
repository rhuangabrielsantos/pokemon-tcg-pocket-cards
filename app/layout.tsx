import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Pokemon TCG Pocket",
  description: "Gerenciador de cartas do pokemon tcg pocket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body className="w-screen h-screen m-0 p-0 flex justify-center">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
