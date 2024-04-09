import { Request, Response } from "express";
import { badRequest, internalServerError, notFound } from "../../utils/errors";
import { bookModel } from "../../models/Book";
import { Book } from "../../models/Book/types";

const insertBook = (req: Request, res: Response) => {
  {
    const book = req.body;
    console.log(book);

    if (!book) {
      return badRequest(res, "Invalid book.");
    }
    if (!book.title) {
      return badRequest(res, "Invalid book name.");
    }
    // if (!book.readAt) {
    //     return badRequest(res, "Invalid book name.");
    // }
  }

  const book = req.body as Book;
  bookModel
    .insertBook(book)
    .then((id) => {
      res.json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

const updateBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);
  const updates = req.body as Partial<Book>;

  if (!bookId || !updates) {
    return badRequest(res, "Invalid book ID or updates.");
  }

  bookModel
    .updateBook(bookId, updates)
    .then(() => {
      res.json({ message: "Book updated successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const deleteBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }

  bookModel
    .deleteBook(bookId)
    .then(() => {
      res.json({ message: "Book deleted successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const readBookById = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }

  bookModel
    .readBookById(bookId)
    .then((book) => {
      if (!book) {
        return notFound(res, "Book not found.");
      }
      res.json(book);
    })
    .catch((err) => internalServerError(res, err));
};

export const bookController = {
  insertBook,
  updateBook,
  deleteBook,
  readBookById,
};
