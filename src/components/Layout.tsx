import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

type props = {
  children: JSX.Element;
};

export default function Layout({ children }: props) {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen items-center justify-center bg-slate-800">
        <Navbar />
        {children}
      </main>
    </>
  );
}
