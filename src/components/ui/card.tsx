import type React from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-indigo-500/10 backdrop-blur",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
