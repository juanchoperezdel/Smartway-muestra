import { AlertCircle, Clock, FileSpreadsheet } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            Tu equipo no es lento. Tu sistema sí.
          </h2>
          <p className="text-lg text-gray-400">
            Si todavía mandás Excels por WhatsApp y cargás datos a mano de un sistema a otro, no es un problema de gente. Es un problema de operación.
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
              <h3 className="text-xl font-medium mb-3 text-white">Horas tiradas en tareas que no facturan</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pasar planillas al ERP, rendir gastos a mano, copiar pedidos del WhatsApp al stock. Tu equipo cobra para resolver clientes, no para mover datos.
              </p>
            </div>
          </div>

          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-blue-400 transition-colors relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Clock className="w-6 h-6 relative z-10" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Sistemas que no se hablan entre ellos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uno para ventas, otro para stock, planillas para todo lo que falta. Cada vez que algo falla, alguien tiene que cruzar los datos —y cada cruce manual es un error esperando.
              </p>
            </div>
          </div>

          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
               <div className="w-12 h-12 bg-[#141414] border border-white/10 rounded-xl flex items-center justify-center mb-6 text-gray-300 group-hover:text-purple-400 transition-colors relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <AlertCircle className="w-6 h-6 relative z-10" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Plata atrapada en procesos que no podés ver</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sin reportes en tiempo real no sabés cuánto stock tenés realmente, qué cliente te debe, ni dónde estás perdiendo margen. Decidís a ciegas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
