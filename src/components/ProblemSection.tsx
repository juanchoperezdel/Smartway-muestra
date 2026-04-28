import { AlertCircle, Clock, FileSpreadsheet, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-6">
            El Problema
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            ¿Cuántas horas pierde tu equipo cargando datos a mano?
          </h2>
          <p className="text-lg text-gray-400">
            Si tu PyME todavía se mueve con Excel, WhatsApp y sistemas sueltos que no se hablan entre sí, el problema no es tu equipo. El problema es el sistema.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E62B1E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-[#E62B1E] transition-colors relative">
                <div className="absolute inset-0 bg-[#E62B1E]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileSpreadsheet className="w-6 h-6 relative z-10" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">400 planillas al sistema</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pasar datos de un Excel al ERP, o rendir gastos de una manera rústica consumen decenas de horas semanales que no generan valor real.
              </p>
              <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                Ver solución <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-blue-400 transition-colors relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Clock className="w-6 h-6 relative z-10" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Sistemas que no se conectan</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Tenés un software para ventas, otro para stock, y planillas para lo que falta. Alguien tiene que unificar todo eso perdiendo tiempo y asumiendo errores.
              </p>
              <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                Ver solución <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
               <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-purple-400 transition-colors relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <AlertCircle className="w-6 h-6 relative z-10" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">SaaS que no alcanza</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Probaste sistemas enlatados pero te diste cuenta de que tus procesos industriales o tu integración con hardware no entran ahí.
              </p>
              <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                Ver solución <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
