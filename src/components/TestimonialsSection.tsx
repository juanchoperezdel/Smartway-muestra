import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      metric: "22 hs/semana recuperadas",
      quote: "Antes pasábamos los pedidos del WhatsApp a planilla y de la planilla al ERP. Ahora entran solos. El equipo administrativo dejó de quedarse hasta tarde.",
      name: "Martín Rivas",
      company: "Logística Sur SRL — Buenos Aires",
      initials: "MR",
      color: "from-blue-500/20"
    },
    {
      metric: "0 errores de stock en 6 meses",
      quote: "Estábamos atrapados en un ERP que no contemplaba nuestra producción metalúrgica. Smartway lo armó alrededor de cómo trabajamos —no al revés.",
      name: "Laura Gómez",
      company: "Industrias Metalúrgicas — Rosario",
      initials: "LG",
      color: "from-[#E62B1E]/20"
    },
    {
      metric: "1.200 consultas/mes automatizadas",
      quote: "El bot que armaron contesta los pedidos de cotización de la web y los carga directo al sistema. Liberamos a dos personas para tareas que sí venden.",
      name: "Carlos Mendoza",
      company: "TechRetail Argentina — CABA",
      initials: "CM",
      color: "from-emerald-500/20"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6">
            PyMEs que dejaron de pelearse con su operación.
          </h2>
          <p className="text-lg text-gray-400">
            Casos representativos del tipo de proyectos que hacemos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors relative flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 text-[#E62B1E] text-xs font-semibold uppercase tracking-wider mb-6">
                  {t.metric}
                </div>
                <Quote className="w-8 h-8 text-white/10 mb-6" />
                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br ${t.color} border border-white/10`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
