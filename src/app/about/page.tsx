import Link from "next/link";
import { GlassCard } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(
  "About",
  "Why Awesome GitHub Repositories exists and who it's for.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">About</p>
          <h1 className="text-3xl font-semibold text-white">Why this project exists</h1>
          <p className="text-slate-300">
            Discoverability for quality open source is hard. Awesome GitHub Repositories makes it delightful to explore and trust new projects.
          </p>
        </header>

        <GlassCard className="space-y-3 bg-white/5">
          <h2 className="text-xl font-semibold text-white">Mission</h2>
          <p className="text-slate-300">
            Make discovering high-quality GitHub repositories effortless, organized, and fun. We focus on developer experience, speed, and reliable curation.
          </p>
        </GlassCard>

        <GlassCard className="space-y-3 bg-white/5">
          <h2 className="text-xl font-semibold text-white">Who it's for</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Developers hunting for reliable building blocks.</li>
            <li>Students exploring stacks with clear starting points.</li>
            <li>Open source contributors looking to add value.</li>
          </ul>
        </GlassCard>

        <GlassCard className="space-y-3 bg-white/5">
          <h2 className="text-xl font-semibold text-white">Credits</h2>
          <p className="text-slate-300">
            Maintained by the community, inspired by the original curation by @AvinashSingh_20. Contributions and feedback are always welcome.
          </p>
        </GlassCard>

        <GlassCard className="space-y-3 bg-white/5">
          <h2 className="text-xl font-semibold text-white">About Avinash</h2>
          <p className="text-slate-300">
            Connect with the curator and follow updates on X (Twitter).
          </p>
          <Link
            href="https://x.com/AvinashSingh_20"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white"
          >
            Visit @AvinashSingh_20
            <span className="text-lg">→</span>
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
