import { useEffect, useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

/**
 * Botón flotante de WhatsApp, abajo a la derecha.
 * Aparece después de cierto scroll para no competir con el hero.
 */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <WhatsAppButton
        source="fab"
        label=""
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1FB855] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-colors [&_svg]:w-7 [&_svg]:h-7"
      />
    </div>
  );
}
