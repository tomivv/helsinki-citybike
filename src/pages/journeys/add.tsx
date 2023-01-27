import { type NextPage } from "next";
import React, { useEffect, useState } from "react";
import Alert from "../../components/Alert";

const Home: NextPage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    // clear alert in 5 seconds
    if (alertVisible) {
      setTimeout(() => {
        setAlertVisible(false);
      }, 5 * 1000);
    }
  }, [alertVisible]);

  function handelInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (typeof file == "undefined") {
      setAlertMsg("Please select a file");
      setAlertVisible(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", file as Blob);

    if (!process.env.NEXT_PUBLIC_API_URL) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/journey/bulk`, {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((response) => {
        if (response.status === 500) {
          setAlertMsg("There was error saving data. Please try again later!");
          setAlertVisible(true);
        } else {
          setAlertMsg("Successfully saved data");
          setAlertVisible(true);
        }
      })
      .catch((err) => {
        setAlertMsg("There was error saving data. Please try again later!");
        setAlertVisible(true);
      });
  }

  return (
    <>
      <h1 className="mb-4 pt-4 text-center text-4xl font-extrabold leading-none text-white">
        Add journeys
      </h1>
      <div className="mx-auto max-w-xl">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label
              htmlFor="upload"
              className="mb-2 block text-sm font-medium text-white"
            >
              Upload a csv-file
            </label>
            <input
              id="upload"
              type="file"
              onChange={handelInputChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Upload
          </button>
        </form>
      </div>
      <Alert message={alertMsg} visible={alertVisible} />
    </>
  );
};

export default Home;
