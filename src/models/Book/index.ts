import { dbQuery } from "../../services/db";
import { Book } from "./types";

export const insertBook = async (book: Book) => {
  await dbQuery(
    "INSERT INTO book (title, readAt, finished, favorite, user_id) VALUES(?, ?, ?, ?, ?)",
    [book.title, book.readAt, book.finished, book.favorite, book.user_id]
  );

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'book'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

export const bookModel = {
  insertBook,
};
