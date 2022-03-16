import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { LC } from "../../components/LC";
import { UPGoals } from "../../utils/goals";
import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

const UP: NextPage = () => {
  return (
    <>
      <Head>
        <title>oGX Panamá</title>
        <meta name="Canaleros Panamá" content="AIESEC oGX Web Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mb-5 p-5 text-navy">
        <Link href="/metas">
          <a>
            <ArrowSmLeftIcon className="w-8 h-8 absolute top-[15px] left-[20px] font-light" />
          </a>
        </Link>
        <h1 className="text-lg text-center mb-3">
          Metas de <b>Santiago</b>
        </h1>

        <div className="grid place-content-center">
          <Logo LC={{ href: "", name: "Santiago", size: 130 }} />
        </div>
        <LC comite={UPGoals} />
      </main>
      <Footer />
    </>
  );
};

export default UP;
