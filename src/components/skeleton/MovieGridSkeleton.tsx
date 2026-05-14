import { Skeleton } from "../ui/skeleton";

export default function MovieGridSkeleton() {
  return (
    <section className="mx-auto max-w-7xl sm:px-6 px-1">
      {/* header skeleton */}
      <div className="mb-8 space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* grid skeleton */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-2"
          >
            <Skeleton className="h-80 w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
}
