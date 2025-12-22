import { FeaturedCategories } from "@/components/sections/featured-categories";
import { FeaturedRepositories } from "@/components/sections/featured-repositories";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(
  "Home",
  "Discover curated GitHub repositories with fast search, filters, and stunning UI.",
  "/"
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturedCategories />
      <FeaturedRepositories />
    </div>
  );
}
