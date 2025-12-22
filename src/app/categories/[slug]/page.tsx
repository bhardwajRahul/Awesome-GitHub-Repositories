import { notFound } from "next/navigation";
import { RepositoryCard } from "@/components/repositories/repository-card";
import { GlassCard } from "@/components/ui/card";
import { repositories } from "@/data/repositories";
import { categories, categoryMap } from "@/lib/categories";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryMap.get(slug as any);
  if (!category) return buildPageMetadata("Categories", "Repository categories", "/categories");
  return buildPageMetadata(
    `${category.name} Repositories`,
    category.description,
    `/categories/${category.slug}`
  );
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryMap.get(slug as any);
  if (!category) return notFound();

  const repos = repositories.filter((repo) => repo.category === category.slug);

  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <GlassCard className="flex flex-col gap-3 bg-white/5">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Category</p>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <category.icon className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">{category.name}</h1>
              <p className="text-slate-300">{category.description}</p>
            </div>
          </div>
        </GlassCard>

        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <RepositoryCard key={repo.slug} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
