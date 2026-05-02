/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SaaSVSCustom from './components/SaaSVSCustom';
import ROICalculator from './components/ROICalculator';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CalendarSection from './components/CalendarSection';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYouPage';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '');

  if (path === '/thank-you') {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E62B1E]/30 selection:text-white">
        <ThankYouPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E62B1E]/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SaaSVSCustom />
        <ROICalculator />
        <ServicesSection />
        <TestimonialsSection />
        <CalendarSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
