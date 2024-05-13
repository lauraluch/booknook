import { Request, Response } from "express";
import { tagModel } from "../../models/Tag";
import { Tag } from "../../models/Tag/types";
import { badRequest, internalServerError } from "../../utils/errors";

// TODO: tags deviam ser cadastradas para cada usuário.
const insertTag = (req: Request, res: Response) => {
  {
    const tag = req.body;

    if (!tag) {
      return badRequest(res, "Invalid tag.");
    }
    if (!tag.title) {
      return badRequest(res, "Invalid tag name.");
    }
    if (!tag.user_id) {
      return badRequest(res, "Invalid user ID.");
    }
  }

  const tag = req.body as Tag;
  tagModel
    .insertTag(tag)
    .then((id) => {
      res.json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

export const tagController = {
  insertTag,
};
