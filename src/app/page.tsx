import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";
import MovieGridSkeleton from "@/components/skeleton/MovieGridSkeleton";
import TrendingMoviesSkeleton from "@/components/skeleton/TrendingMoviesSkeleton";
import { TrendingMovies } from "@/components/TrendingMovies";
import type { SearchParams } from "@/types/searchParams";
import { Suspense } from "react";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HeroSection />

      <Suspense fallback={<TrendingMoviesSkeleton />}>
        <TrendingMovies />
      </Suspense>

      <Suspense fallback={<MovieGridSkeleton />}>
        <MovieGrid searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
