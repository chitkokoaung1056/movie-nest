import { TrendingMovieDataType } from "@/types/movie";
import { FallbackImage } from "./FallbackImage";

type Props = {
  movie: TrendingMovieDataType,
  rank: number
};

export function TrendingCard({ movie, rank }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border min-w-60 2xl:min-w-0 border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-white/20">
      {/* image */}
      <div className="relative h-80 overflow-hidden">
        <FallbackImage
          src={movie.poster}
          alt={movie.title}
          fill
          sizes="100vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* rank */}
        <div className="absolute bottom-3 left-3 text-7xl font-black leading-none text-white/90">
          {rank}
        </div>
      </div>

      {/* content */}
      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-white">
          {movie.title}
        </h3>
      </div>
    </div>
  );
}
