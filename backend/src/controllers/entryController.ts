import { Request, Response } from "express";
import {
  badRequest,
  internalServerError,
  notFound,
} from "../utils/mappedResponses";
import { Entry } from "../models/entryModel";
import { entryService } from "../services/entryService";

const insertEntry = (req: Request, res: Response) => {
  {
    const entry = req.body;

    if (!entry) {
      return badRequest(res, "Invalid entry.");
    }
    if (!entry.title) {
      return badRequest(res, "Invalid entry title.");
    }
  }

  const entry = req.body as Entry;
  entryService
    .insertEntry(entry)
    .then((id) => {
      res.status(200).json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

const readEntryById = (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);

  if (!entryId) {
    return badRequest(res, "Invalid entry ID.");
  }

  entryService
    .readEntryById(entryId)
    .then((entry) => {
      if (!entry) {
        return notFound(res, "Entry not found.");
      }
      res.status(200).json(entry);
    })
    .catch((err) => internalServerError(res, err));
};

const readEntriesFromBook = (req: Request, res: Response) => {
  const bookId = parseInt(req.params.id);

  if (!bookId) {
    return badRequest(res, "Invalid book ID.");
  }

  entryService
    .readEntriesFromBook(bookId)
    .then((user) => {
      if (!user) {
        return notFound(res, "Book not found.");
      }
      res.status(200).json(user);
    })
    .catch((err) => internalServerError(res, err));
};

const updateEntry = (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);
  const updates = req.body as Partial<Entry>;

  if (!entryId || !updates) {
    return badRequest(res, "Invalid entry ID or updates.");
  }

  entryService
    .readEntryById(entryId)
    .then((existingEntry) => {
      if (!existingEntry) {
        return notFound(res, "Entry not found.");
      }

      return entryService.updateEntry(entryId, updates);
    })
    .then(() => {
      res.status(200).json({ message: "Entry updated successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const deleteEntry = (req: Request, res: Response) => {
  const entryId = parseInt(req.params.id);

  if (!entryId) {
    return badRequest(res, "Invalid entry ID.");
  }

  entryService
    .deleteEntry(entryId)
    .then(() => {
      res.status(200).json({ message: "Entry deleted successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

export const entryController = {
  insertEntry,
  readEntryById,
  readEntriesFromBook,
  updateEntry,
  deleteEntry,
};
