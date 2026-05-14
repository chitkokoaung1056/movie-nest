import { SearchParams } from "@/types/searchParams";
import { MovieCard } from "./MovieCard";
import { SectionHeader } from "./SectionHeader";
import { getMovies, searchMovies } from "@/lib/tmdb";
import { MovieType } from "@/types/movie";
import { SearchX } from "lucide-react";

type Props = {
  searchParams: Promise<SearchParams>;
};

export async function MovieGrid({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page || 1);

  const searchQuery = params.searchQuery;

  const data = searchQuery
    ? await searchMovies(searchQuery, page)
    : await getMovies(page);

  const movies: MovieType[] = data.results;

  return (
    <section className="mx-auto px-1 pb-24 sm:px-6 max-w-7xl">
      <SectionHeader
        title={searchQuery ? `Search: ${searchQuery}` : "All Movies"}
        description="Discover trending and popular movies."
      />

      {/* NO MOVIES */}
      {movies.length === 0 ? (
        <div className="flex min-h-75 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5">
            <SearchX className="h-8 w-8 text-slate-400" />
          </div>

          <h2 className="mt-5 text-2xl font-semibold text-white">
            No Movies Found
          </h2>

          <p className="mt-2 max-w-md text-sm text-slate-400">
            We couldn&apos;t find any movies matching{" "}
            <span className="font-medium text-white">
              &quot;{searchQuery}&quot;
            </span>
            .
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                rating: movie.vote_average,
                title: movie.title,
                year: Number(movie.release_date?.split("-")[0]) || 2026,
                image: movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.jpg",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
