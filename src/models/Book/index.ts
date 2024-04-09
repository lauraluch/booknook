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

export const updateBook = async (bookId: number, updates: Partial<Book>) => {
  const { readAt, finished, favorite } = updates;

  const updateParams: any[] = [];
  let updateQuery = "UPDATE book SET";

  if (readAt !== undefined) {
    updateQuery += " readAt = ?,";
    updateParams.push(readAt);
  }

  if (finished !== undefined) {
    updateQuery += " finished = ?,";
    updateParams.push(finished);
  }

  if (favorite !== undefined) {
    updateQuery += " favorite = ?,";
    updateParams.push(favorite);
  }

  updateQuery = updateQuery.slice(0, -1);

  updateQuery += " WHERE id = ?";
  updateParams.push(bookId);

  await dbQuery(updateQuery, updateParams);
};

export const deleteBook = async (bookId: number) => {
  const deleteParams: any[] = [bookId];
  const deleteQuery = "DELETE FROM book WHERE id = ?";

  await dbQuery(deleteQuery, deleteParams);
};

export const bookModel = {
  insertBook,
  updateBook,
  deleteBook,
};
