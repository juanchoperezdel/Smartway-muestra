import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Plus,
  Minus,
  X,
  Check,
  ShieldCheck,
  FileCheck2,
  Building2,
  LayoutDashboard,
  GraduationCap,
  Boxes,
  Cable,
  Smartphone,
  Code2,
  FileSpreadsheet,
  EyeOff,
  Users,
  Wallet,
  Sparkles,
  TrendingDown,
} from 'lucide-react';
import logoSmartway from '../../graficas/logo-smartway-web-black.png';

const logoStyle = { filter: 'invert(1) hue-rotate(180deg)' } as const;
const arsFmt = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
const fmt = (n: number) => `ARS ${arsFmt.format(Math.round(n))}`;

function scrollToCalendar() {
  const el = document.getElementById('agendar');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* Scroll-reveal wrapper para darle vida a la página */
function Reveal({
  children,
  delay = 0,
  className = '',
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  key?: string | number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[#E62B1E] text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-[#E62B1E]/50" />
      {children}
      <span className="w-6 h-px bg-[#E62B1E]/50" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
function Kit40Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center shrink-0 gap-3">
          <img src={logoSmartway} alt="Smartway" className="h-7 sm:h-8 w-auto" style={logoStyle} />
          <span className="hidden sm:inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#E62B1E] border border-[#E62B1E]/30 bg-[#E62B1E]/10 rounded-md px-2 py-1">
            KIT 4.0
          </span>
        </a>

        <button
          onClick={scrollToCalendar}
          className="bg-[#E62B1E] hover:bg-[#D42417] text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(230,43,30,0.3)] whitespace-nowrap"
        >
          Agendar diagnóstico
        </button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Calculadora interactiva                                             */
/* ------------------------------------------------------------------ */
const CAP = 20_000_000;
const MIN_COST = 4_000_000;
const MAX_COST = 50_000_000;

function Kit40Calculator() {
  const [cost, setCost] = useState(20_000_000);
  const covered = Math.min(cost * 0.5, CAP);
  const yours = cost - covered;
  const coveredPct = (covered / cost) * 100;
  const isCapped = cost * 0.5 > CAP;
  const sliderPct = ((cost - MIN_COST) / (MAX_COST - MIN_COST)) * 100;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#E62B1E]/10 blur-[70px] rounded-[2.5rem] pointer-events-none" />
      <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-[#E62B1E]/15 border border-[#E62B1E]/30 flex items-center justify-center text-[#E62B1E]">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold text-white">Calculadora KIT 4.0</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-white/10 rounded px-2 py-0.5">
            Módulo GES-01
          </span>
        </div>

        {/* Slider */}
        <label className="block text-xs text-gray-400 mb-2">
          Costo estimado de tu implementación
        </label>
        <div className="text-3xl sm:text-4xl font-heading font-semibold text-white mb-4 tabular-nums">
          {fmt(cost)}
        </div>
        <input
          type="range"
          min={MIN_COST}
          max={MAX_COST}
          step={500_000}
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#E62B1E]"
          style={{
            background: `linear-gradient(90deg, #E62B1E 0%, #E62B1E ${sliderPct}%, #1f1f1f ${sliderPct}%, #1f1f1f 100%)`,
          }}
        />
        <div className="flex justify-between text-[11px] text-gray-600 mt-2 mb-7">
          <span>{fmt(MIN_COST)}</span>
          <span className="text-gray-500">Mové la barra 👆</span>
          <span>{fmt(MAX_COST)}</span>
        </div>

        {/* Barra de reparto */}
        <div className="h-4 w-full rounded-full bg-[#1a1a1a] overflow-hidden flex mb-2">
          <div
            className="h-full bg-gradient-to-r from-[#E62B1E] to-[#ff6a5b] transition-all duration-500 ease-out"
            style={{ width: `${coveredPct}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] mb-6">
          <span className="text-[#E62B1E] font-medium">
            Lo pone el KIT 4.0 ({Math.round(coveredPct)}%)
          </span>
          <span className="text-gray-500">Tu parte</span>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#141414] border border-[#E62B1E]/30 rounded-2xl p-4">
            <div className="flex items-center gap-1.5 text-[11px] text-[#E62B1E] mb-1">
              <TrendingDown className="w-3.5 h-3.5" /> El KIT 4.0 cubre
            </div>
            <div className="text-xl sm:text-2xl font-heading font-semibold text-[#E62B1E] tabular-nums">
              {fmt(covered)}
            </div>
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-4">
            <div className="text-[11px] text-gray-400 mb-1">Tu inversión real</div>
            <div className="text-xl sm:text-2xl font-heading font-semibold text-white tabular-nums">
              {fmt(yours)}
            </div>
          </div>
        </div>

        {/* Nota tope */}
        <div className="mt-4 min-h-[1.25rem] text-[11px]">
          {isCapped ? (
            <span className="text-amber-400/90">
              ⚠ Tu costo supera el tope: el programa cubre hasta {fmt(CAP)} por empresa.
            </span>
          ) : (
            <span className="text-gray-500">
              El programa cubre el 50% hasta un tope de {fmt(CAP)} por empresa.
            </span>
          )}
        </div>

        <button
          onClick={scrollToCalendar}
          className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#E62B1E] hover:bg-[#D42417] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(230,43,30,0.35)]"
        >
          Quiero saber si califico
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-center text-[11px] text-gray-600 mt-3">
          Cálculo orientativo. El monto final se confirma en el diagnóstico.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Kit40Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-[#050505] text-white">
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] opacity-40 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#E62B1E] via-purple-600 to-[#E62B1E] rounded-[100%] blur-[100px] mix-blend-screen"
          style={{ transform: 'scaleY(0.5)' }}
        />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 text-[#E62B1E] text-xs font-semibold uppercase tracking-widest mb-8"
            >
              Programa KIT 4.0 · Smartway proveedor habilitado
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] tracking-tight mb-6"
            >
              Implementá tu sistema de gestión a medida y que el{' '}
              <span className="text-[#E62B1E]">KIT 4.0 cubra hasta el 50%</span> del costo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              El Programa KIT 4.0 financia hasta ARS 20.000.000 de la implementación de tu CRM, ERP
              o sistema a medida en tu PyME industrial. El cupo es limitado y se asigna por orden de
              presentación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToCalendar}
                className="inline-flex items-center justify-center gap-2 bg-[#E62B1E] hover:bg-[#D42417] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(230,43,30,0.4)]"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1A1A1A] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors border border-white/10 hover:border-white/20"
              >
                Ver cómo funciona →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500"
            >
              <span><span className="text-white font-semibold">+17</span> años de software a medida</span>
              <span className="text-white/20">·</span>
              <span><span className="text-white font-semibold">+300</span> proyectos</span>
              <span className="text-white/20">·</span>
              <span>ISO 9001</span>
            </motion.div>
          </div>

          {/* Calculadora interactiva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Kit40Calculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stat strip                                                          */
/* ------------------------------------------------------------------ */
function Kit40Stats() {
  const stats = [
    { big: 'Hasta 50%', small: 'del costo de implementación cubierto por el programa' },
    { big: 'ARS 20M', small: 'tope máximo por empresa (módulo GES-01)' },
    { big: '30 min', small: 'diagnóstico gratuito para saber si calificás' },
  ];
  return (
    <section className="bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/5">
        {stats.map((s, i) => (
          <Reveal key={s.big} delay={i * 0.1} className="pt-8 sm:pt-0 first:pt-0">
            <div className="text-3xl md:text-4xl font-heading font-semibold text-white mb-2">
              {s.big}
            </div>
            <div className="text-sm text-gray-400 max-w-[14rem] mx-auto leading-relaxed">
              {s.small}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Problema                                                            */
/* ------------------------------------------------------------------ */
function Kit40Problem() {
  const items = [
    {
      icon: <Wallet className="w-6 h-6 relative z-10" />,
      text: 'El costo inicial frena la adopción de software de gestión en la mayoría de las PyMEs industriales.',
      glow: 'bg-[#E62B1E]/20',
      color: 'group-hover:text-[#E62B1E]',
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 relative z-10" />,
      text: 'Los procesos siguen en papel, WhatsApp y planillas. Sin trazabilidad ni visibilidad real.',
      glow: 'bg-blue-500/20',
      color: 'group-hover:text-blue-400',
    },
    {
      icon: <EyeOff className="w-6 h-6 relative z-10" />,
      text: 'El dueño no ve la operación en tiempo real: hay que preguntarle a cada área qué está pasando.',
      glow: 'bg-purple-500/20',
      color: 'group-hover:text-purple-400',
    },
    {
      icon: <Users className="w-6 h-6 relative z-10" />,
      text: 'Cada persona gestiona su parte a su manera. Sin un sistema, la empresa depende de las personas.',
      glow: 'bg-emerald-500/20',
      color: 'group-hover:text-emerald-400',
    },
  ];
  return (
    <section id="problema" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>El problema</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            Sin sistema, la empresa depende de las personas.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="h-full bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 ${it.color} transition-colors relative`}
                  >
                    <div
                      className={`absolute inset-0 ${it.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                    {it.icon}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cómo funciona (timeline)                                            */
/* ------------------------------------------------------------------ */
function Kit40Process() {
  const steps = [
    {
      n: '01',
      title: 'Diagnóstico gratuito',
      text: 'Smartway mapea los procesos actuales de tu empresa, identifica los gaps operativos y evalúa si calificás para el programa. 30 minutos. Sin compromiso.',
    },
    {
      n: '02',
      title: 'Propuesta y presupuesto formal',
      text: 'Armamos la propuesta técnica y económica con el monto estimado que cubriría el KIT 4.0 en tu caso concreto.',
    },
    {
      n: '03',
      title: 'Solicitud de Elegibilidad vía TAD',
      text: 'Smartway te acompaña en la presentación ante el Ministerio de Economía. Gestionamos la documentación para que vos te enfoques en tu negocio.',
    },
    {
      n: '04',
      title: 'Implementación a medida',
      text: 'Construimos e implementamos tu sistema de gestión a medida —CRM y ERP integrados con lo que ya usás. Capacitación del equipo incluida.',
    },
  ];
  return (
    <section id="como-funciona" className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            De la solicitud a la implementación.
          </h2>
        </Reveal>

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E62B1E]/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 0.12} className="relative text-center lg:text-left">
                <div className="w-12 h-12 rounded-full bg-[#E62B1E] text-white text-sm font-bold flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(230,43,30,0.5)] mx-auto lg:mx-0 relative z-10 ring-8 ring-[#0A0A0A]">
                  {s.n}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Requisitos                                                          */
/* ------------------------------------------------------------------ */
function Kit40Requirements() {
  const reqs = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Ser PyME industrial',
      text: 'La empresa debe estar categorizada como MiPyME y desarrollar actividad industrial en Argentina.',
    },
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      title: 'Certificado MiPyME vigente',
      text: 'Requisito obligatorio. Su tramitación lleva tiempo, por eso es clave iniciarlo antes.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Sin deuda fiscal ni previsional',
      text: 'No debe haber deuda exigible ante ARCA ni la Seguridad Social al momento de presentar la solicitud.',
    },
  ];
  return (
    <section id="requisitos" className="py-24 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Requisitos</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            ¿Tu empresa puede acceder al programa?
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reqs.map((r, idx) => (
            <Reveal key={r.title} delay={idx * 0.1}>
              <div className="h-full bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-[#E62B1E]/30 transition-colors">
                <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-[#E62B1E]">
                  {r.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="text-center text-gray-400 text-sm mt-12">
            ¿No estás seguro si calificás?{' '}
            <button onClick={scrollToCalendar} className="text-[#E62B1E] hover:underline font-medium">
              En el diagnóstico gratuito te lo decimos en 30 minutos.
            </button>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Qué incluye                                                         */
/* ------------------------------------------------------------------ */
function Kit40Includes() {
  const items = [
    {
      icon: <Boxes className="w-6 h-6 relative z-10" />,
      title: 'Sistema de gestión a medida',
      text: 'CRM y ERP construidos alrededor de tus procesos, no al revés. Una sola plataforma para toda la operación.',
      glow: 'bg-[#E62B1E]/20',
    },
    {
      icon: <Cable className="w-6 h-6 relative z-10" />,
      title: 'Integración con lo que ya usás',
      text: 'Tu facturador, e-commerce, sistemas legacy y hardware de planta conectados, para que dejen de copiar datos a mano.',
      glow: 'bg-blue-500/20',
    },
    {
      icon: <Smartphone className="w-6 h-6 relative z-10" />,
      title: 'Apps web y mobile',
      text: 'La operación en el celular del operario, del vendedor y del repartidor. Carga rápida, sin papel, sincronizada en tiempo real.',
      glow: 'bg-purple-500/20',
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 relative z-10" />,
      title: 'Dashboard en tiempo real',
      text: 'El dueño ve el avance de la operación, las métricas y la actividad del equipo sin tener que preguntar a nadie.',
      glow: 'bg-emerald-500/20',
    },
    {
      icon: <GraduationCap className="w-6 h-6 relative z-10" />,
      title: 'Capacitación incluida',
      text: 'Entrenamos a tu equipo en el uso del sistema. La adopción empieza desde el primer día de implementación.',
      glow: 'bg-amber-500/20',
    },
    {
      icon: <Code2 className="w-6 h-6 relative z-10" />,
      title: 'El código es 100% tuyo',
      text: 'Te entregamos repositorio, documentación y accesos. Sin licencias por usuario ni dependencia eterna del proveedor.',
      glow: 'bg-[#E62B1E]/20',
    },
  ];
  return (
    <section id="incluye" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E62B1E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Qué incluye</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            Todo lo que implementamos con el KIT 4.0.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <Reveal key={it.title} delay={(idx % 3) * 0.08}>
              <div className="h-full bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-white relative">
                    <div
                      className={`absolute inset-0 ${it.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    {it.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{it.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Comparación                                                         */
/* ------------------------------------------------------------------ */
function Kit40Comparison() {
  const sin = [
    'La operación vive en planillas, WhatsApp y la cabeza de cada persona',
    'Carga manual de datos entre sistemas que no se hablan',
    'Cada cruce manual de información es un error esperando',
    'Visibilidad del dueño: hay que preguntar a cada área',
    'Sin métricas en tiempo real para tomar decisiones',
    'Cuando alguien se va, se va su forma de trabajar',
  ];
  const con = [
    'Toda la operación en una sola plataforma, en tiempo real',
    'Los sistemas se hablan solos: sin copiar y pegar',
    'El sistema se moldea a tus procesos, no al revés',
    'Dashboard propio: el dueño ve todo sin depender de nadie',
    'Métricas por área, etapa y resultado del negocio',
    'El conocimiento queda en el sistema, no en las personas',
  ];
  return (
    <section id="comparativa" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E62B1E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Comparación</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            Sin sistema vs. con un sistema a medida.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sin sistema */}
          <Reveal>
            <div className="h-full bg-[#111111] rounded-[2rem] p-8 md:p-10 border border-white/10">
              <div className="inline-flex items-center gap-2 mb-8 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium px-4 py-2 rounded-lg">
                Sin sistema <X className="w-4 h-4" />
              </div>
              <ul className="space-y-5">
                {sin.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 bg-white/5 p-1 rounded-full border border-white/10">
                      <X className="w-4 h-4 text-red-500" />
                    </span>
                    <span className="text-sm text-gray-400 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Con Smartway */}
          <Reveal delay={0.12}>
            <div className="h-full bg-[#141414] rounded-[2rem] p-8 md:p-10 border border-[#E62B1E]/30 shadow-[0_0_40px_rgba(230,43,30,0.1)] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#E62B1E]/10 to-transparent pointer-events-none rounded-[2rem]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-8 bg-[#E62B1E]/15 border border-[#E62B1E]/30 text-[#E62B1E] text-sm font-medium px-4 py-2 rounded-lg">
                  Con Smartway <Check className="w-4 h-4" />
                </div>
                <ul className="space-y-5">
                  {con.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 bg-white/5 p-1 rounded-full border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </span>
                      <span className="text-sm text-gray-200 leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: '¿Quién puede acceder al Programa KIT 4.0?',
    a: 'Empresas categorizadas como MiPyME con actividad industrial en Argentina, con Certificado MiPyME vigente y sin deuda fiscal ni previsional exigible. Smartway evalúa si tu empresa califica en el diagnóstico gratuito.',
  },
  {
    q: '¿Cuánto cubre exactamente el programa?',
    a: 'Hasta el 50% del costo neto de implementación (sin IVA), con un tope de ARS 20.000.000 para el módulo de gestión (GES-01). El cupo total del programa es de ARS 9.000 millones y se asigna por orden de presentación.',
  },
  {
    q: '¿Qué incluye el módulo GES-01?',
    a: 'El módulo GES-01 cubre la implementación de soluciones de gestión: CRM, ERP y MRP. En la propuesta de Smartway eso se traduce en tu sistema de gestión a medida —CRM y ERP integrados, construidos alrededor de cómo trabaja tu empresa.',
  },
  {
    q: '¿Cuándo se cierra el programa?',
    a: 'No hay fecha fija de cierre. El programa se cierra cuando se agota el cupo total de ARS 9.000 millones, que se asigna por orden de presentación. No se anuncia con anticipación cuánto cupo queda disponible.',
  },
  {
    q: '¿Por qué implementar con Smartway?',
    a: 'Smartway es proveedor habilitado del Programa KIT 4.0, con más de 17 años desarrollando software a medida para PyMEs, +300 proyectos e ISO 9001. No vendemos un enlatado: construimos el sistema alrededor de cómo trabaja tu empresa, y el código queda 100% tuyo.',
  },
  {
    q: '¿Cómo se acredita el beneficio?',
    a: 'El subsidio se acredita como crédito tributario en la cuenta ARCA del proveedor, no como transferencia directa a tu empresa. Esto se descuenta del costo final de implementación que vos pagás.',
  },
];

function Kit40FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E62B1E]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white">
            Preguntas frecuentes.
          </h2>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.q} delay={idx * 0.05}>
                <div className="bg-[#111111] rounded-2xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-medium text-white">{item.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{item.a}</div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA final + calendario                                             */
/* ------------------------------------------------------------------ */
const HUBSPOT_SCRIPT_SRC = 'https://js.hsforms.net/forms/v2.js';
const HUBSPOT_PORTAL_ID = '50321602';
const HUBSPOT_FORM_ID = '1537fc31-303a-4b01-8da0-e350e0593226';
const HUBSPOT_TARGET = '#kit40-hubspot-form';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: { portalId: string; formId: string; target: string; region?: string }) => void;
      };
    };
  }
}

function renderHubspotForm() {
  if (!window.hbspt?.forms) return;
  const container = document.querySelector(HUBSPOT_TARGET);
  if (!container || container.children.length > 0) return;
  window.hbspt.forms.create({
    portalId: HUBSPOT_PORTAL_ID,
    formId: HUBSPOT_FORM_ID,
    target: HUBSPOT_TARGET,
    region: 'na1',
  });
}

function Kit40CTA() {
  useEffect(() => {
    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | undefined;

    const tryRender = () => {
      if (cancelled) return false;
      if (window.hbspt?.forms) {
        renderHubspotForm();
        return true;
      }
      return false;
    };

    if (!tryRender()) {
      if (!document.querySelector(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)) {
        const script = document.createElement('script');
        script.src = HUBSPOT_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      interval = setInterval(() => {
        if (tryRender() && interval) clearInterval(interval);
      }, 100);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      const container = document.querySelector(HUBSPOT_TARGET);
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section id="agendar" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E62B1E]/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E62B1E] text-xs font-semibold uppercase tracking-wider mb-6">
            Empezá hoy · Diagnóstico gratis · 30 min
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            Agendá tu diagnóstico gratuito.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Evaluamos si tu empresa califica para el KIT 4.0 y te decimos cuánto cubriría el programa
            en tu caso concreto. 30 minutos, sin compromiso.
          </p>
        </Reveal>

        <div className="bg-white rounded-[2rem] shadow-[0_0_50px_rgba(230,43,30,0.15)] p-6 md:p-10">
          <div id="kit40-hubspot-form"></div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
          <span>✓ 30 minutos</span>
          <span className="text-white/20">·</span>
          <span>✓ Evaluación personalizada</span>
          <span className="text-white/20">·</span>
          <span>✓ Sin compromiso</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Kit40Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <img src={logoSmartway} alt="Smartway" className="h-8 w-auto" style={logoStyle} />
            <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#E62B1E] border border-[#E62B1E]/30 bg-[#E62B1E]/10 rounded-md px-2 py-1">
              KIT 4.0
            </span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
            <li><a href="#requisitos" className="hover:text-white transition-colors">Requisitos</a></li>
            <li><a href="#incluye" className="hover:text-white transition-colors">Qué incluye</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div className="text-center pt-8 border-t border-white/5 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Smartway · Proveedor habilitado del Programa KIT 4.0 ·
          Software a medida para PyMEs industriales. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function Kit40Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E62B1E]/30 selection:text-white">
      <Kit40Header />
      <main>
        <Kit40Hero />
        <Kit40Stats />
        <Kit40Problem />
        <Kit40Process />
        <Kit40Requirements />
        <Kit40Includes />
        <Kit40Comparison />
        <Kit40CTA />
        <Kit40FAQ />
      </main>
      <Kit40Footer />
    </div>
  );
}
