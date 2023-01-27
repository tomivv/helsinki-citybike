import React, { Dispatch, SetStateAction, useState } from 'react';

type props = {
  maxItems: number,
  pagination: number,
  setPagination: Dispatch<SetStateAction<number>>
}

export default function Pagination({ maxItems, pagination, setPagination }: props) {
  function handlePaginationPrev() {
    if (pagination !== 0) setPagination(pagination - 1);
  }

  function handlePaginationNext() {
    if (!maxItems) return;
    if (pagination*10 < maxItems) setPagination(pagination + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-400">
          Showing <span className="font-semibold text-white">{pagination*10 + 1}</span> to <span className="font-semibold text-white">{pagination*10 + 10}</span> of <span className="font-semibold text-white">{maxItems}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button onClick={handlePaginationPrev} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-l  bg-gray-500 border-gray-700 text-white hover:bg-gray-700 hover:text-white" >
            <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            Prev
        </button>
        <button onClick={handlePaginationNext} className="inline-flex items-center px-4 py-2 text-sm font-medium border-0 border-l rounded-r  bg-gray-500 border-gray-700 text-white hover:bg-gray-700 hover:text-white">
            Next
            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  )
}