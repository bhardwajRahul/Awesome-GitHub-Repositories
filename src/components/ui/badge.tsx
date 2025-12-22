import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "success" | "warning" | "info";
}) {
  const tones = {
    default: "bg-white/10 text-white border border-white/10",
    success: "bg-emerald-400/10 text-emerald-100 border border-emerald-500/30",
    warning: "bg-amber-400/10 text-amber-100 border border-amber-500/30",
    info: "bg-blue-400/10 text-blue-100 border border-blue-500/30",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium backdrop-blur",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
