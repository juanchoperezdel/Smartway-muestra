export default function CalendarSection() {
  return (
    <section id="calendario" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E62B1E]/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E62B1E] text-xs font-semibold uppercase tracking-wider mb-6">
            Diagnóstico gratis · 30 minutos
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            No necesitás saber qué pedir.<br/>
            <span className="text-[#E62B1E]">Solo qué no está funcionando.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            30 minutos. Nos contás cómo trabaja tu PyME, te decimos qué se puede automatizar y cuánto cuesta. Si no tiene sentido para tu caso, te lo decimos sin vueltas.
          </p>
        </div>

        <div className="bg-[#111111] rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
          <iframe
            src="https://calendly.com/smartway-demo/30min?background_color=111111&text_color=ffffff&primary_color=E62B1E"
            className="w-full h-[600px] md:h-[700px] block"
            loading="lazy"
            title="Agendar reunión"
          ></iframe>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          ¿No te carga el calendario? Escribinos directo:{' '}
          <a href="https://wa.me/541160098200" className="text-[#E62B1E] hover:underline font-medium">WhatsApp</a>
          {' · '}
          <a href="mailto:info@smartway.com.ar" className="text-[#E62B1E] hover:underline font-medium">info@smartway.com.ar</a>
        </p>
      </div>
    </section>
  );
}
