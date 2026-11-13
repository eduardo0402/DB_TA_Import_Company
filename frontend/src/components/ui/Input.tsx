"use client";

import React, { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      id,
      name,
      type = "text",
      className = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || name || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const isPassword = type === "password";
    const actualType = isPassword && showPassword ? "text" : type;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[12px] font-bold uppercase tracking-wider text-apex-gray-label"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={actualType}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={`w-full bg-white text-apex-dark text-sm px-3.5 py-2.5 rounded-[2px] border transition-colors duration-150 outline-none placeholder:text-gray-400 font-normal ${
              isPassword ? "pr-10" : ""
            } ${
              error
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 bg-red-50/20"
                : "border-apex-gray-input-border hover:border-gray-400 focus:border-apex-red focus:ring-1 focus:ring-apex-red"
            } ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" : ""} ${className}`}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={0}
              aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
              disabled={disabled}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-apex-gray-label focus:outline-none focus:text-apex-red transition-colors p-1"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" strokeWidth={1.75} />
              ) : (
                <Eye className="w-4 h-4" strokeWidth={1.75} />
              )}
            </button>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-xs text-red-600 font-medium flex items-center gap-1">
            <span>•</span>
            <span>{error}</span>
          </p>
        )}
        {!error && helperText && (
          <p className="text-xs text-apex-gray-text">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

