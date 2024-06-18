import { Book } from "../models/bookModel";
import { Tag } from "../models/tagModel";
import { dbQuery } from "../repository/dbConnection";

export const insertBook = async (book: Book) => {
  await dbQuery(
    "INSERT INTO book (title, author, readAt, finished, favorite, user_id, rating, color) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
    [
      book.title,
      book.author,
      book.readAt,
      book.finished,
      book.favorite,
      book.user_id,
      book.rating,
      book.color,
    ]
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
  const { title, author, readAt, finished, favorite, rating, color } = updates;

  const updateParams: any[] = [];
  let updateQuery = "UPDATE book SET";

  if (title !== undefined) {
    updateQuery += " title = ?,";
    updateParams.push(title);
  }

  if (author !== undefined) {
    updateQuery += " author = ?,";
    updateParams.push(author);
  }

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

  if (rating !== undefined) {
    updateQuery += " rating = ?,";
    updateParams.push(rating);
  }

  if (color !== undefined) {
    updateQuery += " color = ?,";
    updateParams.push(color);
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

// Tags

const insertTagInBook = async (bookId: number, tagId: number) => {
  await dbQuery("INSERT INTO tagsAndBook (book_id, tag_id) VALUES(?, ?)", [
    bookId,
    tagId,
  ]);

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'tagsAndBook'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

const readTagsInBook = async (bookId: number): Promise<Tag[]> => {
  const query = "SELECT * FROM tagsAndBook WHERE book_id = ?";
  const result = await dbQuery(query, [bookId]);

  return result as Tag[];
};

const deleteTagInBook = async (bookId: number, tagId: number) => {
  const deleteParams: any[] = [bookId, tagId];
  const deleteQuery =
    "DELETE FROM tagsAndBook WHERE book_id = ? AND tag_id = ?";

  await dbQuery(deleteQuery, deleteParams);
};

export const bookService = {
  insertBook,
  updateBook,
  deleteBook,
  readBookById,
  readBookByName,
  readAllBooksFromUser,
  insertTagInBook,
  readTagsInBook,
  deleteTagInBook,
};
