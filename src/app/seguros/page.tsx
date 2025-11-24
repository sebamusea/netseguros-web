// src/app/seguros/page.tsx
export default function SegurosPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="space-y-2">
        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
          seguros
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-net-navy sm:text-3xl">
          Líneas de seguros y soluciones que gestionamos.
        </h1>
        <p className="text-sm text-slate-700 sm:text-base">
          Contamos con equipos especializados para diseñar programas de seguros
          masivos, personales y de empresas, así como productos complementarios,
          asistencias y plataformas de venta con foco en innovación
          tecnológica.
        </p>
      </header>

      {/* Masivos */}
      <section id="masivos" className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold text-net-navy">
          Seguros masivos
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          Expertos en desarrollo e implementación de programas de seguros para
          instituciones, empresas, gremios, asociaciones y grupos en general,
          con coberturas competitivas, alta penetración y la más completa
          asesoría profesional.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Seguros de desgravamen</li>
          <li>• Seguros de cesantía</li>
          <li>• Seguros complementarios de salud</li>
          <li>• Seguros de protección financiera</li>
        </ul>
      </section>

      {/* Personales */}
      <section id="personales" className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold text-net-navy">
          Seguros personales
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          Protección integral personal y familiar, con condiciones y coberturas
          competitivas y el acompañamiento especializado de nuestro equipo.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Seguros de salud</li>
          <li>• Seguros de vida y accidentes</li>
          <li>• Seguros de vehículos y hogar</li>
          <li>• Seguros para mascotas</li>
          <li>• Vida ahorro</li>
          <li>• Vida APV</li>
          <li>• Vida alto patrimonio</li>
        </ul>
      </section>

      {/* Empresa */}
      <section id="empresa" className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold text-net-navy">
          Seguros de empresas
        </h2>
        <p className="text-sm leading-relaxed text-slate-700">
          Programas integrales para proteger los activos, infraestructura y
          operación de empresas e industrias, con visión técnica y foco en
          continuidad operacional.
        </p>
        <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>• Leasing y equipos móviles</li>
          <li>• Todo riesgo bienes físicos</li>
          <li>• Responsabilidad civil</li>
          <li>• Ingeniería y construcción</li>
        </ul>
      </section>
    </div>
  );
}
