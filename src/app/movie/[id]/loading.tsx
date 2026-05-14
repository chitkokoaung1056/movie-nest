import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* BACKDROP */}
      <section className="relative h-[55vh] w-full overflow-hidden md:h-[70vh]">
        <Skeleton className="h-full w-full rounded-none bg-slate-800/60" />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* POSTER */}
          <div className="mx-auto w-full max-w-xs lg:mx-0 lg:w-[320px]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Skeleton className="aspect-2/3 w-full bg-slate-800/70" />
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-6">
            {/* TITLE */}
            <div className="space-y-3">
              <Skeleton className="h-14 w-3/4 bg-slate-800/70" />
              <Skeleton className="h-6 w-1/2 bg-slate-800/50" />
            </div>

            {/* META */}
            <div className="flex flex-wrap gap-3">
              <Skeleton className="h-9 w-24 rounded-full bg-slate-800/70" />
              <Skeleton className="h-9 w-20 rounded-full bg-slate-800/70" />
              <Skeleton className="h-9 w-28 rounded-full bg-slate-800/70" />
            </div>

            {/* RATING */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-full max-w-md bg-slate-800/50" />
              <Skeleton className="h-2 w-full max-w-2xl rounded-full bg-slate-800/70" />
            </div>

            {/* GENRES */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-8 w-20 rounded-full bg-slate-800/70" />
              <Skeleton className="h-8 w-24 rounded-full bg-slate-800/70" />
              <Skeleton className="h-8 w-16 rounded-full bg-slate-800/70" />
            </div>

            {/* OVERVIEW */}
            <div className="space-y-4">
              <Skeleton className="h-7 w-32 bg-slate-800/70" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-slate-800/50" />
                <Skeleton className="h-4 w-full bg-slate-800/50" />
                <Skeleton className="h-4 w-11/12 bg-slate-800/50" />
                <Skeleton className="h-4 w-10/12 bg-slate-800/50" />
              </div>
            </div>

            {/* BUTTON */}
            <Skeleton className="h-12 w-44 rounded-2xl bg-slate-800/70" />

            {/* EXTRA INFO */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton className="h-3 w-16 bg-slate-800/50" />
                  <Skeleton className="h-4 w-24 bg-slate-800/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
