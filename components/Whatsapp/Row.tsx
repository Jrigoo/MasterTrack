import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { modifyLocal } from "../../utils/local";
import { useData } from "../../hooks/useContext";

interface Props {
  contact: {
    name: string;
    number: string;
  };
  idx: number;
  pitch: string;
}

export const Row: React.FC<Props> = ({ contact, idx, pitch }) => {
  const { deleteContacts, modifyContacts } = useData();
  const fullNumber = contact.number.replace("-", "").replace("+", "").trim();

  function changeNumber(e: React.ChangeEvent<HTMLTextAreaElement>) {
    modifyContacts(idx, {
      name: contact.name,
      number: e.target.value,
    });
  }
  function changeName(e: React.ChangeEvent<HTMLTextAreaElement>) {
    modifyContacts(idx, {
      name: e.target.value,
      number: contact.number,
    });
  }

  return (
    <tr
      className={`${
        idx % 2 ? "bg-orange-100" : "bg-white"
      } cursor-pointer text-xs`}
    >
      <td className="px-1 py-2 text-left">
        <textarea
          cols={30}
          rows={10}
          value={contact.name}
          onChange={changeName}
          placeholder="Añadir nombre..."
          className="cRow w-full max-h-8 p-1 outline-none resize-none text-xs rounded-md bg-transparent"
        />
      </td>
      <td className="px-1 py-2 text-left">
        <textarea
          cols={30}
          rows={10}
          value={contact.number}
          onChange={changeNumber}
          placeholder="Añadir número..."
          className="cRow w-full max-h-8 p-1 outline-none resize-none text-xs rounded-md bg-transparent"
        />
      </td>
      <td className="px-1 py-2 flex items-center">
        {fullNumber && (
          <a
            href={`https://api.whatsapp.com/send/?phone=${fullNumber}&text=${pitch}&app_absent=0`}
            className="px-2 py-2 rounded underline"
          >
            chat
          </a>
        )}
      </td>

      <td className="px-1 py-2">
        <XIcon
          className="h-4 w-4 mx-1 active:scale-110"
          onClick={() => deleteContacts(idx)}
        />
      </td>
    </tr>
  );
};
