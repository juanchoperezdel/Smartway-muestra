export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border-2 border-[#E62B1E] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#E62B1E]/20" />
                <div className="w-4 h-4 rounded-full bg-[#E62B1E]" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">Smartway</span>
            </div>
            <p className="text-sm mb-6 text-gray-500">
              Desarrollamos soluciones de software a medida para pymes y grandes empresas.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Apps a Medida</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conectores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integración IoT</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automatizaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de éxito</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>info@smartway.com.ar</li>
              <li>+5411 6009-8200</li>
              <li>Av. Caseros 3563</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Smartway. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
