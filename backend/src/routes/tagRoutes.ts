import { Router } from "express";
import { tagController } from "../controllers/tagController";

const tagRouter = Router();

tagRouter.post("/", tagController.createTag);
tagRouter.get("/:id", tagController.readTagById);

export { tagRouter };
