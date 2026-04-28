import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendario');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Problema', href: '#problema' },
    { name: 'Comparativa', href: '#comparativa' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Soluciones', href: '#servicios' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Smartway Logo Placeholder */}
          <div className="w-8 h-8 rounded-full border-2 border-[#E62B1E] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#E62B1E]/20" />
             <div className="w-4 h-4 rounded-full bg-[#E62B1E]" />
          </div>
          <span className="font-heading font-bold text-xl text-white tracking-tight">Smartway</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={scrollToCalendar}
            className="bg-[#E62B1E] hover:bg-[#D42417] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(230,43,30,0.3)]"
          >
            Evaluar mi caso
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="p-2 -mr-2 md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-400 hover:text-white py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <button 
                   onClick={scrollToCalendar}
                   className="w-full bg-[#E62B1E] hover:bg-[#D42417] text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(230,43,30,0.3)]"
                >
                  Evaluar mi caso
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
