import React from "react";
import Image from "next/image";
import { ITeam } from "../../utils/team";

interface Props {
  canalero: ITeam;
}

export const Profile: React.FC<Props> = ({ canalero }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full">
        <Image
          loading="lazy"
          width={210}
          height={210}
          className="object-cover rounded-full"
          alt={`Foto de ${canalero.name}`}
          src={canalero.image}
        />
      </div>
      <h1 className="font-bold text-lg">{canalero.name}</h1>
      <p className="text-sm lg:text-base">{canalero.role}</p>
    </div>
  );
};
