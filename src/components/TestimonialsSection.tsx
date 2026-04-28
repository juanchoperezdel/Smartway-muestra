import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Gracias a Smartway pudimos automatizar un proceso logístico que nos tomaba horas. La integración con nuestros sistemas actuales fue impecable y no tuvimos que descartar nuestra infraestructura.",
      name: "Martín Rivas",
      company: "Logística Sur SRL",
      initials: "MR",
      color: "from-blue-500/20"
    },
    {
      quote: "Estábamos limitados por nuestro ERP genérico. Con el desarrollo a medida logramos adaptar el software a nuestra forma de trabajo real, no al revés. El equipo entendió nuestra necesidad desde el primer día.",
      name: "Laura Gómez",
      company: "Industrias Metalúrgicas",
      initials: "LG",
      color: "from-[#E62B1E]/20"
    },
    {
      quote: "El agente de IA que implementaron nos ayudó a procesar cientos de consultas que antes requerían carga manual. Recuperamos decenas de horas por semana para dedicarnos a lo importante.",
      name: "Carlos Mendoza",
      company: "TechRetail Argentina",
      initials: "CM",
      color: "from-emerald-500/20"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Testimonios
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-400">
            Casos reales de empresas que dejaron atrás los procesos manuales y los sistemas rígidos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors relative flex flex-col justify-between">
              <div>
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
