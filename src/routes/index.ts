import { Application } from "express";
import { Router } from "express";
import { bookRouter } from "./books";
import { userRouter } from "./users";
import { authRouter } from "./auth";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use("/books", bookRouter);
  apiRouter.use("/users", userRouter);
  apiRouter.use("/auth", authRouter);

  app.use("/api/v1", apiRouter);
};
