import { IBook } from "src/types/book/IBook";

export function makeCreateBookForm(): IBook {
  return {
    id: 0,
    title: "",
    author: "",
    readAt: "",
    finished: false,
    favorite: false,
    rating: 0,
    color: "",
    icon: "",
  };
}

export function areFormsEqual(form1, form2) {
  const keys1 = Object.keys(form1);
  const keys2 = Object.keys(form2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (form1[key] !== form2[key]) {
      return false;
    }
  }

  return true;
}

export function returnAlteredData(backupData: any, data: any) {
  if (backupData === data) return;
  return data;
}
