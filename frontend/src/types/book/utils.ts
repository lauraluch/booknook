import { HttpGetBooksBook } from "@services/api/book/getBooks/types";
import { IBook } from "./IBook";

export function mapBookFromBackend(book: HttpGetBooksBook): IBook {
  return {
    id: book.id,
    title: book.title,
    author: book.author,
    readAt: book.readAt,
    finished: book.finished === 1,
    favorite: book.favorite === 1,
    rating: book.rating,
    color: book.color,
  };
}
