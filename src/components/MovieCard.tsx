"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { FallbackImage } from "./FallbackImage";
import { startTransition } from "react";
import { increaseMovieView } from "@/lib/services/movie.service";
import { TrendingMovieDataType } from "@/types/movie";

type Props = {
  movie: {
    id: number;
    title: string;
    image: string;
    year: number;
    rating: number;
  };
};

export function MovieCard({ movie }: Props) {
  // convert TMDB /10 rating to /5 stars
  const stars = Math.round(movie.rating / 2);

  const updateViews = () => {
    startTransition(async () => {
      const trendingMovie: TrendingMovieDataType = {
        movie_id: movie.id,
        poster: movie.image,
        title: movie.title,
      };
      await increaseMovieView(trendingMovie);
    });
  };
  

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
      {/* IMAGE */}
      <div className="relative aspect-2/3 w-full overflow-hidden bg-slate-900">
        <FallbackImage
          src={movie.image}
          alt={movie.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-3">
        <div className="space-y-1">
          <h3 className="truncate text-sm font-semibold text-white">
            {movie.title}
          </h3>

          <p className="text-xs text-slate-400">{movie.year}</p>

          {/* 5 star rating */}
          <div className="flex items-center gap-1 pt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                style={{
                  fill: index < stars ? "#facc15" : "transparent",
                  stroke: index < stars ? "#facc15" : "#475569",
                  color: index < stars ? "#facc15" : "#475569",
                }}
                className="h-3.5 w-3.5"
              />
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <Link
          href={`/movie/${movie.id}`}
          className="inline-flex w-full items-center justify-center rounded-xl bg-white px-3 py-2 text-xs font-medium text-black transition hover:bg-white/90"
          onClick={() => updateViews()}
        >
          See More
        </Link>
      </div>
    </div>
  );
}
