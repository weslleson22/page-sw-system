import React from "react";
import {
  GraduationCap,
  Terminal,
  Server,
  Cpu,
  Shield,
  Layers,
  Database,
  GitBranch,
  CheckCircle,
  Code2,
} from "lucide-react";

export const Engineering: React.FC = () => {
  const leadership = [
    {
      name: "Wesleson Souza Silva",
      role: "Sócio-Administrador & Head de Engenharia",
      credentials: "Mestre em Ciência / Engenharia da Computação",
      description:
        "Pesquisador e arquiteto de software com vasta experiência em sistemas distribuídos, algoritmos de otimização, microsserviços e segurança de aplicações corporativas.",
      highlight: "Mestrado Acadêmico • Liderança Técnica",
    },
    {
      name: "Sidney Silva Martins",
      role: "Sócio & Diretor de Operações",
      credentials: "Especialista em Gestão de Tecnologia & Negócios",
      description:
        "Foco na operação de ecossistemas SaaS, governança corporativa, relacionamento com clientes e expansão estratégica de produtos digitais.",
      highlight: "Operações Estratégicas • Governança",
    },
  ];

  const pillars = [
    {
      title: "Clean Architecture & DDD",
      desc: "Separação rigorosa de regras de negócio e infraestrutura. Código desacoplado, testável e preparado para evoluções contínuas.",
      icon: Layers,
    },
    {
      title: "Alta Concorrência & Baixa Latência",
      desc: "Backends orientados a eventos, cache distribuído com Redis e bancos relacionais otimizados com índices de alta performance.",
      icon: Cpu,
    },
    {
      title: "Segurança Defensiva & LGPD",
      desc: "Implementação nativa de RBAC, sanitização rigorosa de inputs, tokenização de pagamentos e criptografia ponta a ponta.",
      icon: Shield,
    },
    {
      title: "CI/CD & Observabilidade 24/7",
      desc: "Esteiras automatizadas de teste e deploy com monitoramento de métricas, APM de latência e logs estruturados em tempo real.",
      icon: GitBranch,
    },
  ];

  const techStack = [
    { category: "Frontend", items: ["Next.js 14", "TypeScript", "React", "Tailwind CSS"] },
    { category: "Backend & APIs", items: ["Node.js", "Express / NestJS", "RESTful & Webhooks", "Docker"] },
    { category: "Banco de Dados & Cache", items: ["PostgreSQL", "Redis", "Prisma / TypeORM", "Supabase"] },
    { category: "Infra & Pagamentos", items: ["Vercel Edge", "AWS Cloud", "Payment Gateways", "Cloudflare"] },
  ];

  return (
    <section id="engenharia" className="py-24 bg-[#0B0D13] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0F1117] border border-slate-800 text-xs text-blue-400 font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>RIGOR CIENTÍFICO & GOVERNANÇA TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engenharia Orientada por Mestrado em Computação
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Diferente de agências comuns que montam templates genéricos, na{" "}
            <strong className="text-white">S W Systems LTDA</strong> a engenharia é construída
            com fundamentação acadêmica sólida, arquiteturas defensivas e padrões corporativos.
          </p>
        </div>

        {/* Leadership Bios */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((person, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-[#0F1117] border border-slate-800 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900/50">
                    {person.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2.5 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 font-mono mt-0.5">
                    {person.role}
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/60">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 font-mono text-emerald-400 mb-2">
                  Formação: {person.credentials}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {person.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Pillars */}
        <div className="mt-14">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span>Nossos Pilares Arquiteturais</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-lg bg-[#0F1117] border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-md bg-[#161922] border border-slate-700/60 flex items-center justify-center text-blue-400 mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modern Tech Stack Grid */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#0F1117] border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                ECOSSISTEMA TECNOLÓGICO
              </span>
              <h4 className="text-lg font-bold text-white">Stack Corporativa Homologada</h4>
            </div>
            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>100% TypeScript & Modern Web</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group, idx) => (
              <div key={idx} className="space-y-2.5">
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-2 py-1 rounded bg-[#090A0F] border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Engineering;
