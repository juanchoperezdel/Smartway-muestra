import { useEffect } from 'react';
import { ArrowDown, Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

// Booking widget de LeadConnector (el que estaba antes del form de HubSpot).
const LEADCONNECTOR_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';
const BOOKING_SRC = 'https://api.leadconnectorhq.com/widget/booking/G2LErZz0UzLgvaYAjrLZ';
const IFRAME_ID = 'G2LErZz0UzLgvaYAjrLZ_1785787013271';

export default function QualifyForm() {
  // El script de LeadConnector hace el auto-resize del iframe. Se carga en el mount
  // (no diferido): si llega tarde, el widget queda con la altura fija del embed.
  useEffect(() => {
    if (document.querySelector(`script[src="${LEADCONNECTOR_SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = LEADCONNECTOR_SCRIPT_SRC;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="calendario"
      className="py-20 sm:py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E62B1E]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado = CTA con instrucción explícita */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E62B1E] text-xs font-semibold uppercase tracking-wider mb-5">
            Gratis · 30 min · sin venderte nada
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-medium text-white mb-4 leading-tight">
            En 30 minutos te decimos qué automatizar<br className="hidden sm:block" /> primero y cuánto vas a ahorrar.
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            No es una llamada de ventas: miramos tu operación y te llevás un plan concreto —lo apliques con nosotros o por tu cuenta. Elegí el horario que te sirva.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Sin costo ni compromiso</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> No te vendemos nada</span>
            <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /> Salís con un plan concreto</span>
          </div>

          <div className="flex justify-center mt-6 text-[#E62B1E] animate-bounce">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>

        {/* Tarjeta con el booking widget de LeadConnector */}
        <div className="bg-[#111111] rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
          <iframe
            src={BOOKING_SRC}
            id={IFRAME_ID}
            title="Agendar reunión"
            allow="payment"
            scrolling="no"
            className="w-full block min-h-[700px]"
            style={{ border: 'none', overflow: 'hidden' }}
          />
        </div>

        {/* Salida alternativa para quien no quiere agendar */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 mb-3">¿No te carga el calendario o preferís escribirnos directo?</p>
          <WhatsAppButton
            source="form"
            label="Hablar por WhatsApp"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#222] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors border border-white/10 hover:border-[#25D366]/40"
          />
          <p className="text-sm text-gray-500 mt-4">
            <a href="mailto:info@smartway.com.ar" className="text-[#E62B1E] hover:underline font-medium">info@smartway.com.ar</a>
          </p>
        </div>
      </div>
    </section>
  );
}
