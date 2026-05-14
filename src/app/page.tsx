import { HeroSection } from "@/components/HeroSection";
import { MovieGrid } from "@/components/MovieGrid";
import { MoviePagination } from "@/components/Pagination";
import MovieGridSkeleton from "@/components/skeleton/MovieGridSkeleton";
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

      <TrendingMovies />

      <Suspense fallback={<MovieGridSkeleton />}>
        <MovieGrid searchParams={searchParams} />
      </Suspense>

      {/* <MoviePagination totalPages={10} /> */}
    </main>
  );
}
