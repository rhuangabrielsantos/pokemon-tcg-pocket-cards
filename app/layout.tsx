import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  display: "swap",
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
      <body>
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)_300px] w-screen h-screen antialiased">
          <div className="w-full h-full" />
          {children}
          <div className="w-full h-full" />
        </div>
      </body>
    </html>
  );
}
