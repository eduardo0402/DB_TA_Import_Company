"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-white selection:bg-apex-red selection:text-white md:overflow-hidden">
      {/* =========================================
          COLUMNA IZQUIERDA: HERO VISUAL (52%)
          ========================================= */}
      <section className="relative w-full md:w-[52%] flex flex-col justify-between min-h-[280px] sm:min-h-[360px] md:h-full bg-apex-dark overflow-hidden">
        {/* Capa de fondo con imagen del camión */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/truck.jpg"
            alt="Flota de transporte Scania en terminal portuaria"
            fill
            priority
            className="object-cover object-center md:object-[45%_center]"
            sizes="(max-width: 768px) 100vw, 52vw"
          />
          {/* Gradiente sutil para garantizar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
        </div>

        {/* Sección Superior Roja con corte diagonal hacia arriba a la derecha */}
        <div
          className="relative z-10 w-full bg-apex-red text-white px-6 sm:px-8 md:px-10 pt-6 pb-14 md:pb-16 shadow-md"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 46px), 0 100%)",
          }}
        >
          {/* Header superior: Logo + Portal de Clientes */}
          <div className="flex items-center justify-between w-full mb-6 md:mb-8">
            <div className="relative w-[100px] h-[34px]">
              <Image
                src="/logo.png"
                alt="APEX Global Logistics"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90">
              PORTAL DE CLIENTES / 01
            </span>
          </div>

          {/* Gran Título en Rojo */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-black italic uppercase leading-[0.92] tracking-normal text-white">
              TU OPERACIÓN.
              <br />
              EN TUS MANOS.
            </h2>
            <div className="w-8 h-[3px] bg-white mt-3.5 rounded-full" />
          </div>
        </div>

        {/* Espacio flexible para visualización del camión */}
        <div className="relative z-10 flex-1 min-h-[100px]" />

        {/* Sección Inferior: Franja oscura + Franja de advertencia */}
        <div className="relative z-10 w-full flex flex-col">
          {/* Franja de texto oscura */}
          <div className="bg-apex-dark/95 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3.5 border-t border-white/10">
            <h3 className="text-base sm:text-lg font-extrabold italic uppercase tracking-wider text-white">
              EL MUNDO NO SE DETIENE. TÚ TAMPOCO.
            </h3>
            <p className="text-[12px] text-neutral-300 font-normal mt-0.5">
              Envíos, documentos y cotizaciones. Todo bajo control.
            </p>
          </div>

          {/* Franja de rayas rojas y blancas (Hazard Stripes) */}
          <div className="w-full h-2.5 md:h-3 hazard-stripes" />
        </div>
      </section>

      {/* =========================================
          COLUMNA DERECHA: FORMULARIO DE LOGIN (48%)
          ========================================= */}
      <section className="w-full md:w-[48%] flex flex-col justify-between flex-1 md:flex-initial md:h-full bg-white overflow-y-auto md:overflow-y-hidden">
        {/* Barra superior de navegación */}
        <div className="w-full flex items-center justify-between px-6 sm:px-8 md:px-12 pt-6 pb-2">
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-apex-dark transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Volver al inicio</span>
          </a>

          <div className="text-xs font-semibold tracking-wider text-neutral-400">
            <span className="text-neutral-800 cursor-pointer">ES</span>
            <span className="mx-1 text-neutral-300">/</span>
            <span className="cursor-pointer hover:text-neutral-700 transition-colors">EN</span>
          </div>
        </div>

        {/* Centro: Formulario */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12 py-3">
          <LoginForm />
        </div>

        {/* Pie de página inferior */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 px-6 sm:px-8 md:px-12 py-3.5 text-[11px] text-apex-gray-footer border-t border-neutral-100">
          <span>© 2026 APEX Global Logistics</span>
          <div className="flex items-center gap-3">
            <a
              href="#privacidad"
              onClick={(e) => e.preventDefault()}
              className="hover:text-apex-dark transition-colors"
            >
              Privacidad
            </a>
            <span>·</span>
            <a
              href="#terminos"
              onClick={(e) => e.preventDefault()}
              className="hover:text-apex-dark transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
