import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Navbar } from "../components/General/Navbar";
import { Footer } from "../components/General/Footer";
import { Booklets } from "../components/Resources/Booklets";
import { SearchTools } from "../components/Resources/SearchTools";
import { Seguros } from "../components/Resources/Seguros";
import { Otros } from "../components/Resources/Otros";

const Recursos: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <main className="text-navy p-5 md:grid md:grid-cols-4 md:grid-rows-[repeat(4,fit-content)]">
        <Booklets className="col-start-1 col-span-2" />
        <SearchTools className="row-start-3 row-span-2 col-span-4" />
        <Seguros className="col-start-3 col-span-2 self-start" />
        <Otros className="col-span-4 row-span-2" />
      </main>
      <Footer />
    </>
  );
};

export default Recursos;
