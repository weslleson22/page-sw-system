import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { BarberShopFeature } from "@/components/BarberShopFeature";
import { Pricing } from "@/components/Pricing";
import { SecurityCompliance } from "@/components/SecurityCompliance";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation Console */}
      <Navbar />

      <main>
        {/* Technical Hero Section */}
        <Hero />

        {/* Flagship SaaS Product Feature: BarberShop */}
        <BarberShopFeature />

        {/* Solutions & Production Ecosystem */}
        <Solutions />

        {/* Segmentos Desenvolvidos, Soluções Sob Encomenda & Pagamento Seguro */}
        <Pricing />

        {/* Security, LGPD Compliance & Payment Safety */}
        <SecurityCompliance />

        {/* Fast Contact Channels & Governance Details */}
        <ContactSection />
      </main>

      {/* Strict Institutional Footer (Decreto 7.962/2013) */}
      <Footer />
    </div>
  );
}
