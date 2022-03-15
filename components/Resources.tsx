import React from "react";
import { Booklets } from "./Booklets";
import { SearchTools } from "./SearchTools";
import { Otros } from "./Otros";
import { Seguros } from "./Seguros";

export const Resources = () => {
  return (
    <main className="text-navy p-5">
      <Booklets />
      <SearchTools />
      <Seguros />
      <Otros />
    </main>
  );
};
