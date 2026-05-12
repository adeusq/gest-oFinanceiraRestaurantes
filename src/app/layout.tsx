import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','906483438628562');
          fbq('track','PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=906483438628562&ev=PageView&noscript=1" alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
