import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Navbar } from "../../components/General/Navbar";
import { Footer } from "../../components/General/Footer";
import { Logo } from "../../components/Goals/Logo";
import { LC } from "../../components/Goals/LC";
import { SantiagoGoals } from "../../utils/goals";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

const Santiago: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/Canaleros.png" />
      </Head>
      <Navbar />
      <main className="mb-5 p-5 text-navy relative">
        <Link href="/metas">
          <a>
            <ArrowCircleLeftIcon className="h-6 absolute top-8 left-4 sm:left-6 md:h-8 lg:h-10 md:left-10 lg:left-12" />
          </a>
        </Link>
        <h1 className="title">
          Metas de <b>Santiago</b>
        </h1>

        <div className="grid place-content-center">
          <Logo
            LC={{ href: "", name: "Santiago" }}
            className="my-5 grid-cols-[130px] sm:grid-cols-[150px] md:grid-cols-[200px] md:my-8"
          />
        </div>
        <LC comite={SantiagoGoals} />
      </main>
      <Footer />
    </>
  );
};

export default Santiago;
