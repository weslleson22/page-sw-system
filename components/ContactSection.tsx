import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#0B0D13] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-blue-400 font-mono">
              <Building className="w-3.5 h-3.5" />
              <span>CANAIS DE ATENDIMENTO & SUPORTE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Fale Diretamente com Nossa Equipe
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Atendimento ágil para tirar dúvidas sobre o BarberShop SaaS, solicitar propostas
              de engenharia sob medida ou obter suporte técnico pós-implantação.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-blue-950/60 text-blue-400 border border-blue-800/40 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">WhatsApp & Telefone</p>
                  <a
                    href="https://wa.me/5598984971547"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    (98) 98497-1547
                  </a>
                  <p className="text-[11px] text-slate-500">Atendimento comercial e suporte prioritário</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-blue-950/60 text-blue-400 border border-blue-800/40 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">E-mail Institucional</p>
                  <a
                    href="mailto:swdevelopmentsuporte@gmail.com"
                    className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    swdevelopmentsuporte@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-500">Dúvidas, orçamentos e contato de DPO</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-blue-950/60 text-blue-400 border border-blue-800/40 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Sede da Empresa</p>
                  <p className="text-sm font-semibold text-white">São Luís - Maranhão, Brasil</p>
                  <p className="text-[11px] text-slate-500">S W Systems LTDA • CNPJ: 39.825.909/0001-14</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-slate-400">Horário de Funcionamento</p>
                  <p className="text-sm font-semibold text-white">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-[11px] text-slate-500">Horário de Brasília (BRT)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Fast Contact / Proposal Box */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-[#0F1117] border border-slate-800 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Precisa de uma Solução Tecnológica?
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Seja para implantar o BarberShop na sua barbearia ou desenvolver um software
                  exclusivo para sua empresa, escolha um dos canais rápidos abaixo:
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/5598984971547?text=Olá,%20gostaria%20de%20implantar%20o%20BarberShop%20SaaS%20na%20minha%20barbearia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-[#090A0F] border border-slate-800 hover:border-blue-500/60 hover:bg-[#12151E] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        Contratar BarberShop SaaS
                      </p>
                      <p className="text-xs text-slate-400">
                        Ativação rápida com planos a partir de R$ 69,90/mês
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/5598984971547?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20desenvolvimento%20de%20software%20sob%20medida."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-[#090A0F] border border-slate-800 hover:border-blue-500/60 hover:bg-[#12151E] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        Desenvolvimento de Software Sob Medida
                      </p>
                      <p className="text-xs text-slate-400">
                        Sistemas web corporativos, APIs, mobile e consultoria
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="mailto:swdevelopmentsuporte@gmail.com?subject=Contato%20Institucional%20-%20SW%20Systems"
                  className="flex items-center justify-between p-4 rounded-lg bg-[#090A0F] border border-slate-800 hover:border-slate-700 hover:bg-[#12151E] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-300" />
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                        Envio Formal por E-mail
                      </p>
                      <p className="text-xs text-slate-400">swdevelopmentsuporte@gmail.com</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="p-4 rounded-lg bg-blue-950/20 border border-blue-900/30 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Respostas técnicas em menos de 2 horas úteis. Avaliação de escopo com
                  engenheiros de software seniores.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
