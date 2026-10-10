import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, ArrowLeft, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso e Contratação | S W Development",
  description:
    "Termos gerais de uso da plataforma SaaS BarberShop e contratação de serviços de engenharia de software da S W Systems LTDA (CNPJ: 39.825.909/0001-14).",
};

export default function TermosPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>DOCUMENTO JURÍDICO OFICIAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Termos de Uso e Condições Gerais de Contratação
          </h1>
          <p className="mt-2 text-xs font-mono text-slate-400">
            Última atualização: Outubro de 2026 • S W Systems LTDA (CNPJ: 39.825.909/0001-14)
          </p>
        </div>

        {/* Content body with formal legal compliance */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              1. Identificação e Qualificação da Empresa
            </h2>
            <p>
              Estes Termos de Uso regem a utilização dos serviços, produtos de software e plataformas SaaS disponibilizados por:
            </p>
            <div className="p-4 rounded-lg bg-[#0F1117] border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <p><strong>Razão Social:</strong> S W Systems LTDA</p>
              <p><strong>Nome Comercial / Fantasia:</strong> S W Development</p>
              <p><strong>CNPJ:</strong> 39.825.909/0001-14 (Empresa ativa desde 18/11/2020)</p>
              <p><strong>Sede:</strong> São Luís - Maranhão, Brasil</p>
              <p><strong>Canais de Contato:</strong> WhatsApp: (98) 98497-1547 | E-mail: swdevelopmentsuporte@gmail.com</p>
            </div>
            <p>
              Ao contratar nossos serviços ou assinar qualquer uma de nossas soluções de software (como a plataforma BarberShop), o Usuário (pessoa física ou jurídica) manifesta sua anuência expressa, irrevogável e sem reservas a todos os termos aqui descritos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              2. Objeto e Licenciamento das Soluções SaaS
            </h2>
            <p>
              O presente instrumento tem por objeto a concessão de licença de uso temporária, não exclusiva, onerosa e intransferível de nossas soluções tecnológicas em modelo Software as a Service (SaaS), incluindo a plataforma BarberShop (gestão, agendamentos e faturamento para barbearias e salões), além da prestação de serviços especializados de engenharia de software sob demanda.
            </p>
            <p>
              A S W Systems LTDA reserva-se o direito de implementar melhorias, correções de segurança e novas funcionalidades na plataforma periodicamente, visando manter a excelência técnica e operacional do serviço.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              3. Modalidades de Cobrança e Intermediação Financeira
            </h2>
            <p>
              O acesso aos recursos do sistema é condicionado ao pagamento do plano contratado (Plano Start, Plano Pro ou Plano Enterprise), conforme tabela de preços vigente na data da contratação.
            </p>
            <div className="p-4 rounded-lg bg-blue-950/20 border border-blue-900/40 text-xs space-y-2 text-slate-200">
              <div className="flex items-center gap-2 font-bold text-blue-400">
                <Lock className="w-4 h-4" />
                <span>Intermediação Segura via Gateway de Pagamentos</span>
              </div>
              <p>
                Todas as cobranças, liquidações e faturamentos são intermediados com segurança através de infraestrutura de pagamentos regulada e homologada. A S W Systems LTDA não armazena nem processa em seus servidores números integrais de cartões de crédito ou códigos de segurança (CVV).
              </p>
              <p>
                São aceitos como métodos oficiais de pagamento:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Pix Instantâneo:</strong> Liquidação imediata mediante leitura de QR Code dinâmico ou chave Copia e Cola.</li>
                <li><strong>Cartão de Crédito:</strong> Processamento seguro com tokenização, sujeito à análise de risco da adquirente.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              4. Disponibilidade do Serviço e Manutenção Técnica
            </h2>
            <p>
              A S W Systems LTDA emprega práticas avançadas de engenharia de confiabilidade e monitoramento contínuo para assegurar alta disponibilidade operacional de suas soluções.
            </p>
            <p>
              Interrupções programadas para melhorias estruturais ou manutenções preventivas serão comunicadas preferencialmente com antecedência de 24 (vinte e quatro) horas, executadas preferencialmente em horários de menor tráfego (madrugadas e finais de semana).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              5. Obrigações e Responsabilidades do Contratante
            </h2>
            <p>São obrigações do Contratante:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
              <li>Fornecer informações cadastrais autênticas, completas e atualizadas.</li>
              <li>Manter a confidencialidade de suas credenciais de login e senhas de acesso à plataforma.</li>
              <li>Utilizar a plataforma em estrita conformidade com a legislação brasileira, abstendo-se de praticar fraudes ou atos ilícitos.</li>
              <li>Respeitar os direitos de privacidade de seus clientes finais, em harmonia com a Lei Geral de Proteção de Dados (LGPD).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              6. Cancelamento, Rescisão e Reembolso
            </h2>
            <p>
              O Contratante tem o direito de solicitar o cancelamento da assinatura a qualquer momento, sem incidência de multas rescisórias abusivas para faturamentos mensais regulares.
            </p>
            <p>
              Conforme o <strong>Artigo 49 da Lei nº 8.078/1990 (Código de Defesa do Consumidor)</strong>, para contratações realizadas à distância, o Contratante dispõe do prazo de <strong>7 (sete) dias corridos</strong> a contar da assinatura inicial para exercer seu direito de arrependimento, com devolução integral do valor pago. Para detalhes específicos, consulte nossa <Link href="/reembolso" className="text-blue-400 hover:underline">Política de Reembolso</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              7. Propriedade Intelectual
            </h2>
            <p>
              Todos os direitos relativos ao código-fonte, arquitetura de software, marcas, logotipos, banco de dados e algoritmos pertencem exclusivamente à <strong>S W Systems LTDA</strong>. É expressamente vedada a engenharia reversa, cópia ou comercialização não autorizada de qualquer componente de nossos sistemas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white border-b border-slate-800/80 pb-2">
              8. Foro e Legislação Vigente
            </h2>
            <p>
              O presente contrato é regido e interpretado pelas leis da República Federativa do Brasil. Para dirimir eventuais controvérsias oriundas deste termo, as partes elegem o Foro da Comarca de <strong>São Luís, Estado do Maranhão</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
