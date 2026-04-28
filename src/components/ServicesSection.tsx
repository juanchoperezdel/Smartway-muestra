import { AppWindow, Webhook, Bot, ArrowRightLeft } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <AppWindow className="w-6 h-6 relative z-10" />,
      title: 'Apps web y mobile para tu equipo',
      description: 'Tu operación en el celular del repartidor, del operario, del vendedor en la calle. Carga rápida, sin papel, sincronizada con el resto del sistema en tiempo real.',
      color: 'from-blue-500/20',
      glow: 'bg-blue-500/20'
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 relative z-10" />,
      title: 'Integraciones entre sistemas que ya tenés',
      description: 'Que tu ERP, tu e-commerce, tu sistema de stock y tu facturador finalmente se hablen solos. Sin que nadie copie y pegue datos a las 11 de la noche.',
      color: 'from-[#E62B1E]/20',
      glow: 'bg-[#E62B1E]/20'
    },
    {
      icon: <Webhook className="w-6 h-6 relative z-10" />,
      title: 'Conexión con hardware y planta',
      description: 'Balanzas, lectores, sensores, cartelería, controladores de producción. Que cada dato que generás en el mundo físico llegue solo al sistema, sin que alguien lo tipee.',
      color: 'from-emerald-500/20',
      glow: 'bg-emerald-500/20'
    },
    {
      icon: <Bot className="w-6 h-6 relative z-10" />,
      title: 'Bots e IA que hacen el trabajo aburrido',
      description: 'Agentes que cargan pedidos, leen mails, completan formularios, contestan WhatsApps de rutina. Tu equipo deja de hacer copy-paste y se dedica a lo que paga.',
      color: 'from-purple-500/20',
      glow: 'bg-purple-500/20'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6 leading-tight">
            Cuatro formas de que tu operación<br /> deje de sangrar plata.
          </h2>
          <p className="text-lg text-gray-400">
            Cada solución arranca de un dolor concreto de tu PyME, no de un catálogo de features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:border-white/20 transition-colors group relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
              
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${s.color} to-transparent opacity-20 pointer-events-none`} />

              <div className="shrink-0 relative">
                <div className={`w-14 h-14 bg-[#141414] border border-white/10 rounded-2xl flex items-center justify-center text-white relative z-10`}>
                  <div className={`absolute inset-0 ${s.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  {s.icon}
                </div>
                {/* Visual connection lines to mimic Noxton */}
                <div className="absolute top-1/2 left-14 w-12 h-px bg-white/10 hidden md:block" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-medium text-white mb-4">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
