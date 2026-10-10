"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./ui/Logo";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  Code2,
  HelpCircle,
  Phone,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "BarberShop SaaS", href: "#barbershop" },
    { label: "Serviços", href: "#servicos" },
    { label: "Segmentos & Encomenda", href: "#segmentos" },
    { label: "Segurança & Gateway", href: "#seguranca" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#090A0F]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-[#090A0F]/80 backdrop-blur-sm border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Brand Logo */}
          <Logo />

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5598984971547?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20soluções%20e%20projetos%20da%20SW%20Development."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-150 shadow-sm shadow-blue-600/20 active:translate-y-px"
            >
              <span>Falar com Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#090A0F]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col gap-3">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-2 px-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="https://wa.me/5598984971547?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20soluções%20e%20projetos%20da%20SW%20Development."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>Falar com um Especialista</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
