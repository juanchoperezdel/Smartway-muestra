import logoSmartway from '../../graficas/logo-smartway-web-black.png';

export default function Header() {
  const scrollToCalendar = () => {
    const calendarSection = document.getElementById('calendario');
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logoSmartway}
            alt="Smartway"
            className="h-7 sm:h-8 w-auto"
            style={{ filter: 'invert(1) hue-rotate(180deg)' }}
          />
        </a>

        <button
          onClick={scrollToCalendar}
          className="bg-[#E62B1E] hover:bg-[#D42417] text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(230,43,30,0.3)] whitespace-nowrap"
        >
          Evaluar mi caso
        </button>
      </div>
    </header>
  );
}
