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
  };
}
