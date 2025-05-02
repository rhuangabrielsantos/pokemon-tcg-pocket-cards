import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const nunito = Nunito({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "PokéAlbum",
  description:
    "Sua plataforma para colecionar, organizar e compartilhar sua coleção de Pokémon TCG Pocket com amigos e outros treinadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <link rel="icon" href="/pokedex.png" sizes="any" />

      <body className="w-screen h-screen m-0 p-0 flex justify-center bg-gray-50">
        {children}

        <Sidebar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
