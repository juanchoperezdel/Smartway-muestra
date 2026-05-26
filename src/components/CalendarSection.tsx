import { useEffect } from 'react';

const HUBSPOT_SCRIPT_SRC = 'https://js.hsforms.net/forms/v2.js';
const HUBSPOT_PORTAL_ID = '50321602';
const HUBSPOT_FORM_ID = '1537fc31-303a-4b01-8da0-e350e0593226';
const HUBSPOT_TARGET = '#hubspot-form-container';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: { portalId: string; formId: string; target: string; region?: string }) => void;
      };
    };
  }
}

function renderHubspotForm() {
  if (!window.hbspt?.forms) return;
  const container = document.querySelector(HUBSPOT_TARGET);
  if (!container || container.children.length > 0) return;
  window.hbspt.forms.create({
    portalId: HUBSPOT_PORTAL_ID,
    formId: HUBSPOT_FORM_ID,
    target: HUBSPOT_TARGET,
    region: 'na1',
  });
}

export default function CalendarSection() {
  useEffect(() => {
    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | undefined;

    const tryRender = () => {
      if (cancelled) return;
      if (window.hbspt?.forms) {
        renderHubspotForm();
        return true;
      }
      return false;
    };

    if (!tryRender()) {
      if (!document.querySelector(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)) {
        const script = document.createElement('script');
        script.src = HUBSPOT_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      interval = setInterval(() => {
        if (tryRender() && interval) clearInterval(interval);
      }, 100);
    }

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      const container = document.querySelector(HUBSPOT_TARGET);
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

        <div className="bg-white rounded-[2rem] shadow-[0_0_50px_rgba(230,43,30,0.15)] p-6 md:p-10">
          <div id="hubspot-form-container"></div>
        </div>
      </div>
    </section>
  );
}
