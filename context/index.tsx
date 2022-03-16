import React, { SetStateAction, Dispatch } from "react";
import {
  addLocalItem,
  deleteLocal,
  getLocal,
  modifyLocal,
} from "../utils/local";

interface IContext {
  contacts: Array<{ name: string; number: string }> | [];
  setContacts: Dispatch<
    SetStateAction<[] | { name: string; number: string }[]>
  >;
  addLocal: () => void;
  deleteContacts: (idx: number) => void;
  modifyContacts: (
    idx: number,
    nueva: { name: string; number: string }
  ) => void;
}

const defContext = {
  contacts: [],
  setContacts: () => {},
  addLocal: () => {},
  deleteContacts: () => {},
  modifyContacts: () => {},
};
export const Context = React.createContext<IContext>(defContext);
export const Provider: React.FC = ({ children }) => {
  const [contacts, setContacts] = React.useState<
    Array<{ name: string; number: string }> | []
  >([]);

  function deleteContacts(idx: number) {
    let nuevo = [...contacts];
    nuevo.splice(idx, 1);
    setContacts(nuevo);
    deleteLocal(idx);
  }
  function addLocal() {
    setContacts([...contacts, { name: "", number: "" }]);
    addLocalItem();
  }

  function modifyContacts(
    idx: number,
    nueva: { name: string; number: string }
  ) {
    let data = [...contacts];
    data[idx] = { ...nueva };
    setContacts(data);
    modifyLocal(idx, nueva);
  }

  return (
    <Context.Provider
      value={{
        contacts,
        setContacts,
        deleteContacts,
        addLocal,
        modifyContacts,
      }}
    >
      {children}
    </Context.Provider>
  );
};
