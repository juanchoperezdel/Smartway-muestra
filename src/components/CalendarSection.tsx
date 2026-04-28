export default function CalendarSection() {
  return (
    <section id="calendario" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E62B1E]/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E62B1E] text-xs font-semibold uppercase tracking-wider mb-6">
            Primeros Pasos
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
            Da el primer paso hacia<br/>
            <span className="text-[#E62B1E]">el futuro de tu operación</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hablemos durante 30 minutos. Entendemos tu proceso, evaluamos si un desarrollo a medida es la solución adecuada, y te asesoramos sin compromiso.
          </p>
        </div>

        <div className="bg-[#111111] rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden" style={{ minHeight: '700px' }}>
          {/* Iframe Calendly placeholder styled for dark mode if possible via wrapper or URL params */}
          <iframe 
            src="https://calendly.com/smartway-demo/30min?background_color=111111&text_color=ffffff&primary_color=E62B1E" 
            width="100%" 
            height="700" 
            frameBorder="0"
            title="Agendar reunión"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
