import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Tool } from "../components/Tool";

import { Provider } from "../context";

const Whatsapp: NextPage = () => {
  return (
    <Provider>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <Tool />
      <Footer />
    </Provider>
  );
};

export default Whatsapp;
