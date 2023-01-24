import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

interface PaginationProps {
  pages: number[];
  paginationState: [number, React.Dispatch<React.SetStateAction<number>>];
}

const Pagination = ({ pages, paginationState }: PaginationProps) => {
  const [currentPage, setCurrentPage] = paginationState;
  const prevPage = () => setCurrentPage((page) => --page);
  const nextPage = () => setCurrentPage((page) => ++page);
  const goToPage = (page: number) => setCurrentPage(page);

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center space-x-3">
        <li>
          <button
            aria-label="Previous Page"
            className="cursor-pointer hover:text-teal-400"
            disabled={currentPage <= 1}
            onClick={prevPage}
            type="button"
          >
            <ArrowLongLeftIcon className="h-5 w-5" />
          </button>
        </li>
        {pages.map((pageNumber) => {
          const isCurrentPage = pageNumber === currentPage;
          return (
            <li key={pageNumber}>
              <a
                aria-label={`page ${pageNumber}`}
                aria-current={isCurrentPage ? "page" : undefined}
                className={[
                  "border",
                  "border-stone-500",
                  isCurrentPage ? "bg-teal-400" : "bg-stone-700/50",
                  "p-1",
                  "px-3",
                  "leading-tight",
                  isCurrentPage && "text-black",
                  "hover:text-black",
                  isCurrentPage ? "hover:bg-teal-600" : "hover:bg-teal-400",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={`#${pageNumber}`}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
        <li>
          <button
            aria-label="Next Page"
            className="cursor-pointer hover:text-teal-400"
            disabled={currentPage >= pages[pages.length - 1]}
            onClick={nextPage}
            type="button"
          >
            <ArrowLongRightIcon className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
