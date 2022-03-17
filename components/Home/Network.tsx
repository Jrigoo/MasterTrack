import React from "react";
import { TEAM } from "../../utils/team";
import { Profile } from "./Profile";
export const Network = () => {
  return (
    <main className="text-navy p-5 mb-3">
      <h1 className="text-xl text-center mb-5 sm:text-2xl md:my-10 md:text-3xl lg:my-12">
        Conoce a la <b>red</b>
      </h1>

      <section className="flex flex-col items-center space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4 lg:px-10">
        {TEAM.map((canalero, idx) => (
          <Profile key={idx} canalero={canalero} />
        ))}
      </section>
    </main>
  );
};
