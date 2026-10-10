import React from "react";
import {
  Calendar,
  CreditCard,
  QrCode,
  Users,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  ExternalLink,
  Lock,
  Zap,
} from "lucide-react";

export const BarberShopFeature: React.FC = () => {
  const capabilities = [
    {
      title: "Agendamento Online 24/7",
      desc: "Link personalizado para seus clientes agendarem a qualquer hora, escolhendo barbeiro, serviço e horário disponível.",
      icon: Calendar,
    },
    {
      title: "Checkout Seguro Integrado",
      desc: "Cobrança via Pix Instantâneo e Cartão de Crédito com conciliação automática, reduzindo cancelamentos de última hora.",
      icon: QrCode,
    },
    {
      title: "Gestão Financeira & Comissões",
      desc: "Cálculo automatizado do percentual de cada profissional, controle de faturamento diário, semanal e mensal com DRE.",
      icon: TrendingUp,
    },
    {
      title: "Lembretes Automáticos WhatsApp",
      desc: "Notificações de confirmação e lembrete antes do horário marcado, diminuindo no-shows em até 85%.",
      icon: Smartphone,
    },
  ];

  return (
    <section id="barbershop" className="py-24 bg-[#0B0D13] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/50 text-xs text-blue-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>PLATAFORMA SAAS EM PRODUÇÃO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              BarberShop: O Sistema Definitivo de Gestão e Agendamento
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
              Projetado especificamente para barbearias modernas, estúdios e salões. Unifica agenda,
              relacionamento com clientes e faturamento instantâneo com recebimento seguro via Pix e Cartão.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="https://barber-shop-dev-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Solicitar Demonstração</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-[#0F1117] border border-slate-800 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#161922] border border-slate-700/60 flex items-center justify-center text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Módulo Ativo</span>
                  <span className="text-emerald-400">Pronto p/ Uso</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture & Payment Flow Box */}
        <div className="mt-10 p-8 rounded-lg bg-[#0F1117] border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>PAGAMENTOS INTEGRADOS E SEGUROS</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Fluxo de Pagamento Seguro e Sem Risco de Inadimplência
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                O BarberShop opera com checkout transparente e seguro diretamente integrado à plataforma. 
                Seus clientes confirmam o agendamento pagando via <strong>Pix com liquidação em segundos</strong> ou 
                parcelando no <strong>cartão de crédito em até 12x</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded bg-[#090A0F] border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold mb-1">
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    <span>Pix Instantâneo</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    QR Code dinâmico e código Pix Copia e Cola gerados na hora com baixa automática no sistema.
                  </p>
                </div>

                <div className="p-3 rounded bg-[#090A0F] border border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold mb-1">
                    <CreditCard className="w-4 h-4 text-blue-400" />
                    <span>Cartão de Crédito</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Processamento seguro com tokenização PCI-DSS. Dados confidenciais nunca são salvos em nosso banco.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Processamento seguro com criptografia e tokenização de ponta a ponta</span>
              </div>
            </div>

            {/* Visual Flow diagram */}
            <div className="lg:col-span-5 p-5 rounded-md bg-[#090A0F] border border-slate-800/80 font-mono text-xs space-y-3">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2 flex justify-between items-center">
                <span>FLUXO DE TRANSAÇÃO DO AGENDAMENTO</span>
                <span className="text-emerald-400">Fluxo Seguro</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-blue-900/60 text-blue-300 text-[10px] flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="text-slate-200 font-medium">Cliente escolhe horário & serviço</p>
                    <p className="text-[11px] text-slate-500">Barbeiro selecionado e horário reservado por 10 min</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-blue-900/60 text-blue-300 text-[10px] flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="text-slate-200 font-medium">Checkout Seguro (Pix / Cartão)</p>
                    <p className="text-[11px] text-slate-500">Pix QR Code Dinâmico ou Cartão Tokenizado</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-emerald-900/60 text-emerald-300 text-[10px] flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="text-slate-200 font-medium">Confirmação Imediata via Webhook</p>
                    <p className="text-[11px] text-slate-500">Status atualizado e lembrete disparado via WhatsApp</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500 text-center">
                Criptografia TLS 1.3 • Anti-Fraude Ativo • Confirmação Automática
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BarberShopFeature;
