"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  CreditCard,
  QrCode,
  ArrowRight,
  Lock,
  Zap,
  Scissors,
  Smartphone,
  Globe2,
  Cpu,
  Layers,
  MessageSquare,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export const Pricing: React.FC = () => {
  const [filter, setFilter] = useState<"todos" | "saas" | "encomenda">("todos");

  const segments = [
    {
      id: "barbershop",
      category: "saas",
      tag: "PRODUTO PRÓPRIO EM PRODUÇÃO",
      title: "BarberShop SaaS & Agendamentos",
      subtitle: "Para barbearias, salões, clínicas e estúdios",
      description:
        "Plataforma completa já desenvolvida e em produção. Inclui agendamento online 24/7 sem atritos, lembretes automáticos via WhatsApp, relatórios de faturamento e divisão de comissões por profissional.",
      pricingHighlight: "A partir de R$ 69,90/mês",
      badge: "Pronto p/ Uso",
      badgeColor: "emerald",
      liveDemoUrl: "https://barber-shop-dev-self.vercel.app/",
      liveDemoLabel: "Acessar Demonstração do BarberShop",
      features: [
        "Link público para agendamento 24/7 sem necessidade de app",
        "Checkout Pix Instantâneo e Cartão de Crédito integrado",
        "Disparo de lembretes automáticos anti-no-show no WhatsApp",
        "Módulo financeiro com controle de comissões por profissional",
        "Suporte técnico ágil e onboarding guiado",
      ],
      ctaText: "Falar com Especialista em BarberShop",
      waMessage:
        "Olá! Gostaria de falar com um especialista sobre a contratação e implantação da plataforma BarberShop SaaS.",
    },
    {
      id: "mobile-saude",
      category: "encomenda",
      tag: "SOB ENCOMENDA & CASO REAL",
      title: "Aplicativos Mobile & Saúde (App MeAlzheimer)",
      subtitle: "Para startups de saúde, clínicas e aplicativos especializados",
      description:
        "Experiência consolidada no desenvolvimento do App MeAlzheimer (mobile para portadores e cuidadores). Desenvolvemos apps para iOS e Android com interfaces acessíveis, sincronização em tempo real e modo offline.",
      pricingHighlight: "Orçamento sob medida por escopo",
      badge: "Sob Encomenda",
      badgeColor: "blue",
      liveDemoUrl: "https://page-app-me-alzheimer.vercel.app/",
      liveDemoLabel: "Ver Projeto Online: App MeAlzheimer",
      features: [
        "Aplicativos nativos e híbridos para iOS e Android",
        "Interfaces com design acessível e usabilidade humanizada",
        "Sincronização em nuvem e alertas programados de rotina",
        "Integração com sensores, GPS ou formulários de acompanhamento",
        "Publicação assistida na Google Play Store e Apple App Store",
      ],
      ctaText: "Falar com Especialista em Apps Mobile",
      waMessage:
        "Olá! Gostaria de falar com um especialista sobre o desenvolvimento de um Aplicativo Mobile sob encomenda.",
    },
    {
      id: "sistemas-web",
      category: "encomenda",
      tag: "ENGENHARIA SOB DEMANDA",
      title: "Sistemas Web Corporativos & ERPs",
      description:
        "Desenvolvimento de plataformas web sob encomenda para gestão interna, automação operacional, portais de clientes, controle de estoque e dashboards analíticos de alta velocidade.",
      subtitle: "Para empresas, distribuidoras, indústrias e comércio",
      pricingHighlight: "Contratação por projeto ou mensalidade",
      badge: "Sob Encomenda",
      badgeColor: "blue",
      features: [
        "Sistemas sob medida construídos com Next.js, Node.js e TypeScript",
        "Bancos de dados relacionais seguros com backup contínuo",
        "Painéis administrativos com permissões de usuário granulares",
        "Geração automatizada de relatórios em PDF e planilhas",
        "Alta estabilidade operacional com suporte técnico dedicado",
      ],
      ctaText: "Falar com Especialista em Sistemas Web",
      waMessage:
        "Olá! Gostaria de falar com um especialista sobre o desenvolvimento de um Sistema Web Corporativo sob medida.",
    },
    {
      id: "integracoes-gateways",
      category: "encomenda",
      tag: "FINTECHS & AUTOMAÇÃO",
      title: "Integrações de Pagamento & APIs",
      description:
        "Implementação de esteiras de pagamento digital seguras. Checkouts transparentes, emissão de Pix Instantâneo via QR Code dinâmico, recebimento em cartão de crédito e conciliação bancária automática.",
      subtitle: "Para plataformas digitais, e-commerces e SaaS",
      pricingHighlight: "Módulos prontos ou consultoria técnica",
      badge: "Gateway Seguro",
      badgeColor: "emerald",
      features: [
        "Integração completa com APIs oficiais de pagamento",
        "Cobrança via Pix com liquidação em segundos e baixa automática",
        "Processamento seguro de Cartão de Crédito com tokenização",
        "Webhooks resilientes para confirmação de transação sem falhas",
        "Auditoria de conformidade com LGPD e normas de e-commerce",
      ],
      ctaText: "Falar com Especialista em Pagamentos",
      waMessage:
        "Olá! Gostaria de falar com um especialista sobre integração de Gateways de Pagamento e Checkouts.",
    },
  ];

  const filteredSegments =
    filter === "todos"
      ? segments
      : segments.filter((item) => item.category === filter);

  return (
    <section id="segmentos" className="py-24 bg-[#090A0F] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-blue-400 font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARÊNCIA TOTAL DE PLANOS & SEGMENTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Segmentos Desenvolvidos & Soluções Sob Encomenda
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Conheça as modalidades tecnológicas que a <strong className="text-white">S W Development</strong> já
            construiu e desenvolve sob medida para o seu negócio. Fale diretamente com um especialista via WhatsApp para tirar dúvidas ou solicitar uma proposta.
          </p>

          {/* Filter tabs */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <div className="inline-flex items-center p-1 rounded-lg bg-[#0F1117] border border-slate-800">
              <button
                type="button"
                onClick={() => setFilter("todos")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  filter === "todos"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Todos os Segmentos
              </button>
              <button
                type="button"
                onClick={() => setFilter("saas")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  filter === "saas"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Produtos SaaS Prontos
              </button>
              <button
                type="button"
                onClick={() => setFilter("encomenda")}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  filter === "encomenda"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Projetos Sob Encomenda
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredSegments.map((segment) => {
            return (
              <div
                key={segment.id}
                className="rounded-xl p-7 sm:p-8 flex flex-col justify-between bg-[#0F1117] border border-slate-800 hover:border-blue-500/50 transition-all duration-200 relative group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-semibold">
                        {segment.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                        {segment.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{segment.subtitle}</p>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${
                        segment.badgeColor === "emerald"
                          ? "bg-emerald-950/70 text-emerald-400 border-emerald-800/50"
                          : "bg-blue-950/70 text-blue-400 border-blue-800/50"
                      }`}
                    >
                      {segment.badge}
                    </span>
                  </div>

                  {/* Pricing / Modality Highlight Banner */}
                  <div className="mt-4 p-3 rounded-lg bg-[#090A0F] border border-slate-800/90 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Modalidade / Investimento
                      </p>
                      <p className="text-sm font-bold text-white font-mono">
                        {segment.pricingHighlight}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Planos Transparentes
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {segment.description}
                  </p>

                  {/* Capabilities / Checklist */}
                  <div className="mt-5 space-y-2.5">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      O que está incluso nesta solução:
                    </p>
                    <ul className="space-y-2">
                      {segment.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions: Live Demo + Direct WhatsApp Specialist */}
                <div className="mt-8 pt-6 border-t border-slate-800 space-y-2.5">
                  {segment.liveDemoUrl && (
                    <a
                      href={segment.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-md font-semibold text-xs flex items-center justify-center gap-2 bg-[#090A0F] hover:bg-[#161922] text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all"
                    >
                      <span>{segment.liveDemoLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                    </a>
                  )}

                  <a
                    href={`https://wa.me/5598984971547?text=${encodeURIComponent(segment.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-md font-semibold text-xs flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/25 transition-all group-hover:bg-blue-500"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{segment.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <p className="text-center text-[11px] text-slate-500 font-mono mt-1">
                    Atendimento direto via WhatsApp com engenheiro técnico
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Payment Gateway Compliance Notice Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#0F1117] border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>INTERMEDIAÇÃO E SEGURANÇA HOMOLOGADA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Métodos de Pagamento e Segurança nas Transações
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Todas as cobranças, assinaturas de planos SaaS e parcelas de projetos sob encomenda da{" "}
                <strong>S W Systems LTDA</strong> são intermediadas com segurança através de infraestrutura de
                pagamento regulada. A adesão a assinaturas conta com garantia incondicional de{" "}
                <strong className="text-white">7 dias corridos</strong> conforme o Art. 49 do Código de
                Defesa do Consumidor (CDC).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-3 rounded-lg bg-[#090A0F] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/40">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Pix Instantâneo</p>
                  <p className="text-[11px] text-slate-400">Confirmação imediata via QR Code</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#090A0F] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-blue-950/70 text-blue-400 border border-blue-800/40">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Cartão de Crédito</p>
                  <p className="text-[11px] text-slate-400">Visa, Mastercard, Elo em até 12x</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Criptografia TLS 256-bit • Dados de cartão 100% tokenizados pelo gateway</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
              <Link href="/termos" className="hover:text-white underline underline-offset-2">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-white underline underline-offset-2">
                Privacidade (LGPD)
              </Link>
              <Link href="/reembolso" className="hover:text-white underline underline-offset-2">
                Política de Reembolso
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
