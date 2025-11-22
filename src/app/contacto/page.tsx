// src/app/contacto/page.tsx

"use client";

import { FormEvent, useState } from "react";

interface FormState {
  nombreCompleto: string;
  rut: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({
    nombreCompleto: "",
    rut: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setGeneralError(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setGeneralError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          origen: "contacto",
          pageUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data?.errors) {
          setErrors(data.errors);
        }
        setGeneralError(
          data?.message ??
            "Ocurrió un error al enviar el formulario. Inténtalo nuevamente."
        );
        return;
      }

      setSuccessMessage(
        data?.message ??
          "Tu mensaje ha sido enviado correctamente. Pronto te contactaremos."
      );

      // Limpiar formulario después de éxito
      setForm({
        nombreCompleto: "",
        rut: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setGeneralError(
        "Ocurrió un error inesperado. Por favor, inténtalo nuevamente más tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4">Contacto</h1>
      <p className="mb-6">
        Déjanos tus datos y un ejecutivo de NetSeguros se pondrá en contacto
        contigo.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre completo */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombreCompleto"
            value={form.nombreCompleto}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            disabled={isSubmitting}
          />
          {errors.nombreCompleto && (
            <p className="mt-1 text-xs text-red-600">
              {errors.nombreCompleto}
            </p>
          )}
        </div>

        {/* RUT */}
        <div>
          <label className="block mb-1 text-sm font-medium">RUT</label>
          <input
            type="text"
            name="rut"
            value={form.rut}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            disabled={isSubmitting}
          />
          {errors.rut && (
            <p className="mt-1 text-xs text-red-600">{errors.rut}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label className="block mb-1 text-sm font-medium">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            disabled={isSubmitting}
          />
          {errors.telefono && (
            <p className="mt-1 text-xs text-red-600">{errors.telefono}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label className="block mb-1 text-sm font-medium">Mensaje</label>
          <textarea
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
            disabled={isSubmitting}
          />
          {errors.mensaje && (
            <p className="mt-1 text-xs text-red-600">{errors.mensaje}</p>
          )}
        </div>

        {/* Mensajes generales */}
        {generalError && (
          <p className="text-sm text-red-600 mt-2">{generalError}</p>
        )}
        {successMessage && (
          <p className="text-sm text-green-700 mt-2">{successMessage}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded border bg-black text-white disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </main>
  );
}
