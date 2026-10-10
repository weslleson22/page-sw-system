import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RefreshCw, ArrowLeft, Clock, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cancelamento, Desistência e Reembolso | S W Development",
  description:
    "Diretrizes claras de cancelamento, direito de arrependimento (Art. 49 do CDC) e estorno de pagamentos da S W Systems LTDA (CNPJ: 39.825.909/0001-14).",
};

export default function ReembolsoPage() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-200">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Breadcrumb / Back button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-blue-400 font-mono mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>DIRETRIZES DE ESTORNO & ARREPENDIMENTO (CDC)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Política de Cancelamento, Desistência e Reembolso
          </h1>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Em conformidade com o Código de Defesa do Consumidor • S W Systems LTDA (CNPJ: 39.825.909/0001-14)
          </p>
        </div>

        {/* Content body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              1. Visão Geral e Princípio de Boa-Fé
            </h2>
            <p>
              A <strong>S W Systems LTDA</strong> (Nome Fantasia: <strong>S W Development</strong>), inscrita no CNPJ sob o nº <strong>39.825.909/0001-14</strong>, com sede em São Luís - Maranhão, preza pela total transparência e segurança jurídica em suas relações com contratantes de seus serviços de tecnologia e assinantes da plataforma SaaS <strong>BarberShop</strong>.
            </p>
            <p>
              Esta política estabelece os procedimentos para cancelamento de contratos, exercício do direito de arrependimento e estorno de valores cobrados através de nossos gateways de pagamento homologados.
            </p>
          </section>

          {/* Art 49 CDC */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              2. Direito de Arrependimento (Artigo 49 do CDC)
            </h2>
            <div className="p-5 rounded-lg bg-[#0F1117] border border-emerald-900/60 text-xs space-y-2 text-slate-200">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantia Legal de 7 Dias Corridos com Reembolso Integral (100%)</span>
              </div>
              <p className="leading-relaxed">
                Nos termos do <strong>Artigo 49 da Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)</strong> e do <strong>Decreto nº 7.962/2013</strong>, o Contratante tem o direito incondicional de desistir da contratação de qualquer plano de software SaaS no prazo de até <strong>7 (sete) dias corridos</strong> contados da data da assinatura inicial.
              </p>
              <p className="leading-relaxed">
                Exercido o direito de arrependimento dentro do prazo legal de 7 dias, todos os valores pagos serão estornados integralmente, sem qualquer retenção de taxa ou multa administrativa.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              3. Prazos e Mecânica de Estorno de Pagamentos
            </h2>
            <p>
              Os estornos e devoluções são operacionalizados via gateways de pagamento oficiais e regulados respeitando os seguintes prazos de acordo com a forma de pagamento originalmente utilizada:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Pagamentos via Pix Instantâneo</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A ordem de estorno é emitida imediatamente junto à instituição financeira. A restituição é depositada na mesma conta bancária de onde partiu o Pix em até <strong>24 (vinte e quatro) horas úteis</strong> após a homologação da solicitação.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Pagamentos via Cartão de Crédito</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A comunicação de estorno é disparada de forma imediata à credenciadora do cartão via API do gateway de pagamento. O crédito do valor estornado será visualizado na fatura do titular em até <strong>1 a 2 ciclos de fatura subsequentes</strong>, dependendo exclusivamente das normas da instituição bancária emissora.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              4. Cancelamento de Assinaturas Recorrentes do SaaS (BarberShop)
            </h2>
            <p>
              Após o decurso do prazo de 7 dias corridos, o Contratante de planos mensais recorrentes (Plano Start, Plano Pro ou Plano Enterprise) poderá solicitar o encerramento de sua assinatura a qualquer momento:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>O cancelamento interrompe cobranças futuras no próximo ciclo de faturamento.</li>
              <li>O acesso à plataforma permanece plenamente liberado até o término do ciclo mensal já quitado.</li>
              <li>Não há fidelidade abusiva ou penalidade rescisória para planos mensais.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              5. Regras para Agendamentos de Clientes Finais (BarberShop)
            </h2>
            <p>
              Para clientes finais de barbearias e salões que realizam agendamentos através da plataforma BarberShop:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>Cancelamento prévio:</strong> O cliente final pode cancelar ou reagendar seu horário diretamente pelo link do BarberShop com a antecedência mínima parametrizada pelo estabelecimento (geralmente até 2 horas antes do horário marcado).</li>
              <li><strong>Sinal ou pré-pagamento:</strong> Nos casos em que houver cobrança de sinal para reserva de cadeira via Pix/Cartão, o cancelamento tempestivo ensejará o estorno automático ou disponibilização de crédito para novo agendamento, conforme a política definida pelo estabelecimento parceiro.</li>
              <li><strong>Não comparecimento (No-show):</strong> O não comparecimento sem aviso prévio enseja a retenção do sinal para cobrir a reserva ociosa do horário do profissional.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              6. Como Solicitar o Cancelamento e Reembolso
            </h2>
            <p>
              Para solicitar formalmente o cancelamento e requerer o estorno de valores, basta acionar nossos canais oficiais de atendimento portando o número de CNPJ/CPF do titular e o comprovante da transação:
            </p>
            <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <p><strong>Canal Prioritário WhatsApp:</strong> (98) 98497-1547</p>
              <p><strong>E-mail Institucional:</strong> swdevelopmentsuporte@gmail.com</p>
              <p><strong>Assunto do E-mail:</strong> Solicitação de Reembolso / Cancelamento</p>
              <p><strong>Prazo de Resposta do Suporte:</strong> Até 24 horas úteis</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
