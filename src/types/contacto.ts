// src/types/contacto.ts

export interface ContactoPayload {
  nombreCompleto: string;
  rut: string;
  email: string;
  telefono: string;

  // ✅ NUEVOS (del formulario)
  macro: "masivos" | "personales" | "empresa" | "otras";
  seguro?: string; // opcional (cuando macro !== "otras")

  mensaje: string;
  origen?: string;
  pageUrl?: string;
}

/**
 * Errores de validación por campo.
 * Solo incluimos las claves que tienen error.
 */
export type ContactoValidationErrors = Partial<
  Record<keyof ContactoPayload, string>
>;

export type ContactoValidationResult =
  | { ok: true; data: ContactoPayload }
  | { ok: false; errors: ContactoValidationErrors };
