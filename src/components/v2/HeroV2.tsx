import { ArrowRight } from 'lucide-react';
import { scrollToForm, track } from '../../lib/tracking';

/**
 * Hero v2: altura reducida (entra todo sin scroll en mobile), texto estático
 * para pintar de inmediato (LCP), CTA único al form. WhatsApp vive en el botón flotante.
 */
export default function HeroV2() {
  const handlePrimary = () => {
    track('cta_click', { location: 'hero', label: 'Quiero mi diagnóstico' });
    scrollToForm();
  };

  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#050505] text-white">
      {/* Orbe de fondo (más liviano que v1) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E62B1E] via-purple-600 to-[#E62B1E] rounded-[100%] blur-[90px] mix-blend-screen" style={{ transform: 'scaleY(0.5)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 text-[#E62B1E] text-xs font-semibold uppercase tracking-widest mb-6 select-none">
          Software a medida para PyMEs
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-medium leading-[1.1] tracking-tight mb-5 select-none">
          Estás pagando sueldos<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">para cargar planillas a mano.</span>
        </h1>

        <p className="text-base sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Construimos el sistema a medida que automatiza eso —y libera a tu equipo para lo que sí factura.
        </p>

        <div className="flex justify-center w-full sm:w-auto">
          <button
            onClick={handlePrimary}
            className="inline-flex items-center justify-center gap-2 bg-[#E62B1E] hover:bg-[#D42417] text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-[0_0_20px_rgba(230,43,30,0.4)] w-full sm:w-auto"
          >
            Quiero mi diagnóstico
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <a
          href="#calculadora"
          onClick={() => track('cta_click', { location: 'hero', label: 'calculadora' })}
          className="mt-5 text-sm text-gray-500 hover:text-gray-300 underline underline-offset-4 transition-colors"
        >
          Ver cuánto perdés al año →
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-500 select-none">
          <span><span className="text-white font-semibold">+300</span> proyectos</span>
          <span className="text-white/20">·</span>
          <span><span className="text-white font-semibold">+17</span> años</span>
          <span className="text-white/20">·</span>
          <span>Microsoft Solutions Partner</span>
          <span className="text-white/20">·</span>
          <span>ISO 9001</span>
        </div>
      </div>
    </section>
  );
}
