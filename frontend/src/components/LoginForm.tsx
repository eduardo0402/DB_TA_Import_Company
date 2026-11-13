"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Ingresa un correo electrónico válido";
      }
    }

    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setErrors({});
    setSubmitSuccess(false);

    try {
      // TODO: conectar con API
      // En Fase 3 se conectará con POST {NEXT_PUBLIC_API_URL}/auth/login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      console.log("Simulación de login exitosa para:", { email, rememberMe });
    } catch {
      setErrors({ general: "Ocurrió un error al iniciar sesión. Inténtalo de nuevo." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[340px] mx-auto flex flex-col justify-center">
      {/* Subtítulo */}
      <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-apex-red mb-1">
        BIENVENIDO A TU CENTRO DE OPERACIONES
      </span>

      {/* Título Principal */}
      <h1 className="text-[38px] font-black uppercase tracking-tight text-apex-dark leading-none mb-2">
        INICIA SESIÓN
      </h1>

      {/* Descripción */}
      <p className="text-[13px] text-apex-gray-text leading-[1.3] max-w-[330px] mb-4">
        Ingresa a tu cuenta y toma el control de tus envíos, documentos y cotizaciones en un solo lugar.
      </p>

      {/* Alerta de error global */}
      {errors.general && (
        <div
          role="alert"
          className="mb-3 p-2.5 text-xs text-red-700 bg-red-50 border border-red-200 rounded-[2px]"
        >
          {errors.general}
        </div>
      )}

      {/* Alerta de éxito simulado */}
      {submitSuccess && (
        <div
          role="status"
          className="mb-3 p-2.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-[2px]"
        >
          Simulación de inicio de sesión exitosa. Listo para conectar en Fase 3.
        </div>
      )}

      {/* Formulario */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <Input
          id="email"
          name="email"
          type="email"
          label="CORREO ELECTRÓNICO"
          placeholder="nombre@empresa.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          error={errors.email}
          disabled={isLoading}
          autoComplete="email"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="CONTRASEÑA"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          error={errors.password}
          disabled={isLoading}
          autoComplete="current-password"
        />

        {/* Recordarme y Olvidaste tu contraseña */}
        <div className="flex items-center justify-between text-xs pt-0.5">
          <label className="flex items-center gap-1.5 cursor-pointer select-none text-apex-gray-muted hover:text-apex-dark transition-colors">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="w-3.5 h-3.5 rounded-[2px] border-apex-gray-input-border text-apex-red focus:ring-apex-red accent-apex-red cursor-pointer"
            />
            <span className="text-[12px] text-neutral-600 font-normal">Recordarme</span>
          </label>

          <a
            href="#recuperar"
            className="text-[12px] font-semibold text-apex-red hover:text-apex-red-hover transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón de Enviar */}
        <div className="pt-1.5">
          <Button
            type="submit"
            variant="primary"
            isLoading={isLoading}
            rightIcon={<ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />}
          >
            Iniciar sesión
          </Button>
        </div>

        {/* Enlace para solicitar acceso */}
        <div className="flex items-center justify-center gap-1.5 text-[12px] pt-1">
          <span className="text-apex-gray-text">¿Aún no tienes cuenta?</span>
          <a
            href="#solicitar"
            onClick={(e) => e.preventDefault()}
            className="font-semibold text-apex-red hover:text-apex-red-hover inline-flex items-center gap-0.5 transition-colors"
          >
            <span>Solicita acceso</span>
            <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
          </a>
        </div>
      </form>

      {/* Línea divisoria */}
      <div className="w-full h-px bg-apex-gray-border my-4" />

      {/* Sección de ayuda */}
      <div className="flex flex-col text-left">
        <span className="text-[12px] text-apex-gray-text mb-0.5">
          ¿Necesitas ayuda para entrar?
        </span>
        <a
          href="#contacto"
          onClick={(e) => e.preventDefault()}
          className="text-[12px] font-semibold text-apex-red hover:text-apex-red-hover inline-flex items-center gap-0.5 transition-colors self-start"
        >
          <span>Contacta a nuestro equipo</span>
          <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}
