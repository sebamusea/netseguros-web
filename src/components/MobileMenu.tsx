"use client";

import Link from "next/link";
import { useRef } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/seguros", label: "Seguros" },
  { href: "/contacto", label: "Contacto" },
];

export default function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const handleLinkClick = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false; // cierra el menú
    }
  };

  return (
    <details ref={detailsRef} className="relative sm:hidden">
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

      {/* Panel desplegable */}
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
              onClick={handleLinkClick}
              className="rounded-xl px-3 py-2 text-left transition hover:bg-slate-700/70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={handleLinkClick}
            className="mt-2 rounded-xl bg-net-teal px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-net-teal-strong"
          >
            Quiero asesoría
          </Link>
        </nav>
      </div>
    </details>
  );
}
