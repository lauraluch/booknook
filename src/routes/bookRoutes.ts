import { Router } from "express";
import { bookController } from "../controllers/bookController";

const bookRouter = Router();

bookRouter.post("/", bookController.insertBook);
bookRouter.put("/:id", bookController.updateBook);
bookRouter.delete("/:id", bookController.deleteBook);
bookRouter.get("/:id", bookController.readBookById);
bookRouter.get("/name/:name", bookController.readBookByName);

export { bookRouter };
