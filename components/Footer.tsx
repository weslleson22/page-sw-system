import React from "react";
import Link from "next/link";
import { Logo } from "./ui/Logo";
import {
  ShieldCheck,
  Lock,
  QrCode,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07080C] border-t border-slate-900 text-slate-400 text-xs">
      {/* Top Banner / Security & Gateway Summary */}
      <div className="border-b border-slate-800/80 py-8 bg-[#090A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Security note */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Ambiente Seguro com Criptografia de Ponta
                </p>
                <p className="text-xs text-slate-400">
                  Pagamentos processados com segurança e criptografia de ponta a ponta.
                </p>
              </div>
            </div>

            {/* Payment Method Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase text-slate-400 mr-1">
                Métodos Aceitos:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0F1117] border border-slate-800 text-slate-200 font-medium">
                <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pix Instantâneo</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0F1117] border border-slate-800 text-slate-200 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Cartão em até 12x</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-950/40 border border-blue-900/40 text-blue-300 font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Gateway Seguro</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Company Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Software house especializada em plataformas SaaS escaláveis, microsserviços de alto desempenho
              e arquitetura de software de missão crítica. Criadores da plataforma BarberShop.
            </p>
            
            <div className="space-y-1.5 pt-2 text-[11px] font-mono text-slate-400">
              <p>Razão Social: <strong className="text-slate-200">S W Systems LTDA</strong></p>
              <p>Nome Fantasia: <strong className="text-slate-200">S W Development</strong></p>
              <p>CNPJ: <strong className="text-slate-200">39.825.909/0001-14</strong> (Ativa desde 18/11/2020)</p>
              <p>Sede: São Luís - Maranhão, Brasil</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Ecossistema
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#barbershop" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>BarberShop SaaS</span>
                  <span className="text-[9px] bg-blue-950 text-blue-400 px-1 rounded">Destaque</span>
                </a>
              </li>
              <li>
                <a href="#segmentos" className="hover:text-white transition-colors">
                  Segmentos & Encomenda
                </a>
              </li>
              <li>
                <a href="#seguranca" className="hover:text-white transition-colors">
                  Segurança & Gateway
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Policies */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Políticas Legais
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/termos" className="hover:text-white transition-colors">
                  Termos de Uso do Serviço
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/reembolso" className="hover:text-white transition-colors">
                  Política de Cancelamento e Reembolso
                </Link>
              </li>
              <li>
                <span className="text-slate-400">
                  Conformidade Decreto nº 7.962/2013
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Garantia Art. 49 (CDC)
                </span>
              </li>
            </ul>
          </div>

          {/* Support and Contact Channels */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Suporte & Atendimento
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/5598984971547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-white font-medium"
                  >
                    (98) 98497-1547
                  </a>
                  <p className="text-[11px] text-slate-400">WhatsApp Comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:swdevelopmentsuporte@gmail.com"
                    className="text-slate-200 hover:text-white font-medium"
                  >
                    swdevelopmentsuporte@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400">Suporte Técnico & DPO</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>São Luís - MA, Brasil</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Bottom Compliance Notice (Decreto 7.962/2013) */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong>Nota Institucional e Legal:</strong> S W Systems LTDA (Nome Fantasia: S W Development), 
            inscrita no CNPJ sob o nº 39.825.909/0001-14, com sede em São Luís - MA, Brasil. 
            Em estrita conformidade com o Decreto Federal nº 7.962/2013 (Lei do E-commerce) e com a Lei nº 13.709/2018 (LGPD). 
            Todas as transações e liquidações financeiras da plataforma e seus módulos são intermediadas com 
            segurança através de infraestrutura de pagamento regulada. Todos os direitos reservados.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
            <p>© {new Date().getFullYear()} S W Systems LTDA. Todos os direitos reservados.</p>
            <p className="font-mono text-[10px] text-slate-500">v2.4.0</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
