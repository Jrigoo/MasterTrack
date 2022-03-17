import React from "react";
import { OTROS } from "../../utils/otros";

interface Props {
  className: string;
}

export const Otros: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={`grid grid-cols-[300px] gap-3 sm:grid-cols-[420px] md:grid-cols-[600px] place-content-center place-items-center mb-4 ${className}`}
    >
      <h1 className="title">
        Otros <b>Links</b>
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {OTROS.map((otro, idx) => (
          <a href={otro.link} key={idx}>
            <div className="p-3 h-full grid place-content-center bg-white shadow-default hover:scale-110 transition-all duration-200">
              <h1 className="text-sm text-center">
                {otro.order ? (
                  <>
                    <b>{otro.bold}</b> {otro.light}
                  </>
                ) : (
                  <>
                    {otro.light} <b>{otro.bold}</b>
                  </>
                )}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
