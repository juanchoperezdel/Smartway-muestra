/**
 * Configuración de WhatsApp. El número y los rubros deben confirmarse con el cliente.
 * Formato wa.me: código de país + número, sin "+" ni espacios.
 */
export const WHATSAPP_NUMBER = '5491160098200'; // TODO cliente: confirmar número comercial (footer: +54 11 6009-8200)

/** Opciones de la micro-pregunta previa al chat. Personalizan el mensaje. */
export const BUSINESS_OPTIONS = [
  'Comercio / Retail',
  'Logística / Distribución',
  'Industria / Manufactura',
  'Servicios profesionales',
  'Otro',
] as const;

export type BusinessOption = (typeof BUSINESS_OPTIONS)[number];

/** Arma el deep-link de WhatsApp con un mensaje pre-cargado según el rubro elegido. */
export function buildWhatsappUrl(negocio: string): string {
  const msg = `Hola! Quiero coordinar una reunión para evaluar mi caso. Rubro: ${negocio}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
