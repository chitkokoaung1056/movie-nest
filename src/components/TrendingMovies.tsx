import { SectionHeader } from "./SectionHeader";
import { TrendingCard } from "./TrendingCard";
import { Button } from "@/components/ui/button";

const trendingMovies = [
  {
    rank: 1,
    title: "Dune",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    rank: 2,
    title: "Interstellar",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    rank: 3,
    title: "Batman",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    rank: 4,
    title: "Avatar",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
  },
  {
    rank: 5,
    title: "John Wick",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
  },
];

export function TrendingMovies() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* header with action (shadcn style) */}
      <SectionHeader
        title="Trending Movies"
        description="Top trending movies this week."
      />

      {/* grid */}
      <div className="flex gap-4 overflow-y-scroll scrollbar-hide 2xl:grid grid-cols-5">
        {trendingMovies.map((movie) => (
          <TrendingCard key={movie.rank} movie={movie} />
        ))}
      </div>
    </section>
  );
}
