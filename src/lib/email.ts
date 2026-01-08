// src/lib/email.ts

import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
  console.warn(
    "⚠️ Variables SMTP no están completamente configuradas. El envío de correos no funcionará hasta que se definan."
  );
}

export async function sendContactEmail(params: {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string; // ✅ NUEVO
}) {
  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.warn(
      "⚠️ Intento de enviar correo pero SMTP no está configurado correctamente."
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465, // true si usas puerto 465
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: params.from,
    to: params.to,
    subject: params.subject,
    html: params.html,
    ...(params.replyTo ? { replyTo: params.replyTo } : {}), // ✅ NUEVO
  });
}
