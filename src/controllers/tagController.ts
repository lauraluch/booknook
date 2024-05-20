import { Request, Response } from "express";
import { Tag } from "../models/tagModel";
import {
  badRequest,
  forbidden,
  internalServerError,
  notFound,
} from "../utils/mappedResponses";
import { tagService } from "../services/tags/tagService";

// TODO: tags deviam ser cadastradas para cada usuário.
const createTag = (req: Request, res: Response) => {
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
  tagService
    .insertTag(tag)
    .then((id) => {
      res.json({
        id,
      });
    })
    .catch((err) => internalServerError(res, err));
};

const deleteTag = (req: Request, res: Response) => {
  const tagId = parseInt(req.params.id);

  if (!tagId) {
    return badRequest(res, "Invalid tag ID.");
  }

  tagService
    .deleteTag(tagId)
    .then(() => {
      res.json({ message: "Tag deleted successfully." });
    })
    .catch((err) => internalServerError(res, err));
};

const readTagById = (req: Request, res: Response) => {
  const tagId = parseInt(req.params.tagId);
  const userId = parseInt(req.params.id);

  if (!tagId) {
    return badRequest(res, "Invalid tag ID.");
  }

  tagService
    .readTagById(tagId)
    .then((tag) => {
      if (!tag) {
        return notFound(res, "Tag not found.");
      }

      if (tag.user_id !== userId) {
        return forbidden(res, "User ID does not match.");
      }

      res.json(tag);
    })
    .catch((err) => internalServerError(res, err));
};

const readAllTags = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return badRequest(res, "Invalid user ID.");
  }

  tagService
    .readAllTags(userId)
    .then((tagList) => {
      if (!tagList) {
        return notFound(res, "Tags not found.");
      }
      res.json(tagList);
    })
    .catch((err) => internalServerError(res, err));
};

export const tagController = {
  createTag,
  deleteTag,
  readTagById,
  readAllTags,
};
