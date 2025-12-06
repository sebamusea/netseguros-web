"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  id: number;
  eyebrow: string;
  pretitle: string;
  highlight: string;
  posttitle?: string;
  text: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    id: 0,
    eyebrow: "corredora de seguros",
    pretitle: "Aseguramos tu mundo con",
    highlight: "experiencia y tecnología.",
    text: "Somos un equipo con más de 30 años de trayectoria en banca, seguros y mercados financieros, dedicado a diseñar soluciones a medida para personas, empresas e instituciones.",
    primaryCtaLabel: "Quiero asesoría",
    primaryCtaHref: "/contacto",
    secondaryCtaLabel: "Ver nuestros seguros",
    secondaryCtaHref: "/seguros",
    imageSrc: "/home_general.jpg", // logo como ahora
    imageAlt: "NetSeguros",
  },
  {
    id: 1,
    eyebrow: "seguros de salud",
    pretitle: "Cuidamos tu salud",
    highlight: "en cada etapa.",
    text: "Te ayudamos a elegir seguros de salud y complementarios que se ajusten a tu realidad familiar, con coberturas claras y acompañamiento en el uso del plan.",
    primaryCtaLabel: "Ver seguros de salud",
    primaryCtaHref: "/seguros#personales",
    secondaryCtaLabel: "Hablar con un ejecutivo",
    secondaryCtaHref: "/contacto",
    imageSrc: "/home_salud.jpg", // pon aquí una foto de salud en /public
    imageAlt: "Familia protegida con seguros de salud",
  },
  {
    id: 2,
    eyebrow: "seguros de vehículos",
    pretitle: "Protegemos tu",
    highlight: "vehículo y tu movilidad.",
    text: "Desde autos particulares hasta flotas de empresa, buscamos combinaciones de coberturas y asistencias que te den tranquilidad en el día a día.",
    primaryCtaLabel: "Ver seguros de vehículos",
    primaryCtaHref: "/seguros#personales",
    secondaryCtaLabel: "Cotizar con NetSeguros",
    secondaryCtaHref: "/contacto",
    imageSrc: "/home_auto.jpg", // pon aquí una foto de autos/vehículos en /public
    imageAlt: "Vehículos asegurados",
  },
];

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotación automática cada 7 segundos
  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* HERO FULL-WIDTH EN 2 COLUMNAS */}
    <section className="relative w-full bg-hero-net text-slate-50 overflow-hidden">
      {/* SLIDER CONTENEDOR FULL WIDTH */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              {/* CADA SLIDE = RECTÁNGULO FULL-WIDTH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:h-[360px] lg:h-[420px]">
                
                {/* COLUMNA IZQUIERDA: TEXTO */}
                <div className="bg-hero-net px-6 py-6 sm:px-10 sm:py-10 flex items-center">
                  <div className="max-w-xl space-y-4">
                    <p className="text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-net-teal">
                      {slide.eyebrow}
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                      {slide.pretitle}{" "}
                      <span className="text-net-teal">{slide.highlight}</span>
                      {slide.posttitle ? ` ${slide.posttitle}` : null}
                    </h1>

                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                      {slide.text}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={slide.primaryCtaHref}
                        className="rounded-full bg-net-teal px-5 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-net-teal-strong"
                      >
                        {slide.primaryCtaLabel}
                      </Link>

                      {slide.secondaryCtaHref && (
                        <Link
                          href={slide.secondaryCtaHref}
                          className="rounded-full border border-slate-500 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-100 hover:border-net-teal hover:text-net-teal"
                        >
                          {slide.secondaryCtaLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* COLUMNA DERECHA: IMAGEN COMO FONDO COMPLETO */}
                <div
                  className={`relative mt-3 sm:mt-0 w-full sm:h-full ${
                    slide.id === 0 ? "h-64" : "h-56"
                  }`}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    className="object-cover object-top sm:object-cover"
                    priority={slide.id === activeIndex}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS – FRANJA DELGADA PEGADA AL FINAL DEL HERO (OVERLAY) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="flex justify-center gap-2 py-1 bg-net-dark">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-net-teal" : "w-2.5 bg-slate-500/60"
              }`}
              // Permitimos clic en los botones aunque el contenedor esté sin eventos
              style={{ pointerEvents: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>





      {/* RESTO DE LA HOME IGUAL QUE ANTES */}

      {/* Líneas de seguros – versión con tarjetas grandes */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <header className="max-w-2xl space-y-3">
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              líneas de seguros
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-net-navy">
              Programas para personas, empresas y grandes colectivos.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Diseñamos programas integrales de seguros masivos, personales y de
              empresas, combinando coberturas, asistencias y productos
              complementarios.
            </p>
          </header>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <CardLinea
              titulo="Seguros masivos"
              descripcion="Coberturas para grandes grupos, instituciones y colectivos."
              href="/seguros#masivos"
              imageSrc="/Masivos.jpg"  // usa la foto que ya estás usando
              imageAlt="Equipo de negocios cerrando un acuerdo"
            />
            <CardLinea
              titulo="Seguros personales"
              descripcion="Salud, vida, accidentes, vehículos, hogar y más."
              href="/seguros#personales"
              imageSrc="/Personales.jpg"
              imageAlt="Familia disfrutando al aire libre"
            />
            <CardLinea
              titulo="Seguros empresa"
              descripcion="Programas de riesgos para pymes, empresas y grandes industrias."
              href="/seguros#empresa"
              imageSrc="/Empresa.jpg"
              imageAlt="Ejecutivos en reunión de trabajo"
            />
          </div>
        </div>
      </section>


      {/* Por qué NetSeguros */}
      <section className="bg-[#E9F4F7] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">

          <header className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              valor diferencial
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-net-navy mt-2">
              Más que pólizas, un socio en gestión de riesgos.
            </h2>
          </header>

          {/* GRID DE PILARES */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">

            {/* ITEM 1 */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-white shadow flex items-center justify-center mb-5">
                {/* Ícono SVG: Escudo */}
                <svg className="w-12 h-12 text-net-teal" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/>
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-net-navy">Solidez y experiencia</h3>
              <p className="text-sm text-slate-700 mt-2">
                Más de 30 años liderando seguros, banca y corredores.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-white shadow flex items-center justify-center mb-5">
                {/* Ícono SVG: Handshake */}
                <svg className="w-12 h-12 text-net-teal" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path d="M12.5 9l2.5 2.5 3-3M9 15l-3-3 6-6a2 2 0 013 0l5 5"/>
                  <path d="M3 12l6 6a2 2 0 002 0l4-4"/>
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-net-navy">Acompañamiento experto</h3>
              <p className="text-sm text-slate-700 mt-2">
                Asesoría cercana desde el diseño hasta los siniestros.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-white shadow flex items-center justify-center mb-5">
                {/* Ícono SVG: Ajustes */}
                <svg className="w-12 h-12 text-net-teal" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <path d="M12 6v12M6 12h12" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-net-navy">Soluciones a medida</h3>
              <p className="text-sm text-slate-700 mt-2">
                Programas específicos para personas y empresas.
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-white shadow flex items-center justify-center mb-5">
                {/* Ícono SVG: Chip */}
                <svg className="w-12 h-12 text-net-teal" fill="none" stroke="currentColor" strokeWidth="1.5"
                  viewBox="0 0 24 24">
                  <rect x="7" y="7" width="10" height="10" rx="2" />
                  <path d="M3 10h4M3 14h4M17 10h4M17 14h4M10 3v4M14 3v4M10 17v4M14 17v4" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-net-navy">Innovación tecnológica</h3>
              <p className="text-sm text-slate-700 mt-2">
                Plataformas y servicios con foco en eficiencia digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SECCIÓN: CÓMO TRABAJAMOS (TIMELINE RESPONSIVE) */}
      {/* ─────────────────────────────────────────────── */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-14">
          <header className="max-w-2xl space-y-2">
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              cómo trabajamos
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-net-navy sm:text-3xl">
              Un proceso claro, de la escucha a la implementación.
            </h2>
          </header>

          {/* Timeline */}
          <div className="mt-10 relative">
            {/* Línea horizontal solo en desktop/tablet */}
            <div className="hidden sm:block absolute top-7 left-0 right-0 h-px bg-slate-300" />

            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
              {/* Paso 1 */}
              <div className="flex flex-col items-start sm:items-center sm:text-center sm:flex-1 sm:px-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-net-teal text-sm font-semibold text-white shadow-sm">
                  01
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-net-navy">
                  Escuchamos
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                  Partimos entendiendo tu realidad, riesgos, contratos vigentes y
                  expectativas, con una mirada ejecutiva y sin compromiso.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="flex flex-col items-start sm:items-center sm:text-center sm:flex-1 sm:px-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-net-teal text-sm font-semibold text-white shadow-sm">
                  02
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-net-navy">
                  Diseñamos
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                  Comparamos coberturas, compañías y asistencias para armar un
                  programa integral de seguros alineado a tus riesgos y presupuesto.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="flex flex-col items-start sm:items-center sm:text-center sm:flex-1 sm:px-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-net-teal text-sm font-semibold text-white shadow-sm">
                  03
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-net-navy">
                  Acompañamos
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                  Te apoyamos en la implementación, seguimiento y gestión de
                  siniestros, ajustando el programa cuando tu realidad cambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-net-dark text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ¿Quieres revisar tus seguros o diseñar un programa nuevo?
            </h2>
            <p className="text-base text-slate-200">
              Conversemos sobre tu realidad y te ayudamos a construir una
              solución alineada a tus riesgos, presupuesto y estrategia.
            </p>
          </div>
          <Link
            href="/contacto"
            className="rounded-full bg-net-teal px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-net-teal-strong">
            Agendar una conversación
          </Link>
        </div>
      </section>
    </>
  );
}

/* COMPONENTES REUTILIZADOS */

type CardProps = {
  titulo: string;
  descripcion: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

function CardLinea({ titulo, descripcion, href, imageSrc, imageAlt }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-net-teal/70 hover:shadow-lg"
    >
      {/* Imagen protagonista arriba */}
      <div className="relative h-44 w-full sm:h-48">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base sm:text-lg font-semibold text-net-navy">
          {titulo}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          {descripcion}
        </p>
        <span className="mt-2 inline-flex items-center text-sm font-semibold text-net-teal group-hover:underline">
          Ver más →
        </span>
      </div>
    </Link>
  );
}


type FeatureProps = {
  titulo: string;
  texto: string;
};

function Feature({ titulo, texto }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-net-navy">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        {texto}
      </p>
    </div>
  );
}

type PasoProps = {
  numero: string;
  titulo: string;
  texto: string;
};

function Paso({ numero, titulo, texto }: PasoProps) {
  return (
    <li className="relative rounded-2xl border border-slate-200 bg-surface p-5 shadow-sm">
      <div className="text-sm font-mono font-semibold tracking-[0.25em] text-net-teal">
        {numero}
      </div>
      <h3 className="mt-2 text-base font-semibold text-net-navy">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        {texto}
      </p>
    </li>
  );
}
