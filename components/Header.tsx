import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { fa0 } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header className="radial w-full px-2 pt-5 pb-5 text-blanco text-center">
      <h1 className="py-5 text-lg">
        Enviamos el <b>mejor talento</b> de Panamá pal <b>MUNDO</b>
      </h1>
      <div className="flex justify-between mt-5 text-sm">
        <div className="w-1/3 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faFire} className="h-10 w-10" />
          <p className="py-1">Pisa Firme</p>
        </div>
        <div className="w-1/3 relative flex flex-col items-center justify-center -top-4">
          <FontAwesomeIcon icon={faDumbbell} className="h-10 w-10" />

          <p className="py-1">Vamo a Frentia</p>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={fa0} className="h-10 w-10" />
          <p className="py-1">0 Excusas</p>
        </div>
      </div>
    </header>
  );
};
