import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Resources } from "../components/Resources";

const Recursos: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <Resources />
      <Footer />
    </>
  );
};

export default Recursos;
