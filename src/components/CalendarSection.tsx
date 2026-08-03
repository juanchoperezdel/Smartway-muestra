import { useEffect } from 'react';

const MEETINGS_SCRIPT_SRC = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
const MEETINGS_URL = 'https://meetings.hubspot.com/florencia-franco/smartway-software?embed=true';

export default function CalendarSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = MEETINGS_SCRIPT_SRC;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      const container = document.querySelector('.meetings-iframe-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section id="calendario" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
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

        <div className="bg-white rounded-[2rem] shadow-[0_0_50px_rgba(230,43,30,0.15)] overflow-hidden">
          <div
            className="meetings-iframe-container"
            data-src={MEETINGS_URL}
            style={{ minHeight: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
