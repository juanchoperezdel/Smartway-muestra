import logoSmartway from '../../graficas/logo-smartway-web-black.png';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logoSmartway}
                alt="Smartway"
                className="h-8 w-auto"
                style={{ filter: 'invert(1) hue-rotate(180deg)' }}
              />
            </div>
            <p className="text-sm mb-6 text-gray-500">
              Software a medida para PyMEs que no entran en sistemas enlatados.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicios" className="hover:text-white transition-colors">Apps web y mobile</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Integraciones</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Hardware y planta</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Bots e IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#problema" className="hover:text-white transition-colors">Cómo trabajamos</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Casos de éxito</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#calendario" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:info@smartway.com.ar" className="hover:text-white transition-colors">info@smartway.com.ar</a></li>
              <li><a href="tel:+541160098200" className="hover:text-white transition-colors">+54 11 6009-8200</a></li>
              <li><a href="https://maps.google.com/?q=Av.+Caseros+3563,+CABA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Av. Caseros 3563, CABA</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Smartway. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
