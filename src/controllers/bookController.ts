import { Request, Response } from "express";
import {
  badRequest,
  internalServerError,
  notFound,
} from "../utils/mappedResponses";
import { Book } from "../models/bookModel";
import { bookService } from "../services/tags/bookService";

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
  }

  const book = req.body as Book;
  bookService
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

  bookService
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

  bookService
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

  bookService
    .readBookById(bookId)
    .then((book) => {
      if (!book) {
        return notFound(res, "Book not found.");
      }
      res.json(book);
    })
    .catch((err) => internalServerError(res, err));
};

const readBookByName = (req: Request, res: Response) => {
  const bookName = req.params.name;

  if (!bookName) {
    return badRequest(res, "Invalid book name.");
  }

  bookService
    .readBookByName(bookName)
    .then((book) => {
      if (!book) {
        return notFound(res, "Book not found.");
      }
      res.json(book);
    })
    .catch((err) => internalServerError(res, err));
};

const readAllBooksFromUser = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return badRequest(res, "Invalid user ID.");
  }

  bookService
    .readAllBooksFromUser(userId)
    .then((user) => {
      if (!user) {
        return notFound(res, "User not found.");
      }
      res.json(user);
    })
    .catch((err) => internalServerError(res, err));
};

const insertTagInBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.bookId);
  const tagId = parseInt(req.params.tagId);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }
  if (!tagId) {
    return badRequest(res, "Invalid tag ID.");
  }

  bookService
    .insertTagInBook(bookId, tagId)
    .then((id) => {
      res.json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

const readTagsInBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }

  bookService
    .readTagsInBook(bookId)
    .then((tags) => {
      if (!tags) {
        return notFound(res, "Tags not found.");
      }
      res.json(tags);
    })
    .catch((err) => internalServerError(res, err));
};

const deleteTagInBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.bookId);
  const tagId = parseInt(req.params.tagId);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }
  if (!tagId) {
    return badRequest(res, "Invalid tag ID.");
  }

  bookService
    .deleteTagInBook(bookId, tagId)
    .then(() => {
      res.json({ message: "Tag deleted from book successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

export const bookController = {
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
