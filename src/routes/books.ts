import { Router } from "express";
import { bookController } from "../controllers/books";

const bookRouter = Router();

bookRouter.post("/", bookController.insertBook);

export { bookRouter };
