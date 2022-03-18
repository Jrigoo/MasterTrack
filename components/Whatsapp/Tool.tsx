import React from "react";

import { Row } from "./Row";

import { SearchIcon } from "@heroicons/react/solid";
import { PlusCircleIcon } from "@heroicons/react/outline";

import { getLocal, getLocalPitch, setLocalPitch } from "../../utils/local";
import { useData } from "../../hooks/useContext";

export const Tool = () => {
  const [pitch, setPitch] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState<
    Array<{ name: string; number: string }>
  >([]);

  const { contacts, setContacts, addLocal } = useData();

  React.useEffect(() => {
    const data = getLocal();
    if (data) {
      setContacts(data);
      setFiltered(data);
    }
  }, [setContacts]);

  React.useEffect(() => {
    setPitch(getLocalPitch() || "");
  }, []);

  React.useEffect(() => {
    setFiltered(contacts);
  }, [contacts]);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPitch(e.target.value);
    setLocalPitch(e.target.value);
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    const n = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(n);
  }

  return (
    <main className="mb-5 p-5 text-navy">
      <h1 className="text-lg text-center">
        Whatsapp <b>Contact Tool</b>
      </h1>

      {/* Pitch */}
      <div className="my-5 grid grid-cols-[240px] place-content-center sm:grid-cols-[350px] md:grid-cols-[400px] hover:scale-105 transition-all duration-500">
        <div className="bg-naranja rounded-t-lg shadow-default">
          <h1 className="py-2 text-center text-blanco">
            Contact <b>Message</b>
          </h1>
        </div>

        <textarea
          cols={30}
          rows={10}
          value={pitch}
          onChange={onChange}
          className="cRow w-full h-40 p-3 outline-none resize-none text-xs shadow-default rounded-b-lg"
          placeholder="Holaaa! Mi nombre es Juan soy de AIESEC Panamá organización que busca desarrollar el liderazgo en Jóvenes a través de experiencias de profesionales internacionales. Te escribo porque pude notar que te registraste en nuestra plataforma. ¿Te gustaría recibir más información sobre nuestro programa de pasantías?"
        />
      </div>

      {/* Lista de contactos */}
      <div className="mb-5 grid grid-cols-[240px] place-content-center sm:grid-cols-[350px] md:grid-cols-[400px]">
        <header className="flex justify-between items-center">
          <h1 className="w-[75%]">
            Lista de <b>Contactos</b>
          </h1>
          <div className="bg-white rounded-lg shadow-default flex justify-between items-center px-2 py-1 hover:scale-105 transition-all duration-500">
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              className="w-full bg-white rounded-md text-xs outline-none"
              onChange={onSearch}
            />
            <SearchIcon className="h-5 w-5" />
          </div>
        </header>

        {/* Tabla de contactos */}
        <div className="contactos overflow-y-auto max-h-[230px] min-h-[100px] relative rounded-lg text-xs my-5 hover:scale-105 transition-all duration-500">
          <table className="w-full relative bg-white">
            {/* Head */}
            <thead className="bg-naranja shadow-default sticky top-0 left-0 text-blanco">
              <tr>
                <th className="p-2 font-medium tracking-wide text-left">
                  Nombre
                </th>
                <th className="p-2 font-medium tracking-wide text-left">
                  Numero
                </th>
                <th className="p-2 font-medium tracking-wide text-center">
                  Link
                </th>
                <th className="p-2 font-medium tracking-wide">
                  <PlusCircleIcon
                    className="h-6 w-6 text-blanco hover:scale-110"
                    onClick={() => {
                      addLocal();
                    }}
                  />
                </th>
              </tr>
            </thead>

            {/* Content */}
            <tbody>
              {filtered.map((contact, idx) => (
                <Row contact={contact} idx={idx} key={idx} pitch={pitch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
