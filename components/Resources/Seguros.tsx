import React from "react";
import Image from "next/image";
import { SEGUROS } from "../../utils/seguros";

interface Props {
  className: string;
}

export const Seguros: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`grid grid-cols-1 gap-3 sm:grid-cols-[320px] place-content-center mb-4 ${className}`}
    >
      <h1 className="title">
        <b>Seguros</b>
      </h1>

      <div className="grid grid-cols-2 gap-2">
        {SEGUROS.map((seguro) => (
          <a href={seguro.link} key={seguro.name}>
            <div className="bg-blanco shadow-default p-5 grid place-content-center rounded-md">
              <Image
                loading="lazy"
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
