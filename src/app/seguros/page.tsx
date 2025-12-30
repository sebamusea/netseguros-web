import Image from "next/image";
import Link from "next/link";

type SeguroItem = {
  id: string;
  nombre: string;
  descripcion: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  etiqueta: string;
};

const segurosMasivos: SeguroItem[] = [
  {
    id: "desgravamen",
    nombre: "Seguros de desgravamen",
    etiqueta: "Seguros masivos",
    descripcion:
      "Protección asociada a créditos y obligaciones financieras, para resguardar a tus clientes y a la institución frente a imprevistos.",
    href: "/contacto?macro=masivos&seguro=desgravamen",
    imageSrc: "/masivos-desgravamen.jpg",
    imageAlt: "Apretón de manos en un acuerdo financiero",
  },
  {
    id: "cesantia",
    nombre: "Seguros de cesantía",
    etiqueta: "Seguros masivos",
    descripcion:
      "Programas que protegen el pago de obligaciones ante pérdida de empleo, aportando tranquilidad a los asegurados y a la entidad.",
    href: "/contacto?macro=masivos&seguro=cesantia",
    imageSrc: "/masivos-cesantia.jpg",
    imageAlt: "Reunión de trabajo donde se acuerdan condiciones de un seguro",
  },
  {
    id: "complementario-salud",
    nombre: "Seguros complementarios de salud",
    etiqueta: "Seguros masivos",
    descripcion:
      "Coberturas de salud complementarias para colectivos, con foco en bienestar y acceso oportuno a prestaciones médicas.",
    href: "/contacto?macro=masivos&seguro=complementario-salud",
    imageSrc: "/masivos-complementario-salud.jpg",
    imageAlt: "Médico atendiendo a un niño junto a su madre",
  },
  {
    id: "proteccion-financiera",
    nombre: "Seguros de protección financiera",
    etiqueta: "Seguros masivos",
    descripcion:
      "Productos que resguardan ingresos y pagos frente a eventos inesperados, fortaleciendo la relación con tus clientes.",
    href: "/contacto?macro=masivos&seguro=proteccion-financiera",
    imageSrc: "/masivos-proteccion-financiera.jpg",
    imageAlt: "Ejecutivo ofreciendo documentación a un cliente",
  },
];

const segurosPersonales: SeguroItem[] = [
  {
    id: "salud",
    nombre: "Seguros de salud",
    etiqueta: "Seguros personales",
    descripcion:
      "Planes de salud y coberturas complementarias que se adaptan a tu realidad familiar, con acompañamiento cercano en el uso del seguro.",
    href: "/contacto?macro=personales&seguro=salud",
    imageSrc: "/personales-salud.jpg",
    imageAlt: "Equipo médico atendiendo a pacientes en un centro de salud",
  },
  {
    id: "vida-accidentes",
    nombre: "Seguros de vida & accidentes",
    etiqueta: "Seguros personales",
    descripcion:
      "Protección económica frente a fallecimiento o accidentes graves, para cuidar a quienes más quieres en los momentos difíciles.",
    href: "/contacto?macro=personales&seguro=vida-accidentes",
    imageSrc: "/personales-vida-accidentes.jpg",
    imageAlt: "Familia abrazándose con expresión de cariño y contención",
  },
  {
    id: "vehiculos-hogar",
    nombre: "Seguros de vehículos & hogar",
    etiqueta: "Seguros personales",
    descripcion:
      "Coberturas para tu auto y tu hogar, con asistencia en ruta, protección ante robos, daños materiales y otros imprevistos.",
    href: "/contacto?macro=personales&seguro=vehiculos-hogar",
    imageSrc: "/personales-vehiculos-hogar.jpg",
    imageAlt: "Familia dentro de un automóvil sonriendo",
  },
  {
    id: "mascotas",
    nombre: "Seguros para mascotas",
    etiqueta: "Seguros personales",
    descripcion:
      "Planes que apoyan el cuidado veterinario y la protección de tus mascotas, integrándolas como parte de tu núcleo familiar.",
    href: "/contacto?macro=personales&seguro=mascotas",
    imageSrc: "/personales-mascotas.jpg",
    imageAlt: "Familia compartiendo con su perro en el living",
  },
  {
    id: "vida-ahorro",
    nombre: "Vida ahorro",
    etiqueta: "Inversión & protección",
    descripcion:
      "Seguros de vida que combinan protección con ahorro de largo plazo, pensados para construir patrimonio de forma planificada.",
    href: "/contacto?macro=personales&seguro=vida-ahorro",
    imageSrc: "/personales-vida-ahorro.jpg",
    imageAlt: "Persona disfrutando al aire libre con expresión de tranquilidad",
  },
  {
    id: "vida-apv",
    nombre: "Vida APV",
    etiqueta: "Inversión & protección",
    descripcion:
      "Alternativas de Ahorro Previsional Voluntario con componente de seguro de vida, para reforzar tu pensión futura.",
    href: "/contacto?macro=personales&seguro=vida-apv",
    imageSrc: "/personales-vida-apv.jpg",
    imageAlt: "Persona mirando hacia el horizonte con expresión de calma",
  },
  {
    id: "vida-alto-patrimonio",
    nombre: "Vida alto patrimonio",
    etiqueta: "Inversión & protección",
    descripcion:
      "Soluciones de planificación patrimonial y sucesoria para familias y personas de alto patrimonio, con enfoque integral.",
    href: "/contacto?macro=personales&seguro=vida-alto-patrimonio",
    imageSrc: "/personales-vida-alto-patrimonio.jpg",
    imageAlt: "Mujer senior mirando a la cámara con gesto sereno",
  },
];

