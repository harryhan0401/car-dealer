"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";

const ProductPagination = ({
  numOfItems,
  itemsPerPage,
}: {
  numOfItems: number;
  itemsPerPage: number;
}) => {
  const totalPages = Math.round(numOfItems / itemsPerPage);
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
          throw new Error("Page value out of range");
        }
      } catch (error) {
        console.error(`Error parsing page:`, error);
        return 1;
      }
    },
    serialize: (value) => String(value),
  });

  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => currentPage - 1 > 0 && setCurrentPage(currentPage - 1)}
        disabled={currentPage - 1 == 0}
        className={`border-2 rounded-l-sm px-2 flex items-center gap-1 cursor-pointer ${currentPage - 1 == 0 && "opacity-50 pointer-events-none"}`}
      >
        <ChevronLeft size={20} /> Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-2 border-2 cursor-pointer ${currentPage == index + 1 ? "bg-primary text-white" : "bg-transparent"}`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() =>
          currentPage + 1 <= totalPages && setCurrentPage(currentPage + 1)
        }
        disabled={currentPage + 1 > totalPages}
        className={`border-2 rounded-r-sm px-2 flex items-center gap-1 cursor-pointer ${currentPage + 1 > totalPages && "opacity-50 pointer-events-none"}`}
      >
        Next <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProductPagination;
