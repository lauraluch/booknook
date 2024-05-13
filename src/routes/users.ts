import { Router } from "express";
import { userController } from "../controllers/user";

const userRouter = Router();

userRouter.post("/", userController.insertUser);
userRouter.put("/:id", userController.updateUser);
userRouter.get("/:id", userController.readUserById);
userRouter.get("/name/:username", userController.readUserByUsername);
userRouter.get("/:id/books", userController.readAllBooksFromUser);

export { userRouter };
