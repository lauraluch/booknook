import { Request, Response } from "express";
import { badRequest, internalServerError } from "../../utils/errors";
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

export const bookController = {
  insertBook,
};
