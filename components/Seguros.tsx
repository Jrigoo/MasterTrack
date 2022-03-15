import React from "react";
import Image from "next/image";
import { SEGUROS } from "../utils/seguros";

export const Seguros = () => {
  return (
    <section className="mb-8">
      <h1 className="text-lg text-center mb-3">
        <b>Seguros</b>
      </h1>

      <div className="grid grid-cols-2 gap-2">
        {SEGUROS.map((seguro) => (
          <a href={seguro.link} key={seguro.name}>
            <div className="bg-blanco shadow-default p-5 grid place-content-center rounded-md">
              <Image
                src={seguro.image}
                alt={`${seguro.name} logo`}
                width={50}
                height={50}
                className="object-contain"
              />
              <p className="text-center text-sm py-2">{seguro.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
