import { Router } from "express";
import { bookController } from "../controllers/books";

const bookRouter = Router();

bookRouter.post("/", bookController.insertBook);
bookRouter.put("/:id", bookController.updateBook);

export { bookRouter };
