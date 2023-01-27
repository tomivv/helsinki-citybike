import React, { Dispatch, SetStateAction, useState } from "react";

type props = {
  maxItems: number;
  pagination: number;
  setPagination: Dispatch<SetStateAction<number>>;
};

export default function Pagination({
  maxItems,
  pagination,
  setPagination,
}: props) {
  function handlePaginationPrev() {
    if (pagination !== 0) setPagination(pagination - 1);
  }

  function handlePaginationNext() {
    if (!maxItems) return;
    if (pagination * 10 < maxItems) setPagination(pagination + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-400">
        Showing{" "}
        <span className="font-semibold text-white">{pagination * 10 + 1}</span>{" "}
        to{" "}
        <span className="font-semibold text-white">{pagination * 10 + 10}</span>{" "}
        of <span className="font-semibold text-white">{maxItems}</span> Entries
      </span>
      <div className="xs:mt-0 mt-2 inline-flex">
        <button
          onClick={handlePaginationPrev}
          className="inline-flex items-center rounded-l border-gray-700 bg-gray-500 px-4 py-2  text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Prev
        </button>
        <button
          onClick={handlePaginationNext}
          className="inline-flex items-center rounded-r border-0 border-l border-gray-700 bg-gray-500 px-4 py-2  text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
        >
          Next
          <svg
            aria-hidden="true"
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
