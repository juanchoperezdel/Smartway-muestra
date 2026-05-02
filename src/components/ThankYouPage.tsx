import { motion } from 'motion/react';
import { Check, ArrowLeft } from 'lucide-react';
import logoSmartway from '../../graficas/logo-smartway-web-black.png';

export default function ThankYouPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E62B1E] via-purple-600 to-[#E62B1E] rounded-[100%] blur-[100px] mix-blend-screen" style={{ transform: 'scaleY(0.5)' }} />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
      >
        <a href="/" className="flex items-center">
          <img
            src={logoSmartway}
            alt="Smartway"
            className="h-8 w-auto"
            style={{ filter: 'invert(1) hue-rotate(180deg)' }}
          />
        </a>

        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[#E62B1E]/10 border border-[#E62B1E]/30 flex items-center justify-center shadow-[0_0_40px_rgba(230,43,30,0.25)]"
        >
          <Check className="w-10 h-10 text-[#E62B1E]" strokeWidth={3} />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium leading-[1.15] tracking-tight">
          Tu reunión fue agendada.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            Nos vemos pronto.
          </span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
          Te vamos a contactar antes de la reunión para confirmarla y ajustar cualquier detalle. Mientras tanto, identificá los procesos que más tiempo te consumen —así arrancamos con datos concretos.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#E62B1E] hover:bg-[#D42417] text-white px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(230,43,30,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </a>
      </motion.div>
    </section>
  );
}
