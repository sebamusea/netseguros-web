// src/lib/contacto/schema.ts

import {
  ContactoPayload,
  ContactoValidationErrors,
  ContactoValidationResult,
} from "@/types/contacto";

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
  const mensaje = (data.mensaje ?? "").toString().trim();

  const origenRaw = data.origen;
  const origen =
    origenRaw != null ? origenRaw.toString().trim() : undefined;

  const pageUrlRaw = data.pageUrl;
  const pageUrl =
    pageUrlRaw != null ? pageUrlRaw.toString().trim() : undefined;


  // Validación nombreCompleto
  if (!nombreCompleto) {
    errors.nombreCompleto = "El nombre completo es obligatorio.";
  } else if (nombreCompleto.length < 3) {
    errors.nombreCompleto =
      "El nombre completo debe tener al menos 3 caracteres.";
  }

  // Validación RUT (formato básico, sin revisar dígito verificador aún)
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

  // Validación teléfono (simple)
  if (!telefono) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (telefono.replace(/[^0-9]/g, "").length < 8) {
    errors.telefono = "El teléfono debe tener al menos 8 dígitos.";
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
    mensaje,
    origen,
    pageUrl,
  };

  return { ok: true, data: payload };
}
