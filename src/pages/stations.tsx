import { inferRouterOutputs } from "@trpc/server";
import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Paginations";
import { filterStations } from "../helpers/sortArray";
import { AppRouter } from "../server/api/root";
import { api } from "../utils/api";

type RouterOutput = inferRouterOutputs<AppRouter>;

type StationsGetOutput = RouterOutput["stations"]["getStations"];

const Stations: NextPage = () => {
  const [stations, setStations] = useState<StationsGetOutput>([0, []]);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState<number>(0);

  const { data } = api.stations.getStations.useQuery({ skip: pagination });

  useEffect(() => {
    if (data) setStations(data);
  }, [data]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    if (!data) return;

    if (e.target.value === "") {
      setStations(data);
    } else {
      setStations([pagination, filterStations(data[1], e.target.value)]);
    }
  }

  return (
    <>
      <h1 className="mb-4 pt-4 text-center text-4xl font-extrabold leading-none text-white">
        Stations
      </h1>
      <div className="flex flex-col">
        <label htmlFor="search" className="text-center text-lg text-white">
          Search stations
        </label>
        <input
          id="search"
          type="text"
          className="w-2xl mx-auto rounded px-2 py-1"
          value={search}
          placeholder="Name, address, city"
          onChange={handleSearchChange}
        ></input>
      </div>
      <div className="relative mx-auto my-4 max-w-2xl overflow-x-auto rounded shadow-md">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-gray-400 uppercase text-gray-900">
            <tr>
              <th scope="col" className="p-4">
                Name
              </th>
              <th scope="col" className="p-4">
                address
              </th>
              <th scope="col" className="p-4">
                city
              </th>
            </tr>
          </thead>
          <tbody>
            {stations[1].slice(0, 10).map((s) => (
              <tr
                className="border-b bg-gray-300 text-gray-900 hover:bg-gray-600"
                key={s.id}
              >
                <td className="p-4">{s.name}</td>
                <td className="p-4">{s.address}</td>
                <td className="p-4">{s.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        maxItems={stations[0]}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
};

export default Stations;
