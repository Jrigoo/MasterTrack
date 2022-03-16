import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Network } from "../components/Network";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <Header />
      <Network />
      <Footer />
    </>
  );
};

export default Home;
