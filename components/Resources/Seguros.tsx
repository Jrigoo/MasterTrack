import React from "react";
import Image from "next/image";
import { SEGUROS } from "../../utils/seguros";

interface Props {
  className: string;
}

export const Seguros: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`grid grid-cols-1 gap-3 sm:grid-cols-[320px] content-start justify-center mb-4 ${className}`}
    >
      <h1 className="title">
        <b>Seguros</b>
      </h1>

      <div className="grid grid-cols-2 gap-2">
        {SEGUROS.map((seguro) => (
          <a href={seguro.link} key={seguro.name}>
            <div className="bg-white shadow-default p-5 grid place-content-center rounded-md hover:scale-110 transition-all duration-200">
              <div className="w-16 h-w-16 relative sm:w-20 sm:h-20 md:w-24 md:h-24">
                <Image
                  loading="lazy"
                  layout="responsive"
                  src={seguro.image}
                  alt={`${seguro.name} logo`}
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-center text-xs py-3 sm:text-sm font-medium">
                {seguro.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
