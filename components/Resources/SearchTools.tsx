import React from "react";
import Image from "next/image";
import { GTCountries, GVCountries } from "../../utils/countries";

interface Props {
  className: string;
}

export const SearchTools: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`grid grid-cols-[300px] gap-3 sm:grid-cols-[320px] place-content-center mb-4 ${className} md:grid-cols-[repeat(2,320px)]`}
    >
      <h1 className="title md:col-span-3">
        oGX <b>Searchtools</b>
      </h1>

      {/* GTa/GTe Searchtools */}
      <div>
        <div className="w-full flex justify-center items-center space-x-3 py-2 bg-white shadow-default rounded-md">
          <h1 className="subtitle">
            <b>GTa & GTe</b>
          </h1>
          <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 relative">
            <Image
              loading="lazy"
              src="/Images/ELD/GTa-circle.png"
              alt={`GV Circle`}
              width={30}
              height={30}
              layout="responsive"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 relative">
            <Image
              loading="lazy"
              src="/Images/ELD/GTe-circle.png"
              alt={`GV Circle`}
              width={30}
              height={30}
              layout="responsive"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          {GTCountries.map((country) => (
            <a key={country.name} href={country.link}>
              <div className="grid place-content-center place-items-center grid-cols-1 m-3 hover:scale-110 transition-all duration-500">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 relative">
                  <Image
                    loading="lazy"
                    src={country.image}
                    alt={`${country.name} Flag`}
                    width={25}
                    height={25}
                    layout="responsive"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-xs pt-1 sm:text-sm">{country.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* GV Searchtools */}
      <div>
        <div className="w-full flex justify-center items-center space-x-3 py-2 bg-white shadow-default rounded-md ">
          <h1 className="subtitle">
            <b>GV</b>
          </h1>
          <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 relative">
            <Image
              loading="lazy"
              src="/Images/ELD/GV-circle.png"
              alt={`GV Circle`}
              width={30}
              height={30}
              layout="responsive"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap pt-2 items-center justify-around">
          {GVCountries.map((country) => (
            <a key={country.name} href={country.link}>
              <div className="grid place-content-center place-items-center grid-cols-1 m-3 hover:scale-110 transition-all duration-500">
                <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 relative">
                  <Image
                    loading="lazy"
                    src={country.image}
                    alt={`${country.name} Flag`}
                    width={25}
                    height={25}
                    layout="responsive"
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-xs pt-1 sm:text-sm">{country.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
