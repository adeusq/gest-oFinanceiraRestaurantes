import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curso de Gestão Financeira para Restaurantes",
  description:
    "Curso presencial para donos e gestores de restaurantes que desejam melhorar o controle financeiro, fluxo de caixa, CMV, DRE, estoque e precificação.",
  keywords: [
    "gestão financeira restaurante",
    "curso financeiro restaurante",
    "CMV restaurante",
    "fluxo de caixa restaurante",
    "DRE restaurante",
    "precificação restaurante",
    "gestão de estoque restaurante",
  ],
  icons: {
    icon: "/logo-ldc.png",
    shortcut: "/logo-ldc.png",
    apple: "/logo-ldc.png",
  },
  openGraph: {
    title: "Curso de Gestão Financeira para Restaurantes",
    description:
      "Curso presencial para donos e gestores de restaurantes que desejam melhorar o controle financeiro, fluxo de caixa, CMV, DRE, estoque e precificação.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
