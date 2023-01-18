import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

import { api } from "../utils/api";

const Home: NextPage = () => {
//   const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [search, setSearch] = useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen items-center justify-center bg-slate-800">
        <h1 className="text-white text-4xl pt-4 mb-4 font-extrabold leading-none text-center">Stations</h1>
        <div className="flex flex-col">
            <label className="text-white text-center text-lg">Search stations</label>
            <input type="text" className="rounded px-2 py-1 w-2xl mx-auto" value={search} placeholder="Name, address, city" onChange={handleSearchChange}></input>
        </div>
        <div className="relative overflow-x-auto shadow-md max-w-2xl mx-auto my-4 rounded">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="uppercase bg-gray-400 text-gray-900">
              <tr>
                <th scope="col" className="p-4">Name</th>
                <th scope="col" className="p-4">address</th>
                <th scope="col" className="p-4">city</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-300 border-b hover:bg-gray-600 text-gray-900">
                <td className="p-4">Kaivopuisto</td>
                <td className="p-4">Meritori 1</td>
                <td className="p-4"></td>
              </tr>
              <tr className="bg-gray-300 hover:bg-gray-600 text-gray-900">
                <td className="p-4">Sepänkatu</td>
                <td className="p-4">Tehtaankatu 25</td>
                <td className="p-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Home;
