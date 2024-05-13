import { Request, Response } from "express";
import { tagModel } from "../../models/Tag";
import { Tag } from "../../models/Tag/types";
import { badRequest, internalServerError } from "../../utils/errors";

const insertTag = (req: Request, res: Response) => {
  {
    const tag = req.body;
    console.log(tag);

    if (!tag) {
      return badRequest(res, "Invalid tag.");
    }
    if (!tag.title) {
      return badRequest(res, "Invalid tag name.");
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
