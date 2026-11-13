"use client";

import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  isLoading?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      isLoading = false,
      disabled = false,
      rightIcon,
      leftIcon,
      fullWidth = true,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center font-bold uppercase tracking-wider text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-red focus-visible:ring-offset-2 disabled:cursor-not-allowed select-none";

    const variantStyles = {
      primary:
        "bg-apex-red text-white hover:bg-apex-red-hover active:bg-apex-red-active disabled:bg-apex-red/50 shadow-sm",
      secondary:
        "bg-apex-dark text-white hover:bg-black active:bg-neutral-900 disabled:bg-neutral-300",
      ghost:
        "bg-transparent text-apex-dark hover:bg-neutral-100 disabled:text-neutral-400",
      link:
        "bg-transparent text-apex-red hover:underline p-0 h-auto font-semibold uppercase",
    };

    const widthStyles = fullWidth ? "w-full justify-between px-5 py-3" : "px-4 py-2.5 justify-center";

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} rounded-[2px] ${className}`}
        {...props}
      >
        {isLoading ? (
          <div className="w-full flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            <span>Ingresando...</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              {leftIcon && <span className="inline-flex">{leftIcon}</span>}
              <span>{children}</span>
            </div>
            {rightIcon && <span className="inline-flex items-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

