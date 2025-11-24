// src/app/nosotros/page.tsx
export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="space-y-2">
        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
          nosotros
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-net-navy sm:text-3xl">
          Más de 30 años conectando experiencia financiera y protección.
        </h1>
      </header>

      <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        <p>
          NetSeguros es una empresa desarrollada por profesionales con más de 30
          años de experiencia en mercados financieros, banca y seguros, ocupando
          posiciones gerenciales y ejecutivas en compañías de seguros,
          corredoras y bancos. Esta trayectoria nos permite entender tanto las
          necesidades de los clientes como la lógica interna de las
          instituciones con las que trabajamos.
        </p>
        <p>
          Nos especializamos en diseñar y gestionar programas de seguros,
          asistencias y productos complementarios que combinan cobertura,
          eficiencia operativa y una experiencia de usuario simple y cercana.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-net-navy">Visión</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
            Ser reconocidos como una empresa confiable, transparente,
            innovadora, tecnológica y protagonista en el mercado asegurador.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-net-navy">Misión</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
            Entregar asesoría integral y un servicio de excelencia en la
            gestión de riesgos, buscando siempre el mayor nivel de satisfacción
            de nuestros clientes.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-net-navy">Compromiso</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
            Acompañamos a personas, empresas e instituciones en todas las etapas
            del ciclo del seguro, desde el diseño del programa hasta la
            administración y la gestión de siniestros.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
          Nuestros valores
        </p>
        <ul className="mt-3 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Transparencia en la relación con clientes y aseguradoras.</li>
          <li>• Orientación al servicio y a la experiencia de cliente.</li>
          <li>• Responsabilidad y cuidado en la gestión de riesgos.</li>
          <li>• Innovación y uso de tecnología para agregar valor.</li>
        </ul>
      </section>
    </div>
  );
}
