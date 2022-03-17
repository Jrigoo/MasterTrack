import React from "react";
import Image from "next/image";
import { Logo } from "./Logo";

export const Goals = () => {
  return (
    <main className="text-navy p-5">
      <h1 className="title">
        Metas por <b>LC</b>
      </h1>

      {/* LCs */}
      <section className="grid place-items-center place-content-center grid-cols-2 grid-rows-2 md:grid-cols-[200px,200px,200px] md:grid-rows-1 pb-5 md:pb-20">
        <div className="w-full col-span-2 flex justify-center md:col-span-1 ">
          <Logo
            LC={{ href: "/metas/santiago", name: "Santiago" }}
            className="grid-cols-[90px] sm:grid-cols-[130px] md:grid-cols-[150px]"
          />
        </div>
        <Logo
          LC={{ href: "/metas/up", name: "UP" }}
          className="grid-cols-[90px] sm:grid-cols-[130px] md:grid-cols-[150px]"
        />
        <Logo
          LC={{ href: "/metas/utp", name: "UTP" }}
          className="grid-cols-[90px] sm:grid-cols-[130px] md:grid-cols-[150px]"
        />
      </section>

      <a
        href="https://docs.google.com/spreadsheets/d/141IinrQiAcIBPWaY9eH3Va0a1zjbqeM5IQI40V-yWnw/edit#gid=1334048523"
        className="grid place-content-center grid-rows-[fit-content fit-content] grid-cols-[250px] sm:grid-cols-[300px] md:grid-cols-[450px] pb-10 md:pb-12"
      >
        <h1 className="title">
          OP <b>Dashboard</b>
        </h1>
        <div className="w-full h-full relative hover:scale-110 transition-all duration-200">
          <Image
            loading="lazy"
            layout="responsive"
            alt="OP Dashboard"
            width={828}
            height={385}
            src="/Images/LCs/OP Dashboard.png"
            className="object-contain rounded-lg"
          />
        </div>
      </a>
    </main>
  );
};
