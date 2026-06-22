import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_OPTIONS, buildWhatsappUrl } from '../../lib/whatsapp';
import { track } from '../../lib/tracking';

interface Props {
  /** Clases del botón disparador. */
  className?: string;
  label?: string;
  /** Para distinguir el origen del clic en GTM (hero, sticky, form). */
  source?: string;
}

/**
 * Botón de WhatsApp con micro-pregunta previa (rubro).
 * La respuesta arma el mensaje pre-cargado y se guarda para pre-llenar el form HubSpot.
 */
export default function WhatsAppButton({ className = '', label = 'Hablar por WhatsApp', source = 'hero' }: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (negocio: string) => {
    try {
      localStorage.setItem('sw_negocio', negocio);
    } catch {
      /* noop */
    }
    track('whatsapp_click', { negocio, source });
    window.open(buildWhatsappUrl(negocio), '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
      >
        <MessageCircle className="w-4 h-4" />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-lg font-heading font-medium text-white">¿Qué tipo de negocio tenés?</h3>
                <p className="text-sm text-gray-400 mt-1">Así llegás directo a la persona indicada.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 text-gray-500 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid gap-2">
              {BUSINESS_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#222] border border-white/10 hover:border-[#25D366]/40 text-white text-sm font-medium transition-colors"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
