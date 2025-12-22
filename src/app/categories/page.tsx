import Link from "next/link";
import { GlassCard } from "@/components/ui/card";
import { categories } from "@/lib/categories";
import { buildPageMetadata } from "@/lib/seo";
import { repositories } from "@/data/repositories";

export const metadata = buildPageMetadata(
  "Categories",
  "Browse GitHub repositories organized by technology domain and stack.",
  "/categories"
);

export default function CategoriesPage() {
  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Browse by stack</p>
          <h1 className="text-3xl font-semibold text-white">All Categories</h1>
          <p className="text-slate-300">
            Explore curated repositories organized by technology domain. Each category is carefully maintained by the community.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const repoCount = repositories.filter((r) => r.category === category.slug).length;
            return (
              <Link href={`/categories/${category.slug}`} key={category.slug}>
                <GlassCard className="group relative h-full overflow-hidden border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20">
                  <div
                    className={`absolute inset-0 opacity-60 blur-3xl transition duration-500 group-hover:opacity-100 group-hover:blur-2xl bg-gradient-to-br ${category.gradient}`}
                  />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                        <category.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          {repoCount} {repoCount === 1 ? "repository" : "repositories"}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{category.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 group-hover:text-white">
                      Browse {category.slug}
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
