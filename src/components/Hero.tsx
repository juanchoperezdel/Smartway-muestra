import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendario');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Glowing Orb a la Noxton */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E62B1E] via-purple-600 to-[#E62B1E] rounded-[100%] blur-[100px] mix-blend-screen" style={{ transform: 'scaleY(0.5)' }} />
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 text-[#E62B1E] text-xs font-semibold uppercase tracking-widest mb-8"
        >
          Software Factory para PyMEs
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] tracking-tight mb-6"
        >
          Tu operación es específica.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Tu software también</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          El software enlatado te obliga a adaptar tus procesos. Desarrollamos apps, sistemas y automatizaciones que se adaptan 100% a tu forma de trabajar.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={scrollToCalendar}
            className="inline-flex items-center justify-center gap-2 bg-[#E62B1E] hover:bg-[#D42417] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(230,43,30,0.4)] w-full sm:w-auto"
          >
            Contanos tu caso
            <ArrowRight className="w-4 h-4" />
          </button>
          <a 
            href="#comparativa"
            className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#1A1A1A] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors border border-white/10 hover:border-white/20 w-full sm:w-auto"
          >
            SaaS vs A Medida
          </a>
        </motion.div>
      </div>
    </section>
  );
}
