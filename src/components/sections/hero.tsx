"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            Curated for developers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Discover the Best GitHub Repositories for Every Tech Stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-lg text-slate-300"
          >
            A developer-focused, beautifully designed hub to explore high-quality open source projects. Fast filters, delightful animations, and curated picks to level up your stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/repositories"
              className="relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-6 text-base font-medium text-white shadow-2xl shadow-fuchsia-500/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-fuchsia-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore Repositories
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/avinash201199/Awesome-GitHub-Repositories"
              target="_blank"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-base font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Github className="h-4 w-4" />
              Contribute on GitHub
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/15 to-amber-400/20 p-8 shadow-2xl shadow-indigo-500/20 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.15),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.12),transparent_40%)]" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Curated · Animated · Fast</p>
              <div className="grid grid-cols-2 gap-3 text-slate-100">
                {[
                  { label: "Instant search", value: "Live filters" },
                  { label: "Categories", value: "10+ domains" },
                  { label: "Performance", value: "Lighthouse ready" },
                  { label: "Animations", value: "Framer Motion" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm shadow-lg shadow-indigo-500/10"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
