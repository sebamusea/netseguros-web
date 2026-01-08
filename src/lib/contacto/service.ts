// src/lib/contacto/service.ts

import { ContactoPayload } from "@/types/contacto";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

// Destinatario final (correo de la empresa)
const CONTACT_EMAIL_TO =
  process.env.CONTACT_EMAIL_TO ?? "contacto@netcorredores.cl";

// Correo técnico que ENVÍA el mail (cuenta SMTP válida)
const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM ?? "";

/**
 * Procesa un contacto válido:
 * 1. Guarda el lead en la base de datos
 * 2. Intenta enviar correo a NetSeguros (sin romper si falla)
 */
export async function procesarContacto(
  payload: ContactoPayload
): Promise<void> {
  // 1. Guardar en la base de datos
  const lead = await prisma.lead.create({
    data: {
      nombreCompleto: payload.nombreCompleto,
      rut: payload.rut,
      email: payload.email,
      telefono: payload.telefono,
      macro: payload.macro,
      seguro: payload.seguro ?? null,
      mensaje: payload.mensaje,
      origen: payload.origen ?? null,
      pageUrl: payload.pageUrl ?? null,
    },
  });

  console.log("✅ Lead guardado en BD con id:", lead.id);

  // 2. Enviar correo (best effort: si falla, NO rompemos el flujo)
  if (!CONTACT_EMAIL_FROM) {
    console.warn(
      "⚠️ CONTACT_EMAIL_FROM no está configurado. No se enviará correo."
    );
    return;
  }

  const subject = `Nuevo contacto desde NetSeguros: ${lead.nombreCompleto}`;

  const html = `
    <h2>Nuevo contacto recibido desde la web de NetSeguros</h2>
    <p><strong>Nombre:</strong> ${lead.nombreCompleto}</p>
    <p><strong>RUT:</strong> ${lead.rut}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Teléfono:</strong> ${lead.telefono}</p>
    <p><strong>Tipo de solicitud:</strong> ${lead.macro}</p>
    <p><strong>Seguro específico:</strong> ${lead.seguro ?? "No informado"}</p>
    <p><strong>Origen:</strong> ${lead.origen ?? "No informado"}</p>
    <p><strong>URL de origen:</strong> ${lead.pageUrl ?? "No informado"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${lead.mensaje.replace(/\n/g, "<br />")}</p>
    <hr />
    <p>Fecha de creación: ${lead.createdAt.toISOString()}</p>
  `;

  try {
    await sendContactEmail({
      to: CONTACT_EMAIL_TO,        // 📥 recibe la empresa
      from: CONTACT_EMAIL_FROM,    // 📤 envía la cuenta SMTP
      replyTo: lead.email,         // ↩️ responder al cliente
      subject,
      html,
    });

    console.log("📧 Correo de contacto enviado a:", CONTACT_EMAIL_TO);
  } catch (error) {
    // MUY IMPORTANTE: no romper la experiencia del usuario
    console.error(
      "⚠️ No se pudo enviar el correo, pero el lead quedó guardado:",
      error
    );
  }
}
