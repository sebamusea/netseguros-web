// src/lib/contacto/service.ts

import { ContactoPayload } from "@/types/contacto";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO ?? "";
const CONTACT_EMAIL_FROM = process.env.CONTACT_EMAIL_FROM ?? "";

/**
 * Procesa un contacto válido:
 * 1. Guarda en BD
 * 2. Envía correo a NetSeguros (si SMTP está configurado)
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
      mensaje: payload.mensaje,
      origen: payload.origen ?? null,
      pageUrl: payload.pageUrl ?? null,
    },
  });

  console.log("✅ Lead guardado en BD con id:", lead.id);

  // 2. Enviar correo (si las variables están configuradas)
  if (!CONTACT_EMAIL_TO || !CONTACT_EMAIL_FROM) {
    console.warn(
      "⚠️ CONTACT_EMAIL_TO o CONTACT_EMAIL_FROM no están configurados. No se enviará correo."
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
    <p><strong>Origen:</strong> ${lead.origen ?? "No informado"}</p>
    <p><strong>URL de origen:</strong> ${lead.pageUrl ?? "No informado"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${lead.mensaje.replace(/\n/g, "<br />")}</p>
    <hr />
    <p>Fecha de creación: ${lead.createdAt.toISOString()}</p>
  `;

  await sendContactEmail({
    to: CONTACT_EMAIL_TO,
    from: CONTACT_EMAIL_FROM,
    subject,
    html,
  });

  console.log("📧 Correo de contacto enviado a:", CONTACT_EMAIL_TO);
}
