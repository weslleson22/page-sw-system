import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD) | S W Development",
  description:
    "Diretrizes de privacidade e proteção de dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018). S W Systems LTDA - CNPJ: 39.825.909/0001-14.",
};

export default function PrivacidadePage() {
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-emerald-400 font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CONFORMIDADE INTEGRAL COM A LGPD</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Política de Privacidade e Proteção de Dados
          </h1>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Regulada pela Lei Federal nº 13.709/2018 (LGPD) • S W Systems LTDA (CNPJ: 39.825.909/0001-14)
          </p>
        </div>

        {/* Content body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              1. Compromisso com a Privacidade
            </h2>
            <p>
              A <strong>S W Systems LTDA</strong> (Nome Fantasia: <strong>S W Development</strong>), pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <strong>39.825.909/0001-14</strong>, com sede em São Luís - Maranhão, estabelece esta Política de Privacidade para reafirmar seu compromisso rigoroso com a segurança da informação, a privacidade e a transparência no tratamento de dados pessoais de seus clientes, parceiros e usuários da plataforma BarberShop e de seus serviços corporativos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              2. Dados Coletados e Finalidade do Tratamento
            </h2>
            <p>Coletamos exclusivamente as informações estritamente necessárias para a prestação adequada dos serviços contratados:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>Dados Cadastrais do Contratante:</strong> Razão Social/Nome, CNPJ/CPF, e-mail institucional, telefone de contato e endereço para faturamento e emissão de notas fiscais.</li>
              <li><strong>Dados Operacionais da Barbearia (BarberShop SaaS):</strong> Nomes de profissionais vinculados, serviços oferecidos, tabela de preços e horários de agendamento solicitados pelos clientes finais.</li>
              <li><strong>Dados de Comunicação:</strong> Mensagens enviadas via canais de suporte para resolução de dúvidas técnicas e ordens de serviço.</li>
            </ul>
          </section>

          {/* Mandatory Payment Security Disclaimer */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              3. Dados Financeiros e Processamento Seguro
            </h2>
            <div className="p-5 rounded-lg bg-[#0F1117] border border-blue-900/60 text-xs space-y-3 text-slate-200">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <Lock className="w-4 h-4" />
                <span>NÃO ARMAZENAMENTO DE DADOS CONFIDENCIAIS DE CARTÃO</span>
              </div>
              <p className="leading-relaxed">
                A <strong>S W Systems LTDA expressamente NÃO armazena, retém ou manipula dados confidenciais de cartões de crédito</strong>, tais como número completo do cartão, data de expiração ou código verificador (CVV) em seus próprios bancos de dados.
              </p>
              <p className="leading-relaxed">
                Todas as operações financeiras, liquidações e cobranças de mensalidades ou agendamentos são operadas e processadas diretamente através de instituições e gateways de pagamento regulados, os quais operam sob os mais rigorosos padrões internacionais de segurança (PCI-DSS Compliance) e criptografia de ponta a ponta (TLS 1.3).
              </p>
              <div className="pt-1 flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Intermediação validada: Pagamentos processados com segurança e criptografia.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              4. Compartilhamento Restrito de Dados
            </h2>
            <p>
              A S W Systems LTDA não comercializa, aluga ou cede dados pessoais sob hipótese alguma. O compartilhamento ocorre de forma mínima e controlada apenas com:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li><strong>Gateways de Pagamento Homologados:</strong> Estritamente para viabilização e conciliação de transações financeiras (Pix e Cartão).</li>
              <li><strong>Provedores de Infraestrutura de Nuvem:</strong> Servidores de alta confiabilidade localizados em centros de dados com certificação SOC 2 e ISO 27001.</li>
              <li><strong>Autoridades Governamentais:</strong> Quando exigido por determinação judicial ou obrigação legal expressa.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              5. Segurança da Informação e Armazenamento
            </h2>
            <p>
              Implementamos medidas técnicas e administrativas robustas para proteger seus dados pessoais contra acessos não autorizados, incidentes ou destruição:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Criptografia SSL/TLS em todas as comunicações web e APIs.</li>
              <li>Controle de acesso granular baseado em privilégios mínimos (RBAC).</li>
              <li>Rotinas automáticas de backup redundante criptografado.</li>
              <li>Auditoria de código e monitoramento contínuo de vulnerabilidades.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              6. Direitos do Titular de Dados (Art. 18 da LGPD)
            </h2>
            <p>
              Em observância à Lei Geral de Proteção de Dados Pessoais, o Titular poderá, a qualquer momento e mediante requisição formal, exercer os seguintes direitos:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Confirmação da existência de tratamento e acesso aos dados pessoais.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
              <li>Revogação do consentimento concedido anteriormente.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              7. Encarregado pelo Tratamento de Dados (DPO) e Contato
            </h2>
            <p>
              Para esclarecer dúvidas sobre esta Política de Privacidade ou para solicitar o exercício de seus direitos de titular, entre em contato diretamente com nosso Encarregado de Proteção de Dados:
            </p>
            <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
              <p><strong>Encarregado / DPO:</strong> Wesleson Souza Silva (Sócio-Administrador)</p>
              <p><strong>E-mail Direto:</strong> swdevelopmentsuporte@gmail.com</p>
              <p><strong>Telefone / WhatsApp:</strong> (98) 98497-1547</p>
              <p><strong>Endereço Postal:</strong> São Luís - Maranhão, Brasil</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
