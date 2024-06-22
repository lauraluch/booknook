import { Application, Router } from "express";
import { bookRouter } from "./bookRoutes";
import { userRouter } from "./userRoutes";
import { authRouter } from "./authRoutes";
import { tagRouter } from "./tagRoutes";
import { entryRouter } from "./entryRoutes";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use("/books", bookRouter);
  apiRouter.use("/users", userRouter);
  apiRouter.use("/tags", tagRouter);
  apiRouter.use("/entries", entryRouter);
  apiRouter.use("/auth", authRouter);

  app.use("/booknook-api", apiRouter);
};
