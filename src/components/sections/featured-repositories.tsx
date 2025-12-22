import Link from "next/link";
import { RepositoryCard } from "@/components/repositories/repository-card";
import { repositories } from "@/data/repositories";

export function FeaturedRepositories() {
  const featured = repositories
    .filter((repo) => repo.featured || repo.editorPick)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6);

  return (
    <section className="px-4 pb-20 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 pb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Highlights</p>
          <h2 className="text-2xl font-semibold text-white">Featured Repositories</h2>
        </div>
        <Link href="/repositories" className="text-sm font-semibold text-indigo-300 hover:text-white">
          View all
        </Link>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
        {featured.map((repo) => (
          <RepositoryCard key={repo.slug} repo={repo} />
        ))}
      </div>
    </section>
  );
}
