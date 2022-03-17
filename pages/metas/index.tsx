import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/General/Navbar";
import { Footer } from "../../components/General/Footer";
import { Goals } from "../../components/Goals/Goals";

const Metas: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <Goals />
      <Footer />
    </>
  );
};

export default Metas;
