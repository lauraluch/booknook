import { Router } from "express";
import { validateUser } from "../controllers/userController";

const authRouter = Router();

authRouter.post("/login", validateUser);

export { authRouter };
