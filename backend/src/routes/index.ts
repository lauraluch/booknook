import { Application } from "express";
import { Router } from "express";
import { bookRouter } from "./bookRoutes";
import { userRouter } from "./userRoutes";
import { authRouter } from "./authRoutes";
import { tagRouter } from "./tagRoutes";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use("/books", bookRouter);
  apiRouter.use("/users", userRouter);
  apiRouter.use("/tags", tagRouter);
  apiRouter.use("/auth", authRouter);

  app.use("/booknook-api", apiRouter);
};