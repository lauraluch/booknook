import { Book } from "../../models/bookModel";
import { dbQuery } from "../../repository/dbConnection";

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

export const readBookById = async (
  bookId: number
): Promise<Book | undefined> => {
  const query = "SELECT * FROM book WHERE id = ?";
  const result = await dbQuery(query, [bookId]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as Book;
  }

  return undefined;
};

export const readBookByName = async (
  bookName: string
): Promise<Book | undefined> => {
  const query = "SELECT * FROM book WHERE title = ?";
  const result = await dbQuery(query, [bookName]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as Book;
  }

  return undefined;
};

const readAllBooksFromUser = async (userId: number): Promise<Book[]> => {
  const query = "SELECT * FROM book WHERE user_id = ?";
  const result = await dbQuery(query, [userId]);

  return result as Book[];
};

export const bookService = {
  insertBook,
  updateBook,
  deleteBook,
  readBookById,
  readBookByName,
  readAllBooksFromUser,
};
