/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SaaSVSCustom from './components/SaaSVSCustom';
import ServicesSection from './components/ServicesSection';
import ROICalculator from './components/ROICalculator';
import TestimonialsSection from './components/TestimonialsSection';
import CalendarSection from './components/CalendarSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E62B1E]/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <SaaSVSCustom />
        <TestimonialsSection />
        <ROICalculator />
        <CalendarSection />
      </main>
      <Footer />
    </div>
  );
}
