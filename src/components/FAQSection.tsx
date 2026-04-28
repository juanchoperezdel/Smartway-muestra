import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto cuesta hacer un software a medida?',
    a: 'Los proyectos arrancan desde USD 10.000 y se cierran con precio fijo. En el diagnóstico te damos un rango ajustado a tu caso —sin que tengas que firmar nada.',
  },
  {
    q: '¿En cuánto tiempo lo tengo funcionando?',
    a: 'El primer entregable usado por tu equipo en producción: entre 4 y 6 semanas desde que arrancamos. Después sumamos módulos cada 2–4 semanas.',
  },
  {
    q: '¿Y si el día de mañana ustedes desaparecen?',
    a: 'El código es 100% tuyo desde el primer día. Te entregamos el repositorio, la documentación y los accesos. Cualquier dev puede continuar el trabajo —aunque no sea Smartway.',
  },
  {
    q: '¿Tengo que tirar a la basura los sistemas que ya uso?',
    a: 'Casi nunca. Lo más común es integrar lo que ya funciona (tu ERP, tu e-commerce, tu facturador) y construir solo encima de los huecos.',
  },
  {
    q: '¿Cuándo NO conviene hacer esto?',
    a: 'Si un SaaS estándar (Odoo, Tango, Holded, Bitrix) ya cubre el 90% de tu operación, no tiene sentido pagar por algo a medida. Te lo decimos en el diagnóstico. Smartway sirve cuando tu negocio tiene procesos, hardware o integraciones que ningún sistema enlatado contempla.',
  },
  {
    q: '¿Qué pasa después del diagnóstico si no avanzamos?',
    a: 'Te queda el mapa de dónde estás perdiendo plata y por dónde se podría arrancar. Sin compromiso, sin lista de espera, sin llamadas de seguimiento molestas.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E62B1E]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            Lo que todo dueño de PyME pregunta.
          </h2>
          <p className="text-lg text-gray-400">
            Si tu pregunta no está acá, te la contestamos en el diagnóstico —sin compromiso.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="bg-[#111111] rounded-2xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium text-white">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
