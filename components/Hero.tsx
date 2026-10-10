"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Wrench,
  Phone,
  ArrowRight,
} from "lucide-react";

export const Hero: React.FC = () => {
  const cnaeServices = [
    {
      cnae: "CNAE 6201-5/01",
      title: "Programas Sob Encomenda",
      subtitle: "Desenvolvimento Personalizado",
      desc: "Desenvolvimento de programas de computador, sistemas web e aplicativos sob medida para as necessidades operacionais e estratégicas da sua empresa.",
      icon: Code2,
      accent: "blue",
    },
    {
      cnae: "CNAE 6203-1/00",
      title: "Licenciamento de Softwares",
      subtitle: "Soluções Digitais Prontas",
      desc: "Desenvolvimento e licenciamento de programas de computador prontos para uso, facilitando a digitalização e a gestão do seu negócio com rápida implantação.",
      icon: Cpu,
      accent: "emerald",
    },
    {
      cnae: "CNAE 6209-1/00",
      title: "Suporte Técnico & Manutenção",
      subtitle: "Sustentação e Consultoria em TI",
      desc: "Suporte técnico contínuo, manutenção preventiva, evolução de sistemas e serviços especializados para manter sua infraestrutura sempre eficiente.",
      icon: Wrench,
      accent: "blue",
    },
  ];

  const tickerItems = [
    "Desenvolvimento de Programas Sob Encomenda (CNAE 6201-5/01)",
    "Licenciamento de Softwares e Plataformas (CNAE 6203-1/00)",
    "Suporte Técnico e Manutenção em TI (CNAE 6209-1/00)",
    "Atendimento Especializado via WhatsApp",
    "Sistemas Web & Aplicativos Móveis Personalizados",
    "Atendimento Direto e Consultoria Especializada",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-[#090A0F] text-slate-100 overflow-hidden">
      
      {/* Precision Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Animated Banner Strip / Marquee */}
      <div className="w-full bg-[#0F1117] border-y border-slate-800/80 py-2.5 overflow-hidden mb-12 relative shadow-inner">
        <div className="flex w-max animate-marquee space-x-8">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-300 uppercase tracking-wider whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Header / Pitch */}
        <div className="max-w-3xl space-y-4">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Desenvolvimento de Software Sob Encomenda & Soluções em Tecnologia
          </h1>

          {/* Short & Direct Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Criamos programas de computador personalizados, plataformas digitais e fornecemos suporte técnico especializado para alavancar a eficiência da sua empresa.
          </p>

          {/* Primary High-Contrast Direct CTA Button with Phone */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5598984971547?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20soluções%20e%20serviços%20da%20SW%20Development."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base transition-all duration-150 shadow-lg shadow-blue-600/30 active:translate-y-px"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>Falar com um Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-lg bg-[#0F1117] hover:bg-[#161922] text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-colors"
            >
              <span>Ver Serviços Oferecidos</span>
            </a>
          </div>

        </div>

        {/* Core Pillars / 3 CNAE Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cnaeServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-xl bg-[#0F1117] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#161922] border border-slate-700/60 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#090A0F] text-slate-400 border border-slate-800">
                      {service.cnae}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <a
                    href={`https://wa.me/5598984971547?text=${encodeURIComponent(
                      `Olá! Gostaria de falar com um especialista sobre ${service.title} (${service.cnae}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Falar sobre este serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
