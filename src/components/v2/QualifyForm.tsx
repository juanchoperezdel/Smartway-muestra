import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Check } from 'lucide-react';
import { track } from '../../lib/tracking';
import WhatsAppButton from './WhatsAppButton';

// MISMO form que ya está publicado (HubSpot Forms — CalendarSection.tsx en HEAD).
const HUBSPOT_SCRIPT_SRC = 'https://js.hsforms.net/forms/v2.js';
const HUBSPOT_PORTAL_ID = '50321602';
const HUBSPOT_FORM_ID = '1537fc31-303a-4b01-8da0-e350e0593226';
const TARGET_ID = 'sw-qualify-form';

/** Pre-llena (best-effort) el rubro elegido en WhatsApp, si el form lo permite. */
function prefillNegocio() {
  try {
    const negocio = localStorage.getItem('sw_negocio');
    if (!negocio) return;
    const container = document.getElementById(TARGET_ID);
    if (!container) return;
    const inputs = container.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select, textarea');
    inputs.forEach((el) => {
      const name = (el.getAttribute('name') || '').toLowerCase();
      if (name.includes('negocio') || name.includes('rubro') || name.includes('tipo')) {
        el.value = negocio;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  } catch {
    /* noop */
  }
}

export default function QualifyForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Revela el form en cuanto HubSpot inyecta su contenido (no dependemos solo de onFormReady).
    const container = document.getElementById(TARGET_ID);
    let mo: MutationObserver | undefined;
    if (container) {
      mo = new MutationObserver(() => {
        if (container.children.length > 0) {
          setLoaded(true);
          prefillNegocio();
        }
      });
      mo.observe(container, { childList: true, subtree: true });
    }

    const render = (): boolean => {
      if (!window.hbspt?.forms) return false;
      const target = document.getElementById(TARGET_ID);
      if (!target || target.children.length > 0) return true;
      const create = window.hbspt.forms.create as (o: Record<string, unknown>) => void;
      create({
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        target: `#${TARGET_ID}`,
        region: 'na1',
        onFormReady: () => {
          setLoaded(true);
          prefillNegocio();
        },
        onFormSubmitted: () => track('lead_submit', { form: 'qualify' }),
      });
      return true;
    };

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (render()) return;
      if (!document.querySelector(`script[src="${HUBSPOT_SCRIPT_SRC}"]`)) {
        const s = document.createElement('script');
        s.src = HUBSPOT_SCRIPT_SRC;
        s.async = true;
        document.body.appendChild(s);
      }
      const iv = setInterval(() => {
        if (render()) clearInterval(iv);
      }, 100);
    };

    // Cargar el script solo cuando la sección está por entrar en pantalla.
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start();
          obs.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (mo) mo.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
            No es una llamada de ventas: miramos tu operación y te llevás un plan concreto —lo apliques con nosotros o por tu cuenta. Dejanos un par de datos y te contactamos.
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

        {/* Tarjeta con el form de HubSpot (mismo que el publicado) */}
        <div className="bg-white rounded-[2rem] shadow-[0_0_50px_rgba(230,43,30,0.15)] overflow-hidden relative p-6 sm:p-10" style={{ minHeight: '460px' }}>
          {!loaded && (
            <div className="absolute inset-0 p-6 sm:p-10 animate-pulse space-y-4" aria-hidden="true">
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-100 rounded-lg" />
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-100 rounded-lg" />
              <div className="h-4 w-1/3 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-100 rounded-lg" />
              <div className="h-12 w-1/3 bg-gray-300 rounded-lg mt-2 ml-auto" />
            </div>
          )}
          <div id={TARGET_ID} className={loaded ? '' : 'opacity-0'} />
        </div>

        {/* Salida alternativa para quien no quiere llenar el form */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 mb-3">¿Preferís escribirnos directo?</p>
          <WhatsAppButton
            source="form"
            label="Hablar por WhatsApp"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#222] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors border border-white/10 hover:border-[#25D366]/40"
          />
        </div>
      </div>
    </section>
  );
}
