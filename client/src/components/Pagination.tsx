"use client";

import { getPageNumbers } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

function scrollToTop() {
  window.scroll({ top: 0, behavior: "instant" });
}
const ProductPagination = ({
  numOfItems,
  itemsPerPage,
}: {
  numOfItems: number;
  itemsPerPage: number;
}) => {
  const totalPages = Math.ceil(numOfItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useQueryState("page", {
    defaultValue: 1,
    parse: (value) => {
      if (typeof value !== "string" || isNaN(Number(value))) {
        throw new Error("Invalid page value");
      }
      try {
        const parsedValue = Number(value);
        if (parsedValue > 0 && parsedValue <= totalPages) {
          return parsedValue;
        } else {
          return 1;
        }
      } catch (error) {
        console.error(`Error parsing page:`, error);
        return 1;
      }
    },
    serialize: (value) => String(value),
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPages]);

  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => {
          currentPage - 1 > 0 && setCurrentPage(currentPage - 1);
          scrollToTop();
        }}
        disabled={currentPage - 1 == 0}
        className={`border-2 rounded-l-sm px-2 flex items-center gap-1 cursor-pointer ${currentPage - 1 == 0 && "opacity-50 pointer-events-none"}`}
      >
        <ChevronLeft size={20} /> Previous
      </button>

      {getPageNumbers(currentPage, totalPages).map((page) => (
        <button
          key={page}
          onClick={() => {
            setCurrentPage(page);
            scrollToTop();
          }}
          className={`px-3 py-1 border rounded ${currentPage === page ? "bg-primary text-white" : "bg-transparent"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => {
          currentPage + 1 <= totalPages && setCurrentPage(currentPage + 1);
          scrollToTop();
        }}
        disabled={currentPage + 1 > totalPages}
        className={`border-2 rounded-r-sm px-2 flex items-center gap-1 cursor-pointer ${currentPage + 1 > totalPages && "opacity-50 pointer-events-none"}`}
      >
        Next <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProductPagination;
