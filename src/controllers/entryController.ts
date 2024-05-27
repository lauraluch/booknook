import { Request, Response } from "express";
import { badRequest, internalServerError } from "../utils/mappedResponses";
import { Entry } from "../models/entryModel";
import { entryService } from "../services/entryService";

const insertEntry = (req: Request, res: Response) => {
  {
    const entry = req.body;

    if (!entry) {
      return badRequest(res, "Invalid entry.");
    }
    if (!entry.title) {
      return badRequest(res, "Invalid entry name.");
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

export const entryController = {
  insertEntry,
};
