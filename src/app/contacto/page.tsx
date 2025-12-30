// src/app/contacto/page.tsx
import { Suspense } from "react";
import ContactoClient from "./ContactoClient";

export default function ContactoPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
            Cargando…
          </div>
        </div>
      }
    >
      <ContactoClient />
    </Suspense>
  );
}
