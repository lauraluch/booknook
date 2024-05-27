import { Router } from "express";
import { userController } from "../controllers/userController";
import { tagController } from "../controllers/tagController";
import { bookController } from "../controllers/bookController";

const userRouter = Router();

userRouter.post("/", userController.insertUser);
userRouter.put("/:id", userController.updateUser);
userRouter.get("/:id", userController.readUserById);
userRouter.get("/name/:username", userController.readUserByUsername);

// Books
userRouter.get("/:id/books", bookController.readAllBooksFromUser);

// Tags
userRouter.get("/:id/tags", tagController.readAllTags);
userRouter.get("/:id/tags/:tagId", tagController.readTagById);

export { userRouter };
