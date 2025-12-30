// src/app/nosotros/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      {/* HERO: QUIÉNES SOMOS – FRANJA COMPLETA */}
      <section className="bg-hero-net text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid min-h-[45vh] items-center gap-10 sm:grid-cols-[1fr_1fr]">
            {/* Columna texto */}
            <div className="space-y-5 max-w-xl text-left sm:text-left">
              <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
                nosotros
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Más de 30 años conectando experiencia financiera y protección.
              </h1>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                NetSeguros nace de la trayectoria de profesionales que han ocupado
                posiciones gerenciales y ejecutivas en banca, seguros y corredores.
              </p>

              
            </div>

            {/* Columna imagen – ocupa la derecha completa */}
            <div className="relative h-56 w-full sm:h-[300px] lg:h-[340px]">
              <div className="absolute -inset-3 rounded-3xl bg-net-teal/25 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-50/20">
                <Image
                  src="/nosotros-hero.jpg" // foto Nº17
                  alt="Ejecutiva saludando a un cliente en una reunión"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* QUIÉNES SOMOS – TEXTO PRINCIPAL */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="mb-4 space-y-3 text-center">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              quiénes somos
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-net-navy">
              Un equipo con mirada ejecutiva y foco en el cliente.
            </h2>
          </header>
        </div>
      </section>

      {/* NUESTRA FILOSOFÍA – CON IMAGEN LATERAL (foto 44) */}
      <section className="border-b border-slate-200 bg-[#E9F4F7]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="grid items-center gap-10 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {/* Texto */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
                nuestra filosofía
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-net-navy">
                Acompañamos a personas, empresas e instituciones en todo el
                ciclo del seguro.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 text-left sm:text-justify">
                Priorizamos relaciones de largo plazo basadas en transparencia y cercanía.
                Diseñamos programas de seguros con foco en claridad, continuidad y una
                experiencia simple para el cliente.
              </p>

              <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                <li>• Escuchamos primero, antes de proponer.</li>
                <li>• Traducimos lo técnico a decisiones claras.</li>
                <li>• Equilibramos cobertura, costo y servicio.</li>
              </ul>
            </div>

            {/* Imagen filosofía – foto 44 */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-net-teal/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200">
                <div className="relative h-64 w-full sm:h-72">
                  <Image
                    src="/nosotros-filosofia.jpg" // foto Nº44
                    alt="Familia unida sonriendo desde una perspectiva superior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIÓN / MISIÓN / COMPROMISO – TARJETAS SIN FOTO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <header className="mb-8 space-y-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              nuestro foco
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-net-navy">
              Una propuesta clara de valor para nuestros clientes.
            </h2>
          </header>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
              <h3 className="text-sm sm:text-base font-semibold text-net-navy">
                Visión
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                Ser reconocidos como una empresa confiable, transparente,
                innovadora, tecnológica y protagonista en el mercado asegurador.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
              <h3 className="text-sm sm:text-base font-semibold text-net-navy">
                Misión
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                Entregar asesoría integral y un servicio de excelencia en la
                gestión de riesgos, buscando siempre el mayor nivel de
                satisfacción de nuestros clientes.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
              <h3 className="text-sm sm:text-base font-semibold text-net-navy">
                Compromiso
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                Acompañamos a personas, empresas e instituciones en todas las
                etapas del ciclo del seguro, desde el diseño del programa hasta
                la administración y la gestión de siniestros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUESTROS VALORES – LISTA + ICONOS, SIN FOTO */}
      <section className="border-b border-slate-200 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <header className="mb-6 space-y-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              nuestros valores
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-net-navy">
              Qué guía cada decisión que tomamos.
            </h2>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Transparencia en la relación con clientes y aseguradoras.",
              "Orientación al servicio y a la experiencia de cliente.",
              "Responsabilidad y cuidado en la gestión de riesgos.",
              "Innovación y uso de tecnología para agregar valor.",
            ].map((texto) => (
              <div
                key={texto}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-net-teal/10 text-net-teal">
                  ✓
                </span>
                <p className="text-sm sm:text-base text-slate-700">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL – CON FOTO (foto 27) */}
      <section className="bg-net-dark text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-12">
          {/* Texto */}
          <div className="max-w-xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              ¿Quieres revisar tus seguros o diseñar un programa nuevo?
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              Conversemos sobre tu realidad y te ayudamos a construir una
              solución alineada a tus riesgos, presupuesto y estrategia.
            </p>
            <Link
              href="/contacto"
              className="inline-flex rounded-full bg-net-teal px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-net-teal-strong"
            >
              Agendar una conversación
            </Link>
          </div>

          {/* Imagen CTA – foto 27 */}
          <div className="relative w-full max-w-xs self-center sm:max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-net-teal/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl bg-net-dark/40 ring-1 ring-slate-50/20">
              <div className="relative h-52 w-full sm:h-56">
                <Image
                  src="/nosotros-cta.jpg" // foto Nº27
                  alt="Familia sonriendo en un vehículo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
