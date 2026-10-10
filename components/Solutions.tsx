import React from "react";
import {
  Globe2,
  Smartphone,
  Server,
  Scissors,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Layers,
} from "lucide-react";

export const Solutions: React.FC = () => {
  const services = [
    {
      id: "web-dev",
      tag: "SOLUÇÃO SOB MEDIDA",
      title: "Desenvolvimento Web",
      description:
        "Somos especializados na criação e otimização de sites e plataformas web personalizadas de alta qualidade para empresas e organizações de todos os tamanhos. Criação de sites e aplicações compatíveis com dispositivos móveis, ultravelozes e fáceis de usar para seus clientes.",
      metrics: ["Next.js & TypeScript", "Design Responsivo & SEO", "Alta Conversão"],
      icon: Globe2,
      featured: false,
      demoLink: null,
      demoLabel: null,
      waMessage:
        "Olá! Gostaria de um orçamento para Desenvolvimento Web e criação de site/sistema personalizado.",
      ctaText: "Solicitar Projeto Web",
    },
    {
      id: "mobile-dev",
      tag: "CASE REAL: APP MEALZHEIMER",
      title: "Desenvolvimento de Aplicativos Móveis",
      description:
        "Desenvolvemos aplicativos móveis multiplataforma personalizados e de alta qualidade, robustos e otimizados para desempenho, escalabilidade e acessibilidade. Criamos experiências fluidas para iOS e Android com sincronização em tempo real e modo offline.",
      metrics: ["Multiplataforma iOS & Android", "Acessibilidade & UI/UX", "Case MeAlzheimer"],
      icon: Smartphone,
      featured: true,
      demoLink: "https://page-app-me-alzheimer.vercel.app/",
      demoLabel: "Veja um pouco! (App MeAlzheimer)",
      waMessage:
        "Olá! Gostaria de um orçamento para Desenvolvimento de Aplicativos Móveis (iOS e Android).",
      ctaText: "Solicitar Aplicativo Mobile",
    },
    {
      id: "consultoria-ti",
      tag: "ORIENTAÇÃO E SUPORTE",
      title: "Consultoria Gerais de TI",
      description:
        "Nosso serviço de consultoria de TI fornece orientação especializada e suporte para empresas e indivíduos que buscam otimizar suas soluções de tecnologia, segurança da informação, arquitetura de sistemas e eficiência operacional.",
      metrics: ["Diagnóstico & Auditoria", "Redução de Custos em Nuvem", "Conformidade LGPD"],
      icon: Server,
      featured: false,
      demoLink: null,
      demoLabel: null,
      waMessage:
        "Olá! Gostaria de agendar uma Consultoria Geral de TI para minha empresa.",
      ctaText: "Solicitar Consultoria de TI",
    },
    {
      id: "saas-barbershop",
      tag: "CASE REAL: BARBERSHOP SAAS",
      title: "Plataformas SaaS & Sistemas em Produção",
      description:
        "Desenvolvimento e operação de ecossistemas completos no modelo Software as a Service (SaaS). Exemplo em produção: plataforma BarberShop, unificando agendamento 24/7, relatórios de faturamento e checkout transparente via Pix e Cartão.",
      metrics: ["Checkout Pix & Cartão", "Automação WhatsApp", "Suporte Dedicado"],
      icon: Scissors,
      featured: true,
      demoLink: "https://barber-shop-dev-self.vercel.app/",
      demoLabel: "Veja um pouco! (BarberShop SaaS)",
      waMessage:
        "Olá! Gostaria de conhecer as soluções SaaS e a plataforma BarberShop da SW Development.",
      ctaText: "Conhecer Soluções SaaS",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#090A0F] border-t border-slate-900 relative">
      {/* Anchor for backwards compatibility with #solucoes */}
      <span id="solucoes" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-blue-400 font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>SERVIÇOS DE ENGENHARIA & TECNOLOGIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
            SERVIÇOS
          </h2>

          <p className="text-lg text-slate-300 font-medium leading-relaxed">
            Estamos profundamente comprometidos com o crescimento e o sucesso de nossos clientes.
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            Da concepção do design à entrega de software em produção de alta confiabilidade,
            nossas soluções são desenvolvidas sob medida para gerar resultados reais e escalabilidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative p-7 sm:p-8 rounded-xl transition-all duration-200 flex flex-col justify-between ${
                  item.featured
                    ? "bg-[#0F1117] border-2 border-blue-600/40 hover:border-blue-500 shadow-xl shadow-blue-950/20"
                    : "bg-[#0F1117] border border-slate-800 hover:border-slate-700"
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-3 rounded-lg ${
                          item.featured
                            ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                            : "bg-slate-800/60 text-slate-300 border border-slate-700/60"
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-semibold">
                          {item.tag}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metric Badges */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {item.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090A0F] border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-7 pt-5 border-t border-slate-800/80 space-y-2.5">
                  {/* Live Demo Link (Veja um pouco!) */}
                  {item.demoLink && (
                    <a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-md font-semibold text-xs flex items-center justify-center gap-2 bg-[#090A0F] hover:bg-[#161922] text-blue-400 hover:text-blue-300 border border-blue-900/40 hover:border-blue-700/60 transition-all shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.demoLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  )}

                  {/* Direct Contact Button via WhatsApp */}
                  <a
                    href={`https://wa.me/5598984971547?text=${encodeURIComponent(item.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-md font-semibold text-xs flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{item.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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

export default Solutions;
