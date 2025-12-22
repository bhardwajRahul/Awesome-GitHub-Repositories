import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { repositories } from "@/data/repositories";
import { buildPageMetadata } from "@/lib/seo";
import { categoryMap } from "@/lib/categories";
import { formatStars } from "@/lib/utils";

export async function generateStaticParams() {
  return repositories.map((repo) => ({ slug: repo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const repo = repositories.find((r) => r.slug === slug);
  if (!repo) return buildPageMetadata("Repository", "Repository details", "/repos");
  return buildPageMetadata(
    `${repo.name} – Repository Details`,
    repo.description,
    `/repos/${repo.slug}`
  );
}

export default async function RepositoryDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const repo = repositories.find((r) => r.slug === slug);
  if (!repo) return notFound();
  const category = categoryMap.get(repo.category);

  return (
    <div className="px-4 pb-16 pt-8 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <Link href="/repositories" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to repositories
        </Link>

        <GlassCard className="bg-white/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <Badge tone="info">{category?.name ?? repo.category}</Badge>
              <h1 className="text-3xl font-semibold text-white">{repo.name}</h1>
              <p className="text-slate-300">{repo.description}</p>
              <div className="flex flex-wrap gap-2">
                {repo.techStack.map((tag) => (
                  <Badge key={tag} className="border-white/10 bg-white/5 text-slate-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-100">
                <Star className="h-4 w-4" />
                {formatStars(repo.stars)}
              </div>
              <Link
                href={repo.githubUrl}
                target="_blank"
                className="relative inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-fuchsia-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="space-y-3 bg-white/5">
          <p className="text-sm font-semibold text-white">Overview</p>
          <p className="text-sm text-slate-300">
            README preview coming soon. For now, jump into the repository to explore docs, examples, and contribution guides.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            {repo.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/5 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
