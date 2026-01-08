// src/lib/contacto/schema.ts

import {
  ContactoPayload,
  ContactoValidationErrors,
  ContactoValidationResult,
} from "@/types/contacto";

const MACROS_VALIDOS = ["masivos", "personales", "empresa", "otras"] as const;

type Macro = (typeof MACROS_VALIDOS)[number];

/**
 * Valida y normaliza el payload recibido en /api/contacto
 */
export function validateContactoPayload(raw: unknown): ContactoValidationResult {
  const errors: ContactoValidationErrors = {};

  if (typeof raw !== "object" || raw === null) {
    return {
      ok: false,
      errors: {
        nombreCompleto: "Los datos enviados no tienen el formato esperado.",
      },
    };
  }

  const data = raw as Record<string, unknown>;

  const nombreCompleto = (data.nombreCompleto ?? "").toString().trim();
  const rut = (data.rut ?? "").toString().trim();
  const email = (data.email ?? "").toString().trim().toLowerCase();
  const telefono = (data.telefono ?? "").toString().trim();

  // ✅ NUEVO
  const macroRaw = (data.macro ?? "").toString().trim().toLowerCase();
  const macro = MACROS_VALIDOS.includes(macroRaw as Macro)
    ? (macroRaw as Macro)
    : ("" as unknown as Macro);

  // ✅ NUEVO
  const seguroRaw = (data.seguro ?? "").toString().trim();
  const seguro = seguroRaw || undefined;

  const mensaje = (data.mensaje ?? "").toString().trim();

  const origenRaw = data.origen;
  const origen = origenRaw != null ? origenRaw.toString().trim() : undefined;

  const pageUrlRaw = data.pageUrl;
  const pageUrl = pageUrlRaw != null ? pageUrlRaw.toString().trim() : undefined;

  // Validación nombreCompleto
  if (!nombreCompleto) {
    errors.nombreCompleto = "El nombre completo es obligatorio.";
  } else if (nombreCompleto.length < 3) {
    errors.nombreCompleto = "El nombre completo debe tener al menos 3 caracteres.";
  }

  // Validación RUT
  if (!rut) {
    errors.rut = "El RUT es obligatorio.";
  } else if (rut.length < 8 || rut.length > 15) {
    errors.rut = "El RUT ingresado no tiene un formato válido.";
  }

  // Validación email
  if (!email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "El correo electrónico no tiene un formato válido.";
  }

  // Validación teléfono
  if (!telefono) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (telefono.replace(/[^0-9]/g, "").length < 8) {
    errors.telefono = "El teléfono debe tener al menos 8 dígitos.";
  }

  // ✅ Validación macro
  if (!macroRaw) {
    errors.macro = "Debes seleccionar el tipo de solicitud.";
  } else if (!MACROS_VALIDOS.includes(macroRaw as Macro)) {
    errors.macro = "El tipo de solicitud no es válido.";
  }

  // ✅ Validación seguro (solo si aplica)
  if (macroRaw && macroRaw !== "otras") {
    // seguro puede ser opcional, pero si viene, que no sea basura
    if (seguro && seguro.length < 2) {
      errors.seguro = "El seguro seleccionado no es válido.";
    }
  }

  // Validación mensaje
  if (!mensaje) {
    errors.mensaje = "El mensaje es obligatorio.";
  } else if (mensaje.length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }

  const hasErrors = Object.keys(errors).length > 0;

  if (hasErrors) {
    return { ok: false, errors };
  }

  const payload: ContactoPayload = {
    nombreCompleto,
    rut,
    email,
    telefono,
    macro,
    seguro: macro !== "otras" ? seguro : undefined,
    mensaje,
    origen,
    pageUrl,
  };

  return { ok: true, data: payload };
}
