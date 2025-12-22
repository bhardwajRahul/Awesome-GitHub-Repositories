import Link from "next/link";
import { categories } from "@/lib/categories";
import { GlassCard } from "@/components/ui/card";

export function FeaturedCategories() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Stacks</p>
          <h2 className="text-2xl font-semibold text-white">Featured Categories</h2>
        </div>
        <Link href="/repositories" className="text-sm font-semibold text-indigo-300 hover:text-white">
          View all
        </Link>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.slice(0, 9).map((category) => (
          <GlassCard
            key={category.slug}
            className="group relative overflow-hidden border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`absolute inset-0 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100 group-hover:blur-2xl bg-gradient-to-br ${category.gradient}`}
            />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{category.slug}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">{category.description}</p>
              <Link
                href={`/categories/${category.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white"
              >
                Browse
                <span className="text-lg">→</span>
              </Link>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
