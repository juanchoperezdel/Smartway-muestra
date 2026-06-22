/**
 * Empuja eventos al dataLayer de GTM.
 * GTM ya está cargado en el sitio; acá solo alimentamos los eventos de conversión.
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, data: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

/** Scroll suave a la sección del formulario de calificación. */
export function scrollToForm(): void {
  const el = document.getElementById('calendario');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
