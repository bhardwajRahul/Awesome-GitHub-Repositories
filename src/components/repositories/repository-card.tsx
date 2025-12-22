import { ArrowUpRight, Github, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/card";
import type { Repository } from "@/data/repositories";
import { cn, formatStars, highlightMatch } from "@/lib/utils";

export function RepositoryCard({
  repo,
  highlight,
}: {
  repo: Repository;
  highlight?: string;
}) {
  return (
    <GlassCard className="group h-full bg-gradient-to-br from-white/5 via-white/0 to-white/5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>{repo.category}</span>
            {repo.editorPick && <Badge tone="info">Editor pick</Badge>}
            {repo.featured && <Badge tone="success">Featured</Badge>}
          </div>
          <h3 className="text-lg font-semibold text-white">
            <span dangerouslySetInnerHTML={{ __html: highlightMatch(repo.name, highlight ?? "") }} />
          </h3>
          <p
            className="text-sm text-slate-300"
            dangerouslySetInnerHTML={{ __html: highlightMatch(repo.description, highlight ?? "") }}
          />
          <div className="flex flex-wrap gap-2">
            {repo.techStack.map((tag) => (
              <Badge key={tag} className="border-white/10 bg-white/5 text-xs text-slate-200">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex h-10 items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 text-sm font-semibold text-amber-200">
          <Star className="h-4 w-4" />
          {formatStars(repo.stars)}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
          {repo.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/5 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={repo.githubUrl}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={`/repos/${repo.slug}`}
            className={cn(
              "inline-flex items-center gap-1 rounded-full bg-white/0 px-3 py-1 text-xs font-semibold text-white/80 transition",
              "group-hover:text-white group-hover:underline"
            )}
          >
            Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
