import React from "react";
import { TEAM } from "../utils/team";
import { Profile } from "../components/Profile";
export const Network = () => {
  return (
    <main className="text-navy p-5 mb-3">
      <h1 className="text-xl text-center mb-5">
        Conoce a la <b>red</b>
      </h1>

      <section className="flex flex-col space-y-5">
        {TEAM.map((canalero, idx) => (
          <Profile key={idx} canalero={canalero} />
        ))}
      </section>
    </main>
  );
};
