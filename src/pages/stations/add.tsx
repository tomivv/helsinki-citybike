import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const Home: NextPage = () => {
//   const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [file, setFile] = useState<File | undefined>(undefined);

  function handelInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    if(!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    if(e.target.files[0]) {
      console.table(e.target.files[0]);
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // raise error that file is not selected
    if(typeof file == undefined) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file as Blob);

    fetch(`http://localhost:8080/api/v1/station/bulk`, {
      method: "POST",
      body: formData
    });
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen items-center justify-center bg-slate-800">
        <h1 className="text-white text-4xl pt-4 mb-4 font-extrabold leading-none text-center">Add stations</h1>
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-white">Upload a csv-file</label>
                <input type="file" onChange={handelInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"></input>
              </div>
              <button type="submit" className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Upload</button>
            </form>
        </div>
      </main>
    </>
  );
};

export default Home;
