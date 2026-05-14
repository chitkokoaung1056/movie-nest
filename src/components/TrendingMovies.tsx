import { getTrendingMovies } from "@/lib/services/movie.service";
import { SectionHeader } from "./SectionHeader";
import { TrendingCard } from "./TrendingCard";

export async function TrendingMovies() {
  const trendingMovies = await getTrendingMovies();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* header with action (shadcn style) */}
      <SectionHeader
        title="Trending Movies"
        description="Top trending movies this week."
      />

      {/* grid */}
      <div className="flex gap-4 overflow-y-scroll scrollbar-hide 2xl:grid grid-cols-5">
        {trendingMovies.map((movie, index) => (
          <TrendingCard key={movie.movie_id} movie={movie} rank={index + 1}/>
        ))}
      </div>
    </section>
  );
}
