import { repositories } from "@/data/repositories";
import { categories } from "@/lib/categories";
import { GlassCard } from "@/components/ui/card";

const stats = {
  repos: repositories.length,
  categories: categories.length,
  stars: repositories.reduce((sum, repo) => sum + repo.stars, 0),
};

export function StatsSection() {
  return (
    <section className="px-4 pb-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "Repositories", value: stats.repos, desc: "Curated and quality-checked." },
          { label: "Categories", value: stats.categories, desc: "Covering every major stack." },
          { label: "Total Stars", value: `${Math.round(stats.stars / 1000)}k+`, desc: "Community trust and adoption." },
        ].map((item) => (
          <GlassCard key={item.label} className="bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
