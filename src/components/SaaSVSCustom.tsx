import type { ReactNode } from 'react';
import { X, Check } from 'lucide-react';

export default function SaaSVSCustom() {
  return (
    <section id="comparativa" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Decorative center orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E62B1E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Comparativa
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            Cuando Odoo, Tango o Devy no te alcanzan.
          </h2>
          <p className="text-lg text-gray-400">
            Los SaaS enlatados son rápidos de prender. Pero si tu logística es atípica, si tenés manufactura, hardware en planta o procesos que ningún sistema "estándar" contempla —te terminan costando más de lo que ahorran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SaaS Genérico */}
          <div className="bg-[#111111] rounded-[2rem] p-8 md:p-10 border border-white/10 relative">
            <div className="text-center mb-10 pb-8 border-b border-white/10">
              <h3 className="text-2xl font-medium text-gray-400 mb-2">SaaS enlatado</h3>
              <p className="text-sm text-gray-500">Rápido al principio. Caro y rígido después.</p>
            </div>
            <ul className="space-y-6">
              <ListItem icon={<X className="text-red-500" />} text="Vos te adaptás al sistema. Tus procesos quedan a medias." textClass="text-gray-400" />
              <ListItem icon={<X className="text-red-500" />} text='Tu hardware no entra. Las integraciones especiales son "no se puede".' textClass="text-gray-400" />
              <ListItem icon={<X className="text-red-500" />} text="Pagás licencia por usuario. Cuanto más crecés, más sangrás." textClass="text-gray-400" />
              <ListItem icon={<X className="text-red-500" />} text="Cuando necesitás un cambio, dependés de la roadmap del proveedor." textClass="text-gray-400" />
            </ul>
          </div>

          {/* Smartway A Medida */}
          <div className="bg-[#141414] rounded-[2rem] p-8 md:p-10 shadow-[0_0_40px_rgba(230,43,30,0.1)] border border-[#E62B1E]/30 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#E62B1E]/10 to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute top-0 right-8 -translate-y-1/2 z-20">
              <span className="bg-[#E62B1E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(230,43,30,0.5)] uppercase tracking-wider whitespace-nowrap">
                La que conviene
              </span>
            </div>
            <div className="text-center mb-10 pb-8 border-b border-white/10 relative z-10">
              <h3 className="text-2xl font-medium text-white mb-2">Software a medida con Smartway</h3>
              <p className="text-sm text-[#E62B1E]">Construido alrededor de cómo trabajás vos.</p>
            </div>
            <ul className="space-y-6 relative z-10">
              <ListItem icon={<Check className="text-emerald-400" />} text="El sistema se moldea a tus procesos —no al revés." textClass="text-gray-200" />
              <ListItem icon={<Check className="text-emerald-400" />} text="Lo que tengas conectamos: hardware, APIs, sistemas legacy, lo que sea." textClass="text-gray-200" />
              <ListItem icon={<Check className="text-emerald-400" />} text="Pagás una vez. Sumás 5 o 50 usuarios sin pagar más." textClass="text-gray-200" />
              <ListItem icon={<Check className="text-emerald-400" />} text="Si mañana cambia tu negocio, el software cambia con vos." textClass="text-gray-200" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ icon, text, textClass = "text-gray-600" }: { icon: ReactNode; text: string; textClass?: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 shrink-0 bg-white/5 p-1 rounded-full border border-white/10">{icon}</div>
      <span className={`leading-relaxed text-sm ${textClass}`}>{text}</span>
    </li>
  );
}
