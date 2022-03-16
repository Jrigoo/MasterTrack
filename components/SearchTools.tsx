import React from "react";
import Image from "next/image";
import { GTCountries, GVCountries } from "../utils/countries";

export const SearchTools = () => {
  return (
    <section className="mb-8">
      <h1 className="text-lg text-center mb-5">
        oGX <b>Searchtools</b>
      </h1>

      {/* GTa/GTe Searchtools */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-full flex justify-center items-center space-x-3 py-2 bg-blanco shadow-default rounded-md">
          <h1 className="px-2 text-sm">
            <b>GTa & GTe</b>
          </h1>
          <Image
            loading="lazy"
            src="/Images/ELD/GTa-circle.png"
            alt={`GTa Circle`}
            width={30}
            height={30}
            className="object-contain"
          />
          <Image
            loading="lazy"
            src="/Images/ELD/GTe-circle.png"
            alt={`GTe Circle`}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-3">
          {GTCountries.map((country) => (
            <a key={country.name} href={country.link}>
              <div className="grid place-content-center m-3">
                <Image
                  loading="lazy"
                  src={country.image}
                  alt={`${country.name} Flag`}
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <p className="text-xs pt-1">{country.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* GV Searchtools */}
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-center items-center space-x-3 py-2 bg-blanco shadow-default rounded-md">
          <h1 className="px-2 text-sm">
            <b>GV</b>
          </h1>
          <Image
            loading="lazy"
            src="/Images/ELD/GV-circle.png"
            alt={`GV Circle`}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        <div className="flex flex-wrap pt-2 items-center justify-around">
          {GVCountries.map((country) => (
            <a key={country.name} href={country.link}>
              <div className="grid place-content-center m-3">
                <Image
                  loading="lazy"
                  src={country.image}
                  alt={`${country.name} Flag`}
                  width={25}
                  height={25}
                  className="object-contain"
                />
                <p className="text-xs pt-1">{country.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
