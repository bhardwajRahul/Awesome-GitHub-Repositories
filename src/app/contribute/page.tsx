import Link from "next/link";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(
  "Contribute",
  "Learn how to contribute new repositories to Awesome GitHub Repositories.",
  "/contribute"
);

const steps = [
  {
    title: "Fork the repository",
    description: "Create your own copy to propose changes.",
  },
  {
    title: "Add your repository",
    description: "Place it under the right category with a crisp description.",
  },
  {
    title: "Open a pull request",
    description: "Submit with a clear title like 'Add: New DevOps Repo'.",
  },
];

export default function ContributePage() {
  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contribute</p>
          <h1 className="text-3xl font-semibold text-white">Help grow this collection</h1>
          <p className="text-slate-300">
            Follow the simple steps below. Each contribution makes discovery better for the next developer.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <GlassCard key={step.title} className="relative space-y-3 bg-white/5">
              <span className="absolute right-4 top-4 text-3xl font-black text-white/10">0{idx + 1}</span>
              <Sparkles className="h-5 w-5 text-amber-300" />
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="text-sm text-slate-300">{step.description}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="flex flex-col items-start gap-4 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Primary CTA</p>
            <h2 className="text-2xl font-semibold text-white">Contribute on GitHub</h2>
            <p className="text-slate-300">Open the repository, follow the guidelines, and submit your pull request.</p>
          </div>
          <Link
            href="https://github.com/avinash201199/Awesome-GitHub-Repositories"
            target="_blank"
            className="relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-6 text-base font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-fuchsia-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Github className="h-4 w-4" />
            Contribute on GitHub
            <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
