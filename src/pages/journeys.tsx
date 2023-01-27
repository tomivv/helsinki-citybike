import { inferRouterOutputs } from "@trpc/server";
import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Paginations";

import type { AppRouter } from "../server/api/root";

import { api } from "../utils/api";

type RouterOutput = inferRouterOutputs<AppRouter>;

type JourneyGetOutput = RouterOutput["journeys"]["getJourneys"];

const Journeys: NextPage = () => {
  const [journeys, setJourneys] = useState<JourneyGetOutput>();
  const [pagination, setPagination] = useState<number>(0);

  const { data } = api.journeys.getJourneys.useQuery({ skip: pagination });

  useEffect(() => {
    if (data) setJourneys(data);
  }, [data]);

  if (!journeys) {
    return (
      <>
        <h1 className="mb-4 pt-4 text-center text-4xl font-extrabold leading-none text-white">
          Journeys
        </h1>
        <h2>loading</h2>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-4 pt-4 text-center text-4xl font-extrabold leading-none text-white">
        Journeys
      </h1>
      <div className="relative mx-auto my-4 max-w-2xl overflow-x-auto rounded shadow-md">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-gray-400 uppercase text-gray-900">
            <tr>
              <th scope="col" className="p-4">
                Departure station
              </th>
              <th scope="col" className="p-4">
                Return station
              </th>
              <th scope="col" className="p-4">
                Distance
              </th>
              <th scope="col" className="p-4">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {journeys[1].map((j) => (
              <tr
                className="border-b bg-gray-300 text-gray-900 hover:bg-gray-600"
                key={j.id}
              >
                <td className="p-4">{j.departure_station.name}</td>
                <td className="p-4">{j.return_station.name}</td>
                <td className="p-4">{(j.distance / 1000).toPrecision(3)} km</td>
                <td className="p-4">
                  {(j.duration / 60).toPrecision(2)} minutes
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        maxItems={journeys[0]}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
};

export default Journeys;
