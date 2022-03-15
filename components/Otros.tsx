import React from "react";
import { OTROS } from "../utils/otros";

export const Otros = () => {
  return (
    <section className="mb-5">
      <h1 className="text-lg text-center mb-5">
        Otros <b>Links</b>
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {OTROS.map((otro, idx) => (
          <a href={otro.link} key={idx}>
            <div className="p-3 h-full grid place-content-center bg-blanco shadow-default">
              <h1 className="text-sm">
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
