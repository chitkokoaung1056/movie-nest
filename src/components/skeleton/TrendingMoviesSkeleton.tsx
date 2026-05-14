import { Skeleton } from "@/components/ui/skeleton";

export default function TrendingMoviesSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-56 rounded-xl bg-white/10" />
        <Skeleton className="h-4 w-72 rounded-xl bg-white/10" />
      </div>

      {/* Trending cards */}
      <div className="flex gap-4 overflow-y-scroll scrollbar-hide 2xl:grid grid-cols-5 mt-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className=" min-w-60 2xl:min-w-0 space-y-3 rounded-3xl border border-white/10 bg-white/5 p-3"
          >
            {/* Image */}
            <Skeleton className="aspect-2/3 w-full rounded-2xl bg-white/10" />

            {/* Title */}
            <Skeleton className="h-5 w-3/4 rounded-xl bg-white/10" />

            {/* Subtitle */}
            <Skeleton className="h-4 w-1/2 rounded-xl bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
