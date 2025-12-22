"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { RepositoryCard } from "@/components/repositories/repository-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { repositories } from "@/data/repositories";
import { categories, categoryMap } from "@/lib/categories";
import { cn } from "@/lib/utils";

const sorters = {
  "stars-desc": (a: typeof repositories[number], b: typeof repositories[number]) => b.stars - a.stars,
  "stars-asc": (a: typeof repositories[number], b: typeof repositories[number]) => a.stars - b.stars,
  alphabetical: (a: typeof repositories[number], b: typeof repositories[number]) => a.name.localeCompare(b.name),
  recent: (a: typeof repositories[number], b: typeof repositories[number]) =>
    new Date(b.lastUpdated ?? "2024-01-01").getTime() - new Date(a.lastUpdated ?? "2024-01-01").getTime(),
};

type SortKey = keyof typeof sorters;

export default function RepositoriesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [tech, setTech] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("stars-desc");

  const techOptions = useMemo(() => {
    const set = new Set<string>();
    repositories.forEach((repo) => repo.techStack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return repositories
      .filter((repo) => {
        const matchesQuery =
          !q ||
          repo.name.toLowerCase().includes(q) ||
          repo.description.toLowerCase().includes(q) ||
          repo.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          repo.techStack.some((tag) => tag.toLowerCase().includes(q));
        const matchesCategory = category === "all" || repo.category === category;
        const matchesTech = tech === "all" || repo.techStack.some((t) => t === tech);
        return matchesQuery && matchesCategory && matchesTech;
      })
      .sort(sorters[sort]);
  }, [category, query, sort, tech]);

  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Directory</p>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-white">All Repositories</h1>
              <p className="text-slate-300">
                Search, filter, and sort curated GitHub repositories across every tech domain.
              </p>
            </div>
            <Badge tone="info">{filtered.length} results</Badge>
          </div>
        </header>

        <GlassCard className="grid gap-3 border-white/10 bg-white/5 shadow-lg shadow-indigo-500/10 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search repositories, tags, tech..."
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Select value={category} onChange={setCategory} label="Category" options={[{ label: "All", value: "all" }, ...categories.map((c) => ({ label: c.name, value: c.slug }))]} />
          <Select value={tech} onChange={setTech} label="Tech" options={[{ label: "All", value: "all" }, ...techOptions.map((t) => ({ label: t, value: t }))]} />
          <Select
            value={sort}
            onChange={(v) => setSort(v as SortKey)}
            label="Sort"
            options={[
              { label: "Stars (desc)", value: "stars-desc" },
              { label: "Stars (asc)", value: "stars-asc" },
              { label: "Alphabetical", value: "alphabetical" },
              { label: "Recently updated", value: "recent" },
            ]}
          />
        </GlassCard>

        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-60 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/5 text-center text-slate-300"
            >
              <SlidersHorizontal className="h-6 w-6" />
              <p>No repositories match your filters yet.</p>
              <Button variant="secondary" onClick={() => {
                setCategory("all");
                setTech("all");
                setSort("stars-desc");
                setQuery("");
              }}>
                Reset filters
              </Button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid gap-4 sm:grid-cols-2"
            >
              {filtered.map((repo) => (
                <motion.div
                  key={repo.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RepositoryCard repo={repo} highlight={query} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-slate-300">
      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-slate-900">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
