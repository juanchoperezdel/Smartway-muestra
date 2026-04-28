import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hours, setHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(10);

  // Cálculos básicos
  const monthlyHours = employees * hours * 4;
  const monthlyCost = monthlyHours * hourlyRate;
  const yearlyCost = monthlyCost * 12;

  return (
    <section id="calculadora" className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#E62B1E] font-semibold tracking-wide text-xs uppercase mb-4 px-3 py-1 bg-[#E62B1E]/10 rounded-full border border-[#E62B1E]/20">
              <Calculator className="w-4 h-4" />
              Calculadora de pérdida
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6 leading-tight">
              Poné números a lo que ya estás perdiendo.
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              No es solo tiempo: es sueldo pagado para tareas que un software hace solo. Movés los sliders, ves la realidad de tu PyME en 10 segundos.
            </p>

            <div className="space-y-8 bg-[#0A0A0A] p-8 md:p-10 rounded-[2rem] border border-white/10">
              <SliderInput
                label="Personas haciendo tareas repetitivas"
                value={employees}
                setValue={setEmployees}
                min={1}
                max={20}
                suffix=" personas"
              />
              <SliderInput
                label="Horas que pierde cada una por semana"
                value={hours}
                setValue={setHours}
                min={2}
                max={40}
                suffix=" hrs/sem"
              />
              <SliderInput
                label="Costo por hora cargada (USD)"
                value={hourlyRate}
                setValue={setHourlyRate}
                min={3}
                max={50}
                prefix="$"
              />
            </div>
          </div>

          <div className="bg-[#111111] rounded-[2rem] p-8 md:p-12 text-white shadow-[0_0_50px_rgba(230,43,30,0.05)] border border-[#E62B1E]/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E62B1E]/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-medium text-gray-400 mb-2">Lo que te cuesta no automatizar</h3>
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-white mb-2 break-words tabular-nums">
                ${yearlyCost.toLocaleString()}
              </div>
              <p className="text-sm text-[#E62B1E] font-medium mb-10">
                USD al año en sueldo pagado para mover datos a mano.
              </p>

              <div className="h-px w-full bg-white/10 mb-8" />

              <h4 className="text-lg font-medium text-white mb-6">La solución Smartway:</h4>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                  Inversión desde USD 10.000 (única, no licencias mensuales)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                  Primer entregable funcionando en 4–6 semanas
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E62B1E]" />
                  El código queda tuyo. Lo seguimos haciendo crecer con vos.
                </li>
              </ul>

              <div className="bg-[#E62B1E]/10 border border-[#E62B1E]/20 rounded-xl p-5 text-center">
                <p className="text-[#E62B1E] font-medium text-sm">
                  Recuperás la inversión en {Math.max(1, Math.round(10000 / monthlyCost))} a {Math.max(2, Math.round(15000 / monthlyCost))} meses. Después, todo lo que ahorra es ganancia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderInput({ label, value, setValue, min, max, prefix = '', suffix = '' }: any) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-bold text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
          {prefix}{value}{suffix}
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 bg-[#1F1F1F] rounded-lg appearance-none cursor-pointer accent-[#E62B1E]"
      />
    </div>
  );
}
