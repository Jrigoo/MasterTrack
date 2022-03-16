import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { Row } from "./Row";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { getLocal, getLocalPitch, setLocalPitch } from "../utils/local";
import { useData } from "../hooks/useContext";

export const Tool = () => {
  const [pitch, setPitch] = React.useState("");
  const { contacts, setContacts, addLocal } = useData();

  React.useEffect(() => {
    const data = getLocal();
    if (data) setContacts(data);
  }, [setContacts]);

  React.useEffect(() => {
    setPitch(getLocalPitch() || "");
  }, []);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPitch(e.target.value);
    setLocalPitch(e.target.value);
  }

  return (
    <main className="mb-5 p-5 text-navy">
      <h1 className="text-lg text-center">
        Whatsapp <b>Contact Tool</b>
      </h1>

      {/* Pitch */}
      <div className="w-full my-5 rounded-lg shadow-default">
        <div className="bg-naranja rounded-t-lg">
          <h1 className="py-2 text-center text-blanco">
            Contact <b>Message</b>
          </h1>
        </div>

        <textarea
          cols={30}
          rows={10}
          value={pitch}
          onChange={onChange}
          className="w-full h-40 p-3 outline-none resize-none text-xs"
          placeholder="Holaaa! Mi nombre es Juan soy de AIESEC Panamá organización que busca desarrollar el liderazgo en Jóvenes a través de experiencias de profesionales internacionales. Te escribo porque pude notar que te registraste en nuestra plataforma. ¿Te gustaría recibir más información sobre nuestro programa de pasantías?"
        />
      </div>

      {/* Lista de contactos */}
      <div className="w-full mb-5">
        <header className="flex justify-between items-center">
          <h1 className="w-[75%]">
            Lista de <b>Contactos</b>
          </h1>
          <div className="bg-white rounded-lg shadow-default flex justify-between items-center px-2 py-1">
            <input
              type="text"
              placeholder="Buscar..."
              value={""}
              className="w-full bg-white rounded-md text-xs outline-none"
            />
            <SearchIcon className="h-5 w-5" />
          </div>
        </header>

        {/* Tabla de contactos */}
        <div className="overflow-y-auto h-[230px] relative rounded-lg text-xs my-5">
          <table className="w-full relative bg-white">
            {/* Head */}
            <thead className="bg-naranja shadow-default sticky top-0 left-0 text-blanco">
              <tr>
                <th className="p-2 font-medium tracking-wide">Nombre</th>
                <th className="p-2 font-medium tracking-wide">Numero</th>
                <th className="p-2 font-medium tracking-wide">Link</th>
                <th className="p-2 font-medium tracking-wide">
                  <PlusCircleIcon
                    className="h-6 w-6 text-blanco active:scale-110 transition-all duration-300"
                    onClick={() => {
                      addLocal();
                    }}
                  />
                </th>
              </tr>
            </thead>
            {/* Content */}
            <tbody>
              {contacts.map((contact, idx) => (
                <Row contact={contact} idx={idx} key={idx} pitch={pitch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
