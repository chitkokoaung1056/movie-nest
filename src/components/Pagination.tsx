import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  page: number;
  totalPages: number;
};

export function MoviePagination({ page, totalPages }: Props) {
  return (
    <div className="flex justify-center px-4 pb-20">
      <Pagination>
        <PaginationContent className="gap-3">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${Math.max(page - 1, 1)}`}
              className={`h-10 rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all hover:bg-white/10 ${
                page === 1 ? "pointer-events-none opacity-40" : ""
              }`}
            />
          </PaginationItem>

          {/* Current page */}
          <PaginationItem>
            <PaginationLink
              href={`?page=${page}`}
              isActive
              className="h-11 min-w-11 rounded-xl bg-white px-4 text-base font-semibold text-black shadow-lg transition-all hover:bg-white"
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          {/* Next page */}
          {page + 1 <= totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`?page=${page + 1}`}
                className="h-10 min-w-10 rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all hover:bg-white/10"
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Ellipsis */}
          {page + 1 < totalPages && (
            <PaginationItem>
              <PaginationEllipsis className="text-slate-500" />
            </PaginationItem>
          )}

          {/* Last page */}
          {page + 1 < totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`?page=${totalPages}`}
                className="h-10 min-w-10 rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all hover:bg-white/10"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={`?page=${Math.min(page + 1, totalPages)}`}
              className={`h-10 rounded-xl border border-white/10 bg-white/5 px-4 text-white transition-all hover:bg-white/10 ${
                page === totalPages ? "pointer-events-none opacity-40" : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
