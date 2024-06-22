import { IEntry } from "src/types/entry/IEntry";

export function makeCreateEntryForm(): IEntry {
  return {
    id: 0,
    bookId: 0,
    title: "",
    description: "",
    lastModifiedAt: "",
  };
}
