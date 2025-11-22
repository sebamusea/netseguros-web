// src/app/api/contacto/route.ts

import { NextRequest, NextResponse } from "next/server";
import { validateContactoPayload } from "@/lib/contacto/schema";
import { procesarContacto } from "@/lib/contacto/service";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const result = validateContactoPayload(json);

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "Hay errores en algunos campos.",
          errors: result.errors,
        },
        { status: 400 }
      );
    }

    await procesarContacto(result.data);

    return NextResponse.json(
      {
        ok: true,
        message: "Tu mensaje ha sido enviado correctamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en /api/contacto:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Ocurrió un error inesperado al procesar tu solicitud. Inténtalo nuevamente más tarde.",
      },
      { status: 500 }
    );
  }
}
