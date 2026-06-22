import Header from '../Header';
import ProblemSection from '../ProblemSection';
import SaaSVSCustom from '../SaaSVSCustom';
import ROICalculator from '../ROICalculator';
import ServicesSection from '../ServicesSection';
import TestimonialsSection from '../TestimonialsSection';
import FAQSection from '../FAQSection';
import Footer from '../Footer';

import HeroV2 from './HeroV2';
import QualifyForm from './QualifyForm';
import WhatsAppFab from './WhatsAppFab';

/**
 * Landing /v2 — rediseño CRO.
 * Form de agendamiento (mismo embed de HubSpot publicado) optimizado + WhatsApp flotante.
 * El form usa id="calendario" para que los CTAs reutilizados (Header, secciones) sigan funcionando.
 */
export default function V2Landing() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E62B1E]/30 selection:text-white">
      <Header />
      <main>
        <HeroV2 />
        <ProblemSection />
        <SaaSVSCustom />
        <ROICalculator />
        <ServicesSection />
        <TestimonialsSection />
        <QualifyForm />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
