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
  const maxPages = Math.min(totalPages, 500);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(maxPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < maxPages - 2) pages.push("...");

    if (maxPages > 1) pages.push(maxPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const buildUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `?${params.toString()}`;
  };

  if (maxPages <= 1) return null;

  return (
    <div className="flex justify-center px-2 sm:px-4 pb-16 pt-10">
      <Pagination>
        <PaginationContent className="flex-wrap gap-1.5 sm:gap-2">

          {/* PREVIOUS */}
          <PaginationItem>
            <PaginationPrevious
              href={buildUrl(Math.max(currentPage - 1, 1))}
              className={`h-8 sm:h-10 px-2 sm:px-4 rounded-lg sm:rounded-xl border border-slate-700 bg-slate-800 text-xs sm:text-sm text-slate-200 transition-all hover:bg-slate-700 ${
                currentPage === 1 ? "pointer-events-none opacity-40" : ""
              }`}
            />
          </PaginationItem>

          {/* PAGES */}
          {pageNumbers.map((item, index) => (
            <PaginationItem key={index}>
              {item === "..." ? (
                <PaginationEllipsis className="text-slate-500 scale-75 sm:scale-100" />
              ) : (
                <PaginationLink
                  href={buildUrl(item as number)}
                  isActive={item === currentPage}
                  className={`h-8 sm:h-10 min-w-8 sm:min-w-10 px-2 sm:px-4 text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all ${
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

          {/* NEXT */}
          <PaginationItem>
            <PaginationNext
              href={buildUrl(Math.min(currentPage + 1, maxPages))}
              className={`h-8 sm:h-10 px-2 sm:px-4 rounded-lg sm:rounded-xl border border-slate-700 bg-slate-800 text-xs sm:text-sm text-slate-200 transition-all hover:bg-slate-700 ${
                currentPage === maxPages ? "pointer-events-none opacity-40" : ""
              }`}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  );
}