import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-gradient-to-r from-white/5 via-white/10 to-white/5",
        className
      )}
      aria-busy="true"
      aria-live="polite"
    />
  );
}

export function RepositoryCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-indigo-500/10">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-3">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
          <Skeleton className="h-10 w-16 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
          </div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
