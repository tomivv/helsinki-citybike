import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  function handleVisibilityChange() {
    setVisible(!visible);
  }

  return (
    <nav className="px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Helsinki citybike
        </Link>
        <button
          onClick={handleVisibilityChange}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            visible ? "visible" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-400 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-slate-800 md:text-sm md:font-medium">
            <li>
              <Link
                href="/journeys"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0"
              >
                Journeys
              </Link>
            </li>
            <li>
              <Link
                href="/journeys/add"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:text-gray-400 md:hover:bg-transparent md:hover:text-white"
              >
                Add Journeys
              </Link>
            </li>
            <li>
              <Link
                href="/stations"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:text-gray-400 md:hover:bg-transparent md:hover:text-white"
              >
                Stations
              </Link>
            </li>
            <li>
              <Link
                href="/stations/add"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:text-gray-400 md:hover:bg-transparent md:hover:text-white"
              >
                Add Stations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
