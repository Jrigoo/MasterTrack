export const getLocal = () => {
  const data = localStorage.getItem("Contacts");
  if (data) return JSON.parse(data);
  return data;
};

export const deleteLocal = (idx: number) => {
  let data = getLocal();
  if (data) {
    let nuevo = [...data];
    nuevo.splice(idx, 1);
    localStorage.setItem("Contacts", JSON.stringify(nuevo));
  }
};

export const addLocalItem = () => {
  const data = getLocal();
  if (data) {
    localStorage.setItem(
      "Contacts",
      JSON.stringify([...data, { name: "", number: "" }])
    );
  } else {
    localStorage.setItem(
      "Contacts",
      JSON.stringify([{ name: "", number: "" }])
    );
  }
};

export const modifyLocal = (
  idx: number,
  nueva: { name: string; number: string }
) => {
  let data = getLocal();
  if (data) {
    data[idx] = { ...nueva };
    localStorage.setItem("Contacts", JSON.stringify(data));
  }
};

export const getLocalPitch = () => localStorage.getItem("Pitch");
export const setLocalPitch = (pitch: string) =>
  localStorage.setItem("Pitch", pitch);
