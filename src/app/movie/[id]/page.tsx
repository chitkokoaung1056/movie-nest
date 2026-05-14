/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star } from "lucide-react";
import { MovieType } from "@/types/movie";
import { FallbackImage } from "@/components/FallbackImage";
import { TrailerButton } from "@/components/TrailarButton";
import { getMovieById, getMovieVideos } from "@/lib/services/movie.service";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;

  const movie: MovieType = await getMovieById(id);

  const videos = await getMovieVideos(id);

  const trailer = videos.results.find(
    (video: any) => video.type === "Trailer" && video.site === "YouTube",
  );

  const genres = movie.genres || [];

  const releaseYear = movie.release_date?.split("-")[0];

  const rating = movie.vote_average?.toFixed(1);

  const ratingPercent = Math.round((movie.vote_average / 10) * 100);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* BACKDROP */}
      <section className="relative h-[55vh] w-full overflow-hidden md:h-[70vh]">
        <FallbackImage
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : ""
          }
          alt={movie.title}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-black/20" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* POSTER */}
          <div className="mx-auto w-full max-w-xs lg:mx-0 lg:w-[320px]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative aspect-2/3">
                <FallbackImage
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : ""
                  }
                  alt={movie.title}
                  fill
                  preload
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-6">
            {/* TITLE */}
            <div className="space-y-3">
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="text-lg italic text-slate-400">{movie.tagline}</p>
              )}
            </div>

            {/* META */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-yellow-500/20 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/10">
                <Star className="mr-1 h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                {rating}
              </Badge>

              <Badge
                variant="outline"
                className="border-white/10 bg-white/5 text-slate-300"
              >
                <Calendar className="mr-1 h-3.5 w-3.5" />
                {releaseYear}
              </Badge>

              {movie.runtime && (
                <Badge
                  variant="outline"
                  className="border-white/10 bg-white/5 text-slate-300"
                >
                  <Clock className="mr-1 h-3.5 w-3.5" />
                  {movie.runtime} min
                </Badge>
              )}
            </div>

            {/* RATING BAR */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>User Score</span>

                <span>{ratingPercent}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-white transition-all duration-700"
                  style={{
                    width: `${ratingPercent}%`,
                  }}
                />
              </div>
            </div>

            {/* GENRES */}
            {genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {genres.map((genre: any) => (
                  <Badge
                    key={genre.id}
                    variant="secondary"
                    className="bg-white/5 text-slate-300 hover:bg-white/10"
                  >
                    {genre.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* OVERVIEW */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Overview</h2>

              <p className="max-w-3xl leading-8 text-slate-300">
                {movie.overview}
              </p>
            </div>

            {/* TRAILER BUTTON */}
            <div className="pt-2">
              <TrailerButton videoKey={trailer?.key} />
            </div>

            {/* EXTRA INFO */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
              {movie.status && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Status
                  </p>

                  <p className="mt-1 text-sm text-slate-200">{movie.status}</p>
                </div>
              )}

              {movie.budget > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Budget
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    ${movie.budget.toLocaleString()}
                  </p>
                </div>
              )}

              {movie.revenue > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Revenue
                  </p>

                  <p className="mt-1 text-sm text-slate-200">
                    ${movie.revenue.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
