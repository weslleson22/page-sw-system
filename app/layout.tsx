import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S W Development | Engenharia de Software & Sistemas Corporativos",
  description:
    "Software house de alta engenharia especializada em plataformas SaaS (BarberShop), microsserviços escaláveis e consultoria técnica. S W Systems LTDA - CNPJ: 39.825.909/0001-14.",
  keywords: [
    "S W Development",
    "S W Systems LTDA",
    "Engenharia de Software",
    "BarberShop SaaS",
    "Desenvolvimento Web",
    "Desenvolvimento Mobile",
    "São Luís Maranhão",
    "Software House",
  ],
  authors: [{ name: "S W Systems LTDA" }],
  creator: "S W Development",
  publisher: "S W Systems LTDA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://page-sw-system.vercel.app"),
  openGraph: {
    title: "S W Development | Engenharia de Software & Sistemas Corporativos",
    description:
      "Plataformas SaaS de alta performance, arquitetura escalável e sistemas sob medida. Razão Social: S W Systems LTDA - CNPJ: 39.825.909/0001-14.",
    url: "https://page-sw-system.vercel.app",
    siteName: "S W Development",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#090A0F] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
