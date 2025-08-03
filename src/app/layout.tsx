import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Novo App Moderno",
  description: "Criado com Next.js e Lasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={GeistSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}