const segurosEmpresa: SeguroItem[] = [
  {
    id: "leasing",
    nombre: "Leasing",
    etiqueta: "Seguros empresa",
    descripcion:
      "Coberturas asociadas a contratos de leasing para proteger vehículos, maquinaria y otros activos financiados.",
    href: "/contacto?macro=empresa&seguro=leasing",
    imageSrc: "/empresa-leasing.jpg",
    imageAlt: "Grupo de personas viajando en automóvil",
  },
  {
    id: "equipos-moviles",
    nombre: "Equipos móviles",
    etiqueta: "Seguros empresa",
    descripcion:
      "Protección para flotas y equipos móviles utilizados en la operación de tu negocio, dentro y fuera de faena.",
    href: "/contacto?macro=empresa&seguro=equipos-moviles",
    imageSrc: "/empresa-equipos-moviles.jpg",
    imageAlt: "Personas asomadas por la ventana de un vehículo en movimiento",
  },
  {
    id: "todo-riesgo-bienes-fisicos",
    nombre: "Todo riesgo bienes físicos",
    etiqueta: "Seguros empresa",
    descripcion:
      "Cobertura integral para edificios, instalaciones, maquinaria y otros activos físicos frente a daños materiales.",
    href: "/contacto?macro=empresa&seguro=todo-riesgo-bienes-fisicos",
    imageSrc: "/empresa-todo-riesgo-bienes-fisicos.jpg",
    imageAlt: "Equipo de profesionales trabajando en una oficina moderna",
  },
  {
    id: "responsabilidad-civil",
    nombre: "Responsabilidad civil",
    etiqueta: "Seguros empresa",
    descripcion:
      "Programas que protegen a tu empresa frente a reclamos de terceros por daños materiales o lesiones corporales.",
    href: "/contacto?macro=empresa&seguro=responsabilidad-civil",
    imageSrc: "/empresa-responsabilidad-civil.jpg",
    imageAlt: "Dos ejecutivos estrechando manos en una oficina",
  },
  {
    id: "ingenieria-construccion",
    nombre: "Ingeniería y construcción",
    etiqueta: "Seguros empresa",
    descripcion:
      "Coberturas especializadas para obras civiles, montajes e infraestructura, acompañando cada etapa del proyecto.",
    href: "/contacto?macro=empresa&seguro=ingenieria-construccion",
    imageSrc: "/empresa-ingenieria-construccion.jpg",
    imageAlt: "Equipo revisando planos y documentación de un proyecto",
  },
];

export default function SegurosPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-hero-net text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:px-6 sm:py-14">
          {/* Texto hero */}
          <div className="flex-1 space-y-4">
            <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
              seguros
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Protección integral para personas, empresas y grandes colectivos.
            </h1>
            <p className="text-sm sm:text-base text-slate-100">
              Contamos con equipos especializados para diseñar programas de
              seguros masivos, personales y de empresas, además de productos
              complementarios, asistencias y plataformas de venta con foco en
              innovación tecnológica.
            </p>
          </div>

          {/* Imagen hero */}
          <div className="relative h-52 w-full overflow-hidden rounded-3xl bg-net-dark/40 sm:h-64 sm:w-80 lg:h-72 lg:w-[340px]">
            <Image
              src="/hero-seguros.jpg"
              alt="Familia viajando, representando protección en distintas etapas de la vida"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 space-y-14">
        {/* MASIVOS */}
        <section id="masivos" className="space-y-6">
          <header className="max-w-2xl space-y-2">
            {/* Título pequeño más grande */}
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              seguros masivos
            </p>
            {/* H2 más grande */}
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-net-navy">
              Programas de seguros para instituciones, empresas y grandes
              colectivos.
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Expertos en el desarrollo e implementación de programas de seguros
              para instituciones, empresas, gremios, asociaciones y grupos en
              general, con coberturas competitivas y asesoría profesional de
              principio a fin.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {segurosMasivos.map((seguro) => (
              <SeguroCard key={seguro.id} seguro={seguro} />
            ))}
          </div>
        </section>

        {/* PERSONALES */}
        <section
          id="personales"
          className="space-y-6 border-t border-slate-200 pt-10 sm:pt-12"
        >
          <header className="max-w-2xl space-y-2">
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              seguros personales
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-net-navy">
              Protección integral para ti, tu familia y tu patrimonio.
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Diseñamos soluciones de salud, vida, vehículos, hogar y ahorro
              pensando en las distintas etapas de tu vida, con condiciones
              competitivas y el acompañamiento especializado de nuestro equipo.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {segurosPersonales.map((seguro) => (
              <SeguroCard key={seguro.id} seguro={seguro} />
            ))}
          </div>
        </section>

        {/* EMPRESA */}
        <section
          id="empresa"
          className="space-y-6 border-t border-slate-200 pt-10 sm:pt-12"
        >
          <header className="max-w-2xl space-y-2">
            <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-net-teal">
              seguros de empresas
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-net-navy">
              Protección para activos, operación y continuidad de tu negocio.
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Acompañamos a empresas e industrias en la protección de sus
              activos, infraestructura, proyectos y responsabilidades frente a
              terceros, con un enfoque técnico y de continuidad operacional.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {segurosEmpresa.map((seguro) => (
              <SeguroCard key={seguro.id} seguro={seguro} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SeguroCard({ seguro }: { seguro: SeguroItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-net-teal/70 hover:shadow-lg">
      {/* Imagen */}
      <div className="relative h-40 w-full sm:h-44">
        <Image
          src={seguro.imageSrc}
          alt={seguro.imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-net-teal">
          {seguro.etiqueta}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-net-navy">
          {seguro.nombre}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
          {seguro.descripcion}
        </p>

        <div className="mt-3">
          <Link
            href={seguro.href}
            className="inline-flex items-center justify-center rounded-full bg-net-teal px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-net-teal-strong"
          >
            Solicitar
            <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
