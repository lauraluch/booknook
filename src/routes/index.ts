import { Application } from "express";
import { Router } from "express";
import { bookRouter } from "./books";
import { userRouter } from "./users";
import { authRouter } from "./auth";
import { tagRouter } from "./tags";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use("/books", bookRouter);
  apiRouter.use("/users", userRouter);
  apiRouter.use("/tags", tagRouter);
  apiRouter.use("/auth", authRouter);

  app.use("/api/v1", apiRouter);
};
