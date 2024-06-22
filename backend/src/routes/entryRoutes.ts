import { Router } from "express";
import { entryController } from "../controllers/entryController";

const entryRouter = Router();

entryRouter.post("/", entryController.insertEntry);
entryRouter.put("/:id", entryController.updateEntry);
entryRouter.delete("/:id", entryController.deleteEntry);
entryRouter.get("/:id", entryController.readEntryById);
entryRouter.get("/book/:id", entryController.readEntriesFromBook);

export { entryRouter };
