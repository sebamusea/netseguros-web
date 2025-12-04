// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NetSeguros - Aseguramos tu mundo",
  description:
    "Corredora de seguros con más de 30 años de experiencia en banca y mercado asegurador. Asesoría en seguros masivos, personales y de empresas.",
};

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/seguros", label: "Seguros" },
  // Más adelante se pueden activar estas rutas:
  // { href: "/programas-masivos", label: "Programas masivos" },
  { href: "/contacto", label: "Contacto" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-surface text-slate-900">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-net-dark shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-30 sm:h-11 sm:w-25">
            <Image
              src="/logo_dark_sf.png"
              alt="NetSeguros"
              fill
              className="object-contain scale-250 origin-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-50 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-net-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-full bg-net-teal px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-net-teal-strong"
          >
            Quiero asesoría
          </Link>
        </nav>

        {/* Mobile nav (hamburguesa) */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="relative sm:hidden">
      {/* Botón hamburguesa */}
      <summary
        className="
          flex h-9 w-9 cursor-pointer items-center justify-center
          rounded-full border border-slate-600/70 bg-net-dark/90 text-slate-100
          outline-none
          list-none
          [&::-webkit-details-marker]:hidden
        "
        aria-label="Abrir menú de navegación"
      >
        <div className="space-y-1">
          <span className="block h-0.5 w-4 rounded bg-current" />
          <span className="block h-0.5 w-4 rounded bg-current" />
          <span className="block h-0.5 w-4 rounded bg-current" />
        </div>
      </summary>

      {/* Panel desplegable: full-width, fondo sólido */}
      <div
        className="
          fixed left-0 right-0 top-14 z-40
          border-t border-slate-700
          bg-net-dark
          text-slate-50
          shadow-lg
        "
      >
        <nav className="flex flex-col gap-1 px-4 py-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-left transition hover:bg-slate-700/70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="mt-2 rounded-xl bg-net-teal px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-net-teal-strong"
          >
            Quiero asesoría
          </Link>
        </nav>
      </div>
    </details>
  );
}



function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 text-sm text-slate-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-60">
            <Image
              src="/logo_light.jpg"
              alt="NetSeguros"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} NetSeguros. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex flex-col items-start gap-1 text-xs sm:flex-row sm:items-center sm:gap-4">
          <p>contacto@netcorredores.cl</p>
          <p>+56 9 8829 4480</p>
          <Link
            href="/privacidad"
            className="underline-offset-4 hover:underline"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
