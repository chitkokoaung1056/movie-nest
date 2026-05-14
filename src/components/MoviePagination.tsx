"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
};

export function MoviePagination({ totalPages }: Props) {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);
  const searchQuery = searchParams.get("searchQuery");

  const getPageNumbers = () => {
    const delta = 2;
    const range: number[] = [];
    const rangeWithDots: (string | number)[] = [];
    let last: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (last !== undefined) {
        if (i - last === 2) rangeWithDots.push(last + 1);
        else if (i - last !== 1) rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      last = i;
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  const buildUrl = (page: number) => {
    const params = new URLSearchParams();

    params.set("page", String(page));

    if (searchQuery) {
      params.set("searchQuery", searchQuery);
    }

    return `?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center px-4 pb-20">
      <Pagination>
        <PaginationContent className="flex-wrap gap-2">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={buildUrl(Math.max(currentPage - 1, 1))}
              className={`h-10 rounded-xl border border-slate-700 bg-slate-800 px-4 text-slate-200 hover:bg-slate-700 ${
                currentPage === 1 ? "pointer-events-none opacity-40" : ""
              }`}
            />
          </PaginationItem>

          {/* Pages */}
          {pageNumbers.map((item, i) => (
            <PaginationItem key={i}>
              {item === "..." ? (
                <PaginationEllipsis className="text-slate-500" />
              ) : (
                <PaginationLink
                  href={buildUrl(item as number)}
                  isActive={item === currentPage}
                  className={`h-10 min-w-10 rounded-xl px-4 ${
                    item === currentPage
                      ? "bg-white text-black"
                      : "border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {item}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={buildUrl(Math.min(currentPage + 1, totalPages))}
              className={`h-10 rounded-xl border border-slate-700 bg-slate-800 px-4 text-slate-200 hover:bg-slate-700 ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-40"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
