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
    imageSrc: "/logo_cuadrado_light.jpg", // logo como ahora
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
    imageSrc: "/seguro_salud.png", // pon aquí una foto de salud en /public
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
    imageSrc: "/seguro_auto.png", // pon aquí una foto de autos/vehículos en /public
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

  const activeSlide = slides[activeIndex];

  return (
    <>
      {/* HERO CON SLIDER (sin solapes) */}
      <section className="bg-hero-net text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-20">
          {/* Columna texto */}
          <div className="max-w-xl space-y-6">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-net-teal">
              {slides[activeIndex].eyebrow}
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {slides[activeIndex].pretitle}{" "}
              <span className="text-net-teal">
                {slides[activeIndex].highlight}
              </span>
              {slides[activeIndex].posttitle
                ? ` ${slides[activeIndex].posttitle}`
                : null}
            </h1>

            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
              {slides[activeIndex].text}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={slides[activeIndex].primaryCtaHref}
                className="rounded-full bg-net-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-net-teal-strong"
              >
                {slides[activeIndex].primaryCtaLabel}
              </Link>

              {slides[activeIndex].secondaryCtaHref &&
                slides[activeIndex].secondaryCtaLabel && (
                  <Link
                    href={slides[activeIndex].secondaryCtaHref}
                    className="rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-net-teal hover:text-net-teal"
                  >
                    {slides[activeIndex].secondaryCtaLabel}
                  </Link>
                )}
            </div>
          </div>

          {/* Columna imagen: circular sólo para la slide principal */}
          <div className="relative mx-auto mt-6 sm:mt-0">
            {activeSlide.id === 0 ? (
              // SLIDE 0: logo circular
              <div className="flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60 lg:h-72 lg:w-92">
                {/* Halo detrás */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-net-teal/40 via-net-teal/10 to-transparent blur-3xl" />
                </div>
                {/* Círculo */}
                <div className="relative h-full w-full overflow-hidden rounded-full bg-net-dark/60 ring-4 ring-net-teal/70">
                  <Image
                    key={activeSlide.imageSrc}
                    src={activeSlide.imageSrc}
                    alt={activeSlide.imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ) : (
              // RESTO DE SLIDES: rectángulo con puntas redondeadas
              <div className="relative h-40 w-64 sm:h-52 sm:w-80 lg:h-60 lg:w-[380px]">
                {/* Halo suave detrás */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-net-teal/25 via-net-teal/10 to-transparent blur-3xl" />
                {/* Imagen rectangular */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-net-dark/40 ring-1 ring-slate-50/10">
                  <Image
                    key={activeSlide.imageSrc}
                    src={activeSlide.imageSrc}
                    alt={activeSlide.imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dots centrados abajo del hero */}
        <div className="mx-auto flex max-w-6xl justify-center gap-2 px-4 pb-6 sm:px-6">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-6 bg-net-teal"
                    : "w-2.5 bg-slate-500/60 hover:bg-slate-200"
                }`}
                aria-label={`Ver slide ${index + 1}`}
              />
            );
          })}
        </div>
      </section>

      {/* RESTO DE LA HOME IGUAL QUE ANTES */}

      {/* Líneas de seguros */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="max-w-2xl space-y-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              líneas de seguros
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-net-navy sm:text-2xl">
              Soluciones para personas, empresas y grandes colectivos.
            </h2>
            <p className="text-sm text-slate-600">
              Diseñamos programas integrales de seguros masivos, personales y
              de empresas, combinando coberturas, asistencias y desarrollo de
              productos complementarios.
            </p>
          </header>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <CardLinea
              titulo="Seguros masivos"
              descripcion="Programas de seguros para bancos, retail, instituciones y gremios, con foco en volumen, precios competitivos y experiencia de cliente."
              href="/seguros#masivos"
            />
            <CardLinea
              titulo="Seguros personales"
              descripcion="Protección integral para ti y tu familia: salud, vida, accidentes, vehículos, hogar, mascotas, ahorro y APV."
              href="/seguros#personales"
            />
            <CardLinea
              titulo="Seguros empresa"
              descripcion="Coberturas para activos, operaciones y responsabilidades de empresas e industrias, con asesoría técnica especializada."
              href="/seguros#empresa"
            />
          </div>
        </div>
      </section>

      {/* Por qué NetSeguros */}
      <section className="border-b border-slate-200 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="max-w-2xl space-y-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              valor diferencial
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-net-navy sm:text-2xl">
              Más que pólizas, un socio en gestión de riesgos.
            </h2>
          </header>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              titulo="Experiencia ejecutiva"
              texto="Profesionales que han ocupado posiciones gerenciales y directivas en compañías de seguros, corredores y banca."
            />
            <Feature
              titulo="Acompañamiento experto"
              texto="Te guiamos desde el diseño del programa hasta la administración del día a día y la gestión de siniestros."
            />
            <Feature
              titulo="Soluciones a medida"
              texto="Construimos propuestas específicas para tu realidad: personas, pymes, grandes empresas o instituciones."
            />
            <Feature
              titulo="Innovación tecnológica"
              texto="Integramos plataformas, productos complementarios y asistencias con foco en eficiencia y experiencia digital."
            />
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <header className="max-w-2xl space-y-2">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              cómo trabajamos
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-net-navy sm:text-2xl">
              Un proceso claro, de la escucha a la implementación.
            </h2>
          </header>

          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            <Paso
              numero="01"
              titulo="Escuchamos"
              texto="Partimos entendiendo tu realidad, riesgos, contratos vigentes y expectativas. Sin compromisos, con una mirada experta."
            />
            <Paso
              numero="02"
              titulo="Diseñamos"
              texto="Comparamos alternativas, coberturas y compañías para proponerte un programa integral de seguros y asistencias."
            />
            <Paso
              numero="03"
              titulo="Acompañamos"
              texto="Te apoyamos en la implementación, seguimiento y gestión de siniestros, ajustando el programa cuando tu realidad cambia."
            />
          </ol>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-net-dark text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-12">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              ¿Quieres revisar tus seguros o diseñar un programa nuevo?
            </h2>
            <p className="text-sm text-slate-200">
              Conversemos sobre tu realidad y te ayudamos a construir una
              solución alineada a tus riesgos, presupuesto y estrategia.
            </p>
          </div>
          <Link
            href="/contacto"
            className="rounded-full bg-net-teal px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-net-teal-strong"
          >
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
};

function CardLinea({ titulo, descripcion, href }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-net-teal/70 hover:shadow-md"
    >
      <h3 className="text-sm font-semibold text-net-navy">{titulo}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
        {descripcion}
      </p>
      <span className="mt-4 inline-flex items-center text-xs font-semibold text-net-teal group-hover:underline">
        Ver más
      </span>
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
      <h3 className="text-sm font-semibold text-net-navy">{titulo}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
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
      <div className="text-xs font-mono font-semibold tracking-[0.25em] text-net-teal">
        {numero}
      </div>
      <h3 className="mt-2 text-sm font-semibold text-net-navy">{titulo}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
        {texto}
      </p>
    </li>
  );
}
