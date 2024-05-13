import { Router } from "express";
import { tagController } from "../controllers/tags";

const tagRouter = Router();

tagRouter.post("/", tagController.insertTag);

export { tagRouter };
