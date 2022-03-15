import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

export const Goals = () => {
  return (
    <main className="text-navy p-5">
      <h1 className="text-lg text-center mb-3">
        Metas por <b>LC</b>
      </h1>

      {/* LCs */}
      <section className="flex justify-around flex-wrap">
        <div className="w-full flex justify-center">
          <Logo LC={{ href: "/metas/santiago", name: "Santiago" }} />
        </div>
        <Logo LC={{ href: "/metas/up", name: "UP" }} />
        <Logo LC={{ href: "/metas/utp", name: "UTP" }} />
      </section>
      <a href="https://docs.google.com/spreadsheets/d/141IinrQiAcIBPWaY9eH3Va0a1zjbqeM5IQI40V-yWnw/edit#gid=1334048523">
        <h1 className="text-lg text-center my-3">
          OP <b>Dashboard</b>
        </h1>
        <div className="w-full grid place-content-center">
          <Image
            width={200}
            height={100}
            alt="OP Dashboard"
            src="/Images/LCs/OP Dashboard.png"
            className="object-contain rounded-lg"
          />
        </div>
      </a>
    </main>
  );
};
