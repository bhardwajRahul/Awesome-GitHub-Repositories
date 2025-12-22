"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const buttonBase =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.01] hover:shadow-fuchsia-500/30",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/5",
  outline:
    "border border-indigo-500/40 text-white hover:bg-indigo-500/10",
};

const sizes = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonBase, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
