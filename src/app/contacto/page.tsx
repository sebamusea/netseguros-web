"use client";

import { useState } from "react";
import Link from "next/link";
import { ContactoValidationErrors } from "@/types/contacto";

type FormState = {
  nombreCompleto: string;
  rut: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const initialFormState: FormState = {
  nombreCompleto: "",
  rut: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export default function ContactoPage() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<ContactoValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setServerError(null);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          // datos adicionales opcionales
          origen: "web-contacto",
          pageUrl: window.location.href,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 400 && data?.errors) {
          setErrors(data.errors as ContactoValidationErrors);
          setServerError(
            data.message ||
              "Hay errores en algunos campos. Revisa la información ingresada."
          );
        } else {
          setServerError(
            data.message ||
              "Ocurrió un error inesperado al procesar tu solicitud. Inténtalo nuevamente más tarde."
          );
        }
        return;
      }

      setFormState(initialFormState);
      setErrors({});
      setSuccessMessage(data.message || "Tu mensaje ha sido enviado correctamente.");
    } catch (error) {
      console.error("Error enviando formulario de contacto:", error);
      setServerError(
        "Ocurrió un error inesperado al procesar tu solicitud. Inténtalo nuevamente más tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Encabezado */}
        <header className="mb-8 max-w-2xl space-y-2">
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-net-teal">
            contacto
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-net-navy sm:text-3xl">
            Conversemos sobre tus seguros y programas de protección.
          </h1>
          <p className="text-sm text-slate-700 sm:text-base">
            Completa el formulario o escríbenos directamente. Un miembro de
            nuestro equipo se pondrá en contacto contigo para entender tu
            situación y proponerte alternativas.
          </p>
        </header>

        {/* Layout dos columnas */}
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
          {/* Columna izquierda: info de contacto */}
          <aside className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-net-navy sm:text-base">
                Información de contacto
              </h2>
              <p className="text-sm text-slate-700">
                Si prefieres, también puedes escribirnos o llamarnos
                directamente. Atendemos a personas, empresas e instituciones en
                todo Chile.
              </p>
              <div className="space-y-3 text-sm text-slate-800">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Correo
                  </p>
                  <a
                    href="mailto:contacto@netcorredores.cl"
                    className="text-sm text-net-teal hover:underline"
                  >
                    contacto@netcorredores.cl
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Teléfono
                  </p>
                  <a
                    href="tel:+56988294480"
                    className="text-sm text-net-teal hover:underline"
                  >
                    +56 9 8829 4480
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
              <p>
                La información que nos entregues será tratada con
                confidencialidad y utilizada solo para efectos de contacto y
                asesoría, de acuerdo con nuestra{" "}
                <Link
                  href="/privacidad"
                  className="text-net-teal hover:underline"
                >
                  política de privacidad
                </Link>
                .
              </p>
            </div>
          </aside>

          {/* Columna derecha: formulario */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-sm font-semibold text-net-navy sm:text-base">
              Formulario de contacto
            </h2>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Campos marcados con * son obligatorios.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Nombre y RUT */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Nombre completo *"
                  name="nombreCompleto"
                  value={formState.nombreCompleto}
                  onChange={handleChange}
                  error={errors.nombreCompleto}
                  placeholder="Nombre y apellido"
                />
                <Field
                  label="RUT *"
                  name="rut"
                  value={formState.rut}
                  onChange={handleChange}
                  error={errors.rut}
                  placeholder="12.345.678-9"
                />
              </div>

              {/* Email y teléfono */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  type="email"
                  label="Correo electrónico *"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="nombre@empresa.cl"
                />
                <Field
                  label="Teléfono *"
                  name="telefono"
                  value={formState.telefono}
                  onChange={handleChange}
                  error={errors.telefono}
                  placeholder="+56 9 1234 5678"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-xs font-medium text-slate-700 sm:text-sm"
                >
                  Mensaje *{" "}
                  <span className="font-normal text-slate-500">
                    (cuéntanos brevemente qué necesitas)
                  </span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-net-teal sm:text-sm ${
                    errors.mensaje
                      ? "border-red-400 focus:border-red-400 focus:ring-red-300"
                      : "border-slate-300 focus:border-net-teal"
                  }`}
                  value={formState.mensaje}
                  onChange={handleChange}
                  placeholder="Ejemplo: Quiero revisar mis actuales pólizas de vida y salud, y evaluar alternativas..."
                />
                {errors.mensaje && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.mensaje as string}
                  </p>
                )}
              </div>

              {/* Mensajes de estado */}
              {serverError && (
                <p className="text-xs text-red-600 sm:text-sm">
                  {serverError}
                </p>
              )}
              {successMessage && (
                <p className="rounded-lg bg-green-50 px-3 py-2 text-xs text-green-700 sm:text-sm">
                  {successMessage}
                </p>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-net-teal px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-net-teal-strong disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando…" : "Enviar mensaje"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  placeholder?: string;
  type?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-slate-700 sm:text-sm"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-net-teal sm:text-sm ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-300"
            : "border-slate-300 focus:border-net-teal"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">{error as string}</p>
      )}
    </div>
  );
}
