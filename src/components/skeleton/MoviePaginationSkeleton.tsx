import { Skeleton } from "@/components/ui/skeleton";

export function MoviePaginationSkeleton() {
  return (
    <div className="flex justify-center px-4 pb-20">
      <div className="flex items-center gap-2">
        {/* Previous */}
        <Skeleton className="h-10 w-24 rounded-xl bg-slate-800" />

        {/* Page numbers */}
        <Skeleton className="h-10 w-10 rounded-xl bg-slate-800" />
        <Skeleton className="h-10 w-10 rounded-xl bg-slate-800" />
        <Skeleton className="h-10 w-10 rounded-xl bg-slate-800" />

        {/* dots */}
        <Skeleton className="h-10 w-6 rounded-xl bg-slate-800" />

        {/* Next */}
        <Skeleton className="h-10 w-24 rounded-xl bg-slate-800" />
      </div>
    </div>
  );
}
