import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  AlertCircle,
  Building2,
  RefreshCw,
  Scale,
} from "lucide-react";

export const SecurityCompliance: React.FC = () => {
  const complianceItems = [
    {
      title: "Intermediação Segura de Pagamentos",
      subtitle: "Gateway Regulado e Tokenização Segura",
      desc: "Todas as transações de compra e mensalidade são processadas diretamente por gateways seguros e homologados. Dados confidenciais de cartão (número, validade e CVV) não são armazenados nos servidores da S W Systems LTDA.",
      icon: Lock,
    },
    {
      title: "Conformidade Integral com a LGPD",
      subtitle: "Lei Federal nº 13.709/2018",
      desc: "Tratamento ético e restrito de dados cadastrais. Seus dados e os dados de clientes da sua barbearia contam com isolamento por tenant, criptografia em trânsito (TLS 1.3) e em repouso.",
      icon: Scale,
    },
    {
      title: "Transparência do Decreto 7.962/2013",
      subtitle: "Regulamentação do Comércio Eletrônico",
      desc: "Informações cadastrais claras, Razão Social, CNPJ ativo desde 2020, endereço físico e canais diretos de atendimento ao consumidor acessíveis em todas as páginas do site.",
      icon: Building2,
    },
    {
      title: "Garantia CDC e Reembolso Transparente",
      subtitle: "Artigo 49 da Lei nº 8.078/1990",
      desc: "Direito de arrependimento integral de 7 dias para qualquer assinatura de software SaaS. Estornos processados com agilidade de acordo com as regras financeiras vigentes.",
      icon: RefreshCw,
    },
  ];

  return (
    <section id="seguranca" className="py-24 bg-[#090A0F] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SEGURANÇA, COMPLIANCE & GATEWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Auditoria, Governança e Segurança em Primeiro Lugar
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Nossa operação cumpre rigorosamente as normas bancárias brasileiras, diretrizes da LGPD
            e os critérios de auditoria manual exigidos por instituições de pagamento parceiras.
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#0F1117] border border-slate-800 hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Links Banner */}
        <div className="mt-10 p-6 rounded-lg bg-[#0F1117] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Políticas Oficiais Homologadas</p>
              <p className="text-xs text-slate-400">
                Documentação jurídica atualizada e transparente sobre uso, dados e estornos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/termos"
              className="px-3.5 py-2 rounded-md bg-[#090A0F] border border-slate-800 hover:border-slate-700 text-xs text-slate-200 hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="px-3.5 py-2 rounded-md bg-[#090A0F] border border-slate-800 hover:border-slate-700 text-xs text-slate-200 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/reembolso"
              className="px-3.5 py-2 rounded-md bg-[#090A0F] border border-slate-800 hover:border-slate-700 text-xs text-slate-200 hover:text-white transition-colors"
            >
              Política de Reembolso
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecurityCompliance;
